import { getDictionary } from "./dictionaries.js";

const DIGITS = "0123456789";
const SYMBOLS = "!@#$%&*?+-";
const VALID_SEPARATORS = new Set(["-", "_", "."]);
const MAX_RANDOM_VALUE = 2 ** 32;

// El rechazo del exceso evita el sesgo de usar modulo directamente.
export function secureRandomIndex(maxExclusive) {
  if (!Number.isSafeInteger(maxExclusive) || maxExclusive < 1 || maxExclusive > MAX_RANDOM_VALUE) {
    throw new RangeError("El número de opciones no es válido.");
  }
  const limit = Math.floor(MAX_RANDOM_VALUE / maxExclusive) * maxExclusive;
  const sample = new Uint32Array(1);
  let value;
  do {
    crypto.getRandomValues(sample);
    value = sample[0];
  } while (value >= limit);
  return value % maxExclusive;
}

export function generatePassword({ dictionaryId, wordCount, separator, addDigit, addSymbol }) {
  if (!Number.isInteger(wordCount) || wordCount < 3 || wordCount > 12) {
    throw new RangeError("Selecciona entre 3 y 12 palabras.");
  }
  if (!VALID_SEPARATORS.has(separator)) {
    throw new RangeError("Separador no permitido.");
  }

  const dictionary = getDictionary(dictionaryId);
  const words = Array.from({ length: wordCount }, () => dictionary[secureRandomIndex(dictionary.length)]);
  const numberSuffix = addDigit ? DIGITS[secureRandomIndex(DIGITS.length)] : "";
  const symbolSuffix = addSymbol ? SYMBOLS[secureRandomIndex(SYMBOLS.length)] : "";
  const password = `${words.join(separator)}${numberSuffix}${symbolSuffix}`;

  // Esta entropía depende de elecciones aleatorias conocidas, NO del rango ASCII.
  const wordBits = wordCount * Math.log2(dictionary.length);
  const extraBits = (addDigit ? Math.log2(DIGITS.length) : 0)
    + (addSymbol ? Math.log2(SYMBOLS.length) : 0);

  return {
    password,
    wordCount,
    dictionarySize: dictionary.length,
    wordBits,
    extraBits,
    bits: wordBits + extraBits,
  };
}
