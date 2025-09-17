import React from "react";
import { Typography, Box, Grid, Card } from "@mui/material";
import Business from "@mui/icons-material/Business";
import Speed from "@mui/icons-material/Speed";
import Security from "@mui/icons-material/Security";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Business sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />,
      title: "1. Create Your Card",
      description:
        "Sign up and create your professional digital business card with all your contact information and branding.",
    },
    {
      icon: <Speed sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />,
      title: "2. Share Instantly",
      description:
        "Share your card via QR code, direct link, or through our platform. No more lost paper cards!",
    },
    {
      icon: <Security sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />,
      title: "3. Manage & Track",
      description:
        "Keep track of your connections, update your information in real-time, and manage your professional network.",
    },
  ];

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        How to Use BizCards
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ p: 3, textAlign: "center", height: "100%" }}>
              {step.icon}
              <Typography variant="h5" gutterBottom>
                {step.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {step.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
