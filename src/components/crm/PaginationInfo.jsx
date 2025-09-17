import React from "react";
import { Box, Typography } from "@mui/material";

const PaginationInfo = ({ 
    searchTerm, 
    filteredUsers, 
    currentPage, 
    usersPerPage, 
    totalPages 
}) => {
    const startIndex = (currentPage - 1) * usersPerPage + 1;
    const endIndex = Math.min(currentPage * usersPerPage, filteredUsers.length);

    return (
        <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1" color="text.secondary">
                {searchTerm ? (
                    <>
                        Found {filteredUsers.length} user{filteredUsers.length !== 1 ? "s" : ""} matching "{searchTerm}" | 
                        Showing {startIndex} - {endIndex}
                    </>
                ) : (
                    <>
                        Showing {startIndex} - {endIndex} of {filteredUsers.length} users
                    </>
                )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Page {currentPage} of {totalPages}
            </Typography>
        </Box>
    );
};

export default PaginationInfo;