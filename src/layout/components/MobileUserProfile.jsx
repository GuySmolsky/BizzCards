import React from "react";
import { Box, Typography, Avatar, Chip, useTheme } from "@mui/material";
import Business from "@mui/icons-material/Business";

const MobileUserProfile = ({ user }) => {
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

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            borderRadius: "16px",
            p: 1.5,
            boxShadow: `0px 8px 25px ${theme.palette.primary.main}40`,
          }}
        >
          <Business sx={{ color: "white", fontSize: 24 }} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            background:
              theme.palette.mode === "light"
                ? "linear-gradient(135deg, #0d47a1 0%, #ff6f00 100%)"
                : "linear-gradient(135deg, #42a5f5 0%, #ffcc02 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          BizCards
        </Typography>
      </Box>

      {user && (
        <Box
          sx={{
            p: 2,
            borderRadius: "16px",
            background:
              theme.palette.mode === "light"
                ? "rgba(13,71,161,0.05)"
                : "rgba(66,165,245,0.1)",
            border: `1px solid ${
              theme.palette.mode === "light"
                ? "rgba(13,71,161,0.1)"
                : "rgba(66,165,245,0.2)"
            }`,
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              }}
            >
              {getDisplayName().charAt(0).toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {getDisplayName()}
              </Typography>
              <Chip
                label={getUserRole()}
                size="small"
                color={getRoleColor()}
                sx={{ mt: 0.5 }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MobileUserProfile;
