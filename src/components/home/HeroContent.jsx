import React from "react";
import { Box, Typography, Button, useTheme, alpha, Slide } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesDict";

const HeroContent = () => {
  const theme = useTheme();
  const { user } = useUser();

  return (
    <Slide direction="right" in={true} timeout={800}>
      <Box>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 3,
            paddingBottom: 1,
            background:
              theme.palette.mode === "light"
                ? "linear-gradient(135deg, #0d47a1 0%, #ff6f00 100%)"
                : "linear-gradient(135deg, #42a5f5 0%, #ffcc02 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",

            overflow: "visible",
            wordBreak: "normal",
            hyphens: "none",
          }}
        >
          Digital Business Cards for the
          <Box
            component="span"
            sx={{
              display: "block",
              marginTop: 1,
            }}
          >
            Future of Networking
          </Box>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: theme.palette.text.secondary,
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Create stunning, interactive business cards that showcase your
          professional brand. Share instantly, track engagement, and build
          meaningful connections in the digital age.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {!user ? (
            <>
              <Button
                component={Link}
                to={ROUTES.REGISTER}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  boxShadow: `0px 8px 25px ${alpha(
                    theme.palette.primary.main,
                    0.4
                  )}`,
                  "&:hover": {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                    transform: "translateY(-2px)",
                    boxShadow: `0px 12px 35px ${alpha(
                      theme.palette.primary.main,
                      0.5
                    )}`,
                  },
                }}
              >
                Get Started Free
              </Button>
              <Button
                component={Link}
                to={ROUTES.CARDS}
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  borderRadius: "16px",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                    boxShadow: `0px 8px 25px ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                  },
                }}
              >
                Explore Cards
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to={user.isBusiness ? ROUTES.MY_CARDS : ROUTES.CARDS}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  boxShadow: `0px 8px 25px ${alpha(
                    theme.palette.primary.main,
                    0.4
                  )}`,
                  "&:hover": {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                    transform: "translateY(-2px)",
                    boxShadow: `0px 12px 35px ${alpha(
                      theme.palette.primary.main,
                      0.5
                    )}`,
                  },
                }}
              >
                {user.isBusiness ? "My Dashboard" : "Browse Cards"}
              </Button>
              <Button
                component={Link}
                to={ROUTES.FAVORITE_CARDS}
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  borderRadius: "16px",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                    boxShadow: `0px 8px 25px ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                  },
                }}
              >
                My Favorites
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Slide>
  );
};

export default HeroContent;
