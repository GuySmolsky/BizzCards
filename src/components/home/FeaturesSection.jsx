import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: "🏢",
      title: "Professional Cards",
      description:
        "Create stunning, interactive business cards with modern design elements.",
      color: "#0d47a1",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security protocols protect your data.",
      color: "#2e7d32",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Optimized for speed with instant loading and real-time sync.",
      color: "#f57c00",
    },
    {
      icon: "☁️",
      title: "Cloud Sync",
      description: "Automatic backup ensures cards are always up-to-date.",
      color: "#7b1fa2",
    },
    {
      icon: "📊",
      title: "Analytics",
      description:
        "Track engagement and gain insights into networking performance.",
      color: "#d32f2f",
    },
    {
      icon: "📱",
      title: "QR Integration",
      description:
        "Generate dynamic QR codes for instant sharing capabilities.",
      color: "#1976d2",
    },
  ];

  return (
    <Box
      sx={{
        py: 10,
        background:
          "linear-gradient(135deg, rgba(13,71,161,0.03) 0%, rgba(245,124,0,0.03) 100%)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              background: "linear-gradient(135deg, #0d47a1 0%, #f57c00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Platform Benefits
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Cutting-edge features that revolutionize digital business networking
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  height: 350,
                  width: "100%",
                  maxWidth: 380,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  background:
                    hoveredCard === index
                      ? `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`
                      : "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 4,
                  border: `2px solid ${
                    hoveredCard === index ? feature.color : "rgba(0,0,0,0.05)"
                  }`,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform:
                    hoveredCard === index
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredCard === index
                      ? `0 20px 40px ${feature.color}20`
                      : "0 4px 20px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: "center",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    height: "100%",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        fontSize: "3rem",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 70,
                        height: 70,
                        background:
                          hoveredCard === index
                            ? `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`
                            : `${feature.color}15`,
                        borderRadius: 2,
                        mx: "auto",
                        transition: "all 0.3s ease",
                        animation:
                          hoveredCard === index
                            ? "float 2s ease-in-out infinite"
                            : "none",
                        "@keyframes float": {
                          "0%, 100%": { transform: "translateY(0px)" },
                          "50%": { transform: "translateY(-10px)" },
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color:
                          hoveredCard === index ? feature.color : "#1a202c",
                        transition: "color 0.3s ease",
                        height: "3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.5,
                      height: "4.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "0.95rem",
                      overflow: "hidden",
                    }}
                  >
                    {feature.description}
                  </Typography>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: feature.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "18px",
                      opacity: hoveredCard === index ? 1 : 0,
                      transform:
                        hoveredCard === index ? "scale(1)" : "scale(0.8)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    →
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
