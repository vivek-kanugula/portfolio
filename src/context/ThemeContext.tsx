import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'obsidian' | 'terminal' | 'light';

export interface ThemeMeta {
  id: ThemeType;
  name: string;
  icon: string;
  badge: string;
  description: string;
  colorSwatch: string[];
}

export const THEMES: Record<ThemeType, ThemeMeta> = {
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian Aurora',
    icon: '🌌',
    badge: 'Aurora',
    description: 'Cinematic deep obsidian space with quantum aurora accents',
    colorSwatch: ['#05060A', '#6366F1', '#06B6D4', '#10B981'],
  },
  terminal: {
    id: 'terminal',
    name: 'Terminal Matrix',
    icon: '⚡',
    badge: 'Terminal',
    description: 'High-contrast phosphor green & OLED void CLI aesthetic',
    colorSwatch: ['#040507', '#22C55E', '#06B6D4', '#F59E0B'],
  },
  light: {
    id: 'light',
    name: 'Swiss Studio Light',
    icon: '☀️',
    badge: 'Daylight',
    description: 'Executive porcelain white & royal cobalt recruiter mode',
    colorSwatch: ['#FFFFFF', '#0F172A', '#2563EB', '#059669'],
  },
};

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  cycleTheme: () => void;
  currentThemeMeta: ThemeMeta;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'vk_portfolio_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeType | null;
      if (saved && (saved === 'obsidian' || saved === 'terminal' || saved === 'light')) {
        return saved;
      }
    }
    return 'obsidian';
  });

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      if (newTheme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
    }
  };

  const cycleTheme = () => {
    const themeKeys: ThemeType[] = ['obsidian', 'terminal', 'light'];
    const currentIndex = themeKeys.indexOf(theme);
    const nextTheme = themeKeys[(currentIndex + 1) % themeKeys.length];
    setTheme(nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        cycleTheme,
        currentThemeMeta: THEMES[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
