import React from "react";
import {
    Box,
    Card,
    CardMedia,
    Typography,
} from "@mui/material";

const CardDetailsImage = ({ card }) => {
    return (
        <Box sx={{ position: "sticky", top: 20 }}>
            <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                <CardMedia
                    component="img"
                    image={card.image?.url || "/api/placeholder/400/300"}
                    alt={card.image?.alt || card.title}
                    sx={{
                        width: "100%",
                        height: 400,
                        objectFit: "cover",
                    }}
                />
            </Card>
            
            {card.image?.alt && (
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mt: 1, textAlign: "center" }}
                >
                    {card.image.alt}
                </Typography>
            )}
        </Box>
    );
};

export default CardDetailsImage;