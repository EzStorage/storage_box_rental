import styled from "@emotion/styled";

export const SlideshowWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  max-height: 516px;
`;

interface SlideRowProps {
  currentSlide: number;
}

export const SlideRow = styled.div<SlideRowProps>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
