import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/main-layout";
import ProtectedRoute from "./layout/protected-route";
import Homepage from "./pages/homepage";

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
