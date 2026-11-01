import { initializeTheme } from "./theme.js";
import { calculateEntropy } from "./entropy.js";
import { analyzePatterns } from "./strength-analyzer.js";
import { DICTIONARY_LABELS, DICTIONARY_GROUPS, listDictionaryInfo } from "./dictionaries.js";
import { generatePassword } from "./password-generator.js";

initializeTheme();

const input = document.querySelector("#password");
const toggleButton = document.querySelector("#toggle-password");
const message = document.querySelector("#message");
const entropyValue = document.querySelector("#entropy");
const lengthValue = document.querySelector("#length");
const poolValue = document.querySelector("#pool");
const meter = document.querySelector("#meter");
const level = document.querySelector("#level");
const categories = document.querySelector("#categories");
const patternStatus = document.querySelector("#pattern-status");
const patternSummary = document.querySelector("#pattern-summary");
const patternFindings = document.querySelector("#pattern-findings");
let sourceIsGenerator = false;

function updatePatternFeedback(password) {
  const report = analyzePatterns(password);
  const statusLabels = {
    empty: "Sin evaluar",
    high: "Riesgo evidente",
    caution: "Revisar patrones",
    clear: "Sin señales evidentes",
  };
  patternStatus.dataset.status = report.status;
  patternStatus.textContent = statusLabels[report.status];
  patternSummary.textContent = report.summary;
  patternFindings.replaceChildren();

  for (const finding of report.findings) {
    const item = document.createElement("li");
    const heading = document.createElement("strong");
    const description = document.createElement("span");
    heading.textContent = finding.title;
    description.textContent = finding.detail;
    item.append(heading, description);
    patternFindings.append(item);
  }

  if (sourceIsGenerator && password.length > 0) {
    const item = document.createElement("li");
    item.className = "pattern-generator-note";
    item.textContent = "Esta frase fue generada al azar: sus bits de generación son más informativos que estas reglas de texto.";
    patternFindings.append(item);
  }
}

function resetResults(text) {
  message.textContent = text;
  entropyValue.textContent = "—";
  lengthValue.textContent = "—";
  poolValue.textContent = "—";
  meter.value = 0;
  level.textContent = "Sin evaluar";
  categories.textContent = "Conjuntos detectados: —";
}

function describeBits(bits) {
  if (bits >= 128) return "Referencia: 128+ bits";
  if (bits >= 80) return "Referencia: 80+ bits";
  if (bits >= 60) return "Referencia: 60+ bits";
  return "Por debajo de 60 bits";
}

function updateAnalysis() {
  updatePatternFeedback(input.value);
  const result = calculateEntropy(input.value);
  if (result.status === "empty") {
    resetResults("Escribe un carácter para comenzar el análisis.");
    return;
  }
  if (result.status === "unsupported") {
    resetResults("Esta versión admite ASCII imprimible sin espacios (de ! a ~). Prueba con caracteres de ese conjunto.");
    return;
  }

  message.textContent = "Cálculo actualizado automáticamente.";
  entropyValue.textContent = `${result.bits.toFixed(2)} bits`;
  lengthValue.textContent = String(result.length);
  poolValue.textContent = String(result.pool);
  meter.value = Math.min(result.bits, 128);
  level.textContent = describeBits(result.bits);
  categories.textContent = `Conjuntos detectados: ${result.categories.join(", ")}.`;
}

input.addEventListener("input", () => {
  sourceIsGenerator = false;
  updateAnalysis();
});
toggleButton.addEventListener("click", () => {
  const visible = input.type === "password";
  input.type = visible ? "text" : "password";
  toggleButton.textContent = visible ? "Ocultar" : "Mostrar";
  toggleButton.setAttribute("aria-pressed", String(visible));
});

const form = document.querySelector("#generator-form");
const categorySelect = document.querySelector("#dictionary");
const categorySearch = document.querySelector("#dictionary-search");
const dictionaryCountText = document.querySelector("#dictionary-count");
const wordCountInput = document.querySelector("#word-count");
const wordCountText = document.querySelector("#word-count-value");
const dictionarySizeText = document.querySelector("#dictionary-size");
const generatedOutput = document.querySelector("#generated-password");
const generationBits = document.querySelector("#generation-bits");
const generationFormula = document.querySelector("#generation-formula");
const generationAdvice = document.querySelector("#generation-advice");
const copyButton = document.querySelector("#copy-password");
const analyzeButton = document.querySelector("#analyze-generated");
const feedback = document.querySelector("#generator-feedback");
const submitButton = document.querySelector("#generate-button");
const submitLabel = document.querySelector("#generate-button-label");
const generationStatus = document.querySelector("#generation-status");
const dictionaryInfo = listDictionaryInfo();
const infoById = new Map(dictionaryInfo.map((item) => [item.id, item]));

let currentGeneratedPassword = "";

function setGenerationStatus(text, state) {
  generationStatus.textContent = text;
  generationStatus.dataset.state = state;
}

function invalidateGenerated() {
  if (!currentGeneratedPassword) return;
  currentGeneratedPassword = "";
  generatedOutput.textContent = "Has cambiado las opciones. Pulsa «Generar contraseña» para obtener un resultado actualizado.";
  setGenerationStatus("Opciones modificadas", "changed");
  submitLabel.textContent = "Generar contraseña";
  generatedOutput.classList.add("placeholder");
  generationBits.textContent = "—";
  generationFormula.textContent = "La entropía aparecerá al generar una nueva frase.";
  generationAdvice.textContent = "Cambia las opciones que quieras y genera una nueva contraseña.";
  copyButton.disabled = true;
  analyzeButton.disabled = true;
  feedback.textContent = "El resultado anterior se ha descartado porque cambió la configuración.";
}

function normalizeSearch(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function updateOptionsInfo() {
  wordCountText.textContent = wordCountInput.value;
  const entry = infoById.get(categorySelect.value);
  dictionarySizeText.textContent = entry
    ? `${entry.size.toLocaleString("es-CO")} palabras diferentes en «${entry.label}».`
    : "No hay categorías que coincidan con la búsqueda.";
  feedback.textContent = "";
}

function renderDictionaryOptions(search = "") {
  const previousSelection = categorySelect.value || "mixto";
  const query = normalizeSearch(search);
  const matches = dictionaryInfo.filter(({ id, label }) => normalizeSearch(`${label} ${id}`).includes(query));
  const matchingIds = new Set(matches.map(({ id }) => id));
  categorySelect.replaceChildren();

  for (const group of DICTIONARY_GROUPS) {
    const visibleIds = group.ids.filter((id) => matchingIds.has(id));
    if (visibleIds.length === 0) continue;
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;
    for (const id of visibleIds) {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = DICTIONARY_LABELS[id];
      optgroup.append(option);
    }
    categorySelect.append(optgroup);
  }

  categorySelect.disabled = matches.length === 0;
  submitButton.disabled = matches.length === 0;
  if (matches.length > 0) {
    categorySelect.value = matchingIds.has(previousSelection) ? previousSelection : matches[0].id;
  }
  dictionaryCountText.textContent = query
    ? `${matches.length} de ${dictionaryInfo.length} diccionarios coinciden con tu búsqueda.`
    : `${dictionaryInfo.length} diccionarios disponibles, organizados por temas.`;
  updateOptionsInfo();
  invalidateGenerated();
}

renderDictionaryOptions();
categorySearch.addEventListener("input", () => renderDictionaryOptions(categorySearch.value));
categorySelect.addEventListener("change", () => {
  updateOptionsInfo();
  invalidateGenerated();
});
wordCountInput.addEventListener("input", () => {
  updateOptionsInfo();
  invalidateGenerated();
});
for (const id of ["separator", "add-digit", "add-symbol"]) {
  document.getElementById(id).addEventListener("change", invalidateGenerated);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const result = generatePassword({
      dictionaryId: categorySelect.value,
      wordCount: Number(wordCountInput.value),
      separator: document.querySelector("#separator").value,
      addDigit: document.querySelector("#add-digit").checked,
      addSymbol: document.querySelector("#add-symbol").checked,
    });
    currentGeneratedPassword = result.password;
    setGenerationStatus("Lista para copiar", "ready");
    submitLabel.textContent = "Generar otra contraseña";
    generatedOutput.textContent = currentGeneratedPassword;
    generatedOutput.classList.remove("placeholder");
    generationBits.textContent = `${result.bits.toFixed(2)} bits`;
    generationFormula.textContent = `${result.wordCount} × log₂(${result.dictionarySize}) + ${result.extraBits.toFixed(2)} bits extra = ${result.bits.toFixed(2)} bits`;
    generationAdvice.textContent = result.bits >= 80
      ? "Supera la referencia didáctica de 80 bits para cuentas críticas. Úsala solo si puedes guardarla de manera segura."
      : result.bits >= 60
        ? "Supera la referencia didáctica de 60 bits para cuentas en línea."
        : "Por debajo de 60 bits: prueba aumentar las palabras o elegir el diccionario mixto.";
    copyButton.disabled = false;
    analyzeButton.disabled = false;
    feedback.textContent = "Contraseña creada. Ya puedes copiarla o analizarla.";
    if (window.matchMedia("(max-width: 850px)").matches) {
      document.querySelector(".generated-card").scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      });
    }
  } catch (error) {
    currentGeneratedPassword = "";
    setGenerationStatus("No se pudo generar", "error");
    generatedOutput.textContent = "No se pudo crear la contraseña. Revisa las opciones e inténtalo de nuevo.";
    generatedOutput.classList.add("placeholder");
    generationBits.textContent = "—";
    generationFormula.textContent = "El resultado aparecerá cuando la generación se complete.";
    copyButton.disabled = true;
    analyzeButton.disabled = true;
    feedback.textContent = `Error al generar: ${error.message}`;
  }
});

copyButton.addEventListener("click", async () => {
  if (!currentGeneratedPassword) return;
  try {
    await navigator.clipboard.writeText(currentGeneratedPassword);
    feedback.textContent = "Contraseña copiada al portapapeles. Evita compartirla.";
  } catch {
    feedback.textContent = "No fue posible copiar automáticamente. Selecciona el texto para copiarlo.";
  }
});

analyzeButton.addEventListener("click", () => {
  if (!currentGeneratedPassword) return;
  input.value = currentGeneratedPassword;
  sourceIsGenerator = true;
  updateAnalysis();
  message.textContent = "Este resultado ASCII es teórico. Consulta los bits de generación en el generador para esta frase.";
  document.querySelector("#analizador").scrollIntoView({ behavior: "smooth", block: "start" });
  feedback.textContent = "Contraseña enviada al analizador local.";
});

updateAnalysis();
