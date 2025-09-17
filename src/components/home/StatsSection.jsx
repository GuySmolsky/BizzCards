import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  alpha,
  CircularProgress,
  Fade,
} from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import People from "@mui/icons-material/People";
import Business from "@mui/icons-material/Business";
import Speed from "@mui/icons-material/Speed";

const StatsSection = ({ stats, loading }) => {
  const theme = useTheme();
  const [animatedStats, setAnimatedStats] = useState({
    totalCards: 0,
    totalUsers: 0,
    businessUsers: 0,
  });

  useEffect(() => {
    if (!loading && stats.totalCards > 0) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const animate = (key, target) => {
        let current = 0;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, interval);
      };
      animate("totalCards", stats.totalCards);
      setTimeout(() => animate("totalUsers", stats.totalUsers), 200);
      setTimeout(() => animate("businessUsers", stats.businessUsers), 400);
    }
  }, [loading, stats]);

  const statsData = [
    {
      icon: <TrendingUp />,
      value: animatedStats.totalCards,
      label: "Business Cards Created",
      color: theme.palette.primary.main,
      suffix: "+",
    },
    {
      icon: <People />,
      value: animatedStats.totalUsers,
      label: "Active Users",
      color: theme.palette.secondary.main,
      suffix: "+",
    },
    {
      icon: <Business />,
      value: animatedStats.businessUsers,
      label: "Business Accounts",
      color: theme.palette.success.main,
      suffix: "+",
    },
    {
      icon: <Speed />,
      value: 99,
      label: "Platform Uptime",
      color: theme.palette.info.main,
      suffix: "%",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background:
          theme.palette.mode === "light"
            ? `linear-gradient(135deg, 
                        ${alpha(theme.palette.background.default, 0.8)} 0%, 
                        ${alpha(theme.palette.primary.main, 0.02)} 100%)`
            : `linear-gradient(135deg, 
                        ${alpha(theme.palette.background.default, 0.8)} 0%, 
                        ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 70%, ${alpha(
            theme.palette.secondary.main,
            0.05
          )} 0%, transparent 50%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in={true} timeout={800}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background:
                  theme.palette.mode === "light"
                    ? "linear-gradient(135deg, #0d47a1 0%, #ff6f00 100%)"
                    : "linear-gradient(135deg, #42a5f5 0%, #ffcc02 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trusted by Professionals Worldwide
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Join thousands of professionals who are already using our platform
              to create amazing digital business experiences.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {statsData.map((stat, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Fade in={true} timeout={1000 + index * 200}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 4,
                    borderRadius: "24px",
                    background:
                      theme.palette.mode === "light"
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(26,35,126,0.8)",
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${alpha(stat.color, 0.2)}`,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    width: 280,
                    height: 220,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: `0px 20px 40px ${alpha(stat.color, 0.2)}`,
                      border: `1px solid ${alpha(stat.color, 0.4)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 70,
                      height: 70,
                      borderRadius: "20px",
                      background: `linear-gradient(135deg, ${
                        stat.color
                      } 0%, ${alpha(stat.color, 0.7)} 100%)`,
                      color: "white",
                      fontSize: "1.8rem",
                      boxShadow: `0px 8px 25px ${alpha(stat.color, 0.3)}`,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 800,
                      color: stat.color,
                      fontSize: "2.2rem",
                      lineHeight: 1,
                      height: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={30} sx={{ color: stat.color }} />
                    ) : (
                      <>
                        {stat.value.toLocaleString()}
                        {stat.suffix}
                      </>
                    )}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      fontSize: "1rem",
                      textAlign: "center",
                      lineHeight: 1.2,
                      height: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
