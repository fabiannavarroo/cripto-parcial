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
for(const f of ['base-data.js','extra-data.js','practice-data.js','curriculum-data.js','exercise-data.js','aes-guide.js','app.js']){
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
assert.equal(data.problems.length,40);assert.equal(data.opens.length,24);
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
assert.ok(rendered['#nav'].innerHTML.includes('AES paso a paso'));
run("studyUnit('inverso-sbox');startQuiz('teoria')");
assert.equal(run('state.quiz.teoria.items.length'),8);
assert.equal(run("state.quiz.teoria.items.every(q=>q.unit==='inverso-sbox')"),true);
console.log('Verificados navegación a la guía y test del apartado.');
