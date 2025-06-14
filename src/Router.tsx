import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./layout/ProtectedRoute";

import Login from "./pages/Login";
import { Booking } from "@pages/BookingFlow";

import Homepage from "./pages/Homepage/index";
import PaymentSuccess from "./pages/PaymentStatus/PaymentSuccess";
import PaymentFailed from "./pages/PaymentStatus/PaymentFailed";
import { MyBooking } from "@pages/MyBooking";
import { Profile } from "@pages/Profile";

const router = createBrowserRouter([
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
            {
                path: "/booking",
                element: <Booking />,
            },
            {
                path: "/my-booking",
                element: <MyBooking />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "payment-success",
                element: <PaymentSuccess />,
            },
            {
                path: "payment-failed",
                element: <PaymentFailed />,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <ProtectedRoute />,
                        children: [],
                    },
                ],
            },
        ],
    },
]);

export default router;
