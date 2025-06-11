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

    return (
        <BookingContainer>
            {!isDesktop && <MHeader />}
            <ProgressBooking />
            <StepsContainer>
                {step >= 1 && <FirstStep />}
                {step >= 2 && <SecondStep />}
                {step >= 3 && <ThirdStep />}
                {step >= 4 && <FourthStep />}
                {step >= 5 && <FifthStep />}
            </StepsContainer>
            <CheckoutFooter />
        </BookingContainer>
    );
}
