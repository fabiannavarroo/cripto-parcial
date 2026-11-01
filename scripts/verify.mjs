import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
import vm from 'node:vm';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const storage=new Map();const rendered={};
const context=vm.createContext({
  localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)},
  document:{querySelector:s=>rendered[s]??=( {innerHTML:'',focus(){}} ),getElementById:()=>null},
  window:{scrollTo(){}},console
});
for(const f of ['base-data.js','extra-data.js','practice-data.js','curriculum-data.js','exercise-data.js','aes-guide.js','matematicas-faltantes.js','views.js','app.js']){
  assert.ok(existsSync(resolve(root,f)),`Missing script: ${f}`);
  vm.runInContext(readFileSync(resolve(root,f),'utf8'),context,{filename:f});
}
const run=s=>vm.runInContext(s,context);
const data=JSON.parse(run('JSON.stringify({theory:theoryBank,practice:practiceBank,units:curriculum,problems,opens})'));
const allowed=new Set(['fundamentos','mates','bloque','integridad','flujo','p1','p2']);
const unitMap=new Map(data.units.map(u=>[u.id,u]));const ids=new Set();
for(const u of data.units){assert.ok(allowed.has(u.group),`Outside exam scope: ${u.id}`);assert.ok(u.guide.length>50);assert.ok(u.questions.length>=2);assert.ok(u.source&&u.pages)}
for(const [kind,items] of [['theory',data.theory],['practice',data.practice]]){
  for(const q of items){
    assert.ok(!ids.has(q.id),`Duplicate ID: ${q.id}`);ids.add(q.id);
    assert.ok(q.question&&q.explanation&&q.source&&q.pages,`Incomplete question: ${q.id}`);
    assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4,`Duplicate option: ${q.id}`);
    assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
    const u=unitMap.get(q.unit);assert.ok(u,`Unmapped question: ${q.id}`);
    assert.equal(u.group,kind==='theory'?q.group:'p'+q.group,`Wrong topic: ${q.id}`);
    assert.ok(!/RSA|Diffie|TLS|logaritmo discreto|poscuántic/i.test(q.question),`Outside exam scope: ${q.question}`);
  }
}
assert.equal(data.theory.length,137);assert.equal(data.practice.length,61);assert.equal(data.units.length,38);
assert.equal(data.problems.length,53);assert.equal(data.opens.length,24);
// Invariantes del muestreo: sin duplicados, distribuido, conserva respuesta al barajar.
assert.equal(run('new Set(balancedSample(theoryBank,137).map(q=>q.id)).size'),137);
assert.equal(run('new Set(balancedSample(theoryBank,29).map(q=>q.unit)).size'),29);
assert.equal(run('theoryBank.every(q=>{const s=shuffleOptions(q);return s.options[s.answer]===q.options[q.answer]})'),true);
// Corrección y persistencia: el modo examen no revela ni registra antes de entregar.
run("go('test');state.setup.teoria={...defaults(),filter:'fundamentos',unit:'hill',mode:'examen',count:'todas'};startQuiz('teoria')");
assert.equal(run('state.quiz.teoria.items.length'),2);
run("answer('teoria',state.quiz.teoria.items[0].id,state.quiz.teoria.items[0].answer)");
assert.equal(run('Object.keys(history()).length'),0);
assert.ok(!rendered['#app'].innerHTML.includes('class="feedback"'));
run("submitQuiz('teoria')");
assert.equal(run('Object.keys(history()).length'),1); // sin respuesta sigue pendiente
assert.ok(rendered['#app'].innerHTML.includes('Sin responder.'));
const before=storage.get('cripto-history-v2');run("submitQuiz('teoria')");assert.equal(storage.get('cripto-history-v2'),before);
assert.equal(run("stored(sessionKey,{}).teoria.submitted"),true);
run("startQuiz('teoria',true)");assert.equal(run('state.quiz.teoria.items.length'),1);
// Vacío explícito, sin puntuaciones NaN ni selección de preguntas de otro apartado.
run("go('practicas');state.setup.practicas={...defaults(),unit:'ausente'};startQuiz('practicas')");
assert.ok(rendered['#app'].innerHTML.includes('No hay preguntas'));
assert.ok(!rendered['#app'].innerHTML.includes('NaN'));
// Cálculos contrastados con ejemplos conocidos, para detectar erratas en los datos.
const problem=id=>{const p=data.problems.find(p=>p.id===id);assert.ok(p);return p.a};
assert.ok(problem('sbox').includes('= C4'));
assert.ok(problem('mixcolumns').includes('[04,66,81,E5]'));
assert.ok(problem('gf-producto').includes('C1'));
assert.ok(problem('tabla-ctr').includes('AA CF 85'));
assert.ok(problem('golomb-hoja').includes('AC(4)=(8−6)/14=1/7'));
assert.ok(problem('lfsr-hoja').includes('011110'));
assert.ok(problem('hill-hoja').includes('[[6,16],[5,3]]'));
console.log(`Verificado: ${data.theory.length} teoría, ${data.practice.length} prácticas, ${data.units.length} apartados, ${data.problems.length} problemas y ${data.opens.length} cortas; alcance, datos, muestreo, corrección y persistencia correctos.`);
// Euclides polinómico del ejercicio 7: suma y resta son XOR en GF(2).
function polyMul(a,b){let out=0;while(b){if(b&1)out^=a;a<<=1;b>>>=1}return out}
function polyDiv(a,b){let q=0;const deg=n=>31-Math.clz32(n);while(a&&deg(a)>=deg(b)){const shift=deg(a)-deg(b);q^=1<<shift;a^=b<<shift}return [q,a]}
const modulus=0x11b,byte=0x88,r1=0x0b,Q=0x16,H=0x4f,inverse=0x9b;
assert.deepEqual(polyDiv(modulus,byte),[0x02,r1]);
assert.deepEqual(polyDiv(byte,r1),[Q,0x02]);
assert.deepEqual(polyDiv(r1,0x02),[0x05,0x01]);
assert.equal(1^polyMul(0x05,Q),H);
assert.equal(polyMul(H,modulus)^polyMul(inverse,byte),1);
assert.equal(polyDiv(polyMul(byte,inverse),modulus)[1],1);
const rot=(v,n)=>((v<<n)|(v>>>(8-n)))&0xff;
assert.deepEqual([1,2,3,4].map(n=>rot(inverse,n)),[0x37,0x6e,0xdc,0xb9]);
assert.equal(inverse^rot(inverse,1)^rot(inverse,2)^rot(inverse,3)^rot(inverse,4)^0x63,0xc4);
console.log('Verificados divisiones polinómicas, identidad de Bézout, inverso 9B y SubBytes C4.');
// La guía y su test deben ser accesibles desde la navegación y el mapa.
run("go('aes-guia')");
assert.ok(rendered['#app'].innerHTML.includes('La segunda división, sin saltos'));
assert.ok(rendered['#app'].innerHTML.includes('1001 1011'));
assert.equal((rendered['#nav'].innerHTML.match(/<button /g)||[]).length,4);
assert.ok(rendered['#nav'].innerHTML.includes('Explicaciones'));
assert.ok(!rendered['#nav'].innerHTML.includes('AES paso a paso'));
assert.equal(run('state.page'),'lecciones');
run("studyUnit('inverso-sbox');startQuiz('teoria')");
assert.equal(run('state.quiz.teoria.items.length'),8);
assert.equal(run("state.quiz.teoria.items.every(q=>q.unit==='inverso-sbox')"),true);
console.log('Verificados navegación a la guía y test del apartado.');
// Apartados exactos añadidos de las hojas de matemáticas.
const additions=['t3-1a-euler','t3-1b-euclides','t3-2aii','t3-2bi-euler','t3-2biia','t3-2biv','mod-extra-3aiii','mod-extra-3aiv','mod-extra-3av','mod-extra-4a','mod-extra-4b','mod-extra-4c','mod-extra-4d'];
for(const id of additions){const p=data.problems.find(item=>item.id===id);assert.ok(p,`Falta ${id}`);assert.equal(p.group,'mates');assert.ok(p.source&&p.pages&&p.q&&p.a);}
const solutions=(a,b,n)=>Array.from({length:n},(_,x)=>x).filter(x=>(a*x-b)%n===0);
assert.deepEqual(solutions(7,1,12),[7]);
assert.deepEqual(solutions(32,1,5),[3]);
assert.deepEqual(solutions(37,1,10),[3]);
assert.deepEqual(solutions(3,5,8),[7]);
assert.deepEqual(solutions(5,10,15),[2,5,8,11,14]);
assert.deepEqual(solutions(63,2,110),[14]);
function modpow(base,exponent,n){let out=1n;base%=n;while(exponent){if(exponent&1n)out=out*base%n;base=base*base%n;exponent>>=1n}return out}
assert.equal(modpow(7n,100n,29n),20n);
assert.equal(modpow(6n,592n,11n),3n);
assert.equal(modpow(3n,2005n,1000n),243n);
assert.equal(modpow(11n,11n,12n),11n);
assert.equal((11*11)%12,1);
assert.equal((Number(modpow(16n,16n,17n))+Number(modpow(16n,17n,17n)))%17,0);
run("go('problemas');state.problemGroup='mates';render()");
assert.ok(rendered['#app'].innerHTML.includes('T3 · 1.a — Inverso 7 mod 12 con Euler'));
assert.ok(rendered['#app'].innerHTML.includes('Extra modular · 4.d'));
console.log('Verificados 13 apartados añadidos, sus congruencias y su aparición en problemas de matemáticas.');
// Organización: solo cuatro entradas principales, con las herramientas dentro.
assert.deepEqual(JSON.parse(run('JSON.stringify(nav.map(([id])=>id))')),['lecciones','test','practicas','problemas']);
run("openSection('lecciones')");
assert.equal((rendered['#app'].innerHTML.match(/class="chapter-row"/g)||[]).length,5);
assert.ok(rendered['#app'].innerHTML.includes('Fuentes del temario'));
assert.ok(!rendered['#app'].innerHTML.includes('quiz-start'));
run("openSection('practicas')");
assert.equal((rendered['#app'].innerHTML.match(/class="practice-guide"/g)||[]).length,2);
assert.ok(!rendered['#app'].innerHTML.includes('quiz-start'));
run("setView('practicas','exercises')");
assert.equal((rendered['#app'].innerHTML.match(/class="worked-problem"/g)||[]).length,3);
run("openSection('problemas')");
assert.equal((rendered['#app'].innerHTML.match(/class="chapter-row"/g)||[]).length,5);
assert.ok(!rendered['#app'].innerHTML.includes('class="worked-problem"'));
run("showProblems('todas')");
assert.equal((rendered['#app'].innerHTML.match(/class="worked-problem"/g)||[]).length,50);
run("go('abiertas')");
assert.equal(run('state.page'),'test');
assert.equal((rendered['#app'].innerHTML.match(/class="short-question"/g)||[]).length,24);
run("go('simulacro');prepareExam('teoria')");
assert.equal(run('state.theoryView'),'quiz');
assert.ok(rendered['#app'].innerHTML.includes('quiz-start'));
run("go('aes-guia')");
assert.equal(run('state.page'),'lecciones');
assert.ok(rendered['#app'].innerHTML.includes('La segunda división, sin saltos'));
assert.equal(run("stored('cripto-navigation-v3',{}).lessonView"),'aes');
console.log('Verificadas cuatro secciones, vistas internas, guía AES, 50 problemas del temario, 3 de laboratorio y 24 preguntas cortas.');
// Lista personal: todos los problemas mantienen el orden y los índices originales.
run("go('problemas-faby')");
assert.equal((rendered['#app'].innerHTML.match(/class="worked-problem"/g)||[]).length,53);
let lastPosition=-1;
for(const p of data.problems){
  const escaped=run(`esc(${JSON.stringify(p.title)})`);
  const position=rendered['#app'].innerHTML.indexOf(`<summary>${escaped}</summary>`,lastPosition+1);
  assert.ok(position>lastPosition,`Orden incorrecto: ${p.title}`);lastPosition=position;
}
assert.ok(rendered['#app'].innerHTML.includes("saveDraft('problem0',this.value)"));
assert.ok(rendered['#app'].innerHTML.includes("saveDraft('problem52',this.value)"));
assert.ok(readFileSync(resolve(root,'problemas-faby/index.html'),'utf8').includes('data-page="problemas-faby"'));
assert.ok(readFileSync(resolve(root,'problemas-faby/index.html'),'utf8').includes('<base href="../">'));
assert.equal((rendered['#nav'].innerHTML.match(/<button /g)||[]).length,4);
console.log('Verificados los 53 problemas de Faby en orden original y sus borradores compartidos.');
