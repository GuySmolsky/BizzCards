import React from "react";
import { Typography, Box, IconButton, Chip, Divider } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Business from "@mui/icons-material/Business";
import Share from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesDict";

const CardDetailsHeader = ({ card }) => {
  const { user, toggleFavorite } = useUser();
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (user) {
      toggleFavorite(card._id);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: card.title,
          text: card.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const isFavorite = user?.favCards?.includes(card._id);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            {card.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {card.subtitle}
          </Typography>
          {card.isBusiness && (
            <Chip
              icon={<Business />}
              label="Business Account"
              color="primary"
              sx={{ mb: 2 }}
            />
          )}
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            onClick={handleFavoriteClick}
            color="primary"
            size="large"
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton onClick={handleShare} color="primary" size="large">
            <Share />
          </IconButton>
        </Box>
      </Box>

      <Typography
        variant="body1"
        gutterBottom
        sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
      >
        {card.description}
      </Typography>

      <Divider sx={{ my: 3 }} />
    </>
  );
};

export default CardDetailsHeader;
