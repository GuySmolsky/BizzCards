import React from "react";
import { Box, Button, Typography, Avatar, Chip, useTheme } from "@mui/material";
import Login from "@mui/icons-material/Login";
import AppRegistration from "@mui/icons-material/AppRegistration";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/routesDict";

const UserMenuButton = ({ user, onClick }) => {
  const theme = useTheme();

  const getDisplayName = () => {
    if (user?.name?.first && user?.name?.last) {
      return `${user.name.first} ${user.name.last}`;
    }
    return user?.email?.split("@")[0] || "User";
  };

  const getUserRole = () => {
    if (user?.isAdmin) return "Admin";
    if (user?.isBusiness) return "Business";
    return "Regular";
  };

  const getRoleColor = () => {
    if (user?.isAdmin) return "error";
    if (user?.isBusiness) return "primary";
    return "default";
  };

  if (!user) {
    return (
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          component={Link}
          to={ROUTES.LOGIN}
          variant="outlined"
          startIcon={<Login />}
          sx={{
            borderRadius: "16px",
            px: 3,
            background: "transparent",
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,
            fontWeight: 600,
            "&:hover": {
              background:
                theme.palette.mode === "light"
                  ? "rgba(13,71,161,0.1)"
                  : "rgba(66,165,245,0.1)",
              transform: "translateY(-2px)",
              boxShadow: `0px 8px 25px ${theme.palette.primary.main}30`,
            },
          }}
        >
          Sign In
        </Button>
        <Button
          component={Link}
          to={ROUTES.REGISTER}
          variant="contained"
          startIcon={<AppRegistration />}
          sx={{
            borderRadius: "16px",
            px: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            fontWeight: 600,
            "&:hover": {
              background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
              transform: "translateY(-2px)",
              boxShadow: `0px 8px 25px ${theme.palette.primary.main}40`,
            },
          }}
        >
          Sign Up
        </Button>
      </Box>
    );
  }

  return (
    <Button
      onClick={onClick}
      endIcon={<KeyboardArrowDown />}
      sx={{
        borderRadius: "20px",
        px: 2,
        py: 1,
        background:
          theme.palette.mode === "light"
            ? "rgba(255,255,255,0.9)"
            : "rgba(26,35,126,0.9)",
        backdropFilter: "blur(20px)",
        border: `2px solid ${
          theme.palette.mode === "light"
            ? "rgba(13,71,161,0.2)"
            : "rgba(66,165,245,0.3)"
        }`,
        color: theme.palette.text.primary,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          background:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,1)"
              : "rgba(26,35,126,1)",
          transform: "translateY(-2px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0px 12px 35px rgba(13,71,161,0.2)"
              : "0px 12px 35px rgba(66,165,245,0.3)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          {getDisplayName().charAt(0).toUpperCase()}
        </Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1 }}>
            {getDisplayName()}
          </Typography>
          <Chip
            label={getUserRole()}
            size="small"
            color={getRoleColor()}
            sx={{
              height: 16,
              fontSize: "0.625rem",
              "& .MuiChip-label": { px: 0.5 },
            }}
          />
        </Box>
      </Box>
    </Button>
  );
};

export default UserMenuButton;
