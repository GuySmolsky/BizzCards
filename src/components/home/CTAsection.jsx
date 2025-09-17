import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Fade } from "@mui/material";

const CTASection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        { icon: "✅", text: "Free to start" },
        { icon: "⚡", text: "Setup in 2 minutes" },
        { icon: "🔒", text: "Enterprise secure" },
        { icon: "📱", text: "Works everywhere" },
    ];

    return (
        <Box
            sx={{
                py: 12,
                background: "linear-gradient(135deg, #0d47a1 0%, #1976d2 50%, #42a5f5 100%)",
                position: "relative",
                overflow: "hidden",
                color: "white",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                    animation: "float 8s ease-in-out infinite",
                    "@keyframes float": {
                        "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                        "50%": { transform: "translateY(-20px) rotate(180deg)" },
                    },
                }}
            />

            {[...Array(4)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        position: "absolute",
                        width: 10 + i * 3,
                        height: 10 + i * 3,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.2)",
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}

            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
                <Fade in={isVisible} timeout={800}>
                    <Box textAlign="center">
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 900,
                                mb: 3,
                                lineHeight: 1.1,
                                letterSpacing: "-0.02em",
                                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            }}
                        >
                            Ready to Transform Your
                            <br />
                            <Box
                                component="span"
                                sx={{
                                    background: "linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Networking Game?
                            </Box>
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                mb: 5,
                                opacity: 0.95,
                                lineHeight: 1.6,
                                fontWeight: 400,
                                maxWidth: 600,
                                mx: "auto",
                            }}
                        >
                            Join thousands of professionals who've revolutionized their business networking 
                            with our cutting-edge digital business card platform.
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2.5, justifyContent: "center", flexWrap: "wrap", mb: 5 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
                                    color: "#0d47a1",
                                    borderRadius: "50px",
                                    px: 5,
                                    py: 2.2,
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
                                    animation: "pulse 2s ease-in-out infinite",
                                    "&:hover": {
                                        transform: "translateY(-3px) scale(1.05)",
                                        boxShadow: "0 15px 35px rgba(255,255,255,0.4)",
                                        background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
                                    },
                                    "@keyframes pulse": {
                                        "0%, 100%": { transform: "scale(1)" },
                                        "50%": { transform: "scale(1.05)" },
                                    },
                                }}
                                startIcon={<Box component="span" sx={{ fontSize: "1.2rem" }}>🚀</Box>}
                            >
                                Start Free Today
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "rgba(255,255,255,0.8)",
                                    color: "white",
                                    borderRadius: "50px",
                                    px: 4.5,
                                    py: 2,
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    borderWidth: 2,
                                    backdropFilter: "blur(10px)",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.2)",
                                        transform: "translateY(-2px)",
                                        borderColor: "white",
                                        borderWidth: 2,
                                    },
                                }}
                                startIcon={<Box component="span" sx={{ fontSize: "1.2rem" }}>📖</Box>}
                            >
                                View Demo
                            </Button>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: 5, flexWrap: "wrap", mb: 4 }}>
                            {features.map((feature, index) => (
                                <Fade key={index} in={isVisible} timeout={600 + index * 100}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            opacity: 0.9,
                                        }}
                                    >
                                        <Typography component="span" sx={{ fontSize: "1.2rem" }}>
                                            {feature.icon}
                                        </Typography>
                                        <Typography variant="body1" fontWeight={500}>
                                            {feature.text}
                                        </Typography>
                                    </Box>
                                </Fade>
                            ))}
                        </Box>

                        <Typography variant="body2" sx={{ opacity: 0.8, fontWeight: 400 }}>
                            Trusted by <strong>10,000+</strong> professionals worldwide
                        </Typography>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
};

export default CTASection;