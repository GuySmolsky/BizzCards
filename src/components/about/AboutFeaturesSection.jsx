import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

const AboutFeaturesSection = () => {
  const features = [
    "Create professional digital business cards",
    "Manage and organize your business contacts",
    "Share cards instantly via QR codes or links",
    "Secure cloud storage for all your data",
    "Real-time updates and synchronization",
    "Mobile-responsive design for all devices",
    "Advanced search and filtering capabilities",
    "Role-based access control",
  ];

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Platform Features
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Everything you need to manage your professional presence
      </Typography>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <CheckCircle sx={{ color: "success.main" }} />
              <Typography variant="body1">{feature}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutFeaturesSection;
