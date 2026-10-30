const expandedProblems = [
  {
    "id": "afines-hoja",
    "group": "fundamentos",
    "title": "Afín: cifrar y descifrar la hoja T1",
    "q": "Usa A=0, …, N=13, Ñ=14, …, Z=26. Con E(m)=7m+3 mod 27: identifica a,b; cifra TERCERA y descifra DID ÑOE. No se cifran espacios.",
    "a": "a=7, b=3. El inverso de 7 es 4, por lo que D(c)=4(c−3) mod 27.\nTERCERA → IEUQEUD.\nDID ÑOE → ATA QUE.\nPara comprobar, vuelve a aplicar E a las letras recuperadas.",
    "source": "t1",
    "pages": "1, ejercicio 1"
  },
  {
    "id": "vigenere-hoja",
    "group": "fundamentos",
    "title": "Vigenère: ejercicios de la hoja T1",
    "q": "Usa alfabeto español de 27 letras A=0 e incluyendo Ñ. Cifra CAMINERO con LUCI; descifra LSAWCOMW con PLUS.",
    "a": "Para cifrar se repite LUCILUCI.\nCAMINERO → NUÑPXYTW.\nPara descifrar se repite PLUSPLUS y se resta módulo 27.\nLSAWCOMW → VIGENERE.\nMantén la Ñ en el alfabeto: cambiar a 26 letras cambia las operaciones.",
    "source": "t1",
    "pages": "1, ejercicios 2–3"
  },
  {
    "id": "autoclave-hoja",
    "group": "fundamentos",
    "title": "Autoclave: recuperar texto y ampliar la clave",
    "q": "Descifra EDVIKVQG con clave inicial ALA. Usa alfabeto de 27 letras con Ñ y autoclave extendida con texto claro.",
    "a": "Resta primero A,L,A. Las primeras letras recuperadas amplían la clave, y así sucesivamente.\nTexto recuperado: ESVERANO.\nNo repitas ALA indefinidamente: en esta variante se concatena el texto claro a la clave inicial.",
    "source": "t1",
    "pages": "1, ejercicio 4"
  },
  {
    "id": "playfair-hoja",
    "group": "fundamentos",
    "title": "Playfair: tabla, pares y reglas",
    "q": "Construye Playfair con MARTES, omitiendo J y Ñ, sin repetir letras de la clave. Cifra FALSO PUENTE; quita espacios y añade X al final si la longitud es impar. Descifra FOMUMBZFTERZ.",
    "a": "Matriz por filas:\nM A R T E\nS B C D F\nG H I K L\nN O P Q U\nV W X Y Z\nPares del claro: FA LS OP UE NT EX.\nCifrado: BEGFPQZFQMRZ.\nDescifrado: BUENASUERTEX.\nReglas: misma fila → derecha; misma columna → abajo; rectángulo → conserva fila e intercambia columnas. Descifrar invierte derecha/abajo. La X final es relleno bajo la convención fijada.",
    "source": "t1",
    "pages": "1, ejercicios 5–6"
  },
  {
    "id": "hill-hoja",
    "group": "fundamentos",
    "title": "Hill: validar, cifrar e invertir",
    "q": "Con alfabeto español de 27 letras y vectores columna, K=[[3,2],[4,6]]. Valora si sirve de clave y cifra RECORDAR en pares.",
    "a": "det(K)=3·6−2·4=10. mcd(10,27)=1: es válida.\n10⁻¹ mod 27=19. K⁻¹=19·[[6,−2],[−4,3]] mod 27=[[6,16],[5,3]].\nPares: RE CO RD AR. Cada c=Km mod 27.\nValores cifrados: [8, 15, 9, 17, 6, 9, 9, 0].\nResultado: IOJQGJJA.\nComprueba K⁻¹K=I mod 27 antes de descifrar.",
    "source": "t1",
    "pages": "1, ejercicio 7"
  },
  {
    "id": "permutacion",
    "group": "fundamentos",
    "title": "Transposición por grupos e inversión",
    "q": "Fija la convención Cᵢ=Mₖᵢ para k=(6,4,2,1,3,5) y bloques de 6 letras. Descifra OOEMTD IACSLS EEOCSE.",
    "a": "Invierte colocando cada Cᵢ en la posición kᵢ del mensaje. Para OOEMTD: M₆=O,M₄=O,M₂=E,M₁=M,M₃=T,M₅=D: METODO.\nLos siguientes bloques son SCLASI y COSEEE.\nTexto sin espacios originales: METODOSCLASICOSEEE. Las tres E finales se conservan; sin una convención explícita de relleno no se eliminan automáticamente.",
    "source": "t1",
    "pages": "2, ejercicio 8"
  },
  {
    "id": "columnar",
    "group": "fundamentos",
    "title": "Transposición columnar y zigzag",
    "q": "A) Cifra FIESTANACIONAL escribiendo por filas en 4 columnas, sin relleno, y leyendo columnas de arriba abajo. B) Descifra PISOMLAROPTSLEEOS con zigzag de 5 filas: se escribe bajando y subiendo, y se lee por filas.",
    "a": "A) Filas: F I E S / T A N A / C I O N / A L.\nColumnas: FTCA, IAIL, ENO, SAN. Cifrado: FTCAIAILENOSAN.\nB) Patrón de filas: 0,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1. Reparte el criptograma por filas con sus longitudes 2,4,4,4,2; recorre después el zigzag. Resultado: PORSOLOMILPESETAS.",
    "source": "t1",
    "pages": "2, ejercicios 9–10"
  },
  {
    "id": "cancelacion",
    "group": "mates",
    "title": "Una propiedad falsa en los ejercicios",
    "q": "Valora: si mcd(a,n)=1 y aˣ≡aʸ mod n, entonces x≡y mod φ(n). Encuentra un contraejemplo si es falsa.",
    "a": "Es falsa en general. Toma a=4,n=7,x=1,y=4. Se tiene 4¹≡4⁴≡4 mod 7, pero 1 no es congruente con 4 módulo φ(7)=6.\nLa conclusión correcta usa el orden multiplicativo de a: x≡y mod ordₙ(a). En este ejemplo el orden es 3. Para este parcial basta reconocer el contraejemplo; no se añade el bloque posterior de logaritmo discreto.",
    "source": "t3",
    "pages": "1, ejercicio 2.b.iii"
  },
  {
    "id": "galois-hoja",
    "group": "mates",
    "title": "Multiplicar polinomios de la hoja T3",
    "q": "En GF(2⁸), reduce módulo x⁸+x⁴+x³+x+1 el producto (x+1)(x⁷+x⁵+x⁴+x³+x²+x+1).",
    "a": "Los bytes son 03 y BF.\nMultiplicar BF por x: desplaza a 7E y reduce con 1B, obteniendo 65.\n03·BF=(02·BF) XOR BF=65 XOR BF=DA.\nDA=11011010 corresponde a x⁷+x⁶+x⁴+x³+x.",
    "source": "t3",
    "pages": "2, ejercicio 3"
  },
  {
    "id": "galois-inverso",
    "group": "mates",
    "title": "Inverso en un cuerpo pequeño",
    "q": "En GF(2³) con p(x)=x³+x+1, halla el inverso de x² y compruébalo.",
    "a": "Se reduce x³=x+1. Probamos x²+x+1: x²(x²+x+1)=x⁴+x³+x².\nx⁴=x²+x y x³=x+1. Sustituimos: (x²+x)+(x+1)+x²=1.\nPor tanto (x²)⁻¹=x²+x+1, o 100⁻¹=111.",
    "source": "m3",
    "pages": "30–32"
  },
  {
    "id": "sbox",
    "group": "bloque",
    "title": "SubBytes: construir la S-box de 88",
    "q": "El byte es 10001000 (88 hexadecimal). Obtén el inverso en GF(2⁸) con módulo 11B y aplica la transformación afín AES. Verifica el resultado en la S-box.",
    "a": "88⁻¹=9B; comprueba 88·9B=01 en GF(2⁸).\nLa transformación por byte es y=v XOR rotl₈(v,1) XOR rotl₈(v,2) XOR rotl₈(v,3) XOR rotl₈(v,4) XOR 63.\nAplicando v=9B se obtiene y=C4.\nEn la tabla S-box se busca fila 8 y columna 8. Para el byte cero la etapa de inverso usa cero por convención.",
    "source": "t3",
    "pages": "3, ejercicio 7"
  },
  {
    "id": "mixcolumns",
    "group": "bloque",
    "title": "MixColumns: una columna completa",
    "q": "Aplica MixColumns a la columna [D4,BF,5D,30] hexadecimal. Usa la matriz AES con filas [02,03,01,01], [01,02,03,01], [01,01,02,03], [03,01,01,02].",
    "a": "Todos los productos son en GF(2⁸) y las sumas son XOR.\nFila 0: 02·D4 XOR 03·BF XOR 5D XOR 30=04.\nFila 1: D4 XOR 02·BF XOR 03·5D XOR 30=66.\nFila 2: D4 XOR BF XOR 02·5D XOR 03·30=81.\nFila 3: 03·D4 XOR BF XOR 5D XOR 02·30=E5.\nColumna resultante: [04,66,81,E5].",
    "source": "t3",
    "pages": "2, ejercicios 5–6 (columna de entrenamiento)"
  },
  {
    "id": "ctr-juguete",
    "group": "bloque",
    "title": "CTR: cifrar, descifrar y modificar un bit",
    "q": "Bloques de 4 bits, Eₖ(x)=x XOR 1010, contador inicial 0011 y siguiente 0100. P₁=1100, P₂=0101. Calcula los cifrados y explica qué ocurre si cambia el último bit de C₂.",
    "a": "Z₁=0011 XOR 1010=1001; C₁=1100 XOR 1001=0101.\nZ₂=0100 XOR 1010=1110; C₂=0101 XOR 1110=1011.\nDescifrar: Pᵢ=Cᵢ XOR Zᵢ.\nSi C₂ pasa de 1011 a 1010, P₂ pasa de 0101 a 0100. No se altera P₁ y no hay detección automática. Es un cifrador de juguete.",
    "source": "m3",
    "pages": "66–68, ejemplo propio"
  },
  {
    "id": "golomb-hoja",
    "group": "flujo",
    "title": "Golomb: secuencia de la hoja T2",
    "q": "Comprueba si 00101001110110 satisface los tres postulados. Cuenta circularmente y calcula al menos dos desplazamientos para intentar refutar G3.",
    "a": "Tiene 7 ceros y 7 unos: cumple balance G1.\nRachas circulares (empezando tras una frontera): 000,1,0,1,00,111,0,11. Hay cuatro rachas de longitud 1, dos de longitud 2 y dos de longitud 3.\nAC(1)=(6−8)/14=−1/7; AC(2)=(6−8)/14=−1/7; AC(4)=(8−6)/14=1/7.\nG3 falla porque no es constante. Por tanto NO cumple los tres postulados, aunque G1 sí.",
    "source": "t2",
    "pages": "1, ejercicio 1"
  },
  {
    "id": "lfsr-hoja",
    "group": "flujo",
    "title": "LFSR: distintas semillas, distinto periodo",
    "q": "Usa la recurrencia explícita s(t+4)=s(t+2) XOR s(t), con estado s(t)…s(t+3), salida izquierda y desplazamiento a la izquierda. Calcula los ciclos con semillas 0111 y 1101.",
    "a": "0111 → 1111 → 1110 → 1100 → 1001 → 0011 → 0111. Periodo de estados y salida: 6. Salida de un periodo: 011110. Su complejidad lineal es 4.\n1101 → 1011 → 0110 → 1101. Periodo: 3. Salida: 110. Su complejidad lineal es 2, pues s(t+2)=s(t+1) XOR s(t).\nEl mismo registro puede generar una salida con menor complejidad para otra semilla. La recurrencia evita ambigüedades al interpretar f(x)=x⁴+x²+1.",
    "source": "t2",
    "pages": "1, ejercicio 3.a–b"
  },
  {
    "id": "lfsr-primitivo",
    "group": "flujo",
    "title": "LFSR: periodo máximo con polinomio primitivo",
    "q": "Usa s(t+4)=s(t+1) XOR s(t), estado inicial 1110, salida por la izquierda y desplazamiento a la izquierda. Enumera estados hasta volver al inicial.",
    "a": "1110 → 1100 → 1000 → 0001 → 0010 → 0100 → 1001 → 0011 → 0110 → 1101 → 1010 → 0101 → 1011 → 0111 → 1111 → 1110.\nPeriodo 15=2⁴−1. La salida de un periodo es 111000100110101 y tiene complejidad lineal 4. No se visita 0000.",
    "source": "t2",
    "pages": "1, ejercicio 3.c"
  },
  {
    "id": "p1-traza",
    "group": "p1",
    "title": "Práctica 1: razonar una traza sin adivinar tiempos",
    "q": "Se guarda h=bcrypt.hashpw(b\"clave \",bcrypt.gensalt()). Se prueba una candidata b\"clave\" y después b\"clave \". ¿Qué devuelve checkpw? ¿Qué se guarda para verificar? ¿Puede servir un límite de login contra un atacante offline?",
    "a": "b\"clave\" → False; b\"clave \" → True. El espacio final es un byte de la contraseña.\nSe guarda el registro bcrypt completo: incluye sal, coste y resultado. No se genera una sal distinta para cada comprobación.\nEl límite de login protege el servidor de intentos online. Quien roba el registro puede comprobar candidatas localmente; sal y coste dificultan ese ataque. El tiempo no es universal.",
    "source": "p1",
    "pages": "3, ejemplo propio"
  },
  {
    "id": "p2-padding",
    "group": "p2",
    "title": "Práctica 2: tamaños y errores de implementación",
    "q": "Para el CBC del guion: calcula el tamaño cifrado de mensajes de 15,16,17 bytes. Explica por qué decrypt no devuelve exactamente el mensaje original y compara con AESGCM.encrypt para esos tamaños.",
    "a": "El padding de espacios añade 16−(len mod 16) bytes.\nCBC: 15→16; 16→32; 17→32 bytes. decrypt devuelve también los espacios; no hay un unpadding definido y retirarlos todos sería ambiguo.\nAESGCM de cryptography no usa ese padding y añade una etiqueta de 16 bytes: 15→31; 16→32; 17→33 bytes. El nonce se almacena aparte.",
    "source": "p2",
    "pages": "1 y 3, ejemplo propio"
  },
  {
    "id": "p2-auditoria",
    "group": "p2",
    "title": "Práctica 2: revisión completa del ejemplo CBC",
    "q": "Se propone arreglar CBC cambiando solo la clave a 32 bytes. ¿Resuelve los problemas? Explica qué revisarías de clave, IV, padding y autenticación. Compara Fernet y AES-GCM.",
    "a": "32 bytes seleccionan AES-256, pero persisten el IV fijo, el padding ambiguo y la falta de autenticación; una clave predecible o expuesta en el código sigue siendo débil.\nSe necesita clave secreta generada y gestionada correctamente, IV nuevo e impredecible, relleno inequívoco y autenticación de criptograma y parámetros con una composición correcta.\nFernet integra AES-128-CBC, PKCS#7 y HMAC. AES-GCM integra cifrado y autenticación y admite AAD; exige nonce único por clave. En ambos se rechaza una verificación inválida.",
    "source": "p2",
    "pages": "1–3"
  },
  {
    "id": "aes-matriz",
    "group": "bloque",
    "title": "AES: SubBytes, ShiftRows y una columna MixColumns",
    "q": "Estado de entrada por filas: [09,93,19,27]; [AE,52,11,9D]; [19,21,A5,9C]; [A9,CC,33,30]. Aplica SubBytes a cada byte, después ShiftRows, y calcula la columna 0 de MixColumns.",
    "a": "Salida SubBytes:\n01 DC D4 CC\nE4 00 82 5E\nD4 FD 06 DE\nD3 4B C3 04\nSalida ShiftRows (filas 0,1,2,3 desplazadas esa cantidad a la izquierda):\n01 DC D4 CC\n00 82 5E E4\n06 DE D4 FD\n04 D3 4B C3\nPrimera columna después de MixColumns: [00,0F,01,0D].\nUsa la S-box fila=primer dígito, columna=segundo dígito. Multiplica la columna con la matriz AES en GF(2⁸); no mezcles filas con columnas.",
    "source": "t3",
    "pages": "4–5, ejercicio 8"
  },
  {
    "id": "gf-producto",
    "group": "mates",
    "title": "Producto completo: 57 por 83",
    "q": "Calcula en GF(2⁸) con módulo 11B el producto de f=x⁶+x⁴+x²+x+1 y g=x⁷+x+1.",
    "a": "f=57 y g=83 en hexadecimal.\n83 representa x⁷+x+1: 57·83=(57·80) XOR (57·02) XOR 57.\nSucesivas multiplicaciones por 02: 57→AE→47→8E→07→0E→1C→38.\n57·80=38; 57·02=AE. Resultado 38 XOR AE XOR 57=C1.\nPolinomio: x⁷+x⁶+1.",
    "source": "t3",
    "pages": "2, ejercicio 4"
  },
  {
    "id": "tabla-bloque",
    "group": "bloque",
    "title": "Cifrador tabulado y decodificación ASCII",
    "q": "Para K=4, las salidas E₄(0)…E₄(F) son [0,1,D,7,F,C,E,2,8,6,A,4,9,3,B,5]. El bloque tiene 4 bits. Descifra 2F E5 E3 E5 2D E5 22 D0 7F D0 20 E3 y convierte los bytes claros a ASCII.",
    "a": "Invierte la columna de la tabla: para cada nibble cifrado busca la fila M que produce ese valor.\n2→7, F→4: 2F se recupera como 74 hexadecimal, que en ASCII es t.\nTexto claro hexadecimal: 74 6F 6D 6F 72 6F 77 20 34 20 70 6D.\nMensaje ASCII: tomorow 4 pm.\nNo uses la tabla de cifrado en el mismo sentido para descifrar; invierte la permutación.",
    "source": "t3",
    "pages": "6, ejercicio 9"
  },
  {
    "id": "tabla-ctr",
    "group": "bloque",
    "title": "CTR con el cifrador tabulado de la hoja",
    "q": "Usa E₄(0)…E₄(F)=[0,1,D,7,F,C,E,2,8,6,A,4,9,3,B,5]. Cifra HI! en modo CTR con contador inicial 6. Se cifra un nibble (4 bits) en cada paso.",
    "a": "HI! en ASCII es 48 49 21: seis nibbles 4,8,4,9,2,1.\nContadores: 6,7,8,9,A,B. Salidas E₄: E,2,8,6,A,4.\nSerie cifrante: E2 86 A4.\nXOR: 48 XOR E2=AA; 49 XOR 86=CF; 21 XOR A4=85.\nCriptograma: AA CF 85. Descifra repitiendo exactamente el mismo XOR.",
    "source": "t3",
    "pages": "7, ejercicio 10"
  }
,
{
  "id": "congruencia-general",
  "group": "mates",
  "title": "Congruencia lineal: varias soluciones o ninguna",
  "q": "Resuelve 6x≡9 mod 15 y expresa todas las soluciones módulo 15. Después decide si 6x≡5 mod 15 tiene solución.",
  "a": "d=mcd(6,15)=3. Como 3 divide 9, hay tres soluciones módulo 15.\nDivide coeficiente, término y módulo por 3: 2x≡3 mod 5. El inverso de 2 es 3, luego x≡9≡4 mod 5.\nMódulo 15: x=4,9,14. Comprobación: 24,54,84 dejan resto 9 módulo 15.\nPara 6x≡5 mod 15, 3 no divide 5; no existe solución.",
  "source": "m3",
  "pages": "6–14, ejemplo propio de congruencias"
}
];
const expandedOpens = [
  [
    "Explica las condiciones que debe cumplir una matriz de Hill módulo 27.",
    "Debe ser cuadrada e invertible módulo 27: mcd(det(K),27)=1. Con vectores columna, c=Km y m=K⁻¹c mod 27. No basta un determinante no nulo."
  ],
  [
    "Compara Vigenère periódico y autoclave de texto claro.",
    "El periódico repite una palabra clave; autoclave usa la clave inicial y continúa con el texto claro. Al descifrar, las letras recuperadas permiten extender la secuencia de clave."
  ],
  [
    "Explica la construcción de la S-box de AES y las otras transformaciones de ronda.",
    "SubBytes usa inverso en GF(2⁸) y transformación afín; ShiftRows rota filas; MixColumns mezcla columnas sobre GF(2⁸); AddRoundKey aplica XOR con la subclave. Hay una adición inicial de clave y la ronda final omite MixColumns."
  ],
  [
    "Compara paralelización, padding y errores de CBC y CTR.",
    "CBC cifra secuencialmente, permite descifrado paralelo y requiere bloques completos con relleno apropiado. Cambiar Cᵢ altera Pᵢ y el bit correspondiente en Pᵢ₊₁. CTR puede paralelizarse, no necesita padding y un bit alterado cambia ese bit del claro. Ninguno autentica por sí solo."
  ],
  [
    "Explica el papel de HMAC y por qué un MAC no proporciona no repudio.",
    "HMAC usa una clave compartida con un hash en capas interna y externa. Los poseedores de la clave pueden generar etiquetas, por lo que un tercero no puede atribuir una etiqueta a uno de ellos de forma exclusiva."
  ],
  [
    "¿Qué diferencia Merkle–Damgård de una construcción esponja?",
    "Merkle–Damgård encadena una función de compresión sobre bloques con un estado inicial y relleno. La esponja absorbe entradas en un estado y después extrae salida. SHA-2 usa la primera familia y SHA-3 la segunda."
  ],
  [
    "¿Por qué entropía alta estimada no demuestra seguridad de un generador?",
    "La entropía estimada por frecuencias no prueba impredecibilidad frente al conocimiento del atacante. Una secuencia determinista conocida puede parecer uniforme; deben considerarse semilla, entropía real y diseño del generador."
  ],
  [
    "Compara un cifrador síncrono con uno autosíncrono.",
    "En el síncrono la secuencia no depende del mensaje y se debe mantener la posición. En el autosíncrono depende de criptogramas anteriores y puede resincronizarse tras una ventana suficiente. La propagación de errores depende de esa realimentación."
  ],
  [
    "Práctica 1: diseña registro y verificación con una PBKDF.",
    "Al registrar genera sal única y deriva con algoritmo y coste adecuados; guarda sal, parámetros y resultado. Al verificar usa los mismos parámetros con la candidata. No recuperes el texto plano ni cambies la sal para comparar el registro."
  ],
  [
    "Práctica 2: compara InvalidToken e InvalidTag.",
    "Fernet rechaza un token alterado, inválido o caducado con InvalidToken. AESGCM usa InvalidTag si no autentica por datos, clave, nonce o AAD incorrectos. En ambos se rechaza el resultado en vez de usar un claro no autenticado."
  ],
  [
    "Práctica 2: ¿por qué dos tokens Fernet pueden ser diferentes para el mismo mensaje y clave?",
    "La construcción incorpora un IV aleatorio en cada cifrado. Además contiene una fecha visible pero autenticada. El receptor verifica HMAC y descifra recuperando el mismo mensaje."
  ],
  [
    "Práctica 2: ¿evita un MAC válido que se repita un mensaje antiguo?",
    "No. Para detectar repetición el protocolo debe autenticar un contador, identificador o fecha y comprobar su vigencia o que no se haya usado. La integridad por sí sola no proporciona frescura."
  ]
];
