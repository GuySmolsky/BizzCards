import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesDict";

const ErrorPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={8}
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <ErrorOutline
            sx={{
              fontSize: 120,
              color: theme.palette.error.main,
              mb: 2,
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: "6rem",
              fontWeight: "bold",
              color: theme.palette.error.main,
              mb: 2,
            }}
          >
            404
          </Typography>

          <Typography variant="h4" component="h2" gutterBottom>
            Page Not Found
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<Home />}
            onClick={handleGoHome}
            sx={{ px: 4, py: 1.5 }}
          >
            Go to Homepage
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<ArrowBack />}
            onClick={handleGoBack}
            sx={{ px: 4, py: 1.5 }}
          >
            Go Back
          </Button>
        </Box>

        <Box
          sx={{ mt: 6, pt: 4, borderTop: `1px solid ${theme.palette.divider}` }}
        >
          <Typography variant="body2" color="text.secondary">
            If you believe this is an error, please contact our support team.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ErrorPage;
