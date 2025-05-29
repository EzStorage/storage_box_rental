import { useEffect, useState } from "react";
import { Slide, SlideContainer, SlideRow, SlideshowWrapper } from "./slideshow.styles";

interface SlideshowProps {
  slides: { image: string; alt: string }[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <SlideshowWrapper>
      <SlideContainer>
        <SlideRow currentSlide={currentSlide}>
          {slides.map(slide => (
            <Slide key={slide.image}>
              <img src={slide.image} alt={slide.alt} />
            </Slide>
          ))}
        </SlideRow>
      </SlideContainer>
    </SlideshowWrapper>
  );
};
export default Slideshow;
