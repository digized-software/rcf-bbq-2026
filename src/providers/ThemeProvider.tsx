import { useContext, useState } from "react";
import { createContext } from "react";

export type Theme =
  | "overwatch"
  | "deadlock"
  | "basic"
  | "rocket-league"
  | "fc-2025";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({ theme: "basic", setTheme: () => {} });

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, _setTheme] = useState<Theme>(
    (localStorage.getItem("rcf-bbq-2026-theme") as Theme) || "basic",
  );
  const setTheme = (theme: Theme) => {
    _setTheme(theme);
    localStorage.setItem("rcf-bbq-2026-theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
