import { Outlet } from "react-router";
import Header from "../genericComponents/Header";

const MainLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
export default MainLayout;
