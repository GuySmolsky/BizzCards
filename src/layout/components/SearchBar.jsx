import React from "react";
import { TextField, InputAdornment, IconButton, useTheme } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Clear from "@mui/icons-material/Clear";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "./SearchContext";
import ROUTES from "../../routes/routesDict";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { globalSearchTerm, setGlobalSearchTerm, clearGlobalSearch } =
    useSearch();

  const handleChange = (event) => {
    setGlobalSearchTerm(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && location.pathname !== ROUTES.CARDS) {
      navigate(ROUTES.CARDS);
    }
  };

  const handleSearchClick = () => {
    if (location.pathname !== ROUTES.CARDS) {
      navigate(ROUTES.CARDS);
    }
  };

  const handleClear = () => {
    clearGlobalSearch();
  };

  return (
    <TextField
      fullWidth
      placeholder="Search business cards..."
      value={globalSearchTerm}
      onChange={handleChange}
      onKeyPress={handleEnter}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleSearchClick}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: globalSearchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear} size="small">
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          borderRadius: "20px",
          background:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.9)"
              : "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      }}
    />
  );
};

export default SearchBar;
