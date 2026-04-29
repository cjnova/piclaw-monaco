import { createContext } from "preact";
import type { ComponentChildren } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { DARK_THEME, LIGHT_THEME, getSystemTheme, type Theme } from "./theme";

export const ThemeContext = createContext<Theme>(DARK_THEME);

export interface ThemeControl {
  mode: "dark" | "light";
  setMode: (mode: "dark" | "light") => void;
  toggleMode: () => void;
}

export const ThemeControlContext = createContext<ThemeControl>({
  mode: "dark",
  setMode: () => {},
  toggleMode: () => {},
});

interface ThemeProviderProps {
  children: ComponentChildren;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setModeState] = useState<"dark" | "light">(getSystemTheme());
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!manualOverride) {
        setModeState(event.matches ? "dark" : "light");
      }
    };

    setModeState(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [manualOverride]);

  const setMode = (newMode: "dark" | "light") => {
    setManualOverride(true);
    setModeState(newMode);
  };

  const toggleMode = () => {
    setManualOverride(true);
    setModeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = useMemo(() => (mode === "dark" ? DARK_THEME : LIGHT_THEME), [mode]);

  const control: ThemeControl = useMemo(() => ({ mode, setMode, toggleMode }), [mode]);

  return (
    <ThemeControlContext.Provider value={control}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeControlContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeControl() {
  return useContext(ThemeControlContext);
}
