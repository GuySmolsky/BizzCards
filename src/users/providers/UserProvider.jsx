import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserProfile } from "../services/userService";
const UserContext = createContext();
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const initializeUser = () => {
            try {
                const storedToken = localStorage.getItem("token");
                if (storedToken) {
                    const decodedToken = jwtDecode(storedToken);
                    const currentTime = Date.now() / 1000;
                    if (decodedToken.exp > currentTime) {
                        setToken(storedToken);
                        setUser({
                            ...decodedToken,
                            favCards: decodedToken.favCards || [],
                        });
                    } else {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                    }
                }
            } catch (error) {
                console.error("Error initializing user:", error);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            } finally {
                setLoading(false);
            }
        };
        initializeUser();
    }, []);
    const login = async (token) => {
        try {
            const decodedUser = jwtDecode(token);

            setToken(token);
            localStorage.setItem("token", token);
            try {
                const completeUserProfile = await getUserProfile(token);
                const userWithCompleteData = {
                    _id: decodedUser._id,
                    first: completeUserProfile.name?.first || "",
                    middle: completeUserProfile.name?.middle || "",
                    last: completeUserProfile.name?.last || "",
                    name: {
                        first: completeUserProfile.name?.first || "",
                        middle: completeUserProfile.name?.middle || "",
                        last: completeUserProfile.name?.last || "",
                    },
                    email: completeUserProfile.email || "",
                    phone: completeUserProfile.phone || "",
                    role: completeUserProfile.isBusiness ? "business" : (completeUserProfile.isAdmin ? "admin" : "regular"),
                    isAdmin: completeUserProfile.isAdmin || false,
                    isBusiness: completeUserProfile.isBusiness || false,
                    image: completeUserProfile.image || {},
                    address: completeUserProfile.address || {},
                    favCards: completeUserProfile.favCards || [],
                };
                setUser(userWithCompleteData);
                localStorage.setItem("user", JSON.stringify(userWithCompleteData));
            } catch (apiError) {
                const storedUserData = localStorage.getItem("registrationData");
                if (storedUserData) {
                    try {
                        const parsedData = JSON.parse(storedUserData);
                        const userFromRegistration = {
                            _id: decodedUser._id,
                            first: parsedData.name?.first || parsedData.first || "",
                            middle: parsedData.name?.middle || parsedData.middle || "",
                            last: parsedData.name?.last || parsedData.last || "",
                            name: {
                                first: parsedData.name?.first || parsedData.first || "",
                                middle: parsedData.name?.middle || parsedData.middle || "",
                                last: parsedData.name?.last || parsedData.last || "",
                            },
                            email: parsedData.email || "",
                            phone: parsedData.phone || "",
                            role: parsedData.isBusiness ? "business" : "regular",
                            isAdmin: decodedUser.isAdmin || false,
                            isBusiness: parsedData.isBusiness || false,
                            image: parsedData.image || {},
                            address: parsedData.address || {},
                            favCards: decodedUser.favCards || [],
                        };
                        setUser(userFromRegistration);
                        localStorage.setItem("user", JSON.stringify(userFromRegistration));
                        return;
                    } catch (parseError) {
                        console.error("Failed to parse registration data:", parseError);
                    }
                }
                const userWithDefaults = {
                    _id: decodedUser._id,
                    first: decodedUser.first || "",
                    middle: decodedUser.middle || "",
                    last: decodedUser.last || "",
                    name: {
                        first: decodedUser.first || "",
                        middle: decodedUser.middle || "",
                        last: decodedUser.last || "",
                    },
                    email: decodedUser.email || "",
                    phone: decodedUser.phone || "",
                    role: decodedUser.isBusiness ? "business" : (decodedUser.isAdmin ? "admin" : "regular"),
                    isAdmin: decodedUser.isAdmin || false,
                    isBusiness: decodedUser.isBusiness || false,
                    image: decodedUser.image || {},
                    address: decodedUser.address || {},
                    favCards: decodedUser.favCards || [],
                };
                setUser(userWithDefaults);
                localStorage.setItem("user", JSON.stringify(userWithDefaults));
            }
        } catch (error) {
            console.error("Login error:", error);
            throw new Error("Invalid token received");
        }
    };
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };
    const updateUser = (updatedUserData) => {
        const updatedUser = { 
            ...user, 
            ...updatedUserData,
            first: updatedUserData.name?.first || updatedUserData.first || user.first,
            middle: updatedUserData.name?.middle || updatedUserData.middle || user.middle,
            last: updatedUserData.name?.last || updatedUserData.last || user.last,
            name: {
                first: updatedUserData.name?.first || updatedUserData.first || user.first,
                middle: updatedUserData.name?.middle || updatedUserData.middle || user.middle,
                last: updatedUserData.name?.last || updatedUserData.last || user.last,
            }
        };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
    };
    const addToFavorites = (cardId) => {
        if (!user) return;
        const updatedFavCards = [...(user.favCards || []), cardId];
        const updatedUser = { ...user, favCards: updatedFavCards };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
    };
    const removeFromFavorites = (cardId) => {
        if (!user) return;
        const updatedFavCards = (user.favCards || []).filter(id => id !== cardId);
        const updatedUser = { ...user, favCards: updatedFavCards };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
    };
    const toggleFavorite = (cardId) => {
        if (!user) return;
        const favCards = user.favCards || [];
        const isFavorite = favCards.includes(cardId);
        if (isFavorite) {
            removeFromFavorites(cardId);
        } else {
            addToFavorites(cardId);
        }
    };
    const isAdmin = () => user?.role === "admin";
    const isBusiness = () => user?.role === "business";
    const isLoggedIn = () => !!user;
    const value = {
        user,
        token,
        loading,
        login,
        logout,
        updateUser,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isAdmin,
        isBusiness,
        isLoggedIn,
    };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;