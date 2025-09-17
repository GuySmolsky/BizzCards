import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import ROUTES from "../../routes/routesDict";
import { Box, CircularProgress, Typography } from "@mui/material";

const ProtectedRoute = ({ children, roles = [] }) => {
    const { user, loading } = useUser();
    const location = useLocation();


    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="50vh"
                flexDirection="column"
                gap={2}
            >
                <CircularProgress size={40} />
                <Typography variant="body2" color="text.secondary">
                    Loading...
                </Typography>
            </Box>
        );
    }


    if (!user) {
        return (
            <Navigate
                to={ROUTES.LOGIN}
                state={{ from: location.pathname }}
                replace
            />
        );
    }


    if (roles.length > 0 && !roles.includes(user.role)) {
        return <Navigate to={ROUTES.HOME} replace />;
    }


    return children;
};

export default ProtectedRoute;