import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./layout/ProtectedRoute";
import Homepage from "./pages/Homepage/Homepage";

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
                element: <ProtectedRoute />,
                children: [],
            },
        ],
    },
]);
export default router;
