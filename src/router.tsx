import { createBrowserRouter } from 'react-router';
import MainLayout from './layout/main-layout';
import ProtectedRoute from './layout/protected-route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [],
      },
    ],
  },
]);
export default router;
