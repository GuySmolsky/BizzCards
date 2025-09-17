import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Button,
  Box,
  Chip,
  Tooltip,
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import LocationOn from "@mui/icons-material/LocationOn";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Business from "@mui/icons-material/Business";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesDict";

const CardItem = ({ card, onEdit, onDelete, showActions = false }) => {
  const { user, toggleFavorite } = useUser();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`${ROUTES.CARD_DETAILS.replace(":id", card._id)}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (user) {
      toggleFavorite(card._id);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (onEdit) {
      onEdit(card._id);
    } else {
      navigate(`${ROUTES.EDIT_CARD.replace(":id", card._id)}`);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(card._id);
    }
  };

  const isFavorite = user?.favCards?.includes(card._id);
  const isOwner = user?.isBusiness && user._id === card.user_id;

  return (
    <Card
      sx={{
        height: "400px !important",
        width: "280px !important",
        minHeight: "400px !important",
        maxHeight: "400px !important",
        minWidth: "280px !important",
        maxWidth: "280px !important",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flexShrink: 0,
        flexGrow: 0,
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? "0 8px 25px rgba(0,0,0,0.15)"
              : "0 8px 25px rgba(0,0,0,0.6)",
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        component="img"
        height="140"
        image={card.image?.url || "/api/placeholder/400/200"}
        alt={card.image?.alt || card.title}
        sx={{ objectFit: "cover", width: "100%" }}
      />

      <CardContent
        sx={{
          height: 220,
          p: 1.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 1,
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                height: "2.5rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.25,
              }}
            >
              {card.title}
            </Typography>
            {card.isBusiness && (
              <Chip
                icon={<Business />}
                label="Business"
                size="small"
                color="primary"
                variant="outlined"
                sx={{ ml: 1, fontSize: "0.7rem" }}
              />
            )}
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: "1.25rem",
              fontSize: "0.75rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              mb: 0.5,
            }}
          >
            {card.subtitle}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 1,
              height: "3rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1.2,
              fontSize: "0.75rem",
            }}
          >
            {card.description}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone sx={{ fontSize: 14, color: "text.secondary" }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "0.75rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {card.phone}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email sx={{ fontSize: 14, color: "text.secondary" }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: "0.75rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {card.email}
            </Typography>
          </Box>

          {card.address && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOn sx={{ fontSize: 14, color: "text.secondary" }} />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "0.75rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {card.address.city}, {card.address.country}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>

      <CardActions
        sx={{
          height: 60,
          justifyContent: "space-between",
          px: 1.5,
          pb: 1.5,
          pt: 0,
        }}
      >
        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Tooltip
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <IconButton
              onClick={handleFavoriteClick}
              color="primary"
              size="small"
            >
              {isFavorite ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Tooltip>

          {(showActions || isOwner) && (
            <>
              <Tooltip title="Edit card">
                <IconButton
                  onClick={handleEditClick}
                  color="primary"
                  size="small"
                >
                  <Edit />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete card">
                <IconButton
                  onClick={handleDeleteClick}
                  color="error"
                  size="small"
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </>
          )}
        </Box>

        <Button size="small" variant="outlined" sx={{ fontSize: "0.7rem" }}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
