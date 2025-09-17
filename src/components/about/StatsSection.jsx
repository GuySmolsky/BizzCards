import React from "react";
import {
    Typography,
    Box,
    Grid,
    Card,
    useTheme,
    alpha,
} from "@mui/material";

const StatsSection = () => {
    const theme = useTheme();

    const stats = [
        { number: "10,000+", label: "Active Users" },
        { number: "50,000+", label: "Business Cards" },
        { number: "99.9%", label: "Uptime" },
        { number: "24/7", label: "Support" },
    ];

    return (
        <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Our Impact
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
                {stats.map((stat, index) => (
                    <Grid item xs={6} md={3} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                p: 3,
                                bgcolor: alpha(theme.palette.primary.main, 0.05),
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                            }}
                        >
                            <Typography variant="h3" color="primary.main" fontWeight="bold">
                                {stat.number}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                {stat.label}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StatsSection;