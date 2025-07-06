import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  themes: string[];
}

export const ThemeProviderContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
  themes: ["light", "dark", "system"],
});
