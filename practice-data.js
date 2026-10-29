const practiceData = [
  {
    "practice": "1",
    "question": "En el primer ejercicio, ¿qué algoritmo utiliza sha256_hash?",
    "options": [
      "SHA-256",
      "AES-256",
      "bcrypt",
      "HMAC"
    ],
    "answer": 0,
    "explanation": "El código construye hashes.Hash(hashes.SHA256())."
  },
  {
    "practice": "1",
    "question": "¿Qué transforma password.encode() en el ejemplo de SHA-256?",
    "options": [
      "Una cadena en bytes usando UTF-8 por defecto",
      "Un hash en su contraseña",
      "Una clave AES en texto claro",
      "Una cadena en un número decimal"
    ],
    "answer": 0,
    "explanation": "Las funciones de hash reciben bytes; encode() transforma el texto en bytes."
  },
  {
    "practice": "1",
    "question": "¿Qué devuelve digest.finalize().hex() con SHA-256?",
    "options": [
      "El resumen en hexadecimal",
      "La contraseña original",
      "Una clave de cifrado reversible",
      "El salt"
    ],
    "answer": 0,
    "explanation": "finalize() devuelve el resumen en bytes y hex() lo representa con 64 caracteres hexadecimales."
  },
  {
    "practice": "1",
    "question": "¿Qué tamaño tiene el resultado binario de SHA-256?",
    "options": [
      "128 bits",
      "256 bits",
      "512 bits",
      "64 bits"
    ],
    "answer": 1,
    "explanation": "SHA-256 genera 256 bits, es decir, 32 bytes o 64 dígitos hexadecimales."
  },
  {
    "practice": "1",
    "question": "¿Por qué no basta almacenar SHA-256(password) sin más?",
    "options": [
      "Es rápido y facilita ataques offline de diccionario, además no añade salt",
      "SHA-256 cifra mal porque es reversible",
      "No produce salida fija",
      "Se guarda obligatoriamente la contraseña original"
    ],
    "answer": 0,
    "explanation": "El hash rápido sin salt permite probar muchas candidatas y reutilizar cálculos sobre contraseñas repetidas."
  },
  {
    "practice": "1",
    "question": "Si dos contraseñas son idénticas y se aplica SHA-256 sin salt, ¿qué ocurre?",
    "options": [
      "Dan el mismo resumen",
      "El resumen siempre cambia",
      "Se genera un salt diferente",
      "Se pierde la contraseña y no se puede comprobar"
    ],
    "answer": 0,
    "explanation": "Una función hash determinista produce el mismo resultado con la misma entrada."
  },
  {
    "practice": "1",
    "question": "¿Qué hace el bucle del diccionario de la práctica 1?",
    "options": [
      "Calcula hashes de contraseñas candidatas y los compara con el objetivo",
      "Descifra SHA-256 con la clave pública",
      "Cifra el diccionario con AES",
      "Busca colisiones alterando el IV"
    ],
    "answer": 0,
    "explanation": "Es un ataque de diccionario: prueba candidatas en vez de invertir directamente la función hash."
  },
  {
    "practice": "1",
    "question": "Si la contraseña no está en el diccionario utilizado, ¿qué se concluye?",
    "options": [
      "Ese diccionario no la encontró; podrían usarse otras candidatas",
      "La contraseña es imposible de recuperar",
      "El hash es incorrecto siempre",
      "El algoritmo es reversible"
    ],
    "answer": 0,
    "explanation": "El resultado depende del conjunto probado; ausencia en un diccionario no demuestra seguridad absoluta."
  },
  {
    "practice": "1",
    "question": "¿Qué ventaja aporta un salt aleatorio y distinto por contraseña?",
    "options": [
      "Evita comparar directamente hashes de contraseñas iguales y dificulta reutilizar tablas precalculadas",
      "Hace secreto al algoritmo hash",
      "Permite descifrar la contraseña",
      "Hace innecesaria una función lenta"
    ],
    "answer": 0,
    "explanation": "El salt normalmente se almacena junto al hash; no necesita ser secreto."
  },
  {
    "practice": "1",
    "question": "¿Dónde se suele guardar el salt?",
    "options": [
      "Junto al hash de la contraseña",
      "Como contraseña en texto claro",
      "Solo en el navegador",
      "Debe destruirse para verificar"
    ],
    "answer": 0,
    "explanation": "El verificador necesita recuperar el mismo salt para comprobar la contraseña."
  },
  {
    "practice": "1",
    "question": "¿Qué función proporciona bcrypt.gensalt()?",
    "options": [
      "Genera los parámetros de salt para bcrypt",
      "Descifra un hash",
      "Produce directamente el texto claro",
      "Cifra un archivo"
    ],
    "answer": 0,
    "explanation": "Se usa en bcrypt.hashpw(pw, bcrypt.gensalt()) para generar un hash con salt."
  },
  {
    "practice": "1",
    "question": "¿Para qué sirve bcrypt.checkpw(candidata, hash_almacenado)?",
    "options": [
      "Verifica si la candidata coincide con el hash almacenado",
      "Revela la contraseña original",
      "Cambia la contraseña del usuario",
      "Genera un certificado"
    ],
    "answer": 0,
    "explanation": "Bcrypt utiliza los parámetros incluidos en el hash almacenado para comprobar la candidata."
  },
  {
    "practice": "1",
    "question": "¿Por qué bcrypt dificulta un ataque de diccionario frente a SHA-256 directo?",
    "options": [
      "Usa salt y un factor de coste ajustable que encarece cada intento",
      "Hace imposible probar candidatas",
      "Cifra la contraseña con una clave pública",
      "Produce siempre el mismo hash para entradas idénticas"
    ],
    "answer": 0,
    "explanation": "La lentitud configurada encarece cada prueba; contraseñas débiles todavía pueden adivinarse."
  },
  {
    "practice": "1",
    "question": "En el ejemplo b\"incontrastablemente \", ¿importa el espacio final?",
    "options": [
      "Sí, cambia los bytes de la contraseña",
      "No, bcrypt lo elimina automáticamente",
      "Solo importa en AES",
      "No, porque SHA-256 ignora espacios"
    ],
    "answer": 0,
    "explanation": "Los bytes tienen que coincidir exactamente; un espacio final cambia la entrada."
  },
  {
    "practice": "1",
    "question": "¿Qué alternativa contempla el guion con cryptography?",
    "options": [
      "Una función de derivación de claves basada en contraseña como PBKDF2 con salt y coste adecuado",
      "SHA-256 rápido sin salt",
      "AES-ECB con clave fija",
      "Guardar la contraseña en Base64"
    ],
    "answer": 0,
    "explanation": "El ejercicio pide salt y una Password-Based Key Derivation Function (PBKDF)."
  },
  {
    "practice": "1",
    "question": "¿Qué datos se necesitan para verificar una contraseña almacenada con una KDF?",
    "options": [
      "La candidata y el salt y parámetros asociados al hash almacenado",
      "Solo el hash, sin candidata",
      "La contraseña original guardada en texto claro",
      "El IV de una sesión CBC"
    ],
    "answer": 0,
    "explanation": "Con la candidata y los mismos parámetros se calcula o verifica el resultado; no se recupera la contraseña original."
  },
  {
    "practice": "1",
    "question": "¿Por qué codificar una contraseña en Base64 no protege su almacenamiento?",
    "options": [
      "Porque la codificación es reversible y no es una KDF de contraseñas",
      "Porque Base64 es un algoritmo de clave pública",
      "Porque produce una firma digital",
      "Porque siempre añade un salt"
    ],
    "answer": 0,
    "explanation": "Base64 es una representación de datos, no una función de seguridad para contraseñas."
  },
  {
    "practice": "2",
    "question": "¿Qué modo usa el primer código de cifrado de la práctica 2?",
    "options": [
      "AES-CBC",
      "AES-ECB",
      "AES-GCM",
      "ChaCha20"
    ],
    "answer": 0,
    "explanation": "El ejemplo llama Cipher(algorithms.AES(key), modes.CBC(iv))."
  },
  {
    "practice": "2",
    "question": "En el ejemplo CBC, ¿cuántos bytes tiene cada bloque AES?",
    "options": [
      "8",
      "16",
      "24",
      "32"
    ],
    "answer": 1,
    "explanation": "AES tiene bloques de 128 bits, equivalentes a 16 bytes, con cualquier tamaño de clave."
  },
  {
    "practice": "2",
    "question": "Si se cifra dos veces el mismo mensaje con la misma clave y el IV fijo del ejemplo CBC, ¿qué ocurre?",
    "options": [
      "Se obtiene el mismo texto cifrado",
      "Se produce una clave nueva",
      "La integridad queda garantizada",
      "El IV cambia automáticamente"
    ],
    "answer": 0,
    "explanation": "La operación es determinista cuando coinciden texto, clave e IV."
  },
  {
    "practice": "2",
    "question": "En el ejemplo CBC, ¿por qué son iguales los primeros bloques de los dos textos cifrados?",
    "options": [
      "Comparten primer bloque de texto, clave e IV",
      "CBC no usa la clave",
      "Todos los bloques AES son iguales",
      "Fernet los autentica"
    ],
    "answer": 0,
    "explanation": "C₁=Eₖ(P₁⊕IV): si P₁, clave e IV coinciden, también coincide C₁."
  },
  {
    "practice": "2",
    "question": "¿Qué problema tiene rellenar con espacios como hace el ejemplo?",
    "options": [
      "Es ambiguo si el mensaje original termina en espacios",
      "AES no acepta bytes de espacio",
      "Garantiza autenticación",
      "Hace que el IV sea secreto"
    ],
    "answer": 0,
    "explanation": "No permite distinguir con certeza espacios originales de espacios añadidos. Un esquema definido como PKCS#7 permite retirar el padding."
  },
  {
    "practice": "2",
    "question": "¿Cuál es una lista de problemas del ejemplo CBC?",
    "options": [
      "Clave fija en el código, IV fijo, padding ambiguo y falta de autenticación",
      "Clave aleatoria, nonce único y etiqueta autenticada",
      "Bloques AES de 16 bytes",
      "Uso de Python y bytes"
    ],
    "answer": 0,
    "explanation": "El guion pide detectar problemas de clave, IV, padding e integridad."
  },
  {
    "practice": "2",
    "question": "¿Qué propiedad de ECB muestra la práctica?",
    "options": [
      "Bloques de texto claro iguales producen bloques cifrados iguales con la misma clave",
      "Cada bloque usa una clave aleatoria",
      "ECB autentica el mensaje",
      "Requiere un nonce único"
    ],
    "answer": 0,
    "explanation": "ECB cifra cada bloque por separado y revela repeticiones y patrones."
  },
  {
    "practice": "2",
    "question": "¿Qué hace el código ECB dado cuando la entrada no es múltiplo de 16 bytes?",
    "options": [
      "Lanza ValueError",
      "Añade PKCS#7 automáticamente",
      "Devuelve un hash",
      "La convierte en nonce"
    ],
    "answer": 0,
    "explanation": "El código comprueba len(msg) % 16 y lanza ValueError; el modo no añade relleno automáticamente."
  },
  {
    "practice": "2",
    "question": "¿Qué ocurre en Fernet al cifrar dos veces el mismo mensaje con la misma clave?",
    "options": [
      "Normalmente se obtienen tokens diferentes por el IV aleatorio",
      "Los tokens siempre son iguales",
      "La clave se vuelve pública",
      "Solo cambia el texto claro"
    ],
    "answer": 0,
    "explanation": "Fernet genera un IV aleatorio para cada cifrado, por lo que los tokens normalmente cambian."
  },
  {
    "practice": "2",
    "question": "¿Qué primitivas combina Fernet?",
    "options": [
      "AES-CBC con PKCS#7 y HMAC-SHA256",
      "AES-GCM con RSA",
      "SHA-256 sin clave solamente",
      "ECB y MD5"
    ],
    "answer": 0,
    "explanation": "Fernet usa AES-128-CBC con padding PKCS#7 y HMAC-SHA256 para autenticación; no es el modo AES-GCM."
  },
  {
    "practice": "2",
    "question": "¿Es Fernet idéntico al modo AEAD AES-GCM?",
    "options": [
      "No: ambos proporcionan confidencialidad e integridad, pero usan construcciones distintas",
      "Sí, Fernet es otro nombre de GCM",
      "Sí, porque usa ECB",
      "No, Fernet no autentica"
    ],
    "answer": 0,
    "explanation": "Fernet combina CBC y HMAC; GCM es un modo AEAD. Fernet no expone una entrada de datos asociados como AESGCM."
  },
  {
    "practice": "2",
    "question": "¿Qué significa f.decrypt(token, ttl=60)?",
    "options": [
      "Rechaza tokens con edad superior al límite de 60 segundos",
      "Borra la clave después de 60 segundos",
      "Cifra el mensaje 60 veces",
      "Genera un nonce de 60 bytes"
    ],
    "answer": 0,
    "explanation": "ttl establece la edad máxima aceptada; un token caducado se rechaza con InvalidToken."
  },
  {
    "practice": "2",
    "question": "¿Qué sucede si se modifica un token Fernet antes de descifrarlo?",
    "options": [
      "Se rechaza con InvalidToken si falla la autenticación",
      "El mensaje se acepta siempre",
      "Se renueva el ttl",
      "Se recupera la clave"
    ],
    "answer": 0,
    "explanation": "La etiqueta HMAC protege la integridad del token; la manipulación causa fallo de verificación."
  },
  {
    "practice": "2",
    "question": "En AESGCM.encrypt(nonce, msg, aad), ¿qué se hace con aad?",
    "options": [
      "Se autentica, pero no se cifra como parte del texto claro",
      "Se ignora",
      "Se usa como clave secreta",
      "Se rellena con espacios"
    ],
    "answer": 0,
    "explanation": "El dato asociado permanece fuera del texto cifrado pero queda autenticado y debe coincidir al descifrar."
  },
  {
    "practice": "2",
    "question": "¿Qué ocurre si cambias el texto cifrado o el AAD antes de AES-GCM decrypt?",
    "options": [
      "La verificación falla y se lanza InvalidTag",
      "Se recupera un mensaje fiable con un byte cambiado",
      "Solo cambia la longitud del nonce",
      "No ocurre nada"
    ],
    "answer": 0,
    "explanation": "La etiqueta autentica el texto cifrado y el AAD; no se debe usar texto si falla la verificación."
  },
  {
    "practice": "2",
    "question": "¿Qué tamaño de nonce utiliza el ejemplo AES-GCM del guion?",
    "options": [
      "12 bytes",
      "4 bytes",
      "16 bytes",
      "32 bytes"
    ],
    "answer": 0,
    "explanation": "nonce = os.urandom(12): son 12 bytes, equivalentes a 96 bits."
  },
  {
    "practice": "2",
    "question": "¿Por qué no debe repetirse el nonce con la misma clave AES-GCM?",
    "options": [
      "Puede comprometer gravemente confidencialidad e integridad",
      "Solo porque el nonce es una contraseña",
      "Porque AES cambiaría a ECB",
      "Porque el bloque AES se acorta"
    ],
    "answer": 0,
    "explanation": "La reutilización en GCM puede revelar relaciones entre textos y facilitar falsificaciones; la condición es unicidad por clave."
  },
  {
    "practice": "2",
    "question": "¿Qué devuelve AESGCM.encrypt en cryptography?",
    "options": [
      "Texto cifrado con etiqueta de autenticación añadida",
      "Solo un hash de la clave",
      "El texto claro junto al IV privado",
      "Una firma RSA"
    ],
    "answer": 0,
    "explanation": "La API devuelve ciphertext con la etiqueta de 16 bytes añadida; al descifrar requiere el nonce y el mismo AAD."
  },
  {
    "practice": "2",
    "question": "Para CBC seguro, ¿cómo debe elegirse el IV?",
    "options": [
      "Debe ser impredecible y nuevo para cada cifrado",
      "Debe ser siempre cero y secreto",
      "Se puede reutilizar libremente",
      "Debe ser igual a la clave"
    ],
    "answer": 0,
    "explanation": "Un IV aleatorio e impredecible evita que mensajes con prefijos iguales generen el mismo primer bloque. El IV puede acompañar al ciphertext."
  },
  {
    "practice": "2",
    "question": "¿Qué propiedad no aporta el CBC del ejercicio 1 por sí solo?",
    "options": [
      "Autenticación e integridad",
      "Compatibilidad con claves de AES válidas",
      "Compatibilidad con AES",
      "Bloques de 16 bytes"
    ],
    "answer": 0,
    "explanation": "Cifrar en CBC no comprueba integridad. Hace falta una construcción autenticada o un MAC usado correctamente."
  }
];
const practiceNotes = [
  {
    "practice": "1",
    "title": "Práctica 1 · Hashes y contraseñas",
    "source": "Práctica1-Funciones hash.pdf",
    "summary": "SHA-256, igualdad de hashes, ataque de diccionario, bcrypt y PBKDF con salt.",
    "steps": [
      "SHA-256 directo: codifica la contraseña en bytes, actualiza el digest y finaliza; misma entrada da mismo hash.",
      "Un hash rápido sin salt facilita ataques offline y permite reconocer contraseñas repetidas.",
      "Ataque de diccionario: calcular el hash de cada candidata y compararlo; si no aparece, probar más candidatas no garantiza éxito.",
      "Usar bcrypt con gensalt y checkpw o una PBKDF adecuada con salt único y coste configurable. El salt se guarda con el resultado.",
      "Atención a los bytes exactos: espacios iniciales o finales cambian la contraseña. El enunciado y p4.py muestran espacios diferentes; comprueba el texto usado."
    ]
  },
  {
    "practice": "2",
    "title": "Práctica 2 · Cifrado",
    "source": "Práctica2-Cifrado.pdf y practica2/ejercicio1.py–ejercicio4.py",
    "summary": "CBC con errores, ECB, Fernet, caducidad y AES-GCM.",
    "steps": [
      "CBC de ejemplo: clave e IV fijos, padding con espacios ambiguo y ausencia de autenticación; comparar primeros bloques iguales.",
      "ECB: bloques de claro iguales dan bloques cifrados iguales. El ejemplo exige múltiplos de 16 bytes.",
      "Fernet: AES-128-CBC + PKCS#7 + HMAC-SHA256, IV aleatorio; detecta alteraciones. ttl limita edad y un token inválido o caducado lanza InvalidToken.",
      "AES-GCM: nonce de 12 bytes en el ejemplo; cifra y autentica el mensaje y autentica AAD visible. Cambiar ciphertext o AAD causa InvalidTag.",
      "No reutilizar nonce bajo la misma clave. CBC aislado no autentica; Fernet y GCM son construcciones distintas que sí proporcionan confidencialidad e integridad."
    ]
  }
];
