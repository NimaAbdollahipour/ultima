import { createContext, useEffect, useState } from "react";
import { saveTheme } from "../utils/dataService";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        themeLoaded,
        setThemeLoaded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
