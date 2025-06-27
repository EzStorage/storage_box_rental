import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "src/pages/Homepage/sections/Footer";
import { useScreenSize } from "@hooks/useScreenSize";
import { MNavigation } from "@components/MNavigation";
import { useEffect } from "react";

const MainLayout: React.FC = () => {
    const location = useLocation();
    const { isDesktop } = useScreenSize();
    const isShowHeaderFooter = location.pathname === "/" || isDesktop;
    const isShowMobileNavigation =
        ["/", "/my-booking", "/profile"].includes(location.pathname) && !isDesktop;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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
