import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesDict";

const FeaturedCardsSection = ({ cards, loading }) => {
  const { user, toggleFavorite } = useUser();
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    navigate(`${ROUTES.CARD_DETAILS.replace(":id", cardId)}`);
  };

  const handleFavoriteClick = (e, cardId) => {
    e.stopPropagation();
    if (user) {
      toggleFavorite(cardId);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Featured Business Cards
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Discover amazing businesses in our community
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={4}>
            <Typography>Loading featured cards...</Typography>
          </Box>
        ) : (
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "center",
              "& .MuiGrid-item": {
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card._id}>
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
                    transition: "transform 0.2s",
                    flexShrink: 0,
                    flexGrow: 0,
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                  onClick={() => handleCardClick(card._id)}
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
                      height: 200,
                      p: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "hidden",
                    }}
                  >
                    <Box>
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
                          mb: 0.5,
                        }}
                      >
                        {card.title}
                      </Typography>
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.3,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Phone sx={{ fontSize: 14, color: "text.secondary" }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: "0.7rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {card.phone}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Email sx={{ fontSize: 14, color: "text.secondary" }} />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: "0.7rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {card.email}
                        </Typography>
                      </Box>
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
                    <IconButton
                      onClick={(e) => handleFavoriteClick(e, card._id)}
                      color="primary"
                      size="small"
                    >
                      {user?.favCards?.includes(card._id) ? (
                        <Favorite />
                      ) : (
                        <FavoriteBorder />
                      )}
                    </IconButton>
                    <Button
                      size="small"
                      color="primary"
                      sx={{ fontSize: "0.7rem" }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            component={Link}
            to={ROUTES.CARDS}
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
          >
            View All Cards
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedCardsSection;
