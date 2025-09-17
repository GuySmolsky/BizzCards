import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
  Fade,
  Zoom,
} from "@mui/material";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import Business from "@mui/icons-material/Business";
import { Link } from "react-router-dom";
import { useThemeMode } from "../../theme/providers/ThemeProvider";
import ROUTES from "../../routes/routesDict";
import SearchBar from "./SearchBar";
import DesktopNavigation from "./DesktopNavigation";
import UserMenu from "./UserMenu";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.95)"
              : "rgba(10,14,39,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${
            theme.palette.mode === "light"
              ? "rgba(13,71,161,0.1)"
              : "rgba(66,165,245,0.2)"
          }`,
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ gap: 2, py: 1 }}>
            {isMobile && (
              <Zoom in={true} timeout={300}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleMobileMenuToggle}
                  sx={{
                    background:
                      theme.palette.mode === "light"
                        ? "rgba(13,71,161,0.1)"
                        : "rgba(66,165,245,0.1)",
                    "&:hover": {
                      background:
                        theme.palette.mode === "light"
                          ? "rgba(13,71,161,0.2)"
                          : "rgba(66,165,245,0.2)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Zoom>
            )}
            <Fade in={true} timeout={500}>
              <Box
                component={Link}
                to={ROUTES.HOME}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    borderRadius: "16px",
                    p: 1.5,
                    mr: 2,
                    boxShadow: `0px 8px 25px ${theme.palette.primary.main}40`,
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                      animation: "shimmer 3s infinite",
                    },
                    "@keyframes shimmer": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                >
                  <Business sx={{ color: "white", fontSize: 28 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    background:
                      theme.palette.mode === "light"
                        ? "linear-gradient(135deg, #0d47a1 0%, #ff6f00 100%)"
                        : "linear-gradient(135deg, #42a5f5 0%, #ffcc02 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                  }}
                >
                  BizCards
                </Typography>
              </Box>
            </Fade>
            {!isMobile && (
              <Fade in={true} timeout={700}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <DesktopNavigation />
                </Box>
              </Fade>
            )}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                mx: 2,
              }}
            >
              <Fade in={true} timeout={900}>
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                  <SearchBar />
                </Box>
              </Fade>
            </Box>
            <Fade in={true} timeout={1100}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                  color="inherit"
                  onClick={toggleTheme}
                  sx={{
                    background:
                      theme.palette.mode === "light"
                        ? "rgba(13,71,161,0.1)"
                        : "rgba(66,165,245,0.1)",
                    border: `2px solid ${
                      theme.palette.mode === "light"
                        ? "rgba(13,71,161,0.2)"
                        : "rgba(66,165,245,0.2)"
                    }`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      background:
                        theme.palette.mode === "light"
                          ? "rgba(13,71,161,0.2)"
                          : "rgba(66,165,245,0.2)",
                      transform: "scale(1.1) rotate(180deg)",
                      boxShadow: `0px 8px 25px ${theme.palette.primary.main}30`,
                    },
                  }}
                >
                  {mode === "light" ? (
                    <DarkMode sx={{ fontSize: 22 }} />
                  ) : (
                    <LightMode sx={{ fontSize: 22 }} />
                  )}
                </IconButton>
                {!isMobile && (
                  <Box sx={{ ml: 1 }}>
                    <UserMenu />
                  </Box>
                )}
              </Box>
            </Fade>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer open={mobileOpen} onClose={handleMobileMenuToggle} />
      <Toolbar />
    </>
  );
};
export default Header;
