import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Alert,
  CircularProgress,
  Snackbar,
  Slide,
} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Error from "@mui/icons-material/Error";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import { createCard } from "../cards/services/cardsService";
import { cardFormSchema } from "../utils/validation";
import ROUTES from "../routes/routesDict";
import CardInfoFields from "../components/forms/CardInfoFields";
import CardAddressFields from "../components/forms/CardAddressFields";
import CardImageFields from "../components/forms/CardImageFields";

const AddCard = () => {
  const { token } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successSnackbar, setSuccessSnackbar] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(cardFormSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      const cardData = {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        phone: data.phone,
        email: data.email,
        web: data.web || "",
        image: {
          url: data.imageUrl,
          alt: data.imageAlt,
        },
        address: {
          state: data.state || "",
          country: data.country,
          city: data.city,
          street: data.street,
          houseNumber: Number(data.houseNumber),
          zip: data.zip ? Number(data.zip) : 0,
        },
      };

      await createCard(token, cardData);
      setSuccessSnackbar(true);
      setTimeout(() => {
        navigate(ROUTES.MY_CARDS);
      }, 2000);
    } catch (err) {
      setError(err.message || "Failed to create card. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={8} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          component="h1"
          variant="h4"
          gutterBottom
          fontWeight="bold"
          align="center"
        >
          Create New Business Card
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
          align="center"
        >
          Fill in the details below to create your professional digital business
          card.
        </Typography>

        {error && (
          <Alert
            severity="error"
            sx={{ mb: 3 }}
            icon={<Error />}
            onClose={() => setError("")}
          >
            <Typography variant="body2">
              <strong>Creation Failed:</strong> {error}
            </Typography>
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <CardInfoFields
            register={register}
            errors={errors}
            disabled={loading}
          />
          <CardImageFields
            register={register}
            errors={errors}
            disabled={loading}
          />
          <CardAddressFields
            register={register}
            errors={errors}
            disabled={loading}
          />

          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={() => navigate(ROUTES.MY_CARDS)}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ py: 1.5 }}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                  Creating Card...
                </>
              ) : (
                "Create Card"
              )}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={successSnackbar}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackbar(false)}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={() => setSuccessSnackbar(false)}
          icon={<CheckCircle />}
          sx={{ width: "100%" }}
        >
          <Typography variant="body2">
            <strong>Success!</strong> Your business card has been created
            successfully. Redirecting...
          </Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddCard;
