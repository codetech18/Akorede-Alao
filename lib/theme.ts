export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export function setTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}
