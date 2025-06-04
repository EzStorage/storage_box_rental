import { TestimonialSectionContainer, TestimonialSectionHeader } from "../Homepage.styles";
import MasonryTestimonials from "../components/MansoryTestimonial";

const TestimonialSection: React.FC = () => {
    return (
        <TestimonialSectionContainer>
            <TestimonialSectionHeader>
                <h1>
                    What's our customer <span>say</span>
                </h1>
                <p>Over 10,000 clients use EzStorage</p>
            </TestimonialSectionHeader>
            <MasonryTestimonials />
        </TestimonialSectionContainer>
    );
};
export default TestimonialSection;
