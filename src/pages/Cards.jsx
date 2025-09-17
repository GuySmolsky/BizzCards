import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  CircularProgress,
  Alert,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import Clear from "@mui/icons-material/Clear";
import { getAllCards, searchCards } from "../cards/services/cardsService";
import { useSearch } from "../layout/components/SearchContext";
import CardItem from "../components/cards/CardItem";

const Cards = () => {
  const { globalSearchTerm, setGlobalSearchTerm, clearGlobalSearch } =
    useSearch();
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await getAllCards();
        setCards(data);
        setFilteredCards(data);
      } catch (err) {
        setError("Failed to load business cards. Please try again later.");
        console.error("Error fetching cards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const performSearch = async () => {
      if (globalSearchTerm.trim()) {
        try {
          const results = await searchCards(globalSearchTerm);
          setFilteredCards(results);
        } catch (err) {
          console.error("Search error:", err);
          setFilteredCards([]);
        }
      } else {
        setFilteredCards(cards);
      }
    };

    performSearch();
  }, [globalSearchTerm, cards]);

  const handleSearchChange = (event) => {
    setGlobalSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    clearGlobalSearch();
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress size={50} />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Business Cards
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Discover amazing businesses and professionals in our community
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search by name, description, email, phone, or location..."
          value={globalSearchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: globalSearchTerm && (
              <InputAdornment position="end">
                <Clear sx={{ cursor: "pointer" }} onClick={handleClearSearch} />
              </InputAdornment>
            ),
          }}
          sx={{
            maxWidth: 600,
            mx: "auto",
            display: "block",
          }}
        />
      </Box>

      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          {globalSearchTerm ? (
            <>
              Found {filteredCards.length} result
              {filteredCards.length !== 1 ? "s" : ""} for{" "}
              <Chip
                label={`"${globalSearchTerm}"`}
                size="small"
                onDelete={handleClearSearch}
                sx={{ mx: 1 }}
              />
            </>
          ) : (
            `Showing ${filteredCards.length} business card${
              filteredCards.length !== 1 ? "s" : ""
            }`
          )}
        </Typography>
      </Box>

      {filteredCards.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h5" gutterBottom>
            {globalSearchTerm
              ? "No cards found"
              : "No business cards available"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {globalSearchTerm
              ? "Try adjusting your search terms or browse all cards."
              : "Be the first to create a business card!"}
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredCards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card._id}>
              <CardItem card={card} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Cards;
