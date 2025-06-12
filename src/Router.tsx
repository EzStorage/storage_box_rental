import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./layout/ProtectedRoute";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { Booking } from "@pages/BookingFlow";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            // {
            //     path: "/booking",
            //     element: <Booking />,
            // },
            {
                element: <ProtectedRoute />,
                children: [],
            },
        ],
    },
]);
export default Router;
