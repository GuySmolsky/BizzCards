import React from "react";
import { Box, Typography, useTheme, alpha, Slide } from "@mui/material";
import CreditCard from "@mui/icons-material/CreditCard";

const HeroCard = () => {
  const theme = useTheme();

  return (
    <Slide direction="left" in={true} timeout={1000}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 200,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            boxShadow: `0px 20px 40px ${alpha(
              theme.palette.primary.main,
              0.3
            )}`,
            transform: "rotateY(-15deg) rotateX(5deg)",
            transformStyle: "preserve-3d",
            animation: "cardFloat 4s ease-in-out infinite",
            "@keyframes cardFloat": {
              "0%, 100%": {
                transform: "rotateY(-15deg) rotateX(5deg) translateY(0px)",
              },
              "50%": {
                transform: "rotateY(-15deg) rotateX(5deg) translateY(-10px)",
              },
            },
          }}
        >
          <CreditCard sx={{ fontSize: 48, mb: 2 }} />
          <Typography variant="h6" fontWeight="600">
            Your Digital Card
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Professional • Interactive • Modern
          </Typography>
        </Box>
      </Box>
    </Slide>
  );
};

export default HeroCard;
