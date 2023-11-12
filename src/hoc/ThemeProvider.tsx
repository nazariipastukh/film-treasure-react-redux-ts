import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface ThemeContextProps {
    themeTrigger: boolean;
    toggleTheme: () => void;
    checkTheme: () => boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
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

export const useTheme = (): ThemeContextProps => {
    return useContext(ThemeContext);
};