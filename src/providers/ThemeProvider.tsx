import { useContext, useState } from "react";
import { createContext } from "react";

type Theme =
  | "overwatch"
  | "valorant"
  | "deadlock"
  | "basic"
  | "rocket-league"
  | "halo"
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
  const [theme, setTheme] = useState<Theme>("basic");
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
