import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import CreditCard from "@mui/icons-material/CreditCard";
import Person from "@mui/icons-material/Person";
import Favorite from "@mui/icons-material/Favorite";
import Login from "@mui/icons-material/Login";
import AppRegistration from "@mui/icons-material/AppRegistration";
import Logout from "@mui/icons-material/Logout";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import Science from "@mui/icons-material/Science";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../../routes/routesDict";

const MobileMenuItems = ({ user, onClose, onLogout }) => {
  const theme = useTheme();
  const location = useLocation();

  const isActivePath = (path) => {
    if (path === ROUTES.HOME) {
      return location.pathname === "/" || location.pathname === ROUTES.HOME;
    }
    return location.pathname === path;
  };

  const publicMenuItems = [
    { label: "Home", path: ROUTES.HOME, icon: <Home /> },
    { label: "About", path: ROUTES.ABOUT, icon: <Info /> },
    { label: "Cards", path: ROUTES.CARDS, icon: <CreditCard /> },
  ];

  const userMenuItems = [
    { label: "Profile", path: ROUTES.PROFILE, icon: <Person /> },
    { label: "Favorites", path: ROUTES.FAVORITE_CARDS, icon: <Favorite /> },
  ];

  const businessMenuItems = [
    { label: "My Cards", path: ROUTES.MY_CARDS, icon: <CreditCard /> },
  ];

  const adminMenuItems = [
    { label: "CRM", path: ROUTES.CRM, icon: <AdminPanelSettings /> },
    { label: "Sandbox", path: ROUTES.SANDBOX, icon: <Science /> },
  ];

  const renderMenuItem = (item) => (
    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
      <ListItemButton
        component={Link}
        to={item.path}
        onClick={onClose}
        sx={{
          borderRadius: "12px",
          py: 1.5,
          background: isActivePath(item.path)
            ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
            : "transparent",
          color: isActivePath(item.path) ? "white" : theme.palette.text.primary,
          "&:hover": {
            background: isActivePath(item.path)
              ? `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`
              : theme.palette.mode === "light"
              ? "rgba(13,71,161,0.1)"
              : "rgba(66,165,245,0.1)",
          },
        }}
      >
        <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{ fontWeight: 500 }}
        />
      </ListItemButton>
    </ListItem>
  );

  return (
    <List sx={{ p: 0 }}>
      {publicMenuItems.map(renderMenuItem)}

      {user && (
        <>
          <Divider sx={{ my: 2 }} />
          {userMenuItems.map(renderMenuItem)}
          {user.isBusiness && businessMenuItems.map(renderMenuItem)}
          {user.isAdmin && (
            <>
              <Divider sx={{ my: 2 }} />
              {adminMenuItems.map(renderMenuItem)}
            </>
          )}
          <Divider sx={{ my: 2 }} />
          <ListItem disablePadding>
            <ListItemButton
              onClick={onLogout}
              sx={{
                borderRadius: "12px",
                py: 1.5,
                color: theme.palette.error.main,
                "&:hover": {
                  background:
                    theme.palette.mode === "light"
                      ? "rgba(211,47,47,0.1)"
                      : "rgba(244,67,54,0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                <Logout />
              </ListItemIcon>
              <ListItemText
                primary="Sign Out"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        </>
      )}

      {!user && (
        <>
          <Divider sx={{ my: 2 }} />
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              to={ROUTES.LOGIN}
              onClick={onClose}
              sx={{
                borderRadius: "12px",
                py: 1.5,
                "&:hover": {
                  background:
                    theme.palette.mode === "light"
                      ? "rgba(13,71,161,0.1)"
                      : "rgba(66,165,245,0.1)",
                },
              }}
            >
              <ListItemIcon
                sx={{ color: theme.palette.primary.main, minWidth: 40 }}
              >
                <Login />
              </ListItemIcon>
              <ListItemText
                primary="Sign In"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to={ROUTES.REGISTER}
              onClick={onClose}
              sx={{
                borderRadius: "12px",
                py: 1.5,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: "white",
                "&:hover": {
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                <AppRegistration />
              </ListItemIcon>
              <ListItemText
                primary="Sign Up"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>
  );
};

export default MobileMenuItems;
