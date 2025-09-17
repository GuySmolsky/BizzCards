import React from "react";
import { Typography, Box } from "@mui/material";

const ProfileViewMode = ({ user }) => {

    const getFullName = () => {
        const first = user?.name?.first || user?.first || "";
        const middle = user?.name?.middle || user?.middle || "";
        const last = user?.name?.last || user?.last || "";
        
        return [first, middle, last].filter(Boolean).join(" ");
    };


    const getAddressString = () => {
        const address = user?.address;
        if (!address) return "No address provided";

        const parts = [];
        if (address.street && address.houseNumber) {
            parts.push(`${address.street} ${address.houseNumber}`);
        }
        
        const cityLine = [];
        if (address.city) cityLine.push(address.city);
        if (address.state) cityLine.push(address.state);
        if (address.zip) cityLine.push(address.zip);
        if (cityLine.length > 0) parts.push(cityLine.join(", "));
        
        if (address.country) parts.push(address.country);
        
        return parts.length > 0 ? parts.join("\n") : "No address provided";
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            
            <Typography variant="body1" gutterBottom>
                <strong>Name:</strong> {getFullName() || "No name provided"}
            </Typography>
            
            <Typography variant="body1" gutterBottom>
                <strong>Phone:</strong> {user?.phone || "No phone provided"}
            </Typography>
            
            <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> {user?.email || "No email provided"}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Address
            </Typography>
            
            <Typography variant="body1" gutterBottom sx={{ whiteSpace: "pre-line" }}>
                {getAddressString()}
            </Typography>
        </Box>
    );
};

export default ProfileViewMode;