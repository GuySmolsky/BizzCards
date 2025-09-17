import React from "react";
import { Box, Fade, useTheme } from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Speed from "@mui/icons-material/Speed";
import Security from "@mui/icons-material/Security";
import CreditCard from "@mui/icons-material/CreditCard";

const FloatingElements = () => {
  const theme = useTheme();

  const elements = [
    { icon: <CreditCard />, delay: 0, position: { top: "20%", left: "10%" } },
    {
      icon: <TrendingUp />,
      delay: 200,
      position: { top: "30%", right: "15%" },
    },
    { icon: <Speed />, delay: 400, position: { bottom: "25%", left: "20%" } },
    {
      icon: <Security />,
      delay: 600,
      position: { bottom: "20%", right: "10%" },
    },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <Fade key={index} in={true} timeout={1000 + element.delay}>
          <Box
            sx={{
              position: "absolute",
              ...element.position,
              color: theme.palette.primary.main,
              opacity: 0.3,
              fontSize: "3rem",
              animation: "float 6s ease-in-out infinite",
              animationDelay: `${element.delay}ms`,
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-20px)" },
              },
            }}
          >
            {element.icon}
          </Box>
        </Fade>
      ))}
    </>
  );
};

export default FloatingElements;
