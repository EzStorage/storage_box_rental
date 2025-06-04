import Feature from "./sections/Feature";
import HowItWorks from "./sections/HowItWorks";
import Testimonial from "./sections/Testimonial";
import Hero from "./components/Hero";
import FAQ from "./sections/FAQ";
import { SectionDivider } from "./components/SectionDivider";

const Homepage: React.FC = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Feature />
            <SectionDivider />
            <Testimonial />
            <FAQ />
        </>
    );
};
export default Homepage;
