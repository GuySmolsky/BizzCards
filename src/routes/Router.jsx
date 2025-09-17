import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesDict";


import Layout from "../layout/components/Layout";


import Home from "../pages/Home";
import About from "../pages/About";
import Cards from "../pages/Cards";
import CardDetails from "../components/cards/CardDetails";
import MyCards from "../pages/MyCards";
import AddCard from "../pages/AddCard";
import EditCard from "../pages/EditCard";
import FavoriteCards from "../pages/FavoriteCards";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Sandbox from "../pages/Sandbox";
import CRM from "../pages/CRM";
import ErrorPage from "../pages/ErrorPage";


import ProtectedRoute from "../users/components/ProtectedRoute";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.CARDS} element={<Cards />} />
                <Route path={ROUTES.CARD_DETAILS} element={<CardDetails />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />


                <Route
                    path={ROUTES.FAVORITE_CARDS}
                    element={
                        <ProtectedRoute>
                            <FavoriteCards />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={ROUTES.PROFILE}
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />


                <Route
                    path={ROUTES.MY_CARDS}
                    element={
                        <ProtectedRoute roles={["business"]}>
                            <MyCards />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={ROUTES.ADD_CARD}
                    element={
                        <ProtectedRoute roles={["business"]}>
                            <AddCard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={ROUTES.EDIT_CARD}
                    element={
                        <ProtectedRoute roles={["business"]}>
                            <EditCard />
                        </ProtectedRoute>
                    }
                />


                <Route
                    path={ROUTES.SANDBOX}
                    element={
                        <ProtectedRoute roles={["admin"]}>
                            <Sandbox />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={ROUTES.CRM}
                    element={
                        <ProtectedRoute roles={["admin"]}>
                            <CRM />
                        </ProtectedRoute>
                    }
                />
            </Route>


            <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        </Routes>
    );
};

export default Router;