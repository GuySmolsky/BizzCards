import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Save from "@mui/icons-material/Save";
import Cancel from "@mui/icons-material/Cancel";
import PersonalInfoFields from "../forms/PersonalInfoFields";
import AddressFields from "../forms/AddressFields";

const ProfileEditForm = ({
  register,
  errors,
  loading,
  onSubmit,
  onCancel,
  user,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  const handleButtonClick = (e) => {};

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{ width: "100%" }}>
      <PersonalInfoFields
        register={register}
        errors={errors}
        disabled={loading}
        user={user}
        isEditMode={true}
      />
      <AddressFields register={register} errors={errors} disabled={loading} />

      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Button
          type="button"
          fullWidth
          variant="outlined"
          onClick={onCancel}
          disabled={loading}
          startIcon={<Cancel />}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{ py: 1.5 }}
          startIcon={loading ? <CircularProgress size={16} /> : <Save />}
          onClick={handleButtonClick}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileEditForm;
