import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../app/hooks";

const ProtectedRoute: React.FC = () => {
    const user = useAppSelector(state => state.auth);
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};
export default ProtectedRoute;
