import React from "react";
import { TextField, Grid, Typography, Box } from "@mui/material";

const PersonalInfoFields = ({ register, errors, disabled = false, user = null, isEditMode = false }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom color="primary">
                Personal Information
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("first")}
                        margin="normal"
                        required
                        fullWidth
                        id="first"
                        label="First Name"
                        name="first"
                        autoComplete="given-name"
                        error={!!errors.first}
                        helperText={errors.first?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("middle")}
                        margin="normal"
                        fullWidth
                        id="middle"
                        label="Middle Name (Optional)"
                        name="middle"
                        autoComplete="additional-name"
                        error={!!errors.middle}
                        helperText={errors.middle?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        {...register("last")}
                        margin="normal"
                        required
                        fullWidth
                        id="last"
                        label="Last Name"
                        name="last"
                        autoComplete="family-name"
                        error={!!errors.last}
                        helperText={errors.last?.message}
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
                        autoComplete="tel"
                        placeholder="050-1234567"
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        {...(isEditMode ? {} : register("email"))}
                        margin="normal"
                        required={!isEditMode}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        value={isEditMode ? (user?.email || "") : undefined}
                        autoComplete="email"
                        error={!!errors.email}
                        helperText={isEditMode ? "Email cannot be changed after registration" : errors.email?.message}
                        disabled={isEditMode || disabled}
                        slotProps={isEditMode ? { readOnly: true } : undefined}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        {...register("password")}
                        margin="normal"
                        fullWidth
                        name="password"
                        label={isEditMode ? "Password (Optional - leave empty to keep current)" : "Password"}
                        type="password"
                        id="password"
                        autoComplete={isEditMode ? "new-password" : "current-password"}
                        required={!isEditMode}
                        error={!!errors.password}
                        helperText={isEditMode 
                            ? (errors.password?.message || "Leave empty to keep current password. If changing: 8+ characters with 1 uppercase, 1 lowercase, 4+ numbers, and 1 special character")
                            : errors.password?.message
                        }
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        {...register("imageUrl")}
                        margin="normal"
                        fullWidth
                        id="imageUrl"
                        label="Profile Image URL (Optional)"
                        name="imageUrl"
                        error={!!errors.imageUrl}
                        helperText={errors.imageUrl?.message}
                        disabled={disabled}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        {...register("imageAlt")}
                        margin="normal"
                        fullWidth
                        id="imageAlt"
                        label="Image Description (Optional)"
                        name="imageAlt"
                        error={!!errors.imageAlt}
                        helperText={errors.imageAlt?.message}
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PersonalInfoFields;