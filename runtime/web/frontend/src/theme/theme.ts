export interface Theme {
  bg: string;
  bgSidebar: string;
  bgTerminal: string;
  bgStatus: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  success: string;
  error: string;
  handleHover: string;
  handle: string;
  inputBg: string;
  inputBorder: string;
}

export const DARK_THEME: Theme = {
  bg: "#1e1e2e",
  bgSidebar: "#181825",
  bgTerminal: "#11111b",
  bgStatus: "#181825",
  border: "#313244",
  text: "#cdd6f4",
  textMuted: "#6c7086",
  accent: "#89b4fa",
  success: "#a6e3a1",
  error: "#f38ba8",
  handleHover: "#89b4fa",
  handle: "#313244",
  inputBg: "#11111b",
  inputBorder: "#45475a",
};

export const LIGHT_THEME: Theme = {
  bg: "#ffffff",
  bgSidebar: "#f5f5f5",
  bgTerminal: "#1e1e2e",
  bgStatus: "#e0e0e0",
  border: "#d4d4d4",
  text: "#1e1e1e",
  textMuted: "#6e6e6e",
  accent: "#89b4fa",
  success: "#16a34a",
  error: "#dc2626",
  handleHover: "#89b4fa",
  handle: "#d4d4d4",
  inputBg: "#ffffff",
  inputBorder: "#d4d4d4",
};

export function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
