import React from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Clear from "@mui/icons-material/Clear";

const SearchBar = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        fullWidth
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={onSearchChange}
        slotProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: searchTerm && (
            <InputAdornment position="end">
              <IconButton onClick={onClearSearch} size="small">
                <Clear />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 600 }}
      />
    </Box>
  );
};

export default SearchBar;
