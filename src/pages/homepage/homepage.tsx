import FeatureSection from "./feature-section";
import Hero from "./hero";
import HowItWorks from "./how-it-works";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeatureSection />
    </>
  );
};
export default Homepage;
