import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import CreditCard from "@mui/icons-material/CreditCard";
import ROUTES from "../../routes/routesDict";

const DesktopNavigation = () => {
  const theme = useTheme();
  const location = useLocation();

  const navigationItems = [
    {
      label: "Home",
      path: ROUTES.HOME,
      icon: <Home sx={{ fontSize: 20 }} />,
    },
    {
      label: "About",
      path: ROUTES.ABOUT,
      icon: <Info sx={{ fontSize: 20 }} />,
    },
    {
      label: "Cards",
      path: ROUTES.CARDS,
      icon: <CreditCard sx={{ fontSize: 20 }} />,
    },
  ];

  const isActivePath = (path) => {
    if (path === ROUTES.HOME) {
      return location.pathname === "/" || location.pathname === ROUTES.HOME;
    }
    return location.pathname === path;
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        background:
          theme.palette.mode === "light"
            ? "rgba(255,255,255,0.4)"
            : "rgba(26,35,126,0.4)",
        borderRadius: "20px",
        p: 1,
        backdropFilter: "blur(10px)",
        border: `1px solid ${
          theme.palette.mode === "light"
            ? "rgba(13,71,161,0.1)"
            : "rgba(66,165,245,0.2)"
        }`,
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 8px 25px rgba(13,71,161,0.08)"
            : "0px 8px 25px rgba(66,165,245,0.15)",
      }}
    >
      {navigationItems.map((item, index) => {
        const isActive = isActivePath(item.path);

        return (
          <Button
            key={item.label}
            color="inherit"
            component={Link}
            to={item.path}
            startIcon={item.icon}
            sx={{
              borderRadius: "16px",
              px: 3,
              py: 1.5,
              fontWeight: 600,
              fontSize: "0.95rem",
              textTransform: "none",
              position: "relative",
              overflow: "hidden",
              color: isActive
                ? "white"
                : theme.palette.mode === "light"
                ? "#0d47a1"
                : "#90caf9",
              background: isActive
                ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
                : "transparent",
              boxShadow: isActive
                ? `0px 8px 25px ${theme.palette.primary.main}40`
                : "none",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transition: "left 0.6s",
              },
              "&:hover": {
                background: isActive
                  ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`
                  : theme.palette.mode === "light"
                  ? "rgba(13,71,161,0.1)"
                  : "rgba(66,165,245,0.1)",
                transform: "translateY(-2px) scale(1.05)",
                boxShadow: isActive
                  ? `0px 12px 35px ${theme.palette.primary.main}50`
                  : theme.palette.mode === "light"
                  ? "0px 8px 25px rgba(13,71,161,0.15)"
                  : "0px 8px 25px rgba(66,165,245,0.25)",
                "&::before": {
                  left: "100%",
                },
              },
              "&:active": {
                transform: "translateY(0px) scale(1.02)",
              },
              "& .MuiButton-startIcon": {
                marginRight: 1,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              },
              "&:hover .MuiButton-startIcon": {
                transform: "rotate(10deg) scale(1.1)",
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );
};

export default DesktopNavigation;
