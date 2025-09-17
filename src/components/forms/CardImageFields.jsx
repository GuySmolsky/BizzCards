import React from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";

const CardImageFields = ({ register, errors, disabled = false }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom color="primary">
                Card Image
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        {...register("imageUrl")}
                        margin="normal"
                        required
                        fullWidth
                        id="imageUrl"
                        label="Image URL"
                        name="imageUrl"
                        placeholder="https://example.com/your-business-image.jpg"
                        error={!!errors.imageUrl}
                        helperText={errors.imageUrl?.message || "Add a professional image that represents your business"}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        {...register("imageAlt")}
                        margin="normal"
                        required
                        fullWidth
                        id="imageAlt"
                        label="Image Description"
                        name="imageAlt"
                        placeholder="Describe your image for accessibility"
                        error={!!errors.imageAlt}
                        helperText={errors.imageAlt?.message || "This helps visually impaired users understand your image"}
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default CardImageFields;