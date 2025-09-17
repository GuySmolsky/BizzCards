import React from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";

const AddressFields = ({ register, errors, disabled = false }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom color="primary">
                Address Information
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("country")}
                        margin="normal"
                        required
                        fullWidth
                        id="country"
                        label="Country"
                        name="country"
                        autoComplete="country-name"
                        error={!!errors.country}
                        helperText={errors.country?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("state")}
                        margin="normal"
                        fullWidth
                        id="state"
                        label="State/Province (Optional)"
                        name="state"
                        autoComplete="address-level1"
                        error={!!errors.state}
                        helperText={errors.state?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("city")}
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        name="city"
                        autoComplete="address-level2"
                        error={!!errors.city}
                        helperText={errors.city?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("street")}
                        margin="normal"
                        required
                        fullWidth
                        id="street"
                        label="Street Address"
                        name="street"
                        autoComplete="street-address"
                        error={!!errors.street}
                        helperText={errors.street?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("houseNumber")}
                        margin="normal"
                        required
                        fullWidth
                        id="houseNumber"
                        label="House Number"
                        name="houseNumber"
                        type="number"
                        error={!!errors.houseNumber}
                        helperText={errors.houseNumber?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("zip")}
                        margin="normal"
                        fullWidth
                        id="zip"
                        label="ZIP/Postal Code (Optional)"
                        name="zip"
                        type="number"
                        autoComplete="postal-code"
                        error={!!errors.zip}
                        helperText={errors.zip?.message}
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddressFields;