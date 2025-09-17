import React from "react";
import { Container, Typography, Box } from "@mui/material";
import MissionSection from "../components/about/MissionSection";
import AboutFeaturesSection from "../components/about/AboutFeaturesSection";
import StatsSection from "../components/about/StatsSection";
import HowItWorksSection from "../components/about/HowItWorksSection";
import ContactSection from "../components/about/ContactSection";

const About = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>

            <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                    About BizCards
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                    Revolutionizing how professionals connect and share their business information
                </Typography>
            </Box>

            <MissionSection />
            <AboutFeaturesSection />
            <StatsSection />
            <HowItWorksSection />
            <ContactSection />
        </Container>
    );
};

export default About;