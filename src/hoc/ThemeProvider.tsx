import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {IThemeContext} from "../interfaces/themeContextInterface";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>(null);

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [themeTrigger, setThemeTrigger] = useState(false);

    const toggleTheme = () => {
        setThemeTrigger((prev) => !prev);
        localStorage.setItem('theme', (!themeTrigger).toString());
    };

    const checkTheme = () => {
        const theme = localStorage.getItem('theme');
        return theme === 'true';
    };

    useEffect(() => {
        setThemeTrigger(checkTheme());
    }, []);

    return (
        <ThemeContext.Provider value={{themeTrigger, toggleTheme, checkTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {
    ThemeContext,
    ThemeProvider
}