import { createBrowserRouter  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./layout/ProtectedRoute";


import Login from "./pages/Login";
import { Booking } from "@pages/BookingFlow";

import Homepage from "./pages/Homepage/index";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";


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
                element: <ProtectedRoute />,
                children: [],
            },

        ],
      },
    ],
  },
]);

export default router;
