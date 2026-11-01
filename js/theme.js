const STORAGE_KEY = "entropylab-theme";

export function initializeTheme() {
  const button = document.querySelector("#theme-toggle");
  const label = document.querySelector("#theme-label");
  const icon = document.querySelector("#theme-icon");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
    label.textContent = isDark ? "Modo claro" : "Modo oscuro";
    icon.textContent = isDark ? "☀" : "☾";
    themeColor?.setAttribute("content", isDark ? "#121c18" : "#f8f5ee");
  }

  applyTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      // Solo recordamos la apariencia elegida, nunca una contraseña.
      localStorage.setItem(STORAGE_KEY, next);
    } catch { /* El cambio sigue funcionando en la sesión actual. */ }
  });
}
