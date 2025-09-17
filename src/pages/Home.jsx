import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { getAllCards } from "../cards/services/cardsService";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import FeaturedCardsSection from "../components/home/FeaturedCardsSection";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
    const [featuredCards, setFeaturedCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalCards: 0,
        totalUsers: 0,
        businessUsers: 0,
    });

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const cards = await getAllCards();
                setFeaturedCards(cards.slice(0, 6));
                
                const businessCards = cards.filter(card => card.isBusiness);
                setStats({
                    totalCards: cards.length,
                    totalUsers: cards.length,
                    businessUsers: businessCards.length,
                });
            } catch (error) {
                console.error("Error fetching home data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHomeData();
    }, []);

    return (
        <Box>
            <HeroSection />
            <FeaturesSection />
            <StatsSection stats={stats} loading={loading} />
            <FeaturedCardsSection cards={featuredCards} loading={loading} />
            <CTASection />
        </Box>
    );
};

export default Home;