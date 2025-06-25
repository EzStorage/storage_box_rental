import Feature from "./sections/Feature";
import HowItWorks from "./sections/HowItWorks";
import Testimonial from "./sections/Testimonial";
import Hero from "./sections/Hero";
import { SectionDivider } from "./components/SectionDivider";
import { useEffect } from "react";
import { useLocation } from "react-router";
import CartDrawer from "@components/cart/CartDrawer";
import { FAQ } from "./sections/FAQ";

export const Homepage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToId) {
            const id = location.state.scrollToId;

            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 50;
                    const elementPosition =
                        element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }
            }, 100);
        }
    }, [location.state]);

    return (
        <>
            <Hero />
            <HowItWorks />
            <Feature />
            <SectionDivider />
            <Testimonial />
            <FAQ />
            <CartDrawer />
        </>
    );
};
