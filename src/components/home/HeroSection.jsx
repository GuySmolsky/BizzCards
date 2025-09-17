import React from "react";
import {
    Box,
    Container,
    Grid,
    useTheme,
    alpha,
} from "@mui/material";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                background: theme.palette.mode === "light"
                    ? `linear-gradient(135deg, 
                        ${alpha(theme.palette.primary.main, 0.05)} 0%, 
                        ${alpha(theme.palette.secondary.main, 0.05)} 100%)`
                    : `linear-gradient(135deg, 
                        ${alpha(theme.palette.primary.main, 0.1)} 0%, 
                        ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 70% 30%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%)`,
                    pointerEvents: "none",
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <HeroContent />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <HeroVisual />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;