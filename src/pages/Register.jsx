import React, { useState } from "react";
import {
    Container,
    Paper,
    Typography,
    Box,
    Alert,
    Link,
    CircularProgress,
    Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { registerUser } from "../users/services/userService";
import { registerSchema } from "../utils/validation";
import ROUTES from "../routes/routesDict";
import PersonalInfoFields from "../components/forms/PersonalInfoFields";
import AddressFields from "../components/forms/AddressFields";
import BusinessToggle from './../components/forms/BuisnessToggle';


const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: joiResolver(registerSchema),
        defaultValues: {
            isBusiness: false,
        },
    });

    const onSubmit = async (data) => {
        setLoading(true);
        setError("");

        try {

            const userData = {
                name: {
                    first: data.first,
                    middle: data.middle || "",
                    last: data.last,
                },
                phone: data.phone,
                email: data.email,
                password: data.password,
                image: {
                    url: data.imageUrl || "",
                    alt: data.imageAlt || "",
                },
                address: {
                    state: data.state || "",
                    country: data.country,
                    city: data.city,
                    street: data.street,
                    houseNumber: Number(data.houseNumber),
                    zip: data.zip ? Number(data.zip) : 0,
                },
                isBusiness: data.isBusiness || false,
                isAdmin: data.email === "admin2@admin.com", 
            };

            await registerUser(userData);
            
            localStorage.setItem("registrationData", JSON.stringify(userData));
            
            setSuccess(true);

            setTimeout(() => {
                navigate(ROUTES.LOGIN);
            }, 2000);
        } catch (err) {
            setError(err.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <Container component="main" maxWidth="sm" sx={{ py: 8 }}>
                <Paper elevation={8} sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
                    <Alert severity="success" sx={{ mb: 3 }}>
                        Registration successful! Redirecting to login page...
                    </Alert>
                </Paper>
            </Container>
        );
    }

    return (
        <Container component="main" maxWidth="md" sx={{ py: 8 }}>
            <Paper
                elevation={8}
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 3,
                }}
            >
                <Typography component="h1" variant="h4" gutterBottom fontWeight="bold">
                    Create Account
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Join BizCards and start managing your digital business cards today.
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ width: "100%", mb: 3 }}>
                        {error}
                    </Alert>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ width: "100%" }}
                >
                    <PersonalInfoFields 
                        register={register} 
                        errors={errors} 
                        disabled={loading} 
                        isEditMode={false}
                    />

                    <AddressFields register={register} errors={errors} disabled={loading} />

                    <BusinessToggle register={register} watch={watch} disabled={loading} />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, py: 1.5 }}
                        disabled={loading}
                    >
                        {loading ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            "Create Account"
                        )}
                    </Button>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="body2">
                            Already have an account?{" "}
                            <Link component={RouterLink} to={ROUTES.LOGIN} underline="hover">
                                Sign in here
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;