'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = 'light' | 'dark' | 'black';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    cycleTheme: () => void;
    toggleLights: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: {children: ReactNode}) {
    const [theme, setThemeState] = useState<Theme>('dark')

    useEffect(() => {
        const saved = localStorage.getItem('theme') as Theme;
        if (saved) setThemeState(saved);
    }, []);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.className = `theme-${newTheme}`;
    };

    const cycleTheme = () => {
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
    };

    const toggleLights = () => {
        setTheme(theme === 'black' ? 'dark' : 'black');
    };

    useEffect(() => {
        document.documentElement.className = `theme-${theme}`;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, toggleLights }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}