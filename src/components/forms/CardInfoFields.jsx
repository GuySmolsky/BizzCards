import React from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";

const CardInfoFields = ({ register, errors, disabled = false }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom color="primary">
                Card Information
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("title")}
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Business/Card Title"
                        name="title"
                        placeholder="e.g., John's Photography Studio"
                        error={!!errors.title}
                        helperText={errors.title?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("subtitle")}
                        margin="normal"
                        required
                        fullWidth
                        id="subtitle"
                        label="Subtitle/Position"
                        name="subtitle"
                        placeholder="e.g., Professional Photographer"
                        error={!!errors.subtitle}
                        helperText={errors.subtitle?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        {...register("description")}
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        multiline
                        rows={3}
                        placeholder="Tell people about your business or services..."
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("phone")}
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        placeholder="050-1234567"
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("email")}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="business@example.com"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        {...register("web")}
                        margin="normal"
                        fullWidth
                        id="web"
                        label="Website (Optional)"
                        name="web"
                        placeholder="https://www.yourwebsite.com"
                        error={!!errors.web}
                        helperText={errors.web?.message}
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default CardInfoFields;