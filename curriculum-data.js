// Unidades y preguntas originales contrastadas con los materiales locales.
const curriculum = [
  {
    "id": "amenazas",
    "group": "fundamentos",
    "title": "Amenazas, activos y medidas",
    "source": "m1",
    "pages": "4–17",
    "guide": "Un activo tiene valor y puede sufrir amenazas que explotan vulnerabilidades. Interceptación afecta a confidencialidad; interrupción, a disponibilidad; modificación, a integridad; fabricación, a autenticidad. Las medidas pueden prevenir, detectar o recuperar, y pueden ser físicas, lógicas u organizativas.",
    "questions": [
      {
        "id": "amenazas-1",
        "question": "Un atacante satura un servicio para impedir el acceso. ¿Qué objetivo afecta principalmente?",
        "options": [
          "Disponibilidad",
          "Confidencialidad",
          "No repudio",
          "Secreto perfecto"
        ],
        "answer": 0,
        "explanation": "La interrupción de acceso compromete la disponibilidad, aunque no se lean ni modifiquen los datos."
      },
      {
        "id": "amenazas-2",
        "question": "¿Qué ejemplo representa una medida de recuperación?",
        "options": [
          "Restaurar datos desde una copia de seguridad",
          "Cifrar un mensaje antes de enviarlo",
          "Registrar un intento de acceso",
          "Bloquear una conexión antes de aceptarla"
        ],
        "answer": 0,
        "explanation": "La recuperación devuelve el sistema a un estado operativo; prevenir y detectar son funciones diferentes."
      },
      {
        "id": "amenazas-3",
        "question": "Escuchar tráfico sin cambiarlo es un ataque…",
        "options": [
          "Pasivo de interceptación",
          "Activo de fabricación",
          "De interrupción necesariamente",
          "De recuperación"
        ],
        "answer": 0,
        "explanation": "Un ataque pasivo observa; insertar, modificar o interrumpir supone actuación activa."
      }
    ]
  },
  {
    "id": "modelo",
    "group": "fundamentos",
    "title": "Modelo de cifrado, claves y ataques",
    "source": "m1",
    "pages": "19–28",
    "guide": "Un codificador transforma una representación sin necesitar un secreto; cifrar persigue confidencialidad con una clave. Kerckhoffs exige que el sistema resista aun conociendo el algoritmo. En texto conocido el atacante conoce pares M,C; en texto elegido puede solicitar cifrados de mensajes que escoge. Fuerza bruta prueba claves: 2ⁿ posibilidades y aproximadamente 2ⁿ⁻¹ intentos de media para una clave uniforme.",
    "questions": [
      {
        "id": "modelo-1",
        "question": "¿Por qué Base64 no proporciona confidencialidad?",
        "options": [
          "Cualquiera puede deshacer la codificación sin una clave secreta",
          "Solo funciona con números",
          "El resultado es siempre más corto",
          "Es un MAC público"
        ],
        "answer": 0,
        "explanation": "Base64 es una representación reversible y pública; no cifra."
      },
      {
        "id": "modelo-2",
        "question": "Con una clave uniforme de 20 bits y sin atajos, ¿cuántos intentos se esperan aproximadamente en una búsqueda exhaustiva?",
        "options": [
          "2¹⁹",
          "20",
          "2²⁰ siempre",
          "2¹⁰"
        ],
        "answer": 0,
        "explanation": "Hay 2²⁰ claves; el éxito aparece aproximadamente a mitad de un recorrido sin repetición."
      },
      {
        "id": "modelo-3",
        "question": "¿Qué diferencia al ataque de texto elegido del de texto conocido?",
        "options": [
          "En el elegido, el adversario escoge los textos que solicita cifrar",
          "En el conocido conoce necesariamente la clave",
          "En el elegido solo observa criptogramas",
          "Son siempre el mismo modelo"
        ],
        "answer": 0,
        "explanation": "El acceso a cifrados de mensajes elegidos es una capacidad adicional del atacante."
      }
    ]
  },
  {
    "id": "afin",
    "group": "fundamentos",
    "title": "César, sustitución y cifrado afín",
    "source": "m1",
    "pages": "36–40",
    "guide": "Con A=0 y alfabeto de tamaño n, el afín calcula C=(aM+b) mod n. Se recupera M=a⁻¹(C−b) mod n si mcd(a,n)=1. César es a=1. La sustitución monoalfabética conserva frecuencias y patrones; que haya muchas claves no basta para que resista criptoanálisis.",
    "questions": [
      {
        "id": "afin-1",
        "question": "En E(m)=7m+3 mod 27, ¿qué función descifra?",
        "options": [
          "D(c)=4(c−3) mod 27",
          "D(c)=7(c−3) mod 27",
          "D(c)=4c+3 mod 27",
          "D(c)=(c−7)/3 mod 27"
        ],
        "answer": 0,
        "explanation": "7·4=28≡1; primero se resta 3 y después se multiplica por 4."
      },
      {
        "id": "afin-2",
        "question": "¿Cuántas claves afines válidas existen módulo 27?",
        "options": [
          "486",
          "729",
          "27",
          "18"
        ],
        "answer": 0,
        "explanation": "Hay φ(27)=18 multiplicadores invertibles y 27 desplazamientos: 18·27=486."
      }
    ]
  },
  {
    "id": "vigenere",
    "group": "fundamentos",
    "title": "Vigenère y autoclave",
    "source": "m1",
    "pages": "46–49",
    "guide": "Vigenère repite la palabra clave y suma sus valores al claro módulo n; se descifra restando. En la variante de autoclave de estas diapositivas, tras la clave inicial se incorpora el texto claro recuperado. No se repite indefinidamente la palabra clave.",
    "questions": [
      {
        "id": "vigenere-1",
        "question": "En autoclave con clave inicial SOL de longitud 3, ¿de dónde sale el cuarto símbolo de clave?",
        "options": [
          "Del primer símbolo del texto claro",
          "De repetir S necesariamente",
          "Del último símbolo del criptograma",
          "De un salt aleatorio"
        ],
        "answer": 0,
        "explanation": "La variante estudiada prolonga SOL con el texto claro; al descifrar se usa el texto ya recuperado."
      },
      {
        "id": "vigenere-2",
        "question": "Con A=0 y módulo 27, si M=4 y K=25 en Vigenère, ¿cuánto vale C?",
        "options": [
          "2",
          "29",
          "21",
          "−21"
        ],
        "answer": 0,
        "explanation": "C=(4+25) mod 27=2. Para descifrar: (2−25) mod 27=4."
      }
    ]
  },
  {
    "id": "playfair",
    "group": "fundamentos",
    "title": "Playfair y sustitución por dígrafos",
    "source": "m1",
    "pages": "42–43",
    "guide": "Playfair emplea una matriz 5×5 y cifra pares. En la convención de clase se omiten J y Ñ. Elimina repeticiones de la clave al construir la tabla y completa con el alfabeto. Misma fila: vecino derecho; misma columna: vecino inferior; rectángulo: mismas filas y columnas intercambiadas. Descifrar invierte los desplazamientos. El relleno para letras repetidas debe fijarse en el enunciado.",
    "questions": [
      {
        "id": "playfair-1",
        "question": "En Playfair, dos letras en la misma fila se cifran…",
        "options": [
          "Desplazando cada una una posición a la derecha, circularmente",
          "Intercambiándolas sin más",
          "Moviendo ambas a la fila superior",
          "Con una multiplicación matricial"
        ],
        "answer": 0,
        "explanation": "La regla de fila usa la derecha para cifrar y la izquierda para descifrar."
      },
      {
        "id": "playfair-2",
        "question": "En la regla del rectángulo de Playfair, ¿qué conserva cada letra?",
        "options": [
          "Su fila, tomando la columna de la otra",
          "Su columna, tomando siempre la fila siguiente",
          "Su valor numérico",
          "Su posición exacta"
        ],
        "answer": 0,
        "explanation": "Los vértices opuestos del rectángulo sustituyen cada letra conservando la fila."
      }
    ]
  },
  {
    "id": "hill",
    "group": "fundamentos",
    "title": "Hill y matrices invertibles",
    "source": "m1",
    "pages": "44",
    "guide": "Hill cifra vectores de letras: c=Km mod n, fijando si se usan columnas. Se descifra con K⁻¹. La condición es mcd(det(K),n)=1; un determinante distinto de cero no basta en un módulo compuesto. Para 2×2, K⁻¹=(det K)⁻¹·adj(K) mod n.",
    "questions": [
      {
        "id": "hill-1",
        "question": "¿Es válida K=[[3,2],[4,6]] para Hill módulo 27?",
        "options": [
          "Sí: det(K)=10 y mcd(10,27)=1",
          "No: el determinante debe ser 1 como entero",
          "No: todas las entradas deben ser impares",
          "Sí: cualquier matriz no nula sirve"
        ],
        "answer": 0,
        "explanation": "det(K)=18−8=10; 10 es invertible módulo 27."
      },
      {
        "id": "hill-2",
        "question": "¿Es invertible [[2,0],[0,1]] módulo 26?",
        "options": [
          "No, porque mcd(2,26)=2",
          "Sí, porque su determinante no es cero",
          "Sí, porque es diagonal",
          "Solo para mensajes de dos letras"
        ],
        "answer": 0,
        "explanation": "En módulos compuestos puede haber determinantes no nulos que carecen de inverso."
      }
    ]
  },
  {
    "id": "transposicion",
    "group": "fundamentos",
    "title": "Transposiciones y Enigma",
    "source": "m1",
    "pages": "31–35, 50–52",
    "guide": "La transposición conserva los símbolos y sus frecuencias, alterando posiciones. Puede usar grupos permutados, columnas o zigzag; hay que fijar recorrido y relleno. Para invertir una permutación, ubica cada símbolo de salida en su posición original. Enigma aplica sustituciones variables mediante rotores que avanzan: no es una simple transposición de letras.",
    "questions": [
      {
        "id": "transposicion-1",
        "question": "¿Qué conserva exactamente una transposición sin relleno?",
        "options": [
          "El número de apariciones de cada símbolo",
          "La posición de cada letra",
          "Cada pareja de letras contiguas",
          "La longitud de la clave en el criptograma"
        ],
        "answer": 0,
        "explanation": "Al reordenar no se crean ni eliminan letras; las frecuencias permanecen."
      },
      {
        "id": "transposicion-2",
        "question": "¿Qué hace que Enigma cambie la sustitución de una posición a la siguiente?",
        "options": [
          "El avance de los rotores",
          "Un hash por letra",
          "La expansión de clave de AES",
          "El uso de Base64"
        ],
        "answer": 0,
        "explanation": "La posición mecánica de los rotores modifica la correspondencia entre letras."
      }
    ]
  },
  {
    "id": "estructuras",
    "group": "mates",
    "title": "Grupos, anillos y cuerpos",
    "source": "m3",
    "pages": "3–13, 21–24",
    "guide": "Un grupo tiene operación cerrada, asociativa, neutro e inverso para cada elemento; es abeliano si además conmuta. Un anillo combina suma y producto con distributividad. En un cuerpo todo elemento no nulo tiene inverso multiplicativo. Zₙ es cuerpo precisamente si n es primo; GF(2⁸) es una extensión polinómica y no el anillo Z₂₅₆.",
    "questions": [
      {
        "id": "estructuras-1",
        "question": "¿Por qué Z₈ con suma y producto módulo 8 no es un cuerpo?",
        "options": [
          "2 es no nulo y no tiene inverso multiplicativo",
          "No existe suma",
          "No tiene elemento cero",
          "Tiene demasiados elementos"
        ],
        "answer": 0,
        "explanation": "2·4≡0 mod 8; 2 no es unidad. En un cuerpo todo no nulo es invertible."
      },
      {
        "id": "estructuras-2",
        "question": "¿Son iguales GF(2⁸) y Z₂₅₆?",
        "options": [
          "No; tienen 256 elementos pero operaciones y estructuras diferentes",
          "Sí, porque tienen el mismo número de elementos",
          "Solo si se usa hexadecimal",
          "Sí, ambos tienen característica 256"
        ],
        "answer": 0,
        "explanation": "GF(2⁸) tiene característica 2 y es un cuerpo; Z₂₅₆ tiene divisores de cero."
      }
    ]
  },
  {
    "id": "congruencias",
    "group": "mates",
    "title": "Congruencias, cancelación y Euclides",
    "source": "m3",
    "pages": "6–14, 19–20",
    "guide": "a≡b mod n significa que n divide a−b. Reducir da un representante entre 0 y n−1. Sumas y productos permiten reducir operandos. Cancelar a en ab≡ac mod n solo conserva el módulo n si a es invertible; en general se concluye b≡c mod n/mcd(a,n). Para ax≡b mod n hay solución si y solo si mcd(a,n) divide b. Si d=mcd(a,n) divide b, se reduce a (a/d)x≡b/d mod n/d y se obtienen d soluciones distintas módulo n. Euclides usa restos sucesivos para hallar el mcd.",
    "questions": [
      {
        "id": "congruencias-1",
        "question": "De 2x≡2 mod 6, ¿se deduce x≡1 mod 6?",
        "options": [
          "No: las soluciones son x≡1 o 4 mod 6",
          "Sí, se puede dividir cualquier congruencia por 2",
          "No existe ninguna solución",
          "La única solución es x=2"
        ],
        "answer": 0,
        "explanation": "Se divide el módulo por mcd(2,6)=2 y queda x≡1 mod 3."
      },
      {
        "id": "congruencias-2",
        "question": "¿Cuál es mcd(252,105)?",
        "options": [
          "21",
          "7",
          "3",
          "35"
        ],
        "answer": 0,
        "explanation": "252=2·105+42; 105=2·42+21; 42=2·21. El último resto no nulo es 21."
      }
    ]
  },
  {
    "id": "euler",
    "group": "mates",
    "title": "Inversos, Euler y potencias",
    "source": "m3",
    "pages": "14–20",
    "guide": "Euclides extendido expresa au+nv=mcd(a,n); si vale 1, u es a⁻¹. φ(pᵏ)=pᵏ⁻¹(p−1); φ(ab)=φ(a)φ(b) si a,b son coprimos. Euler permite reducir exponentes para bases coprimas. La exponenciación binaria calcula cuadrados y reduce en cada paso.",
    "questions": [
      {
        "id": "euler-1",
        "question": "¿Cuál es φ(45)?",
        "options": [
          "24",
          "44",
          "30",
          "12"
        ],
        "answer": 0,
        "explanation": "45=9·5, con factores coprimos. φ(9)=6 y φ(5)=4; producto 24."
      },
      {
        "id": "euler-2",
        "question": "¿Se puede usar directamente 2^φ(8)≡1 mod 8?",
        "options": [
          "No; mcd(2,8)≠1 y 2⁴≡0",
          "Sí; Euler vale para cualquier base",
          "Sí, si el exponente es par",
          "Solo si se usa hexadecimal"
        ],
        "answer": 0,
        "explanation": "La hipótesis de coprimalidad es necesaria: 2 no es unidad módulo 8."
      },
      {
        "id": "euler-3",
        "question": "¿Cuánto vale 3¹³ mod 7?",
        "options": [
          "3",
          "1",
          "6",
          "0"
        ],
        "answer": 0,
        "explanation": "3⁶≡1 mod 7; 13=2·6+1, de modo que el resultado es 3."
      }
    ]
  },
  {
    "id": "galois",
    "group": "mates",
    "title": "Polinomios, XOR e irreducibilidad",
    "source": "m3",
    "pages": "21–32",
    "guide": "En GF(2ᵐ) cada elemento es un polinomio de grado menor que m. Sumar y restar son XOR. El producto se reduce por un polinomio irreducible de grado m. Todo a≠0 tiene a^(2ᵐ−1)=1 y su inverso es a^(2ᵐ−2). La reducción polinómica usa XOR, sin llevadas enteras.",
    "questions": [
      {
        "id": "galois-1",
        "question": "En GF(2³) con p(x)=x³+x+1, ¿a qué equivale x³?",
        "options": [
          "x+1",
          "x²+1",
          "0",
          "x³−1"
        ],
        "answer": 0,
        "explanation": "p(x)=0 en el cociente: x³=x+1, porque sumar y restar coinciden en característica 2."
      },
      {
        "id": "galois-2",
        "question": "En ese GF(2³), ¿cuánto vale (x²+1)²?",
        "options": [
          "x²+x+1",
          "x⁴+2x²+1",
          "x+1",
          "1"
        ],
        "answer": 0,
        "explanation": "En GF(2) se cancelan los términos cruzados: x⁴+1; x⁴=x²+x, así que queda x²+x+1."
      },
      {
        "id": "galois-3",
        "question": "¿Qué exponente calcula el inverso de un elemento no nulo en GF(2⁸)?",
        "options": [
          "254",
          "255",
          "256",
          "128"
        ],
        "answer": 0,
        "explanation": "El grupo multiplicativo tiene orden 255: a²⁵⁵=1; por tanto a⁻¹=a²⁵⁴."
      }
    ]
  },
  {
    "id": "xtime",
    "group": "mates",
    "title": "Cálculos de bytes en AES",
    "source": "m3",
    "pages": "25–32, 46",
    "guide": "El polinomio de AES es x⁸+x⁴+x³+x+1 (0x11B). xtime multiplica por 02: desplaza y, si el bit alto original era uno, aplica XOR con 1B al byte bajo. Multiplicar por 03 es xtime(a) XOR a. Separa siempre aritmética entera y polinómica.",
    "questions": [
      {
        "id": "xtime-1",
        "question": "En el cuerpo AES, ¿cuánto es 02·80 en hexadecimal?",
        "options": [
          "1B",
          "00",
          "100",
          "81"
        ],
        "answer": 0,
        "explanation": "El desplazamiento da x⁸, que se reduce a x⁴+x³+x+1=1B."
      },
      {
        "id": "xtime-2",
        "question": "En el cuerpo AES, ¿cuánto es 03·57 en hexadecimal?",
        "options": [
          "F9",
          "AE",
          "05",
          "FA"
        ],
        "answer": 0,
        "explanation": "02·57=AE, sin reducción; 03·57=AE XOR 57=F9."
      }
    ]
  },
  {
    "id": "bloque-des",
    "group": "bloque",
    "title": "Bloque ideal y DES",
    "source": "m3",
    "pages": "37–42",
    "guide": "Cada clave selecciona una permutación de los 2ᵇ bloques de b bits. Un bloque ideal podría escoger entre (2ᵇ)! permutaciones, pero un cifrador real solo tiene tantas claves como su espacio de claves. DES tiene bloque de 64 bits y clave efectiva de 56. La longitud efectiva de clave de DES permite una búsqueda exhaustiva de 2⁵⁶ claves.",
    "questions": [
      {
        "id": "bloque-des-1",
        "question": "¿Cuántas claves efectivas posibles tiene DES?",
        "options": [
          "2⁵⁶",
          "2⁶⁴",
          "56",
          "64"
        ],
        "answer": 0,
        "explanation": "Los 8 bits de paridad no aumentan los 56 bits efectivos del espacio de claves."
      },
      {
        "id": "bloque-des-2",
        "question": "Para bloques de b bits, ¿cuántas permutaciones tiene un cifrador de bloque ideal sin limitar las claves?",
        "options": [
          "(2ᵇ)!",
          "2ᵇ",
          "b!",
          "2ᵇ−1"
        ],
        "answer": 0,
        "explanation": "Hay 2ᵇ posibles entradas; cada cifrador invertible es una permutación de ese conjunto."
      }
    ]
  },
  {
    "id": "aes-estructura",
    "group": "bloque",
    "title": "Estado, rondas y expansión de clave AES",
    "source": "m3",
    "pages": "43–47, 55–56",
    "guide": "AES usa bloques de 16 bytes. El estado se rellena por columnas: bytes 0,1,2,3 forman la primera. Claves de 128/192/256 bits dan 10/12/14 rondas. Hay AddRoundKey inicial y una subclave por ronda. El calendario de clave deriva las subclaves mediante operaciones como RotWord, SubWord, constantes de ronda y XOR.",
    "questions": [
      {
        "id": "aes-estructura-1",
        "question": "Con bytes de entrada 00,01,…,0F, ¿cuál es la primera columna del estado AES?",
        "options": [
          "00,01,02,03",
          "00,04,08,0C",
          "0C,0D,0E,0F",
          "00,05,0A,0F"
        ],
        "answer": 0,
        "explanation": "La carga del estado AES se hace por columnas, no por filas."
      },
      {
        "id": "aes-estructura-2",
        "question": "¿Cuántas subclaves de 128 bits se usan en AES-128 contando AddRoundKey inicial?",
        "options": [
          "11",
          "10",
          "16",
          "128"
        ],
        "answer": 0,
        "explanation": "Una inicial más una para cada una de las 10 rondas."
      },
      {
        "id": "aes-estructura-3",
        "question": "¿Qué hace RotWord en el calendario AES?",
        "options": [
          "Rota cíclicamente los cuatro bytes de una palabra",
          "Cifra todo el mensaje en CBC",
          "Invierte el orden de los bits de la clave",
          "Sustituye el nonce"
        ],
        "answer": 0,
        "explanation": "RotWord rota bytes; SubWord aplica la S-box a cada byte."
      }
    ]
  },
  {
    "id": "aes-transformaciones",
    "group": "bloque",
    "title": "SubBytes, ShiftRows y MixColumns",
    "source": "m3",
    "pages": "48–55",
    "guide": "SubBytes aplica una S-box no lineal: inverso en GF(2⁸), con tratamiento de cero, seguido de una transformación afín. ShiftRows rota las filas 0/1/2/3 bytes a la izquierda. MixColumns mezcla cada columna con una matriz fija sobre GF(2⁸). AddRoundKey es XOR. La ronda final omite MixColumns.",
    "questions": [
      {
        "id": "aes-transformaciones-1",
        "question": "¿Qué transformación AES aporta la no linealidad principal?",
        "options": [
          "SubBytes",
          "ShiftRows",
          "AddRoundKey",
          "La carga por columnas"
        ],
        "answer": 0,
        "explanation": "La S-box de SubBytes es no lineal; las demás operaciones indicadas son lineales en los bits."
      },
      {
        "id": "aes-transformaciones-2",
        "question": "¿Cómo queda la fila [01,02,03,04] si es la fila de índice 2 tras ShiftRows?",
        "options": [
          "[03,04,01,02]",
          "[02,03,04,01]",
          "[04,01,02,03]",
          "[01,02,03,04]"
        ],
        "answer": 0,
        "explanation": "La fila de índice 2 se desplaza dos posiciones a la izquierda circularmente."
      },
      {
        "id": "aes-transformaciones-3",
        "question": "¿Qué fórmula da el primer byte de MixColumns de una columna [a,b,c,d]?",
        "options": [
          "02·a XOR 03·b XOR c XOR d",
          "a XOR b XOR c XOR d",
          "03·a XOR 02·b XOR c XOR d",
          "02·(a+b+c+d) como enteros"
        ],
        "answer": 0,
        "explanation": "Es la primera fila [02,03,01,01] de la matriz AES, con productos en GF(2⁸)."
      }
    ]
  },
  {
    "id": "ecb-cbc",
    "group": "bloque",
    "title": "ECB, CBC, relleno y propagación de errores",
    "source": "m3",
    "pages": "60–65",
    "guide": "ECB cifra cada bloque aislado y revela igualdad. CBC usa Cᵢ=E(Pᵢ XOR Cᵢ₋₁), C₀=IV; descifra Pᵢ=D(Cᵢ) XOR Cᵢ₋₁. El cifrado CBC es secuencial; el descifrado de los bloques se puede paralelizar. El IV de CBC debe ser impredecible y su integridad debe protegerse; no necesita ser secreto. Un error en Cᵢ altera Pᵢ y el bit correspondiente de Pᵢ₊₁.",
    "questions": [
      {
        "id": "ecb-cbc-1",
        "question": "¿Qué parte de CBC se puede paralelizar sobre los bloques recibidos?",
        "options": [
          "El descifrado",
          "El cifrado ordinario de una sola cadena",
          "Ninguna en absoluto",
          "Solo la generación de la clave"
        ],
        "answer": 0,
        "explanation": "Cada Pᵢ requiere Cᵢ y Cᵢ₋₁ ya recibidos; cifrar necesita el Cᵢ₋₁ recién calculado."
      },
      {
        "id": "ecb-cbc-2",
        "question": "Si se modifica un bit del IV de CBC, ¿qué sucede con el claro descifrado?",
        "options": [
          "Cambia ese bit de P₁ y los siguientes bloques no cambian",
          "Cambian todos los bloques de forma aleatoria",
          "Solo cambia P₂",
          "Se rechaza automáticamente"
        ],
        "answer": 0,
        "explanation": "P₁=D(C₁) XOR IV. Sin autenticación, el receptor no detecta necesariamente esa modificación."
      }
    ]
  },
  {
    "id": "ctr",
    "group": "bloque",
    "title": "CTR, contadores y acceso aleatorio",
    "source": "m3",
    "pages": "66–68",
    "guide": "CTR genera Zᵢ=Eₖ(Tᵢ) y hace Cᵢ=Pᵢ XOR Zᵢ. Todos los Tᵢ bajo una clave deben ser distintos, también entre mensajes. Se usa E tanto para cifrar como para descifrar, no requiere padding y permite paralelización y acceso aleatorio. Un bit cambiado en C cambia ese bit en P; no autentica.",
    "questions": [
      {
        "id": "ctr-1",
        "question": "Al descifrar CTR, ¿se utiliza Eₖ o Dₖ del cifrador de bloque?",
        "options": [
          "Eₖ para regenerar la secuencia",
          "Dₖ porque siempre se invierte el bloque",
          "Ambos alternativamente",
          "Ninguno: basta conocer el nonce"
        ],
        "answer": 0,
        "explanation": "CTR descifra mediante P=C XOR Eₖ(T); el XOR es su propia inversa."
      },
      {
        "id": "ctr-2",
        "question": "Un contador CTR de 8 bits alcanza 255 y vuelve a 0 con el mismo nonce y clave. ¿Qué problema aparece?",
        "options": [
          "Se repiten entradas del cifrador y secuencia cifrante",
          "AES cambia a ECB",
          "El padding aumenta",
          "Se crea una nueva clave automáticamente"
        ],
        "answer": 0,
        "explanation": "No se permite desbordar y reutilizar entradas bajo la misma clave."
      }
    ]
  },
  {
    "id": "cfb-ofb",
    "group": "bloque",
    "title": "CFB y OFB",
    "source": "m3",
    "pages": "69–72",
    "guide": "CFB realimenta criptograma: puede resincronizarse tras suficiente texto recibido y un error influye durante una ventana de realimentación. OFB realimenta la salida del cifrador, independiente del claro y criptograma; es síncrono, no se recupera por sí solo de inserciones o pérdidas. En OFB nunca se repite IV con una misma clave; en CFB el IV debe ser impredecible.",
    "questions": [
      {
        "id": "cfb-ofb-1",
        "question": "¿Qué se realimenta en OFB?",
        "options": [
          "La salida del cifrador de bloque",
          "El último bloque de texto claro",
          "El último bloque cifrado obligatoriamente",
          "La etiqueta HMAC"
        ],
        "answer": 0,
        "explanation": "OFB hace evolucionar un estado independiente del mensaje mediante la salida del cifrador."
      },
      {
        "id": "cfb-ofb-2",
        "question": "¿Cuál puede resincronizarse usando un número finito de símbolos cifrados recibidos?",
        "options": [
          "CFB",
          "OFB",
          "OTP con bits perdidos sin señalización",
          "CTR sin recuperar la posición del contador"
        ],
        "answer": 0,
        "explanation": "CFB es autosíncrono por su dependencia de criptogramas anteriores; OFB es síncrono."
      }
    ]
  },
  {
    "id": "hash-propiedades",
    "group": "integridad",
    "title": "Hash: resistencias y cumpleaños",
    "source": "m4",
    "pages": "4–14",
    "guide": "Preimagen: dado h, buscar M con H(M)=h. Segunda preimagen: dado M, buscar M′ distinto con el mismo hash. Colisión: escoger ambos mensajes. Para n bits ideales, los costes genéricos son 2ⁿ, 2ⁿ y 2ⁿᐟ² respectivamente. Las colisiones existen por el principio del palomar; se busca que encontrarlas sea inviable.",
    "questions": [
      {
        "id": "hash-propiedades-1",
        "question": "Un atacante recibe un documento fijo y busca otro con el mismo hash. ¿Qué propiedad intenta romper?",
        "options": [
          "Resistencia a segunda preimagen",
          "Resistencia a colisiones sin mensaje fijado",
          "Confidencialidad de AES",
          "Disponibilidad"
        ],
        "answer": 0,
        "explanation": "La distinción es que el documento objetivo ya viene fijado; no puede elegir libremente los dos."
      },
      {
        "id": "hash-propiedades-2",
        "question": "Para un hash ideal de 128 bits, ¿qué trabajo genérico aproxima una colisión?",
        "options": [
          "2⁶⁴",
          "2¹²⁸",
          "128",
          "2³²"
        ],
        "answer": 0,
        "explanation": "El efecto cumpleaños reduce el exponente a la mitad; no implica el mismo coste para una preimagen."
      }
    ]
  },
  {
    "id": "hash-construcciones",
    "group": "integridad",
    "title": "Merkle–Damgård, SHA-2 y SHA-3",
    "source": "m4",
    "pages": "16–25",
    "guide": "Merkle–Damgård encadena una función de compresión con un estado inicial y bloques con relleno y longitud. MD5, SHA-1 y SHA-2 pertenecen a esta familia; SHA-3 usa una esponja con absorción y extracción. MD5 y SHA-1 tienen colisiones prácticas y no deben presentarse como resistentes a colisiones. Una extensión de longitud puede afectar construcciones ingenuas H(K||M); HMAC evita ese diseño.",
    "questions": [
      {
        "id": "hash-construcciones-1",
        "question": "¿Qué distingue estructuralmente SHA-3 de SHA-256?",
        "options": [
          "SHA-3 usa una esponja y SHA-256 un esquema Merkle–Damgård",
          "SHA-3 cifra y SHA-256 firma",
          "SHA-3 exige una clave secreta",
          "SHA-256 tiene una salida variable en cada llamada"
        ],
        "answer": 0,
        "explanation": "La esponja absorbe los bloques en un estado y después extrae la salida."
      },
      {
        "id": "hash-construcciones-2",
        "question": "¿Por qué H(K||M) no debe sustituir a HMAC con un hash Merkle–Damgård?",
        "options": [
          "Puede permitir extensión de longitud",
          "Porque cualquier concatenación es imposible",
          "Porque HMAC no necesita clave",
          "Porque el resultado se puede descifrar con K"
        ],
        "answer": 0,
        "explanation": "Una construcción ingenua puede permitir calcular una etiqueta de un mensaje extendido sin conocer K."
      }
    ]
  },
  {
    "id": "mac",
    "group": "integridad",
    "title": "MAC, HMAC y CBC-MAC",
    "source": "m4",
    "pages": "28–37",
    "guide": "MAC autentica con clave compartida y no ofrece no repudio entre sus titulares. HMAC aplica hash con capas interna y externa e ipad/opad; no consiste en concatenar una clave una vez. CBC-MAC básico usa IV fijo y es seguro solo bajo condiciones de dominio apropiadas, como mensajes de longitud fija; para longitud variable se emplean construcciones adecuadas como CMAC.",
    "questions": [
      {
        "id": "mac-1",
        "question": "¿Qué describe HMAC de forma esquemática?",
        "options": [
          "H((K′ XOR opad)||H((K′ XOR ipad)||M))",
          "H(K||M) únicamente",
          "AES(M) sin clave",
          "H(M)||K publicado"
        ],
        "answer": 0,
        "explanation": "La estructura anidada con dos máscaras es la diferencia esencial."
      },
      {
        "id": "mac-2",
        "question": "¿Por qué no se debe aplicar CBC-MAC básico indiscriminadamente a mensajes de longitud variable?",
        "options": [
          "Puede admitir falsificaciones por extensión o concatenación",
          "Porque no utiliza cifradores de bloque",
          "Porque cualquier MAC exige cifrar el mensaje",
          "Porque su IV debe ser secreto y aleatorio"
        ],
        "answer": 0,
        "explanation": "La seguridad del esquema básico requiere restricciones; variantes como CMAC tratan longitudes variables."
      }
    ]
  },
  {
    "id": "aead",
    "group": "integridad",
    "title": "Composición y AEAD",
    "source": "m4",
    "pages": "39–51",
    "guide": "Encrypt-then-MAC cifra y autentica el criptograma, incluyendo los parámetros relevantes. MAC-then-Encrypt cifra mensaje y etiqueta; Encrypt-and-MAC los calcula en paralelo sobre el claro. AEAD autentica texto cifrado y AAD visible. GCM combina CTR y autenticación polinómica; repetir nonce con la misma clave compromete confidencialidad y autenticación.",
    "questions": [
      {
        "id": "aead-1",
        "question": "En Encrypt-then-MAC, ¿qué se comprueba antes de aceptar y procesar el claro?",
        "options": [
          "La etiqueta del criptograma y parámetros autenticados",
          "El hash público del texto original",
          "La igualdad del IV con la clave",
          "Nada, porque el cifrado prueba integridad"
        ],
        "answer": 0,
        "explanation": "Autenticar el criptograma permite rechazar datos no válidos antes de procesar el claro."
      },
      {
        "id": "aead-2",
        "question": "¿Qué sucede si el receptor usa un AAD diferente al del emisor en AES-GCM?",
        "options": [
          "Falla la verificación de la etiqueta",
          "Solo cambia una cabecera sin efecto",
          "Se descifra pero el AAD se cifra",
          "Se convierte a CBC"
        ],
        "answer": 0,
        "explanation": "El AAD forma parte de los datos autenticados, aunque permanezca visible."
      }
    ]
  },
  {
    "id": "poly1305",
    "group": "integridad",
    "title": "Poly1305 y ChaCha20-Poly1305",
    "source": "m4",
    "pages": "53–55",
    "guide": "Poly1305 es un autenticador con una clave de un solo uso; no cifra. ChaCha20-Poly1305 genera esa clave desde el bloque inicial y cifra el mensaje con los bloques siguientes. El nonce por clave no debe repetirse. La etiqueta autentica el criptograma, AAD y sus longitudes.",
    "questions": [
      {
        "id": "poly1305-1",
        "question": "¿Qué función desempeña Poly1305?",
        "options": [
          "Generar una etiqueta de autenticación",
          "Cifrar bloques de 128 bits",
          "Intercambiar una clave pública",
          "Comprimir el mensaje sin pérdidas"
        ],
        "answer": 0,
        "explanation": "Es un MAC; en ChaCha20-Poly1305 complementa la confidencialidad del cifrador de flujo."
      },
      {
        "id": "poly1305-2",
        "question": "En ChaCha20-Poly1305, ¿para qué se reserva la salida del bloque con contador 0?",
        "options": [
          "Derivar la clave de un solo uso de Poly1305",
          "Cifrar siempre los primeros bytes del mensaje",
          "Transmitir la clave maestra en claro",
          "Rellenar el último bloque"
        ],
        "answer": 0,
        "explanation": "El cifrado del mensaje comienza con el contador 1; no se reutiliza la clave de Poly1305."
      }
    ]
  },
  {
    "id": "flujo-tipos",
    "group": "flujo",
    "title": "Flujo síncrono, autosíncrono y texto conocido",
    "source": "m2",
    "pages": "7–11",
    "guide": "Un cifrador síncrono genera secuencia independiente del mensaje; ambos extremos deben mantener posición. Uno autosíncrono usa símbolos cifrados previos. Con C=M XOR Z, un par M,C conocido revela ese segmento Z, sin que ello implique automáticamente recuperar la clave base de un generador seguro.",
    "questions": [
      {
        "id": "flujo-tipos-1",
        "question": "Si se conoce M y C en un cifrado por XOR, ¿qué se obtiene directamente?",
        "options": [
          "El segmento de secuencia Z=M XOR C",
          "Necesariamente la clave base completa de ChaCha20",
          "La clave privada RSA",
          "Todos los nonces futuros"
        ],
        "answer": 0,
        "explanation": "Se recupera la secuencia usada en ese segmento; un generador seguro protege la clave base."
      },
      {
        "id": "flujo-tipos-2",
        "question": "¿Qué efecto puede tener perder un bit en un cifrado síncrono sin señalización de posición?",
        "options": [
          "Desalinear la secuencia del receptor",
          "Cambiar automáticamente la clave por otra correcta",
          "Autenticar el siguiente bloque",
          "Ninguno por definición"
        ],
        "answer": 0,
        "explanation": "La corrección de errores y la resincronización requieren mecanismos adicionales."
      }
    ]
  },
  {
    "id": "otp",
    "group": "flujo",
    "title": "Vernam y secreto perfecto",
    "source": "m2",
    "pages": "13–16",
    "guide": "El OTP necesita clave secreta uniforme, independiente del mensaje, de longitud suficiente y usada una sola vez. Su seguridad es informacional. Un PRNG con semilla corta produce una secuencia determinista: su seguridad es computacional. Reutilizar Z da C₁ XOR C₂=M₁ XOR M₂.",
    "questions": [
      {
        "id": "otp-1",
        "question": "¿Por qué expandir una clave de 128 bits a un megabyte con un PRNG no convierte el esquema en un OTP ideal?",
        "options": [
          "La salida pertenece a un conjunto de como máximo 2¹²⁸ secuencias determinadas por la semilla",
          "Porque XOR deja de funcionar",
          "Porque la salida es demasiado larga para cifrar",
          "Porque una semilla nunca puede ser secreta"
        ],
        "answer": 0,
        "explanation": "La expansión determinista no crea la entropía de una clave independiente de un megabyte."
      },
      {
        "id": "otp-2",
        "question": "Con M=101001111 y K=010010001, ¿qué produce Vernam?",
        "options": [
          "111011110",
          "111111110",
          "101001111",
          "010010001"
        ],
        "answer": 0,
        "explanation": "El XOR posición a posición da 111011110. Volver a aplicar XOR con K recupera M."
      }
    ]
  },
  {
    "id": "golomb",
    "group": "flujo",
    "title": "Golomb: balance, rachas y autocorrelación",
    "source": "m2",
    "pages": "17–18",
    "guide": "Cuenta un periodo circular: si empieza y acaba con el mismo bit, une las rachas de los extremos. G1 compara ceros y unos. G2 examina la distribución de longitudes, con el ajuste finito de las rachas máximas. G3 exige AC(k)=(A−F)/T constante para todos los desplazamientos no nulos. Balance por sí solo no implica G2 ni G3.",
    "questions": [
      {
        "id": "golomb-1",
        "question": "En la secuencia periódica 1001, ¿cuántas rachas circulares hay?",
        "options": [
          "2",
          "3",
          "4",
          "1"
        ],
        "answer": 0,
        "explanation": "Los unos inicial y final son una misma racha circular 11; la otra es 00."
      },
      {
        "id": "golomb-2",
        "question": "Si un periodo de 15 bits tiene 7 coincidencias y 8 diferencias con su desplazamiento, ¿cuánto es AC?",
        "options": [
          "−1/15",
          "1/15",
          "7/8",
          "0"
        ],
        "answer": 0,
        "explanation": "AC=(7−8)/15=−1/15. Para G3 hay que comprobar los demás desplazamientos."
      }
    ]
  },
  {
    "id": "lfsr",
    "group": "flujo",
    "title": "LFSR, polinomios y complejidad lineal",
    "source": "m2",
    "pages": "19–25",
    "guide": "Fija una recurrencia y orientación antes de calcular. En la convención s(t+n)=Σaᵢs(t+i) sobre GF(2), el estado es una ventana de n bits. Un polinomio primitivo de grado n y semilla no nula dan periodo 2ⁿ−1. La complejidad lineal mide el LFSR mínimo que genera la salida. Unos 2L bits consecutivos permiten reconstruir una secuencia de complejidad L con métodos como Berlekamp–Massey; un periodo largo no basta.",
    "questions": [
      {
        "id": "lfsr-1",
        "question": "¿Qué combinación garantiza el periodo máximo de un LFSR de n celdas?",
        "options": [
          "Polinomio primitivo de grado n y semilla no nula",
          "Cualquier polinomio irreducible y semilla cero",
          "Cualquier semilla y cualquier realimentación",
          "Solo que tenga muchos unos"
        ],
        "answer": 0,
        "explanation": "La primitividad asegura orden 2ⁿ−1 para estados no nulos; cero queda fijo."
      },
      {
        "id": "lfsr-2",
        "question": "Si s(t+3)=s(t+1) XOR s(t) y los primeros bits son 1,0,0, ¿cuál es el siguiente bit?",
        "options": [
          "1",
          "0",
          "3",
          "No se puede determinar"
        ],
        "answer": 0,
        "explanation": "s(3)=s(1) XOR s(0)=0 XOR 1=1."
      },
      {
        "id": "lfsr-3",
        "question": "¿Qué cota tiene la complejidad lineal de la salida de un LFSR de 8 celdas?",
        "options": [
          "Como máximo 8",
          "Exactamente 255 siempre",
          "Como mínimo 256",
          "Infinita si el periodo es largo"
        ],
        "answer": 0,
        "explanation": "Existe un LFSR de 8 celdas que la genera; el mínimo no puede tener más."
      }
    ]
  },
  {
    "id": "entropia",
    "group": "flujo",
    "title": "Entropía y pruebas ENT",
    "source": "m2",
    "pages": "27–31",
    "guide": "La entropía de Shannon es H=−Σpᵢlog₂pᵢ. Para un bit justo vale 1 bit y para un byte uniforme, 8. Una distribución constante tiene entropía cero. ENT examina frecuencias, media (127,5 para bytes uniformes), correlación serial, compresibilidad y estimación de π. Pasar pruebas estadísticas no demuestra impredecibilidad; una secuencia pública determinista puede tener buen aspecto estadístico.",
    "questions": [
      {
        "id": "entropia-1",
        "question": "¿Cuál es la entropía por símbolo de una fuente que siempre emite el byte 7F?",
        "options": [
          "0 bits",
          "8 bits",
          "7 bits",
          "127 bits"
        ],
        "answer": 0,
        "explanation": "Solo hay un resultado posible: −1·log₂1=0."
      },
      {
        "id": "entropia-2",
        "question": "¿Qué media se espera aproximadamente en bytes uniformes entre 0 y 255?",
        "options": [
          "127,5",
          "128,5",
          "255",
          "0"
        ],
        "answer": 0,
        "explanation": "La media del intervalo uniforme es (0+255)/2=127,5."
      },
      {
        "id": "entropia-3",
        "question": "¿Un fichero que pasa las pruebas ENT es necesariamente adecuado como clave secreta?",
        "options": [
          "No: las estadísticas no prueban secreto ni impredecibilidad",
          "Sí, por definición de ENT",
          "Sí, si su media es exactamente 127,5",
          "Solo si tiene extensión .key"
        ],
        "answer": 0,
        "explanation": "Un atacante puede conocer la secuencia o su generador aunque las frecuencias sean buenas."
      }
    ]
  },
  {
    "id": "chacha",
    "group": "flujo",
    "title": "Salsa20, ChaCha20 y ARX",
    "source": "m2",
    "pages": "33–36",
    "guide": "ChaCha20 trabaja con 16 palabras de 32 bits (512 bits de estado) y una clave de 256 bits. Cada bloque genera 64 bytes de secuencia. ARX combina sumas módulo 2³², rotaciones y XOR. Sus rondas alternan columnas y diagonales; Salsa20 usa una organización diferente. ChaCha20 solo no autentica.",
    "questions": [
      {
        "id": "chacha-1",
        "question": "¿Qué significa la A de ARX en ChaCha20?",
        "options": [
          "Suma módulo 2³² de palabras",
          "Suma de polinomios módulo 11B",
          "Autenticación mediante RSA",
          "Añadir padding PKCS#7"
        ],
        "answer": 0,
        "explanation": "Las otras operaciones son rotaciones y XOR; no son las operaciones de campo de AES."
      },
      {
        "id": "chacha-2",
        "question": "¿Cuántos bytes de secuencia produce un bloque ChaCha20?",
        "options": [
          "64",
          "16",
          "32",
          "256"
        ],
        "answer": 0,
        "explanation": "16 palabras de 32 bits suman 512 bits, equivalentes a 64 bytes."
      },
      {
        "id": "chacha-3",
        "question": "¿Qué alternan las rondas de ChaCha20?",
        "options": [
          "Quarter-rounds sobre columnas y diagonales",
          "ECB y CBC",
          "Solo operaciones sobre filas iguales",
          "Hash interno y externo"
        ],
        "answer": 0,
        "explanation": "La organización de las quarter-rounds es por columnas y diagonales."
      }
    ]
  },
  {
    "id": "p1-sha",
    "group": "p1",
    "title": "Práctica 1: bytes, digest y verificación",
    "source": "p1",
    "pages": "1–2",
    "guide": "En p1.py se almacena SHA-256 en hexadecimal, no el texto plano. encode() usa UTF-8, por lo que se resumen bytes exactos. El digest son 32 bytes y su representación hexadecimal tiene 64 caracteres. En p2.py, dos entradas iguales producen el mismo resumen; el problema es usar un hash rápido sin sal para contraseñas.",
    "questions": [
      {
        "id": "p1-sha-1",
        "question": "¿Qué tamaño tiene bytes.fromhex(sha256_hash(\"hola\"))?",
        "options": [
          "32 bytes",
          "64 bytes",
          "256 bytes",
          "4 bytes"
        ],
        "answer": 0,
        "explanation": "SHA-256 devuelve 256 bits=32 bytes. Los 64 caracteres son una representación hexadecimal."
      },
      {
        "id": "p1-sha-2",
        "question": "Si se usa digest.update(b\"ab\") y después digest.update(b\"c\"), ¿qué se resume?",
        "options": [
          "b\"abc\"",
          "Dos resúmenes independientes",
          "b\"ab c\" con espacio añadido",
          "Solo b\"c\""
        ],
        "answer": 0,
        "explanation": "Las llamadas update alimentan incrementalmente el mismo mensaje."
      },
      {
        "id": "p1-sha-3",
        "question": "En el registro SHA-256 de p1.py, ¿se almacena la contraseña en texto plano?",
        "options": [
          "No, se guarda un resumen, aunque el almacenamiento sigue siendo débil",
          "Sí, hex() recupera el texto original",
          "No, porque usa bcrypt",
          "Sí, todo hash contiene el claro legible"
        ],
        "answer": 0,
        "explanation": "Distingue evitar texto plano de resistir ataques offline: el ejemplo carece de salt y coste apropiado."
      }
    ]
  },
  {
    "id": "p1-diccionario",
    "group": "p1",
    "title": "Práctica 1: diccionario y bytes exactos",
    "source": "p1",
    "pages": "2–3",
    "guide": "El guion usa incontrastablemente como objetivo; p3.py local usa mariposa. No se puede afirmar el éxito de un diccionario sin comprobar que contiene los bytes candidatos adecuados. splitlines() retira separadores de línea y conserva otros espacios. p4.py local usa un espacio final; el guion muestra uno inicial y otro final.",
    "questions": [
      {
        "id": "p1-diccionario-1",
        "question": "Si el diccionario no contiene la contraseña objetivo, ¿qué devuelve una búsqueda que solo recorre ese diccionario?",
        "options": [
          "Ninguna coincidencia, aunque el código sea correcto",
          "La clave AES",
          "Una colisión garantizada",
          "La contraseña más parecida"
        ],
        "answer": 0,
        "explanation": "Buscar candidatas no inventa una contraseña ausente. Se pueden ampliar candidatas, sin garantía de éxito."
      },
      {
        "id": "p1-diccionario-2",
        "question": "¿Son iguales b\"incontrastablemente\" y b\"incontrastablemente \" para bcrypt?",
        "options": [
          "No; el espacio final forma parte de la contraseña",
          "Sí; bcrypt borra espacios automáticamente",
          "Sí; al ser bytes se ignoran espacios",
          "Solo si el salt es público"
        ],
        "answer": 0,
        "explanation": "La comparación es sobre la contraseña exacta, no sobre una versión normalizada implícita."
      },
      {
        "id": "p1-diccionario-3",
        "question": "¿Qué cambio respecto al guion tiene p3.py local?",
        "options": [
          "El objetivo es \"mariposa\"",
          "Usa AES en vez de hash",
          "Genera un nonce GCM",
          "No abre el diccionario"
        ],
        "answer": 0,
        "explanation": "El código local llama a hash_password(\"mariposa\"); el guion propone otra candidata."
      }
    ]
  },
  {
    "id": "p1-bcrypt",
    "group": "p1",
    "title": "Práctica 1: bcrypt, sal y coste",
    "source": "p1",
    "pages": "3",
    "guide": "bcrypt.gensalt() genera una sal y codifica parámetros. hashpw deriva el valor almacenado; checkpw verifica usando los parámetros guardados. Recalcular con una sal nueva y comparar cadenas completas no reproduce el registro. La sal puede publicarse y no sustituye una contraseña fuerte ni el coste de derivación.",
    "questions": [
      {
        "id": "p1-bcrypt-1",
        "question": "¿Por qué hashpw(pw, gensalt()) no sirve para comparar directamente con un hash guardado anterior?",
        "options": [
          "Se genera una sal distinta y normalmente otro valor almacenado",
          "Porque bcrypt es reversible",
          "Porque checkpw necesita el texto plano guardado",
          "Porque cada sal debe ser secreta para siempre"
        ],
        "answer": 0,
        "explanation": "La verificación reutiliza la sal y parámetros del registro mediante checkpw."
      },
      {
        "id": "p1-bcrypt-2",
        "question": "¿Qué efecto tiene aumentar el parámetro logarítmico de coste bcrypt en una unidad, aproximadamente?",
        "options": [
          "Duplica el trabajo",
          "Suma un byte al mensaje",
          "Reduce a la mitad el trabajo",
          "Cambia AES-128 a AES-256"
        ],
        "answer": 0,
        "explanation": "El factor de trabajo escala exponencialmente con ese parámetro; el tiempo concreto depende del equipo."
      },
      {
        "id": "p1-bcrypt-3",
        "question": "¿Qué información necesita un verificador bcrypt además de la candidata?",
        "options": [
          "El registro guardado con sal, coste y resultado",
          "La contraseña original en claro",
          "Una sal nueva sin relación con la anterior",
          "La clave privada RSA del usuario"
        ],
        "answer": 0,
        "explanation": "El registro codifica los parámetros necesarios para reproducir la derivación."
      }
    ]
  },
  {
    "id": "p1-kdf",
    "group": "p1",
    "title": "Práctica 1: PBKDF y diseño de almacenamiento",
    "source": "p1",
    "pages": "3",
    "guide": "Una PBKDF combina contraseña, sal y coste. En PBKDF2-HMAC se fijan hash, iteraciones y longitud. Al registrar se guarda sal, algoritmo, parámetros y resultado; al verificar se repite con la candidata y el mismo registro. La longitud de salida no crea entropía de contraseña. No hay que memorizar un tiempo universal medido en otro ordenador.",
    "questions": [
      {
        "id": "p1-kdf-1",
        "question": "En PBKDF2-HMAC, ¿qué debe conservarse para verificar después?",
        "options": [
          "Sal, hash, iteraciones, longitud y valor derivado",
          "Solo el hash de la sal",
          "Solo una sal nueva",
          "La contraseña en texto plano"
        ],
        "answer": 0,
        "explanation": "El cálculo debe repetirse con los mismos parámetros del registro."
      },
      {
        "id": "p1-kdf-2",
        "question": "¿Derivar 32 bytes de una contraseña débil garantiza 256 bits de entropía?",
        "options": [
          "No; la derivación no crea la incertidumbre que falta en la contraseña",
          "Sí, 32·8=256 siempre mide la entropía",
          "Sí, si se representa en hexadecimal",
          "Solo si el salt es secreto"
        ],
        "answer": 0,
        "explanation": "Longitud de salida y entropía de entrada son conceptos diferentes."
      },
      {
        "id": "p1-kdf-3",
        "question": "¿Qué limita los intentos online pero no resuelve por sí solo un robo de la base de hashes?",
        "options": [
          "Un límite de intentos del servidor",
          "Una KDF con coste",
          "Una sal única",
          "No guardar texto plano"
        ],
        "answer": 0,
        "explanation": "En un ataque offline el atacante calcula localmente y evita ese límite del servidor."
      }
    ]
  },
  {
    "id": "p2-cbc",
    "group": "p2",
    "title": "Práctica 2: auditar CBC y su padding",
    "source": "p2",
    "pages": "1–2",
    "guide": "La clave fija del ejemplo tiene 16 bytes (AES-128). El IV b\"0000000000000000\" contiene 16 caracteres ASCII, no 16 bytes nulos. Clave e IV constantes repiten los cifrados. El relleno añade de 1 a 16 espacios y decrypt no los retira. Quitar espacios con rstrip() perdería espacios legítimos. CBC aislado no autentica.",
    "questions": [
      {
        "id": "p2-cbc-1",
        "question": "En el ejemplo, ¿qué contiene iv=b\"0000000000000000\"?",
        "options": [
          "16 bytes de valor hexadecimal 30",
          "16 bytes de valor 00",
          "Un nonce de 12 bytes",
          "Una cadena vacía"
        ],
        "answer": 0,
        "explanation": "El carácter ASCII 0 es 0x30; no hay que confundirlo con el byte nulo."
      },
      {
        "id": "p2-cbc-2",
        "question": "Con el padding del ejemplo, ¿cuántos bytes se añaden a un mensaje de 16 bytes?",
        "options": [
          "16",
          "0",
          "1",
          "15"
        ],
        "answer": 0,
        "explanation": "16−(16 mod 16)=16. Es un bloque completo de espacios."
      },
      {
        "id": "p2-cbc-3",
        "question": "¿Por qué usar rstrip(b\" \") al descifrar sería ambiguo?",
        "options": [
          "Eliminaría también espacios originales legítimos",
          "Porque AES no produce bytes",
          "Porque requiere la clave pública",
          "Porque convierte CBC en ECB"
        ],
        "answer": 0,
        "explanation": "El relleno de espacios no distingue los espacios originales de los añadidos."
      }
    ]
  },
  {
    "id": "p2-ecb",
    "group": "p2",
    "title": "Práctica 2: ECB y longitud por bloques",
    "source": "p2",
    "pages": "2",
    "guide": "ejercicio2.py rechaza longitudes no divisibles entre 16 mediante ValueError. El bloque b\"Transfer 100 eur\" tiene exactamente 16 bytes y se repite dos veces: ambos bloques cifrados coinciden. Es igualdad estructural, no recuperación automática de la clave.",
    "questions": [
      {
        "id": "p2-ecb-1",
        "question": "En ejercicio2.py, ¿qué ocurre al pasar un mensaje de 17 bytes?",
        "options": [
          "Lanza ValueError antes de cifrar",
          "Añade padding automáticamente",
          "Genera dos bloques válidos sin relleno",
          "Cambia a CTR"
        ],
        "answer": 0,
        "explanation": "El código comprueba len(msg)%16 y rechaza bloques incompletos."
      },
      {
        "id": "p2-ecb-2",
        "question": "Dos bloques iguales generan dos bloques iguales con ECB. ¿Implica eso recuperar la clave AES?",
        "options": [
          "No; revela igualdad y estructura del mensaje",
          "Sí, se obtiene la clave con un XOR",
          "Sí, si hay dos bloques",
          "Solo si la clave tiene 16 bytes"
        ],
        "answer": 0,
        "explanation": "La filtración de patrones es una debilidad del modo aunque la primitiva AES siga resistiendo."
      },
      {
        "id": "p2-ecb-3",
        "question": "¿Por qué comparar bytes del ciphertext requiere agrupar de 16 en 16 en esta práctica?",
        "options": [
          "Porque ese es el tamaño de bloque AES",
          "Porque el hexadecimal usa 16 caracteres por bloque",
          "Porque la clave siempre ocupa 16 bits",
          "Porque ECB añade un byte por bloque"
        ],
        "answer": 0,
        "explanation": "Un bloque de 16 bytes se representa con 32 caracteres hexadecimales."
      }
    ]
  },
  {
    "id": "p2-fernet",
    "group": "p2",
    "title": "Práctica 2: Fernet, formato y caducidad",
    "source": "p2",
    "pages": "2–3",
    "guide": "Fernet usa AES-128-CBC con PKCS#7 y HMAC-SHA256 en una construcción autenticada. Su clave codificada en Base64 URL-safe contiene 32 bytes: material de cifrado y autenticación. Un token incluye fecha visible pero autenticada. ttl es la edad máxima en segundos; sin ttl se verifica integridad pero no caducidad. InvalidToken cubre tokens inválidos, alterados o caducados.",
    "questions": [
      {
        "id": "p2-fernet-1",
        "question": "¿Oculta Fernet la fecha de creación del token?",
        "options": [
          "No; la fecha es visible pero está autenticada",
          "Sí, siempre con AES-GCM",
          "No; además se puede cambiar sin detección",
          "No contiene ninguna fecha"
        ],
        "answer": 0,
        "explanation": "El timestamp está en claro dentro del token y queda protegido por la autenticación."
      },
      {
        "id": "p2-fernet-2",
        "question": "Un token Fernet de hace 120 segundos se descifra con ttl=60. ¿Qué sucede en condiciones normales?",
        "options": [
          "Se rechaza con InvalidToken",
          "Se acepta porque tiene HMAC correcto",
          "Devuelve None sin excepción",
          "Se renueva automáticamente"
        ],
        "answer": 0,
        "explanation": "La autenticidad no elimina la condición adicional de edad máxima."
      },
      {
        "id": "p2-fernet-3",
        "question": "¿Qué pasa al descifrar ese token antiguo sin ttl si está intacto y la clave es correcta?",
        "options": [
          "Puede aceptarse; no se comprueba su edad",
          "Se rechaza siempre a los 60 segundos",
          "Se pierde la verificación HMAC",
          "Se imprime la clave"
        ],
        "answer": 0,
        "explanation": "Sin ttl sigue habiendo verificación criptográfica, pero no límite de edad."
      }
    ]
  },
  {
    "id": "p2-gcm",
    "group": "p2",
    "title": "Práctica 2: AESGCM, etiqueta y AAD",
    "source": "p2",
    "pages": "3",
    "guide": "AESGCM.encrypt(nonce,msg,aad) devuelve el criptograma con la etiqueta de 16 bytes concatenada. En el guion el nonce se genera con os.urandom(12) y se transmite o almacena junto al resultado, sin reutilizarlo bajo la misma clave. decrypt necesita mismo nonce y AAD. Un valor incorrecto provoca InvalidTag; se rechaza el mensaje. Fernet no ofrece interfaz AAD y no es el mismo esquema que GCM.",
    "questions": [
      {
        "id": "p2-gcm-1",
        "question": "Con AESGCM de cryptography, si msg tiene 17 bytes, ¿cuántos bytes devuelve encrypt?",
        "options": [
          "33",
          "17",
          "32",
          "64"
        ],
        "answer": 0,
        "explanation": "Devuelve 17 bytes de criptograma más 16 bytes de etiqueta; el nonce no está incluido."
      },
      {
        "id": "p2-gcm-2",
        "question": "¿Qué debe guardar o transmitir el emisor además del resultado de AESGCM.encrypt?",
        "options": [
          "El nonce y los datos/contexto necesarios para reconstruir el mismo AAD",
          "La clave en claro con el mensaje",
          "Solo una sal bcrypt",
          "El texto plano original"
        ],
        "answer": 0,
        "explanation": "La salida contiene la etiqueta, pero no incluye automáticamente el nonce ni el AAD."
      },
      {
        "id": "p2-gcm-3",
        "question": "¿Qué excepción indica que AESGCM no pudo autenticar ciphertext, clave, nonce o AAD?",
        "options": [
          "InvalidTag",
          "InvalidToken",
          "ValueError en todos los casos",
          "StopIteration"
        ],
        "answer": 0,
        "explanation": "InvalidToken pertenece a Fernet; AESGCM usa InvalidTag al fallar la autenticación."
      }
    ]
  }
];
