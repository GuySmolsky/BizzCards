import React from "react";
import { Typography, Box, Grid, useTheme, alpha } from "@mui/material";
import People from "@mui/icons-material/People";

const MissionSection = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={6} sx={{ mb: 8 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" gutterBottom>
          At BizCards, we believe that networking and professional connections
          should be seamless, efficient, and environmentally friendly. Our
          mission is to provide businesses and professionals with a cutting-edge
          digital platform that transforms the traditional business card
          experience.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We're committed to helping you create lasting professional
          relationships through our innovative digital business card management
          system. Whether you're a freelancer, small business owner, or part of
          a large corporation, BizCards empowers you to share your professional
          story in a modern, impactful way.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: 300,
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          }}
        >
          <People sx={{ fontSize: 100, color: "primary.main", opacity: 0.7 }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MissionSection;
