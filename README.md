# Preparación del parcial de criptografía

Web estática: [fabiannavarroo.github.io/cripto-parcial](https://fabiannavarroo.github.io/cripto-parcial/).

Alcance fijado por la captura que proporcionó el estudiante el 30 de octubre de 2026: **hasta cifrado simétrico incluido**. Incluye fundamentos de seguridad y clásicos, matemáticas, AES y bloque, modos, funciones resumen y MAC, cifrado autenticado, flujo y aleatoriedad breve; además, los guiones de las prácticas 1 y 2. No incluye el bloque posterior de logaritmo discreto, asimétrico, acuerdo de claves, TLS ni poscuántica.

Hay 38 conceptos de estudio dentro de cinco temas, 137 preguntas de teoría, 61 preguntas de prácticas, 53 problemas con solución y 24 preguntas cortas. Cubrir todos los apartados del material no garantiza dominarlo ni predice las preguntas, duración o penalización del examen.

## Uso

La navegación principal tiene cuatro entradas:

1. **Explicaciones**: índice de cinco temas. Cada tema reúne su resumen y el desarrollo de sus conceptos. La guía detallada de AES está dentro de Matemáticas y de Bloque/AES. Las fuentes y correcciones están plegadas al final del índice.
2. **Test de teoría**: tipo test, preguntas cortas y simulacro como vistas internas. Los filtros por apartado y repaso están plegados; tema, cantidad y corrección permanecen visibles.
3. **Prácticas**: guiones explicados de las prácticas 1 y 2, test y ejercicios de código en vistas internas.
4. **Problemas**: primero se elige uno de los cinco temas; después se ven sus ejercicios con borrador y solución. Los ejercicios de laboratorio se encuentran en Prácticas.

El progreso de lectura aparece junto a los temas; el de preguntas, junto a cada test. AES, las preguntas cortas, el simulacro y las fuentes no añaden entradas al menú principal. La sección y vista activas se recuerdan al recargar.

Se conservan localmente respuestas de test, orden de opciones, historial de corrección, lecturas marcadas y borradores. El modo examen registra el historial al entregar; no contestar mantiene la pregunta pendiente. Este progreso pertenece a ese navegador y origen, sin sincronización entre dispositivos. Los borradores y marcas de la versión anterior conservan sus claves.

## Fuentes y límites de la revisión

Las fuentes principales son M1–M4 y las hojas T1–T3, sus soluciones de flujo, bloque, aritmética modular y cuerpos de Galois. Los guiones originales de prácticas y p1.py–p4.py / practica2/ejercicio1.py–ejercicio4.py se localizaron en la carpeta superior del proyecto. AES-GCM aparece en el ejercicio 5 del segundo guion, aunque no existe ejercicio5.py en el código local revisado.

Se extrajo texto de los PDF de la carpeta y se contrastaron los apartados pertinentes de las colecciones antiguas. El PDF manuscrito `Apuntes Cripto.pdf` se inspeccionó visualmente porque carece de texto extraíble útil. Las tablas de Playfair, S-box, estados AES y cifrador tabulado se comprobaron en páginas renderizadas. Los materiales posteriores al alcance no se incorporan. Las colecciones antiguas orientan el formato, sin importar sus claves de respuesta automáticamente.

Correcciones documentadas en la web:

- IV de CBC: impredecible y con integridad protegida; no requiere confidencialidad.
- Hoja T3 2.b.iii: la igualdad de potencias no implica en general igualdad de exponentes módulo φ(n); se incluye un contraejemplo.
- Golomb: rachas circulares para una secuencia periódica, frente al conteo lineal de una solución impresa. Se comprueba G3 numéricamente.
- Guion y código local difieren en el objetivo de p3.py y en los espacios de la contraseña de p4.py.
- Un test antiguo marca una respuesta errónea para 2343 mod 10; el resultado es 3.
- Periodo de estados, periodo de salida y complejidad lineal se distinguen explícitamente.

Referencias técnicas utilizadas para comprobar los detalles: [NIST SP 800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final), [Fernet](https://cryptography.io/en/latest/fernet/) y [AEAD/AESGCM](https://cryptography.io/en/latest/hazmat/primitives/aead/).

## Desarrollo y verificación

No hay dependencias ni compilación. Servir esta carpeta con cualquier servidor estático:

```sh
python3 -m http.server 8765
```

La comprobación reproducible usa solo Node.js:

```sh
node scripts/verify.mjs
```

Comprueba la integridad del banco, asignación al alcance, unicidad de identificadores y opciones, muestreo sin duplicados, correspondencia de respuestas tras barajar, corrección al entregar, pendientes, idempotencia y persistencia, y resultados numéricos conocidos de ejercicios. Para revisar cambios antes de publicar: `git diff --check` y `git diff --cached`.

También se verificó en navegador Chromium de escritorio (1440×1000) y móvil (390×844): navegación de las cuatro secciones, filtrado por apartado, respuesta correcta e incorrecta, repetición de errores, cambio de respuesta en examen, corrección de pendientes, recarga, persistencia de borradores y estados vacíos. No hubo errores de JavaScript ni solicitudes fallidas; no se detectó desbordamiento horizontal. También se comprobó que se conservan las marcas y borradores anteriores, que los 50 problemas del temario y los 3 de laboratorio siguen accesibles, y que la guía AES y el simulacro se abren dentro de su sección. La revisión fue de una web estática, sin API ni base de datos remota.
