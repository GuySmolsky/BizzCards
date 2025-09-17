import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import LocationOn from "@mui/icons-material/LocationOn";
import { Link as RouterLink } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesDict";

const Footer = () => {
  const { user } = useUser();
  const theme = useTheme();

  const navigationLinks = [
    { label: "Home", path: ROUTES.HOME, public: true },
    { label: "About", path: ROUTES.ABOUT, public: true },
    { label: "Cards", path: ROUTES.CARDS, public: true },
  ];

  const userLinks = user
    ? [
        {
          label: "Favorites",
          path: ROUTES.FAVORITE_CARDS,
          roles: ["regular", "business", "admin"],
        },
        { label: "My Cards", path: ROUTES.MY_CARDS, roles: ["business"] },
        {
          label: "Profile",
          path: ROUTES.PROFILE,
          roles: ["regular", "business", "admin"],
        },
        { label: "Sandbox", path: ROUTES.SANDBOX, roles: ["admin"] },
      ]
    : [
        { label: "Login", path: ROUTES.LOGIN, public: true },
        { label: "Register", path: ROUTES.REGISTER, public: true },
      ];

  const filteredUserLinks = userLinks.filter(
    (link) =>
      link.public || (user && (!link.roles || link.roles.includes(user.role)))
  );

  const socialLinks = [
    { icon: <Facebook />, url: "#", label: "Facebook" },
    { icon: <Twitter />, url: "#", label: "Twitter" },
    { icon: <LinkedIn />, url: "#", label: "LinkedIn" },
    { icon: <Instagram />, url: "#", label: "Instagram" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === "light" ? "grey.100" : "grey.900",
        mt: "auto",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              fontWeight="bold"
            >
              BizCards
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              The smart digital business card management system for modern
              businesses. Create, manage, and share your professional presence
              effortlessly.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: 16, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">
                  contact@bizcards.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 16, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ fontSize: 16, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">
                  123 Business St, Tech City
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.path}
                  color="text.secondary"
                  underline="hover"
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
              {filteredUserLinks.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.path}
                  color="text.secondary"
                  underline="hover"
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              Follow Us
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Stay connected with us on social media for updates and news.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  color="primary"
                  sx={{
                    "&:hover": {
                      transform: "translateY(-2px)",
                      bgcolor: "primary.main",
                      color: "white",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} BizCards. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
