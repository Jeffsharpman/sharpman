import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  dark: true,
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("sharpman-theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    try {
      localStorage.setItem("sharpman-theme", dark ? "dark" : "light");
    } catch {
      // localStorage may be unavailable
    }
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
