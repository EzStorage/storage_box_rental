import { Avatar, useMediaQuery, useTheme } from "@mui/material";
import { TestimonialItem, TESTIMONIALS } from "../../constants/homepage.constants";
import {
  AuthorName,
  AuthorSection,
  Column,
  ColumnsContainer,
  HorizontalGradientOverlay,
  Row,
  ScrollContainer,
  StarsContainer,
  TestimonialCard,
  TestimonialMotionList,
  TestimonialText,
  VerticalGradientOverlay,
} from "./homepage.styles";
import { FaStar } from "react-icons/fa";

type TestimonialListProps = {
  list: TestimonialItem[];
  reverse?: boolean;
  duration?: number;
  isMobile?: boolean;
};

const TestimonicalCar: React.FC<{ testimonial: TestimonialItem }> = ({ testimonial }) => {
  return (
    <TestimonialCard key={testimonial.id}>
      <StarsContainer>
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} size={16} fill="#FDB022" color="#FDB022" />
        ))}
      </StarsContainer>
      <TestimonialText>{testimonial.text}</TestimonialText>
      <AuthorSection>
        <Avatar src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
        <AuthorName>{testimonial.name}</AuthorName>
      </AuthorSection>
    </TestimonialCard>
  );
};

const TestimonialList: React.FC<TestimonialListProps> = ({
  list,
  reverse = false,
  duration = 50,
  isMobile = false,
}) => {
  return (
    <TestimonialMotionList
      initial={
        isMobile
          ? { translateX: reverse ? "-100%" : "0%" }
          : { translateY: reverse ? "-100%" : "0%" }
      }
      animate={
        isMobile
          ? { translateX: reverse ? "0%" : "-100%" }
          : { translateY: reverse ? "0%" : "-100%" }
      }
      transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      {list.map(testimonial => (
        <TestimonicalCar testimonial={testimonial} />
      ))}
    </TestimonialMotionList>
  );
};

const MasonryTestimonial: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <ScrollContainer>
      {isMobile ? (
        <>
          <HorizontalGradientOverlay position="left" />
          <Row>
            <TestimonialList list={TESTIMONIALS.middle} duration={100} isMobile={isMobile} />
            <TestimonialList list={TESTIMONIALS.middle} duration={100} isMobile={isMobile} />
          </Row>
          <HorizontalGradientOverlay position="right" />
        </>
      ) : (
        <>
          <VerticalGradientOverlay position="top" />
          <ColumnsContainer>
            <Column>
              <TestimonialList list={TESTIMONIALS.left} duration={100} />
              <TestimonialList list={TESTIMONIALS.left} duration={100} />
            </Column>
            <Column>
              <TestimonialList list={TESTIMONIALS.middle} duration={100} reverse />
              <TestimonialList list={TESTIMONIALS.middle} duration={100} reverse />
            </Column>
            <Column>
              <TestimonialList list={TESTIMONIALS.right} duration={100} />
              <TestimonialList list={TESTIMONIALS.right} duration={100} />
            </Column>
          </ColumnsContainer>
          <VerticalGradientOverlay position="bottom" />
        </>
      )}
    </ScrollContainer>
  );
};
export default MasonryTestimonial;
