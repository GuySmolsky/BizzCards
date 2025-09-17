import React from "react";
import { Box, Chip } from "@mui/material";

const UserStats = ({ users }) => {
    const totalUsers = users.length;
    const businessUsers = users.filter(u => u.isBusiness && !u.isAdmin).length;
    const regularUsers = users.filter(u => !u.isBusiness && !u.isAdmin).length;
    const adminUsers = users.filter(u => u.isAdmin).length;

    return (
        <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Chip
                label={`Total Users: ${totalUsers}`}
                variant="outlined"
                color="primary"
                size="medium"
            />
            <Chip
                label={`Regular Users: ${regularUsers}`}
                variant="outlined"
                color="default"
                size="medium"
            />
            <Chip
                label={`Business Users: ${businessUsers}`}
                variant="outlined"
                color="secondary"
                size="medium"
            />
            <Chip
                label={`Admin Users: ${adminUsers}`}
                variant="outlined"
                color="error"
                size="medium"
            />
        </Box>
    );
};

export default UserStats;