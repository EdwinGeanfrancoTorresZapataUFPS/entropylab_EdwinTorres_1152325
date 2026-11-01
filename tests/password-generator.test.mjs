import assert from "node:assert/strict";
import test from "node:test";
import { calculateEntropy } from "../js/entropy.js";
import { DICTIONARY_GROUPS, getDictionary, listDictionaryInfo } from "../js/dictionaries.js";
import { generatePassword, secureRandomIndex } from "../js/password-generator.js";

const base = {
  dictionaryId: "mixto",
  wordCount: 8,
  separator: "-",
  addDigit: true,
  addSymbol: true,
};

test("los diccionarios tienen palabras ASCII únicas", () => {
  const entries = listDictionaryInfo();
  assert.equal(entries.length, 40);
  for (const { id, size } of entries) {
    const dictionary = getDictionary(id);
    assert.equal(new Set(dictionary).size, size);
    assert.ok(dictionary.every((word) => /^[a-z]+$/.test(word)), `ASCII inválido en ${id}`);
    assert.ok(size >= 75, `Diccionario pequeño: ${id}`);
  }
});

test("generación sin números ni símbolos usa únicamente palabras del diccionario", () => {
  const result = generatePassword({ ...base, dictionaryId: "motos", wordCount: 5, separator: "_", addDigit: false, addSymbol: false });
  const words = result.password.split("_");
  assert.equal(words.length, 5);
  assert.ok(words.every((word) => getDictionary("motos").includes(word)));
  assert.ok(Math.abs(result.bits - 5 * Math.log2(result.dictionarySize)) < 1e-10);
});

test("entropía de generación suma las elecciones independientes", () => {
  const r = generatePassword(base);
  assert.ok(/^([a-z]+-){7}[a-z]+[0-9][!@#$%&*?+\-]$/.test(r.password));
  assert.ok(Math.abs(r.bits - (8 * Math.log2(r.dictionarySize) + Math.log2(10) + Math.log2(10))) < 1e-10);
});

test("la salida del generador es compatible con el analizador", () => {
  for (const { id } of listDictionaryInfo()) {
    const result = generatePassword({ ...base, dictionaryId: id, wordCount: 12 });
    assert.equal(calculateEntropy(result.password).status, "calculated");
  }
});

test("el generador rechaza valores inválidos", () => {
  assert.throws(() => generatePassword({ ...base, dictionaryId: "no-existe" }), RangeError);
  assert.throws(() => generatePassword({ ...base, wordCount: 0 }), RangeError);
  assert.throws(() => generatePassword({ ...base, wordCount: 13 }), RangeError);
  assert.throws(() => generatePassword({ ...base, separator: "" }), RangeError);
  assert.throws(() => secureRandomIndex(0), RangeError);
});

test("el generador produce varias salidas distintas", () => {
  const unique = new Set(Array.from({ length: 10 }, () => generatePassword(base).password));
  assert.ok(unique.size > 1);
});

test("la fórmula original conserva su comportamiento", () => {
  const example = "a".repeat(25) + "4".repeat(15) + "!";
  assert.equal(example.length, 41);
  assert.equal(calculateEntropy(example).bits.toFixed(2), "249.59");
  assert.ok(Math.abs(calculateEntropy("a1B2c3D4").bits - 8 * Math.log2(62)) < 1e-10);
});


test("las categorías están agrupadas una sola vez y son buscables por nombre", () => {
  const entries = listDictionaryInfo();
  const allIds = DICTIONARY_GROUPS.flatMap((group) => group.ids);
  assert.equal(allIds.length, entries.length);
  assert.equal(new Set(allIds).size, entries.length);
  assert.deepEqual(new Set(allIds), new Set(entries.map(({ id }) => id)));
});

test("el diccionario mixto es la unión sin duplicados de las categorías", () => {
  const themes = listDictionaryInfo().filter(({ id }) => id !== "mixto");
  const expected = new Set(themes.flatMap(({ id }) => getDictionary(id)));
  assert.equal(getDictionary("mixto").length, expected.size);
  assert.ok(expected.size > 1000);
  assert.ok(getDictionary("mixto").every((word) => expected.has(word)));
});

test("todos los nuevos diccionarios generan frases válidas", () => {
  for (const { id, size } of listDictionaryInfo()) {
    const result = generatePassword({ ...base, dictionaryId: id, wordCount: 4, addDigit: false, addSymbol: false });
    assert.equal(result.password.split("-").length, 4);
    assert.equal(result.dictionarySize, size);
    assert.ok(Math.abs(result.bits - 4 * Math.log2(size)) < 1e-10);
  }
});
