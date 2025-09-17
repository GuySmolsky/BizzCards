import React from "react";
import { Typography, Box, Button, Avatar, Chip } from "@mui/material";
import Person from "@mui/icons-material/Person";
import Business from "@mui/icons-material/Business";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import Edit from "@mui/icons-material/Edit";

const ProfileHeader = ({ user, editing, onEditClick }) => {
  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <AdminPanelSettings />;
      case "business":
        return <Business />;
      default:
        return <Person />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "error";
      case "business":
        return "primary";
      default:
        return "default";
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
      <Avatar
        sx={{
          width: 80,
          height: 80,
          mr: 3,
          bgcolor: "primary.main",
          fontSize: "2rem",
        }}
      >
        {user?.first ? user.first[0].toUpperCase() : <Person />}
      </Avatar>

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          {user?.first} {user?.last}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {user?.email}
        </Typography>
        <Chip
          icon={getRoleIcon(user?.role)}
          label={`${
            user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || "User"
          } Account`}
          color={getRoleColor(user?.role)}
          variant="outlined"
        />
      </Box>

      {!editing && (
        <Button variant="outlined" startIcon={<Edit />} onClick={onEditClick}>
          Edit Profile
        </Button>
      )}
    </Box>
  );
};

export default ProfileHeader;
