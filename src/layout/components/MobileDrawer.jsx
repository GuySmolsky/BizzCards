import React from "react";
import { Drawer, useTheme } from "@mui/material";
import { useUser } from "../../users/providers/UserProvider";
import MobileUserProfile from "./MobileUserProfile";
import MobileMenuItems from "./MobileMenuItems";

const MobileDrawer = ({ open, onClose }) => {
    const { user, logout } = useUser();
    const theme = useTheme();

    const handleLogout = () => {
        logout();
        onClose();
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 280,
                    background: theme.palette.mode === "light"
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(10,14,39,0.95)",
                    backdropFilter: "blur(20px)",
                    border: "none",
                    borderRight: `1px solid ${theme.palette.mode === "light" 
                        ? "rgba(13,71,161,0.1)" 
                        : "rgba(66,165,245,0.2)"}`,
                },
            }}
        >
            <MobileUserProfile user={user} />
            <MobileMenuItems 
                user={user} 
                onClose={onClose} 
                onLogout={handleLogout} 
            />
        </Drawer>
    );
};

export default MobileDrawer;