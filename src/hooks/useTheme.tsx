import React, { useContext, createContext, useState, useEffect } from "react";

type ThemeContextType = {
    theme: string ;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    themeColor: string ;
    setThemeColor: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeContextProvider ({children}: React.PropsWithChildren) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") != "dark" ? "light" : "dark"
    );
    const [themeColor, setThemeColor] = useState(
        localStorage.getItem("themeColor") || "default"
    );

    useEffect(()=> {
        const root = window.document.documentElement;
        
        const removeOldTheme = theme === "dark" ? "light" : "dark";

        root.classList.add(removeOldTheme);
        root.classList.remove(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);
    useEffect(()=> {
        const root = window.document.documentElement;
        root.setAttribute("data-theme", themeColor);
        localStorage.setItem("themeColor", themeColor);
    }, [themeColor]);

    return (
        <ThemeContext.Provider value={{theme, setTheme, themeColor, setThemeColor}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error("useTheme deve ser usado dentro de um ThemeContextProvider");
    }
    return context;
  }