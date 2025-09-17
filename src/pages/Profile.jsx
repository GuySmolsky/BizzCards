import React, { useState } from "react";
import {
    Container,
    Paper,
    Box,
    Alert,
    Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useUser } from "../users/providers/UserProvider";
import { updateUserProfile } from "../users/services/userService";
import { profileSchema } from "../utils/validation";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileEditForm from "../components/profile/ProfileEditForm";
import ProfileViewMode from "../components/profile/ProfileViewMode";

const Profile = () => {
    const { user, token, updateUser } = useUser();
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(profileSchema),
        mode: "onChange",
    });

    const handleEditClick = () => {

        setValue("first", user?.name?.first || user?.first || "");
        setValue("middle", user?.name?.middle || user?.middle || "");
        setValue("last", user?.name?.last || user?.last || "");
        setValue("phone", user?.phone || "");
        setValue("imageUrl", user?.image?.url || "");
        setValue("imageAlt", user?.image?.alt || "");
        setValue("country", user?.address?.country || "");
        setValue("state", user?.address?.state || "");
        setValue("city", user?.address?.city || "");
        setValue("street", user?.address?.street || "");
        setValue("houseNumber", user?.address?.houseNumber || "");
        setValue("zip", user?.address?.zip || "");

        setEditing(true);
        setError("");
        setSuccess("");
    };

    const handleCancelEdit = () => {
        setEditing(false);
        reset();
        setError("");
        setSuccess("");
    };

    const onSubmit = async (data) => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const updateData = {
                name: {
                    first: data.first,
                    middle: data.middle || "",
                    last: data.last,
                },
                phone: data.phone,
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
            };


            if (data.password && data.password.trim()) {
                updateData.password = data.password;
            }


            try {
                await updateUserProfile(token, updateData);
                updateUser(updateData);
                setSuccess("Profile updated successfully!");
            } catch (apiError) {

                console.warn("API update failed, updating locally:", apiError.message);
                updateUser(updateData);
                setSuccess("Profile updated locally (API update not available)!");
            }

            setEditing(false);
        } catch (err) {
            console.error("Profile update error:", err);
            setError(err.message || "Failed to update profile. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="md" sx={{ py: 4 }}>
            <Paper
                elevation={8}
                sx={{
                    p: 4,
                    borderRadius: 3,
                }}
            >
                <ProfileHeader
                    user={user}
                    editing={editing}
                    onEditClick={handleEditClick}
                />

                <Divider sx={{ mb: 4 }} />

                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                {success && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                        {success}
                    </Alert>
                )}

                {editing ? (
                    <ProfileEditForm
                        register={register}
                        errors={errors}
                        loading={loading}
                        onSubmit={handleSubmit(onSubmit)}
                        onCancel={handleCancelEdit}
                        user={user}
                    />
                ) : (
                    <ProfileViewMode user={user} />
                )}
            </Paper>
        </Container>
    );
};

export default Profile;