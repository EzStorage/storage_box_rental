import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./layout/ProtectedRoute";
import { Booking } from "@pages/BookingFlow";
import { Homepage } from "@pages/Homepage";
import { MyBooking } from "./pages/MyBooking";
import { Login } from "@pages/Login";
import { Profile } from "@pages/Profile";
import { ProcessResult } from "@pages/ProcessResult";
import { BookingDetailsElement } from "@pages/MyBooking/components/BookingDetails";

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
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/my-bookings/:bookingID",
                element: <BookingDetailsElement />,
            },
            {
                path: "my-bookings",
                element: <MyBooking />,
            },
            {
                path: `:processFlow/:status`,
                element: <ProcessResult />,
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
