import React, { useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesDict";
import UserMenuButton from "./UserMenuButton";
import UserMenuDropdown from "./UserMenuDropdown";

const UserMenu = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        navigate(ROUTES.HOME);
        handleClose();
    };

    return (
        <Box>
            <UserMenuButton user={user} onClick={handleClick} />
            <UserMenuDropdown
                user={user}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onLogout={handleLogout}
            />
        </Box>
    );
};

export default UserMenu;