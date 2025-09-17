import React, { useState, useEffect } from "react";
import { Box, Card, Typography, Fade } from "@mui/material";
import CameraAlt from "@mui/icons-material/CameraAlt";
import Computer from "@mui/icons-material/Computer";
import Palette from "@mui/icons-material/Palette";

const HeroVisual = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "John's Photography",
      subtitle: "Professional Photographer",
      color: "#0d47a1",
      icon: <CameraAlt sx={{ fontSize: 40 }} />,
    },
    {
      title: "Design Studio",
      subtitle: "Creative Agency",
      color: "#f57c00",
      icon: <Palette sx={{ fontSize: 40 }} />,
    },
    {
      title: "Tech Solutions Inc",
      subtitle: "Software Development",
      color: "#2e7d32",
      icon: <Computer sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 500,
        perspective: "1200px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 350,
          height: 220,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            onClick={() => setActiveCard(index)}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}dd 100%)`,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
              transform:
                activeCard === index
                  ? "translateZ(0px) scale(1)"
                  : `translateZ(-${
                      Math.abs(activeCard - index) * 30
                    }px) scale(${1 - Math.abs(activeCard - index) * 0.15})`,
              opacity: activeCard === index ? 1 : 0.6,
              zIndex:
                activeCard === index ? 20 : 20 - Math.abs(activeCard - index),
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow:
                activeCard === index
                  ? `0px 25px 50px ${card.color}40`
                  : `0px 15px 30px ${card.color}20`,
              "&:hover": {
                transform:
                  activeCard === index
                    ? "translateZ(10px) scale(1.02)"
                    : `translateZ(-${
                        Math.abs(activeCard - index) * 25
                      }px) scale(${1 - Math.abs(activeCard - index) * 0.1})`,
              },
            }}
          >
            <Box
              sx={{
                mb: 2,
                color: "white",
                animation:
                  activeCard === index
                    ? "iconPulse 2s ease-in-out infinite"
                    : "none",
                "@keyframes iconPulse": {
                  "0%, 100%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.1)" },
                },
              }}
            >
              {card.icon}
            </Box>
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="center"
              sx={{
                mb: 1,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                opacity: 0.9,
                fontWeight: 400,
              }}
            >
              {card.subtitle}
            </Typography>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 15,
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            onClick={() => setActiveCard(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              bgcolor: activeCard === index ? card.color : "rgba(0,0,0,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: activeCard === index ? "scale(1.3)" : "scale(1)",
              "&:hover": {
                bgcolor: card.color,
                transform: "scale(1.2)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroVisual;
