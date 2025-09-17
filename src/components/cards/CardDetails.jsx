import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import { getCardById } from "../../cards/services/cardsService";
import ROUTES from "../../routes/routesDict";
import CardDetailsHeader from "./CardDetailsHeader";
import CardDetailsContent from "./CardDetailsContent";
import CardDetailsImage from "./CardDetailsImage";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCard = async () => {
      try {
        setLoading(true);
        const cardData = await getCardById(id);
        setCard(cardData);
      } catch (err) {
        setError("Failed to load business card details.");
        console.error("Error fetching card:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCard();
    }
  }, [id]);

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

  if (error || !card) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error || "Business card not found"}</Alert>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(ROUTES.CARDS)}
          sx={{ mt: 2 }}
        >
          Back to Cards
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(ROUTES.CARDS)}
        sx={{ mb: 3 }}
      >
        Back to Cards
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <CardDetailsImage card={card} />
        </Grid>

        <Grid item xs={12} md={7}>
          <Box sx={{ height: "100%" }}>
            <CardDetailsHeader card={card} />
            <CardDetailsContent card={card} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardDetails;
