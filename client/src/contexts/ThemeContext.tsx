import { createContext, useContext, useEffect, useRef, useState } from "react";
import "@/theme-overrides.css";

export type Theme = "light" | "dark";
export type DisplayScale = "standard" | "large";
export type MotionPreference = "standard" | "reduced";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme?: () => void;
  displayScale: DisplayScale;
  setDisplayScale: (scale: DisplayScale) => void;
  motionPreference: MotionPreference;
  setMotionPreference: (preference: MotionPreference) => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

function readPreference<T extends string>(key: string, fallback: T, accepted: readonly T[]) {
  try {
    const value = localStorage.getItem(key) as T | null;
    return value && accepted.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

export function ThemeProvider({ children, defaultTheme = "light", switchable = false }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => switchable ? readPreference("ecocompass-theme", defaultTheme, ["light", "dark"]) : defaultTheme);
  const [displayScale, setDisplayScale] = useState<DisplayScale>(() => readPreference("ecocompass-display-scale", "standard", ["standard", "large"]));
  const [motionPreference, setMotionPreference] = useState<MotionPreference>(() => readPreference("ecocompass-motion", "standard", ["standard", "reduced"]));
  const hasMounted = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("display-large", displayScale === "large");
    root.classList.toggle("motion-reduced", motionPreference === "reduced");

    if (hasMounted.current && motionPreference !== "reduced") {
      root.classList.add("theme-transition");
      const timeout = window.setTimeout(() => root.classList.remove("theme-transition"), 360);
      return () => window.clearTimeout(timeout);
    }
    hasMounted.current = true;
  }, [theme, displayScale, motionPreference]);

  useEffect(() => {
    if (!switchable) return;
    try {
      localStorage.setItem("ecocompass-theme", theme);
      localStorage.setItem("ecocompass-display-scale", displayScale);
      localStorage.setItem("ecocompass-motion", motionPreference);
    } catch {
      // Les préférences restent actives durant la session si le stockage est indisponible.
    }
  }, [theme, displayScale, motionPreference, switchable]);

  const toggleTheme = switchable ? () => setTheme((current) => current === "light" ? "dark" : "light") : undefined;

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, displayScale, setDisplayScale, motionPreference, setMotionPreference, switchable }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
