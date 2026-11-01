/**
 * Detección heurística local de señales previsibles.
 * No se transforma en bits: la entropía teórica y la facilidad de adivinación
 * tienen supuestos diferentes y no deben mezclarse en un número inventado.
 */

const COMMON_EXACT = new Set([
  "123456", "12345678", "123456789", "1234567890", "000000", "111111",
  "password", "password1", "admin", "admin123", "qwerty", "qwerty123",
  "abc123", "letmein", "welcome", "welcome1", "iloveyou", "passw0rd",
  "p@ssw0rd", "clave123", "hola123", "contrasena", "contrasena123",
]);

const COMMON_FRAGMENTS = [
  "password", "contrasena", "qwerty", "letmein", "iloveyou", "welcome", "abc123",
];

const KEYBOARD_RUNS = ["qwert", "asdfg", "zxcvb", "1qaz", "2wsx", "qazwsx"];
const SEQUENCE_SOURCES = [
  "abcdefghijklmnopqrstuvwxyz",
  "zyxwvutsrqponmlkjihgfedcba",
  "0123456789",
  "9876543210",
];

function normalizeLeet(value) {
  return value.toLowerCase().replace(/[@4]/g, "a")
    .replace(/[3]/g, "e")
    .replace(/[1!]/g, "i")
    .replace(/[0]/g, "o")
    .replace(/[$5]/g, "s")
    .replace(/[7]/g, "t");
}

function hasOrderedRun(password) {
  const normalized = password.toLowerCase();
  for (let index = 0; index <= normalized.length - 4; index += 1) {
    const segment = normalized.slice(index, index + 4);
    if (SEQUENCE_SOURCES.some((source) => source.includes(segment))) return true;
  }
  return false;
}

function isSingleCharacterRepetition(password) {
  return /(.)\1{2,}/i.test(password);
}

function hasRepeatedChunk(password) {
  // Tres repeticiones de un bloque de 2 a 8 caracteres; ejemplo: 1.1.1.
  return /(.{2,8})\1{2,}/i.test(password);
}

function makeFinding(code, title, detail, severity) {
  return { code, title, detail, severity };
}

export function analyzePatterns(password) {
  if (typeof password !== "string" || password.length === 0) {
    return { status: "empty", findings: [], summary: "Aún no hay contraseña para revisar." };
  }

  const lower = password.toLowerCase();
  const normalized = normalizeLeet(password);
  const findings = [];

  if (COMMON_EXACT.has(lower) || COMMON_EXACT.has(normalized)) {
    findings.push(makeFinding(
      "common-exact", "Contraseña muy conocida",
      "Coincide con un ejemplo frecuente de contraseñas débiles; no la utilices.", "high",
    ));
  } else if (COMMON_FRAGMENTS.some((fragment) => normalized.includes(fragment))) {
    findings.push(makeFinding(
      "common-fragment", "Expresión frecuente",
      "Contiene una expresión común o una variante con sustituciones previsibles.", "high",
    ));
  }

  if (KEYBOARD_RUNS.some((run) => lower.includes(run))) {
    findings.push(makeFinding(
      "keyboard", "Patrón de teclado",
      "Se identifica un recorrido habitual por teclas cercanas.", "caution",
    ));
  }

  if (hasOrderedRun(password)) {
    findings.push(makeFinding(
      "sequence", "Secuencia ordenada",
      "Se encontraron cuatro o más letras o números consecutivos en orden.", "caution",
    ));
  }

  if (isSingleCharacterRepetition(password) || hasRepeatedChunk(password)) {
    findings.push(makeFinding(
      "repetition", "Repeticiones previsibles",
      "Contiene caracteres o bloques repetidos varias veces.", "caution",
    ));
  }

  if (/(?:19|20)\d{2}$/.test(password)) {
    findings.push(makeFinding(
      "year", "Año al final",
      "Termina en un año, un patrón que puede ser fácil de anticipar.", "caution",
    ));
  }

  if (password.length < 8) {
    findings.push(makeFinding(
      "short", "Longitud muy corta",
      "Tiene menos de ocho caracteres. Prefiere frases aleatorias más largas.", "caution",
    ));
  }

  const status = findings.some(({ severity }) => severity === "high")
    ? "high"
    : findings.length > 0 ? "caution" : "clear";

  const summary = status === "high"
    ? "Se detectó una combinación conocida o una expresión común. Evita utilizarla."
    : status === "caution"
      ? "Hay patrones que podrían facilitar intentos de adivinación. Revisa las observaciones."
      : "No encontramos patrones evidentes con estas reglas locales. Esto no garantiza seguridad.";

  return { status, findings, summary };
}
