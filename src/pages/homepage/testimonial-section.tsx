import { TestimonialSectionContainer, TestimonialSectionHeader } from "./homepage.styles";
import MasonryTestimonials from "./masonry-testimonial";

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
