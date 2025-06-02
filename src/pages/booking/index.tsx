import { FifthStep } from "./components/FifthStep";
import { FirstStep } from "./components/FirstStep";
import { FourthStep } from "./components/FourthStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { BookingProvider, useBookingSelector } from "./context";
import { useBookingInitialization } from "./hooks/useBookingInitialization";

export function Booking() {
    return (
        <BookingProvider>
            <BookingContent />
        </BookingProvider>
    );
}

function BookingContent() {
    useBookingInitialization();

    const step = useBookingSelector(state => state.step);
    return (
        <div>
            {step === 1 && <FirstStep />}
            {step === 2 && <SecondStep />}
            {step === 3 && <ThirdStep />}
            {step === 4 && <FourthStep />}
            {step === 5 && <FifthStep />}
        </div>
    );
}
