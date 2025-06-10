import { StepContainer, StepHeaderProgress, StepHeaderTitle } from "@pages/booking/Booking.styles";
import { PickupEmptyBox } from "@pages/booking/components/PickupEmptyBox";
import { PickupInformation } from "@pages/booking/components/PickupInformation";
import { ReturnInformation } from "@pages/booking/components/ReturnInformation";

export function FourthStep() {
    return (
        <StepContainer id="step-4">
            <StepHeaderProgress>STEP 4 OF 5</StepHeaderProgress>
            <StepHeaderTitle>
                When can we collect your filled box? Please note your storage period starts from
                this day
            </StepHeaderTitle>
            <PickupInformation />
            <ReturnInformation />
            <PickupEmptyBox />
        </StepContainer>
    );
}
