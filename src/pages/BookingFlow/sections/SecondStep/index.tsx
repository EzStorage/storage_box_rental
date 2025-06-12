import {
    StepContainer,
    StepHeaderProgress,
    StepHeaderTitle,
} from "@pages/BookingFlow/Booking.styles";
import { SecondStepProductCard } from "./SecondStepProductCard";
import { PlanDetails } from "@pages/BookingFlow/components/PlanDetails";
import { Note } from "@components/Note";
import NotificationIcon from "@components/Icons/NotificationIcon";
import { OtherNotes } from "@pages/BookingFlow/components/OtherNotes";
import { PlanDetailsContainer } from "./SecondStep.styles";

export function SecondStep() {
    return (
        <StepContainer id="step-2">
            <StepHeaderProgress>STEP 2 OF 5</StepHeaderProgress>
            <StepHeaderTitle>Your box storage plan details</StepHeaderTitle>
            <SecondStepProductCard />
            <PlanDetailsContainer>
                <PlanDetails />
            </PlanDetailsContainer>
            <Note Icon={<NotificationIcon />} title="You can cancel anytime">
                After the empty box has been delivered, you’ll receive a refund excluding the
                delivery fee. If its before the box is sent out, they get a refund
            </Note>
            <OtherNotes />
        </StepContainer>
    );
}
