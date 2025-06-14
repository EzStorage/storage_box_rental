import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "src/pages/Homepage/sections/Footer";
import { useScreenSize } from "@hooks/useScreenSize";
import { MNavigation } from "@components/MNavigation";

const MainLayout: React.FC = () => {
    const location = useLocation();
    const { isDesktop } = useScreenSize();
    const isShowHeaderFooter = location.pathname === "/" || isDesktop;
    const isShowMobileNavigation =
        ["/", "/my-booking", "/profile"].includes(location.pathname) && !isDesktop;

    return (
        <>
            {isShowHeaderFooter && <Header />}
            <Outlet />
            {isShowHeaderFooter && <Footer />}
            {isShowMobileNavigation && <MNavigation />}
        </>
    );
};
export default MainLayout;
