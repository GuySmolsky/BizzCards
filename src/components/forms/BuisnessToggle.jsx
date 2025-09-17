import React from "react";
import {
  FormControlLabel,
  Switch,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import Business from "@mui/icons-material/Business";
import Person from "@mui/icons-material/Person";

const BusinessToggle = ({ register, watch, disabled = false }) => {
  const isBusiness = watch("isBusiness");

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom color="primary">
        Account Type
      </Typography>

      <Card
        sx={{
          border: (theme) =>
            `2px solid ${
              isBusiness ? theme.palette.primary.main : theme.palette.grey[300]
            }`,
          transition: "border-color 0.3s ease",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {isBusiness ? (
              <Business sx={{ mr: 2, color: "primary.main" }} />
            ) : (
              <Person sx={{ mr: 2, color: "text.secondary" }} />
            )}

            <FormControlLabel
              control={
                <Switch
                  {...register("isBusiness")}
                  checked={isBusiness}
                  disabled={disabled}
                  color="primary"
                />
              }
              label={
                <Typography variant="h6" fontWeight="500">
                  {isBusiness ? "Business Account" : "Personal Account"}
                </Typography>
              }
            />
          </Box>

          <Typography variant="body2" color="text.secondary">
            {isBusiness
              ? "Business accounts can create and manage digital business cards. Perfect for entrepreneurs, freelancers, and companies."
              : "Personal accounts can view and favorite business cards from other users. Great for networking and discovering services."}
          </Typography>

          {isBusiness && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                bgcolor: "primary.50",
                borderRadius: 1,
                border: (theme) => `1px solid ${theme.palette.primary.light}`,
              }}
            >
              <Typography variant="body2" color="primary.main" fontWeight="500">
                Business Account Features:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Create unlimited business cards • Edit and manage your cards •
                Track card views and interactions • Professional dashboard
                access
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BusinessToggle;
