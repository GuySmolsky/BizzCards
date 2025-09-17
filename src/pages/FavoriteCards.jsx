import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import CreditCard from "@mui/icons-material/CreditCard";
import { Link } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import { getAllCards } from "../cards/services/cardsService";
import CardItem from "../components/cards/CardItem";
import ROUTES from "../routes/routesDict";

const FavoriteCards = () => {
  const { user } = useUser();
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFavoriteCards = async () => {
      try {
        setLoading(true);
        const allCards = await getAllCards();

        const favorites = allCards.filter((card) =>
          user?.favCards?.includes(card._id)
        );

        setFavoriteCards(favorites);
      } catch (err) {
        setError("Failed to load favorite cards. Please try again later.");
        console.error("Error fetching favorite cards:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.favCards) {
      fetchFavoriteCards();
    } else {
      setLoading(false);
    }
  }, [user?.favCards]);

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Favorite sx={{ fontSize: 40, color: "primary.main" }} />
          <Typography variant="h3" component="h1" fontWeight="bold">
            Favorite Cards
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary">
          Your collection of favorite business cards
        </Typography>
      </Box>

      {favoriteCards.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <CreditCard sx={{ fontSize: 80, color: "text.secondary", mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            No favorite cards yet
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Start exploring business cards and add them to your favorites by
            clicking the heart icon.
          </Typography>
          <Button
            component={Link}
            to={ROUTES.CARDS}
            variant="contained"
            size="large"
            startIcon={<CreditCard />}
          >
            Browse Business Cards
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" color="text.secondary">
              You have {favoriteCards.length} favorite card
              {favoriteCards.length !== 1 ? "s" : ""}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {favoriteCards.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card._id}>
                <CardItem card={card} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default FavoriteCards;
