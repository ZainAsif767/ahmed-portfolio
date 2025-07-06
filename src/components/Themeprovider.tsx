import { useEffect, useState } from "react";
import { ThemeProviderContext } from "./theme-context";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  enableSystem?: boolean;
  themes?: string[];
  [key: string]: unknown;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  themes = ["light", "dark", "system"],
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme, enableSystem]);

  const value = {
    theme,
    setTheme: (newTheme: string) => {
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    },
    themes: enableSystem ? themes : themes.filter((t) => t !== "system"),
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
