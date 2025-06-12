import CallingIcon from "@components/Icons/CallingIcon";
import { Note } from "@components/Note";
import {
    StepContainer,
    StepHeaderProgress,
    StepHeaderTitle,
} from "@pages/BookingFlow/Booking.styles";
import { NoteContainer } from "./FifthStep.styles";
import { BookingInformation } from "@pages/BookingFlow/components/BookingInformation";
import { PaymentInformation } from "@pages/BookingFlow/components/PaymentInformation";

export function FifthStep() {
    return (
        <StepContainer id="step-5">
            <StepHeaderProgress>STEP 5 OF 5</StepHeaderProgress>
            <StepHeaderTitle>Here your box storage booking details</StepHeaderTitle>

            <NoteContainer>
                <Note Icon={<CallingIcon />}>
                    <span>The EZ Storage team</span> will contact you via <span>WhatsApp</span>{" "}
                    before pickup and returns
                </Note>
            </NoteContainer>
            <BookingInformation />
            <PaymentInformation />
        </StepContainer>
    );
}
