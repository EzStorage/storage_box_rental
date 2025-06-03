import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import { useMediaQuery, useTheme } from "@mui/material";
import Footer from "src/pages/Homepage/Footer";

const MainLayout: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const isShowHeaderFooter = location.pathname === "/" || !isMobile;

    return (
        <>
            {isShowHeaderFooter && <Header />}
            <Outlet />
            {isShowHeaderFooter && <Footer />}
        </>
    );
};
export default MainLayout;
