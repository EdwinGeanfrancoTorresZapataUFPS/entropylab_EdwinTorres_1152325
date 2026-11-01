# EntropyLab – Validador y Generador de Contraseñas

Proyecto académico de Hacking Ético con HTML, CSS y JavaScript, sin backend ni dependencias para ejecutarlo.

## Ejecutar

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. En `index.html`, hacer clic derecho → **Open with Live Server**.
3. En la web, probar el analizador y bajar a la sección **Crea contraseñas a partir de palabras**.

## Funcionalidades

- Entropía teórica de contraseña mediante **E = L × log₂(R)**, con grupos ASCII de 26 minúsculas, 26 mayúsculas, 10 dígitos y 32 símbolos especiales. El modelo excluye el espacio y caracteres no ASCII.
- **Análisis de patrones independiente del cálculo de bits**: pequeña lista local de contraseñas comunes, sustituciones previsibles (`P@ssw0rd`), fragmentos conocidos, recorridos de teclado, secuencias, repeticiones, años finales y longitud corta. Muestra observaciones concretas sin convertirlas en una falsa cantidad de bits.
- Generación aleatoria de frases de contraseña desde **40 diccionarios**: 39 temas (idiomas, comidas, fauna, flora, vehículos, cultura, deportes, ciencia, Colombia, etc.) y un diccionario mixto sin palabras duplicadas.
- Buscador de categorías (ignora tildes), selector organizado por grupos y conteo de palabras diferentes por tema.
- Configuración de 3–12 palabras, separadores, un dígito aleatorio y un símbolo aleatorio opcionales.
- **Cálculo de entropía de generación**: `palabras × log₂(tamaño del diccionario) + log₂(10)` por cada tipo de sufijo aleatorio activado. Cada palabra se selecciona con reemplazo de forma independiente; los separadores son fijos y no aumentan la entropía.
- Copiar y enviar la contraseña al analizador.
- Cuando se cambian los parámetros, el resultado anterior se invalida para evitar confundir la configuración actual con una frase generada previamente.

## Privacidad

La web no envía ni almacena contraseñas. Las selecciones se generan localmente mediante `crypto.getRandomValues` y rechazo del sesgo de módulo. No se usa `Math.random`. Evita probar contraseñas reales durante la demostración, así como copiarlas en chats o capturas públicas.

**Importante:** la entropía por caracteres del analizador supone un modelo teórico uniforme y *no es* la entropía medida de una contraseña elegida por una persona. Para una frase producida por el generador, la estimación fundamentada es su entropía de generación (en función del número de elecciones realmente aleatorias). El análisis de patrones es orientativo, no consulta bases de datos de filtraciones ni puede detectar reutilización entre servicios. El estado **«Sin señales evidentes» nunca significa «segura»**. Este proyecto es educativo y no sustituye a un gestor de contraseñas auditado.

## Pruebas (opcionales)

Si tienes Node.js instalado:

```sh
node --experimental-default-type=module --test tests/*.test.mjs
```

No es necesario instalar Node.js para abrir la página con Live Server.


## Diseño editorial (edición Edwin Torres)

La interfaz se rediseñó con un estilo editorial claro, colores cálidos y navegación sencilla. La lógica de análisis, los diccionarios y la generación se mantienen sin cambios. Autor: **Edwin Torres**, código **1152325**.

## Modo claro y oscuro y experiencia de uso

- Botón **Modo oscuro / Modo claro** en el encabezado. Solo se recuerda la preferencia de apariencia (`entropylab-theme`) en `localStorage`; **nunca las contraseñas**.
- El generador muestra **Sin generar**, **Lista para copiar** u **Opciones modificadas**, según el estado real. Los botones Copiar y Analizar se habilitan únicamente tras crear una contraseña.
- En dispositivos móviles, al generar una contraseña, la página lleva al usuario al resultado.
- No se modificó el conjunto de 40 diccionarios ni la fórmula de entropía.


## Revisión de patrones (versión final)

El analizador presenta dos resultados que no se deben confundir:

1. **Entropía teórica**: fórmula de los caracteres usada en clase. Un resultado alto puede corresponder a una contraseña humana fácil de adivinar.
2. **Patrones predecibles**: diagnóstico heurístico separado, que usa reglas locales y un catálogo pequeño de ejemplos comunes. Los mensajes posibles son «Riesgo evidente», «Revisar patrones» y «Sin señales evidentes». Ninguno garantiza seguridad, y no se calcula un supuesto número de bits "reales".

Para comprobarlo sin ingresar contraseñas reales, prueba estos ejemplos:

| Ejemplo de práctica | Observación esperada |
| --- | --- |
| `P@ssw0rd` | Contraseña muy conocida / riesgo evidente |
| `Abcdefg2!` | Secuencia ordenada |
| `x4.4.4.5.5.5!` | Repeticiones previsibles |
| `LlamaXy2024` | Año al final |
| `M7@vQ2?zP9&x` | Sin patrones evidentes en las reglas implementadas (no equivale a segura) |

Los archivos `js/strength-analyzer.js` y `tests/strength-analyzer.test.mjs` encapsulan la lógica y sus verificaciones. La comprobación manual en navegador debe realizarse en ambos temas (claro y oscuro), tanto en escritorio como en celular.
