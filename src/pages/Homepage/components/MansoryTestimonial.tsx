import { Avatar, useMediaQuery, useTheme } from "@mui/material";
import { TestimonialItem, TESTIMONIALS } from "../constants";
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
} from "../Homepage.styles";
import StarIcon from "../../../components/Icons/StarIcon";

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
                    <StarIcon key={index} />
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
            initial={isMobile ? { x: reverse ? "-100%" : "0%" } : { y: reverse ? "-100%" : "0%" }}
            animate={isMobile ? { x: reverse ? "0%" : "-100%" } : { y: reverse ? "0%" : "-100%" }}
            transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
            {list.map(testimonial => (
                <TestimonicalCar testimonial={testimonial} key={testimonial.id} />
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
                        <TestimonialList
                            list={TESTIMONIALS.middle}
                            duration={100}
                            isMobile={isMobile}
                        />
                        <TestimonialList
                            list={TESTIMONIALS.middle}
                            duration={100}
                            isMobile={isMobile}
                        />
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
