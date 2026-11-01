'use strict';
// Una entrada por tarea de estudio; los temas y herramientas viven dentro de ella.
const topicDescriptions={
  fundamentos:'Seguridad, cifrado afín, Vigenère, Playfair, Hill y transposiciones.',
  mates:'Módulo, inversos, Euclides, Euler y cuerpos de Galois.',
  bloque:'Cómo funciona AES y cómo se usan ECB, CBC, CTR, CFB y OFB.',
  integridad:'Funciones hash, HMAC, MAC y cifrado autenticado.',
  flujo:'Vernam, Golomb, LFSR, ChaCha20 y aleatoriedad.'
};
function subnav(section,items,selected){
  return `<div class="subnav" role="group" aria-label="Contenido de ${section==='test'?'teoría':'prácticas'}">${items.map(([id,label])=>`<button class="${selected===id?'active':''}" aria-pressed="${selected===id}" onclick="setView('${section}','${id}')">${label}</button>`).join('')}</div>`;
}
function chapterList(action,meta){
  return `<div class="chapter-list">${topics.map(t=>`<button class="chapter-row" onclick="${action(t)}"><span class="chapter-number">${t.n}</span><span class="chapter-text"><strong>${esc(t.title)}</strong><span>${esc(topicDescriptions[t.id])}</span></span><span class="chapter-meta">${esc(meta(t))}<span aria-hidden="true"> →</span></span></button>`).join('')}</div>`;
}
function explanationsMarkup(){
  if(state.lessonView==='aes')return head('Explicaciones · Matemáticas','AES paso a paso','Inverso polinómico y SubBytes, desde cero.')+`<button class="text-button back-link" onclick="go('lecciones','mates')">← Volver a Matemáticas esenciales</button><div class="panel aes-lesson">${aesLesson}</div><div class="row"><button class="primary" onclick="studyUnit('inverso-sbox')">Hacer el test de esta explicación</button><button class="secondary" onclick="showProblems('bloque')">Ver problemas de AES</button></div>`;
  if(state.lessonView==='topic'){
    const t=topics.find(t=>t.id===state.topic),d=done();
    return head('Explicaciones · Tema '+t.n,t.title,topicDescriptions[t.id])+`<div class="reading-toolbar"><button class="text-button" onclick="openSection('lecciones')">← Todos los temas</button><label class="compact-label">Cambiar de tema<select aria-label="Tema de la explicación" onchange="go('lecciones',this.value)">${options(topics.map(x=>[x.id,x.title]),t.id)}</select></label></div>${t.id==='mates'||t.id==='bloque'?`<div class="reading-note"><strong>¿Te atascas con el inverso de AES?</strong><p>La guía desarrolla bits, polinomios, divisiones y S-box, paso a paso.</p><button class="secondary" onclick="go('aes-guia')">Abrir guía de AES</button></div>`:''}<article class="panel lesson-overview">${t.body}</article><h2>Desarrollo del tema</h2><p class="sub">Abre el concepto que quieras repasar.</p>${curriculum.filter(u=>u.group===t.id).map(u=>`<details id="unit-${u.id}" class="lesson-unit"><summary>${esc(u.title)}</summary><div><p>${esc(u.guide)}</p>${u.id==='inverso-sbox'?'<button class="secondary" onclick="go(\'aes-guia\')">Abrir el desarrollo completo de AES</button>':''}<div class="row"><label class="check"><input type="checkbox" ${d['unit-'+u.id]?'checked':''} onchange="save('unit-${u.id}',this.checked)"> Leído</label><button class="text-button" onclick="studyUnit('${u.id}')">Hacer preguntas de este concepto →</button></div><p class="sub source">${esc(sourceText(u))}</p></div></details>`).join('')}<div class="lesson-actions"><button class="secondary" onclick="save('${t.id}',${!d[t.id]})">${d[t.id]?'✓ Tema estudiado · desmarcar':'Marcar tema como estudiado'}</button><button class="primary" onclick="testTopic('${t.id}')">Hacer el test de este tema</button></div>`;
  }
  const d=done(),read=topics.filter(t=>d[t.id]).length;
  return head('Leer y entender','Explicaciones','Todo el temario explicado, organizado en cinco temas. Elige por dónde empezar.')+`<div class="section-note"><span>Alcance: hasta cifrado simétrico incluido.</span><span>${read}/${topics.length} temas marcados como estudiados</span></div>`+chapterList(t=>`go('lecciones','${t.id}')`,t=>d[t.id]?'Estudiado':'Leer tema')+`<details class="reference-drawer" id="study-sources"><summary>Fuentes del temario y correcciones importantes</summary><div>${sourcesMarkup()}</div></details>`;
}
function testTopic(id){state.setup.teoria={...defaults(),filter:id};state.theoryView='quiz';go('test')}
function theoryMarkup(){
  const tabs=subnav('test',[['quiz','Tipo test'],['short','Preguntas cortas'],['mock','Simulacro']],state.theoryView);
  const intro=head('Comprobar lo aprendido','Test de teoría','Responde preguntas del temario o ensaya el formato de examen.');
  if(state.theoryView==='short'){
    const drafts=stored('cripto-drafts',{});
    return intro+tabs+`<h2>Preguntas cortas</h2><p>Escribe con tus palabras antes de abrir la respuesta orientativa.</p>`+opens.map((p,i)=>`<details class="short-question"><summary>${i+1}. ${esc(p[0])}</summary><div><textarea aria-label="Tu respuesta a la pregunta ${i+1}" oninput="saveDraft('open${i}',this.value)" placeholder="Escribe tu respuesta…">${esc(drafts['open'+i]||'')}</textarea><details><summary>Ver respuesta orientativa</summary><div>${esc(p[1])}</div></details></div></details>`).join('');
  }
  if(state.theoryView==='mock')return intro+tabs+mockMarkup();
  const s=stats(theoryBank);
  return intro+tabs+`<div class="section-note"><span>${s.seen}/${s.total} preguntas practicadas</span><button class="text-button" onclick="review('teoria','falladas')">Repasar fallos (${s.wrong}) →</button></div>`+quizMarkup('teoria');
}
function practiceGuideMarkup(){
  return `<p class="section-description">Elige un guion. Dentro tienes la explicación y el repaso de sus conceptos.</p>${practiceNotes.map(p=>`<details id="practice-${p.practice}" class="practice-guide"><summary><span>Práctica ${p.practice}</span><strong>${p.practice==='1'?'Hashes y contraseñas':'Cifrado'}</strong></summary><div><p>${esc(p.summary)}</p><ol>${p.steps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol><h3>Repasar conceptos</h3>${curriculum.filter(u=>u.group==='p'+p.practice).map(u=>`<details id="unit-${u.id}"><summary>${esc(u.title.replace(/^Práctica \d: /,''))}</summary><div><p>${esc(u.guide)}</p><button class="text-button" onclick="studyUnit('${u.id}')">Practicar este concepto →</button></div></details>`).join('')}<button class="primary" onclick="testPractice('${p.practice}')">Hacer el test de la práctica ${p.practice}</button><p class="sub source">${esc(p.source)}</p></div></details>`).join('')}`;
}
function testPractice(id){state.setup.practicas={...defaults(),filter:id};state.practiceView='quiz';go('practicas')}
function practicesMarkup(){
  const intro=head('Laboratorio','Prácticas','Los guiones, las preguntas y los ejercicios de las prácticas 1 y 2.');
  const tabs=subnav('practicas',[['guide','Guiones explicados'],['quiz','Test de prácticas'],['exercises','Ejercicios']],state.practiceView);
  if(state.practiceView==='quiz'){
    const s=stats(practiceBank);
    return intro+tabs+`<div class="section-note"><span>${s.seen}/${s.total} preguntas practicadas</span><button class="text-button" onclick="review('practicas','falladas')">Repasar fallos (${s.wrong}) →</button></div>`+quizMarkup('practicas');
  }
  if(state.practiceView==='exercises')return intro+tabs+`<p>Razona los resultados del código y compara tu desarrollo con la solución.</p>`+problemListMarkup(p=>problemGroup(p).startsWith('p'));
  return intro+tabs+practiceGuideMarkup();
}
function problemGroup(p){return p.group||legacyProblemGroup(p.index)}
function problemListMarkup(include){
  const drafts=stored('cripto-drafts',{});
  return problems.map((p,index)=>({...p,index})).filter(include).map(p=>`<details class="worked-problem"><summary>${esc(p.title)}</summary><div><p class="solution">${esc(p.q)}</p>${p.id==='sbox'?'<p><button class="text-button" onclick="go(\'aes-guia\')">Leer la explicación de AES paso a paso →</button></p>':''}<textarea aria-label="Tu desarrollo del problema ${p.index+1}" oninput="saveDraft('problem${p.index}',this.value)" placeholder="Desarrolla aquí o resuelve en papel…">${esc(drafts['problem'+p.index]||'')}</textarea><details><summary>Ver solución paso a paso</summary><div class="solution">${esc(p.a)}</div></details>${p.source?`<p class="sub">${esc(sourceText(p))}</p>`:''}</div></details>`).join('');
}
function showProblems(group){state.problemGroup=group;go('problemas')}
function problemsMarkup(){
  const intro=head('Resolver en papel','Problemas','Ejercicios del temario con espacio para tu desarrollo y solución paso a paso.')+'<p><a class="text-button" href="./problemas-faby/">Problemas Faby · todos en el orden anterior →</a></p>';
  if(!state.problemGroup)return intro+chapterList(t=>`showProblems('${t.id}')`,t=>`${problems.map((p,index)=>({...p,index})).filter(p=>problemGroup(p)===t.id).length} ejercicios`)+`<p class="sub section-description">Los ejercicios de código están en <button class="text-button" onclick="setView('practicas','exercises')">Prácticas → Ejercicios</button>.</p>`;
  const t=topics.find(t=>t.id===state.problemGroup);
  return intro+`<div class="reading-toolbar"><button class="text-button" onclick="openSection('problemas')">← Todos los temas</button><label class="compact-label">Tema<select aria-label="Bloque de problemas" onchange="state.problemGroup=this.value;render()">${options([['todas','Todos los temas'],...groupsFor('teoria')],state.problemGroup)}</select></label></div><h2>${esc(t?.title||'Todos los problemas del temario')}</h2>`+problemListMarkup(p=>!problemGroup(p).startsWith('p')&&(state.problemGroup==='todas'||problemGroup(p)===state.problemGroup));
}

function fabyProblemsMarkup(){
  return head('Lista de Faby','Problemas Faby',`Los ${problems.length} problemas en el orden anterior, incluidos los de prácticas.`)+`<p class="sub">Tus borradores se comparten con las otras vistas de problemas.</p>`+problemListMarkup(()=>true);
}
