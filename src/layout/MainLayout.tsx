import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "src/pages/Homepage/sections/Footer";
import { useScreenSize } from "@hooks/useScreenSize";
import { MNavigation } from "@components/MNavigation";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const OutletContainer = styled.div`
    height: 100vh;
    overflow-y: auto;
`;

const MainLayout: React.FC = () => {
    const location = useLocation();
    const { isDesktop } = useScreenSize();
    const isShowHeaderFooter = location.pathname === "/" || isDesktop;
    const isShowMobileNavigation =
        ["/", "/my-booking", "/profile"].includes(location.pathname) && !isDesktop;
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.pathname) {
            divRef.current?.scrollTo({
                top: 0,
                behavior: "instant",
            });
        }
    }, [location.pathname]);

    return (
        <OutletContainer ref={divRef}>
            {isShowHeaderFooter && <Header />}
            <Outlet />
            {isShowHeaderFooter && <Footer />}
            {isShowMobileNavigation && <MNavigation />}
        </OutletContainer>
    );
};
export default MainLayout;
