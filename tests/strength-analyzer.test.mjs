import assert from "node:assert/strict";
import test from "node:test";
import { analyzePatterns } from "../js/strength-analyzer.js";

const has = (password, code) => analyzePatterns(password).findings.some((f) => f.code === code);

test("valor vacío no produce advertencias", () => {
  assert.deepEqual(analyzePatterns(""), {
    status: "empty", findings: [], summary: "Aún no hay contraseña para revisar.",
  });
});

test("contraseña habitual no se presenta como segura pese a tener caracteres variados", () => {
  assert.equal(analyzePatterns("P@ssw0rd").status, "high");
  assert.ok(has("P@ssw0rd", "common-exact"));
  assert.ok(has("hola123password!", "common-fragment"));
});

test("secuencias numéricas, alfabéticas y de teclado", () => {
  assert.ok(has("Abcdefg2!", "sequence"));
  assert.ok(has("X9876!mQ", "sequence"));
  assert.ok(has("78qwerty!", "keyboard"));
});

test("repeticiones contiguas y por bloques", () => {
  assert.ok(has("Z1112#ABC", "repetition"));
  assert.ok(has("x4.4.4.5.5.5!", "repetition"));
});

test("año final y longitud corta muestran una advertencia", () => {
  assert.ok(has("LlamaXy2024", "year"));
  assert.ok(has("A2!", "short"));
});

test("sin señales no promete seguridad ni fabrica bits", () => {
  const result = analyzePatterns("M7@vQ2?zP9&x");
  assert.equal(result.status, "clear");
  assert.deepEqual(result.findings, []);
  assert.match(result.summary, /no garantiza seguridad/i);
  assert.equal("bits" in result, false);
});

test("clasificación alta prevalece sobre otras alertas", () => {
  const result = analyzePatterns("password123456");
  assert.equal(result.status, "high");
  assert.ok(result.findings.some((f) => f.severity === "high"));
});

test("palabras temáticas no se consideran automáticamente contraseñas filtradas", () => {
  const result = analyzePatterns("moto-cafe-pizza-nube-luna-mar-olivo-ruta7!");
  assert.equal(result.status, "clear");
});
