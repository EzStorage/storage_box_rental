import { FifthStep } from "./sections/FifthStep";
import { FirstStep } from "./sections/FirstStep";
import { FourthStep } from "./sections/FourthStep";
import { ProgressBooking } from "./components/ProgressBooking";
import { SecondStep } from "./sections/SecondStep";
import { ThirdStep } from "./sections/ThirdStep";
import { BookingProvider, useBookingSelector } from "./context";
import { BookingContainer, StepsContainer } from "./Booking.styles";
import { useScreenSize } from "@hooks/useScreenSize";
import { MHeader } from "./components/MHeader";
import { CheckoutFooter } from "./components/CheckoutFooter";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export function Booking() {
    return (
        <BookingProvider>
            <BookingContent />
        </BookingProvider>
    );
}

function BookingContent() {
    const step = useBookingSelector(state => state.step);
    const { isDesktop } = useScreenSize();

    const previousStep = useRef(step);
    const direction = step > previousStep.current ? 1 : -1;

    useEffect(() => {
        previousStep.current = step;
    }, [step]);

    return (
        <BookingContainer>
            {!isDesktop && <MHeader />}
            <ProgressBooking />
            <StepsContainer>
                {step === 1 && (
                    <StepWrapper key="step1" direction={direction}>
                        <FirstStep />
                    </StepWrapper>
                )}
                {step === 2 && (
                    <StepWrapper key="step2" direction={direction}>
                        <SecondStep />
                    </StepWrapper>
                )}
                {step === 3 && (
                    <StepWrapper key="step3" direction={direction}>
                        <ThirdStep />
                    </StepWrapper>
                )}
                {step === 4 && (
                    <StepWrapper key="step4" direction={direction}>
                        <FourthStep />
                    </StepWrapper>
                )}
                {step === 5 && (
                    <StepWrapper key="step5" direction={direction}>
                        <FifthStep />
                    </StepWrapper>
                )}
            </StepsContainer>
            <CheckoutFooter />
        </BookingContainer>
    );
}

interface StepWrapperProps {
    children: ReactNode;
    direction: number;
}

function StepWrapper({ children, direction }: StepWrapperProps) {
    return (
        <motion.div
            initial={{ y: direction > 0 ? 500 : -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction > 0 ? 500 : -500, opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}
