import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from './../confing/themeConfig';


const ThemeContext = createContext();

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeMode must be used within a ThemeContextProvider");
    }
    return context;
};

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light");


    useEffect(() => {
        const savedMode = localStorage.getItem("themeMode");
        if (savedMode && (savedMode === "light" || savedMode === "dark")) {
            setMode(savedMode);
        } else {

            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setMode(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const theme = createAppTheme(mode);

    const contextValue = {
        mode,
        toggleTheme,
        isDark: mode === "dark",
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;