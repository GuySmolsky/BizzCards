import React, { useState, useEffect } from "react";
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
import Warning from "@mui/icons-material/Warning";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import { getCardById, updateCard } from "../cards/services/cardsService";
import { cardFormSchema } from "../utils/validation";
import ROUTES from "../routes/routesDict";
import CardInfoFields from "../components/forms/CardInfoFields";
import CardAddressFields from "../components/forms/CardAddressFields";
import CardImageFields from "../components/forms/CardImageFields";

const EditCard = () => {
  const { id } = useParams();
  const { token } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successSnackbar, setSuccessSnackbar] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(cardFormSchema),
  });

  useEffect(() => {
    const fetchCard = async () => {
      try {
        setLoading(true);
        const card = await getCardById(id);

        setValue("title", card.title);
        setValue("subtitle", card.subtitle);
        setValue("description", card.description);
        setValue("phone", card.phone);
        setValue("email", card.email);
        setValue("web", card.web || "");
        setValue("imageUrl", card.image?.url || "");
        setValue("imageAlt", card.image?.alt || "");
        setValue("country", card.address?.country || "");
        setValue("state", card.address?.state || "");
        setValue("city", card.address?.city || "");
        setValue("street", card.address?.street || "");
        setValue("houseNumber", card.address?.houseNumber || "");
        setValue("zip", card.address?.zip || "");
      } catch (err) {
        setError("Failed to load card details. Please try again.");
        console.error("Error fetching card:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCard();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setSaving(true);
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

      await updateCard(token, id, cardData);
      setSuccessSnackbar(true);
      setTimeout(() => {
        navigate(ROUTES.MY_CARDS);
      }, 2000);
    } catch (err) {
      setError(err.message || "Failed to update card. Please try again.");
    } finally {
      setSaving(false);
    }
  };
  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
          flexDirection="column"
          gap={2}
        >
          <CircularProgress size={50} />
          <Typography variant="body1" color="text.secondary">
            Loading card details...
          </Typography>
        </Box>
      </Container>
    );
  }
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
          Edit Business Card
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4 }}
          align="center"
        >
          Update your business card information below.
        </Typography>
        {error && (
          <Alert
            severity="error"
            sx={{ mb: 3 }}
            icon={<Error />}
            onClose={() => setError("")}
          >
            <Typography variant="body2">
              <strong>Update Failed:</strong> {error}
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
            disabled={saving}
          />
          <CardImageFields
            register={register}
            errors={errors}
            disabled={saving}
          />
          <CardAddressFields
            register={register}
            errors={errors}
            disabled={saving}
          />
          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={() => navigate(ROUTES.MY_CARDS)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={saving}
              sx={{ py: 1.5 }}
            >
              {saving ? (
                <>
                  <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                  Saving Changes...
                </>
              ) : (
                "Save Changes"
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
            <strong>Success!</strong> Your business card has been updated
            successfully. Redirecting...
          </Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default EditCard;
