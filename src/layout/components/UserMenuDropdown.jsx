import React from "react";
import { Menu, MenuItem, Divider, useTheme, Fade } from "@mui/material";
import Person from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import Favorite from "@mui/icons-material/Favorite";
import CreditCard from "@mui/icons-material/CreditCard";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import Science from "@mui/icons-material/Science";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routesDict";

const UserMenuDropdown = ({ user, anchorEl, open, onClose, onLogout }) => {
  const theme = useTheme();

  const menuItems = [
    {
      label: "Profile",
      path: ROUTES.PROFILE,
      icon: Person,
      color: theme.palette.primary.main,
    },
    {
      label: "Favorites",
      path: ROUTES.FAVORITE_CARDS,
      icon: Favorite,
      color: theme.palette.secondary.main,
    },
  ];

  const businessItems = [
    {
      label: "My Cards",
      path: ROUTES.MY_CARDS,
      icon: CreditCard,
      color: theme.palette.info.main,
    },
  ];

  const adminItems = [
    {
      label: "CRM",
      path: ROUTES.CRM,
      icon: AdminPanelSettings,
      color: theme.palette.error.main,
    },
    {
      label: "Sandbox",
      path: ROUTES.SANDBOX,
      icon: Science,
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px",
          background:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.95)"
              : "rgba(26,35,126,0.95)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${
            theme.palette.mode === "light"
              ? "rgba(13,71,161,0.1)"
              : "rgba(66,165,245,0.2)"
          }`,
          boxShadow:
            theme.palette.mode === "light"
              ? "0px 20px 40px rgba(13,71,161,0.15)"
              : "0px 20px 40px rgba(66,165,245,0.25)",
          minWidth: 220,
          mt: 1,
        },
      }}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          component={Link}
          to={item.path}
          onClick={onClose}
        >
          <item.icon sx={{ mr: 2, color: item.color }} />
          {item.label}
        </MenuItem>
      ))}

      {user?.isBusiness &&
        businessItems.map((item) => (
          <MenuItem
            key={item.label}
            component={Link}
            to={item.path}
            onClick={onClose}
          >
            <item.icon sx={{ mr: 2, color: item.color }} />
            {item.label}
          </MenuItem>
        ))}

      {user?.isAdmin && (
        <>
          <Divider sx={{ my: 1 }} />
          {adminItems.map((item) => (
            <MenuItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={onClose}
            >
              <item.icon sx={{ mr: 2, color: item.color }} />
              {item.label}
            </MenuItem>
          ))}
        </>
      )}

      <Divider sx={{ my: 1 }} />
      <MenuItem onClick={onLogout}>
        <Logout sx={{ mr: 2, color: theme.palette.error.main }} />
        Sign Out
      </MenuItem>
    </Menu>
  );
};

export default UserMenuDropdown;
