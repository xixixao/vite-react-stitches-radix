import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// Usage: `const [theme, setTheme] = useTheme();`
export function useTheme() {
  return useContext(ThemeContext);
}

// Provides the system default theme. The theme changes either when:
// 1. The system default theme changes
// 2. `setTheme` is called (obtained from `useTheme`)
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getSystemPreferredTheme());

  const handleMediaQuery = useCallback(
    (mediaQuery) => {
      setTheme(getThemeFromMediaQuery(mediaQuery));
    },
    [setTheme]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(MEDIA);
    mediaQuery.addEventListener("change", handleMediaQuery);
    return () => mediaQuery.removeEventListener("change", handleMediaQuery);
  }, [handleMediaQuery]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

const ThemeContext = createContext();

const MEDIA = "(prefers-color-scheme: dark)";

function getSystemPreferredTheme() {
  return getThemeFromMediaQuery(window.matchMedia(MEDIA));
}

function getThemeFromMediaQuery(mediaQuery) {
  return mediaQuery.matches ? "dark" : "light";
}
