import React from "react";
import { Typography, Box, Grid, Card, useTheme, alpha } from "@mui/material";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";

const ContactSection = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />,
      title: "Email Us",
      details: "support@bizcards.com",
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />,
      title: "Visit Us",
      details: "123 Business St, Tech City",
    },
  ];

  return (
    <Card sx={{ p: 4, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Have questions? We'd love to hear from you.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {contactInfo.map((contact, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: "center" }}>
              {contact.icon}
              <Typography variant="h6" gutterBottom>
                {contact.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {contact.details}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default ContactSection;
