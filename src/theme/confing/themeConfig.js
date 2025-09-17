import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: mode === "light" ? "#0d47a1" : "#1976d2",
            light: mode === "light" ? "#5472d3" : "#42a5f5",
            dark: mode === "light" ? "#002171" : "#1565c0",
            contrastText: "#ffffff",
        },
        secondary: {
            main: mode === "light" ? "#ff6f00" : "#ff9800",
            light: mode === "light" ? "#ffb74d" : "#ffcc02",
            dark: mode === "light" ? "#c43e00" : "#f57c00",
            contrastText: "#ffffff",
        },
        background: {
            default: mode === "light" ? "#f8fafc" : "#0a0e27",
            paper: mode === "light" ? "#ffffff" : "#1a237e",
        },
        text: {
            primary: mode === "light" ? "#1a202c" : "#ffffff",
            secondary: mode === "light" ? "#4a5568" : "rgba(255, 255, 255, 0.7)",
        },
        success: {
            main: mode === "light" ? "#00c853" : "#69f0ae",
            light: mode === "light" ? "#5efc82" : "#b9f6ca",
            dark: mode === "light" ? "#00962b" : "#00e676",
        },
        error: {
            main: mode === "light" ? "#d32f2f" : "#f44336",
            light: mode === "light" ? "#ef5350" : "#e57373",
            dark: mode === "light" ? "#c62828" : "#d32f2f",
        },
        warning: {
            main: mode === "light" ? "#f57c00" : "#ff9800",
            light: mode === "light" ? "#ffb74d" : "#ffcc02",
            dark: mode === "light" ? "#e65100" : "#f57c00",
        },
        info: {
            main: mode === "light" ? "#0288d1" : "#29b6f6",
            light: mode === "light" ? "#03a9f4" : "#4fc3f7",
            dark: mode === "light" ? "#01579b" : "#0288d1",
        },
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        },
        divider: mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)",
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: "3.5rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            background: mode === "light" 
                ? "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)"
                : "linear-gradient(135deg, #42a5f5 0%, #90caf9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
        },
        h2: {
            fontWeight: 700,
            fontSize: "2.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.75rem",
            lineHeight: 1.4,
            letterSpacing: "0em",
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: 1.4,
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.5,
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
        },
    },
    shape: {
        borderRadius: 16,
    },
    shadows: mode === "light" ? [
        "none",
        "0px 2px 4px rgba(0,0,0,0.02)",
        "0px 4px 8px rgba(0,0,0,0.04)",
        "0px 8px 16px rgba(0,0,0,0.06)",
        "0px 12px 24px rgba(0,0,0,0.08)",
        "0px 16px 32px rgba(0,0,0,0.10)",
        "0px 20px 40px rgba(0,0,0,0.12)",
        "0px 24px 48px rgba(0,0,0,0.14)",
        "0px 32px 64px rgba(0,0,0,0.16)",
        "0px 40px 80px rgba(0,0,0,0.18)",
        "0px 48px 96px rgba(0,0,0,0.20)",
        "0px 56px 112px rgba(0,0,0,0.22)",
        "0px 64px 128px rgba(0,0,0,0.24)",
        "0px 72px 144px rgba(0,0,0,0.26)",
        "0px 80px 160px rgba(0,0,0,0.28)",
        "0px 88px 176px rgba(0,0,0,0.30)",
        "0px 96px 192px rgba(0,0,0,0.32)",
        "0px 104px 208px rgba(0,0,0,0.34)",
        "0px 112px 224px rgba(0,0,0,0.36)",
        "0px 120px 240px rgba(0,0,0,0.38)",
        "0px 128px 256px rgba(0,0,0,0.40)",
        "0px 136px 272px rgba(0,0,0,0.42)",
        "0px 144px 288px rgba(0,0,0,0.44)",
        "0px 152px 304px rgba(0,0,0,0.46)",
        "0px 160px 320px rgba(0,0,0,0.48)"
    ] : [
        "none",
        "0px 2px 4px rgba(0,0,0,0.20)",
        "0px 4px 8px rgba(0,0,0,0.25)",
        "0px 8px 16px rgba(0,0,0,0.30)",
        "0px 12px 24px rgba(0,0,0,0.35)",
        "0px 16px 32px rgba(0,0,0,0.40)",
        "0px 20px 40px rgba(0,0,0,0.45)",
        "0px 24px 48px rgba(0,0,0,0.50)",
        "0px 32px 64px rgba(0,0,0,0.55)",
        "0px 40px 80px rgba(0,0,0,0.60)",
        "0px 48px 96px rgba(0,0,0,0.65)",
        "0px 56px 112px rgba(0,0,0,0.70)",
        "0px 64px 128px rgba(0,0,0,0.75)",
        "0px 72px 144px rgba(0,0,0,0.80)",
        "0px 80px 160px rgba(0,0,0,0.85)",
        "0px 88px 176px rgba(0,0,0,0.90)",
        "0px 96px 192px rgba(0,0,0,0.95)",
        "0px 104px 208px rgba(0,0,0,1.00)",
        "0px 112px 224px rgba(0,0,0,1.00)",
        "0px 120px 240px rgba(0,0,0,1.00)",
        "0px 128px 256px rgba(0,0,0,1.00)",
        "0px 136px 272px rgba(0,0,0,1.00)",
        "0px 144px 288px rgba(0,0,0,1.00)",
        "0px 152px 304px rgba(0,0,0,1.00)",
        "0px 160px 320px rgba(0,0,0,1.00)"
    ],
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: mode === "light" 
                        ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
                        : "linear-gradient(135deg, #0a0e27 0%, #1a237e 100%)",
                    minHeight: "100vh",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    border: mode === "light" ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(20px)",
                    background: mode === "light" 
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(26,35,126,0.8)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: mode === "light"
                            ? "0px 20px 40px rgba(13,71,161,0.15)"
                            : "0px 20px 40px rgba(66,165,245,0.25)",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    padding: "12px 32px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textTransform: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transition: "left 0.5s",
                    },
                    "&:hover::before": {
                        left: "100%",
                    },
                },
                contained: {
                    background: mode === "light"
                        ? "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)"
                        : "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                    boxShadow: "0px 8px 25px rgba(13,71,161,0.3)",
                    "&:hover": {
                        background: mode === "light"
                            ? "linear-gradient(135deg, #002171 0%, #0d47a1 100%)"
                            : "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                        boxShadow: "0px 12px 35px rgba(13,71,161,0.4)",
                        transform: "translateY(-2px)",
                    },
                },
                outlined: {
                    borderWidth: 2,
                    borderColor: mode === "light" ? "#0d47a1" : "#42a5f5",
                    background: "transparent",
                    "&:hover": {
                        borderWidth: 2,
                        background: mode === "light" 
                            ? "rgba(13,71,161,0.05)"
                            : "rgba(66,165,245,0.1)",
                        transform: "translateY(-1px)",
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 16,
                        background: mode === "light" 
                            ? "rgba(255,255,255,0.8)"
                            : "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: mode === "light" ? "#1976d2" : "#42a5f5",
                                borderWidth: 2,
                            },
                            transform: "translateY(-2px)",
                            boxShadow: mode === "light"
                                ? "0px 8px 25px rgba(13,71,161,0.1)"
                                : "0px 8px 25px rgba(66,165,245,0.2)",
                        },
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderWidth: 2,
                                borderColor: mode === "light" ? "#0d47a1" : "#42a5f5",
                            },
                            transform: "translateY(-2px)",
                            boxShadow: mode === "light"
                                ? "0px 8px 25px rgba(13,71,161,0.15)"
                                : "0px 8px 25px rgba(66,165,245,0.25)",
                        },
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: mode === "light"
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(26,35,126,0.9)",
                    backdropFilter: "blur(20px)",
                    borderBottom: mode === "light" 
                        ? "1px solid rgba(0,0,0,0.08)" 
                        : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                    color: mode === "light" ? "#1a202c" : "#ffffff",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    backdropFilter: "blur(20px)",
                    background: mode === "light" 
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(26,35,126,0.9)",
                    border: mode === "light" 
                        ? "1px solid rgba(0,0,0,0.05)" 
                        : "1px solid rgba(255,255,255,0.1)",
                },
                elevation8: {
                    boxShadow: mode === "light"
                        ? "0px 20px 40px rgba(13,71,161,0.1)"
                        : "0px 20px 40px rgba(66,165,245,0.15)",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                        transform: "scale(1.1) rotate(5deg)",
                        background: mode === "light" 
                            ? "rgba(13,71,161,0.1)"
                            : "rgba(66,165,245,0.2)",
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    fontWeight: 500,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                },
            },
        },
    },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));

export default createAppTheme;