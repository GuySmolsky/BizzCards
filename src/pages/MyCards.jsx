import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Slide,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Warning from "@mui/icons-material/Warning";
import { useNavigate } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import { getUserCards, deleteCard } from "../cards/services/cardsService";
import CardItem from "../components/cards/CardItem";
import ROUTES from "../routes/routesDict";
const MyCards = () => {
  const { user, token } = useUser();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    cardId: null,
    cardTitle: "",
  });
  const [deleting, setDeleting] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [deletedCardTitle, setDeletedCardTitle] = useState("");
  useEffect(() => {
    const fetchMyCards = async () => {
      try {
        setLoading(true);
        const data = await getUserCards(token);
        setCards(data);
      } catch (err) {
        setError("Failed to load your cards. Please try again later.");
        console.error("Error fetching user cards:", err);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchMyCards();
    }
  }, [token]);
  const handleEdit = (cardId) => {
    navigate(`${ROUTES.EDIT_CARD.replace(":id", cardId)}`);
  };
  const handleDeleteClick = (cardId) => {
    const card = cards.find((c) => c._id === cardId);
    setDeleteDialog({
      open: true,
      cardId,
      cardTitle: card?.title || "this card",
    });
  };
  const handleDeleteConfirm = async () => {
    try {
      setDeleting(true);
      await deleteCard(token, deleteDialog.cardId);
      setCards((prev) =>
        prev.filter((card) => card._id !== deleteDialog.cardId)
      );
      setDeletedCardTitle(deleteDialog.cardTitle);
      setDeleteDialog({ open: false, cardId: null, cardTitle: "" });
      setSuccessSnackbar(true);
    } catch (err) {
      setError("Failed to delete card. Please try again.");
      console.error("Error deleting card:", err);
    } finally {
      setDeleting(false);
    }
  };
  const handleDeleteCancel = () => {
    setDeleteDialog({ open: false, cardId: null, cardTitle: "" });
  };
  const handleAddCard = () => {
    navigate(ROUTES.ADD_CARD);
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
            Loading your business cards...
          </Typography>
        </Box>
      </Container>
    );
  }
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            My Business Cards
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Manage and edit your digital business cards
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddCard}
          size="large"
        >
          Create New Card
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}
      {cards.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h5" gutterBottom>
            No business cards yet
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Create your first digital business card to get started!
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddCard}
            size="large"
          >
            Create Your First Card
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card._id}>
              <CardItem
                card={card}
                onEdit={handleEdit}
                onDelete={handleDeleteClick}
                showActions={true}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Dialog
        open={deleteDialog.open}
        onClose={handleDeleteCancel}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Warning color="error" />
            Confirm Delete
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>"{deleteDialog.cardTitle}"</strong>? This action cannot be
            undone and will permanently remove the card from your account.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} disabled={deleting}>
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color="error"
            variant="contained"
            disabled={deleting}
            startIcon={deleting ? <CircularProgress size={16} /> : <Delete />}
          >
            {deleting ? "Deleting..." : "Delete Card"}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={successSnackbar}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackbar(false)}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={() => setSuccessSnackbar(false)}
          icon={<CheckCircle />}
          sx={{ width: "100%" }}
        >
          <Typography variant="body2">
            <strong>Card Deleted!</strong> "{deletedCardTitle}" has been
            permanently removed.
          </Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default MyCards;
