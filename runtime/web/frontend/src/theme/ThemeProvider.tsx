import { createContext } from "preact";
import type { ComponentChildren } from "preact";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { DARK_THEME, LIGHT_THEME, getSystemTheme, type Theme } from "./theme";

export const ThemeContext = createContext<Theme>(DARK_THEME);

interface ThemeProviderProps {
  children: ComponentChildren;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<"dark" | "light">(getSystemTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setMode(event.matches ? "dark" : "light");
    };

    setMode(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const theme = useMemo(() => (mode === "dark" ? DARK_THEME : LIGHT_THEME), [mode]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
