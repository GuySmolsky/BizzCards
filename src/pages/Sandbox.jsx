import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Alert,
} from "@mui/material";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import Science from "@mui/icons-material/Science";
import Code from "@mui/icons-material/Code";
import BugReport from "@mui/icons-material/BugReport";
import Settings from "@mui/icons-material/Settings";
import Analytics from "@mui/icons-material/Analytics";
import { useUser } from "../users/providers/UserProvider";

const Sandbox = () => {
  const { user } = useUser();

  const sandboxFeatures = [
    {
      icon: <Analytics sx={{ fontSize: 40 }} />,
      title: "System Analytics",
      description:
        "View detailed analytics about user activity, card creation, and platform usage statistics.",
      action: "View Analytics",
      color: "primary",
    },
    {
      icon: <Settings sx={{ fontSize: 40 }} />,
      title: "System Settings",
      description:
        "Configure platform-wide settings, manage features, and control system behavior.",
      action: "Manage Settings",
      color: "secondary",
    },
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: "API Testing",
      description:
        "Test API endpoints, debug requests, and monitor system performance in real-time.",
      action: "Open API Console",
      color: "info",
    },
    {
      icon: <BugReport sx={{ fontSize: 40 }} />,
      title: "Debug Tools",
      description:
        "Access debugging tools, error logs, and system diagnostics for troubleshooting.",
      action: "Open Debug Panel",
      color: "warning",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <AdminPanelSettings
            sx={{ fontSize: 50, color: "primary.main", mr: 2 }}
          />
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
            >
              Admin Sandbox
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Administrative tools and testing environment
            </Typography>
          </Box>
        </Box>

        <Alert severity="info" sx={{ mb: 4 }}>
          <Typography variant="body1">
            <strong>Welcome, {user?.first}!</strong> This is your admin sandbox
            where you can test features, manage system settings, and access
            administrative tools.
          </Typography>
        </Alert>

        <Grid container spacing={3}>
          {sandboxFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ color: `${feature.color}.main`, mr: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" fontWeight="600">
                      {feature.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {feature.description}
                  </Typography>

                  <Chip
                    label="Admin Only"
                    size="small"
                    color={feature.color}
                    variant="outlined"
                  />
                </CardContent>

                <CardActions sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    color={feature.color}
                    fullWidth
                    startIcon={<Science />}
                  >
                    {feature.action}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" gutterBottom fontWeight="600">
            System Status
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    color="success.main"
                    fontWeight="bold"
                  >
                    ✓ Online
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    API Status
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    color="primary.main"
                    fontWeight="bold"
                  >
                    99.9%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Uptime
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card variant="outlined">
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h4" color="info.main" fontWeight="bold">
                    Fast
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Response Time
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Sandbox;
