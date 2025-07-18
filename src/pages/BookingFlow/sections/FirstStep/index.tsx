import { FirstStepNoteContainer, FirstStepStorageTitle, ProductList } from "./FirstStep.styles";
import InfoIcon from "@components/Icons/InfoIcon";
import { Note } from "@components/Note";
import { BoxCounter } from "@components/BoxCounter";
import { FirstStepProductCard } from "./FirstStepProductCard";
import { useTheme } from "@mui/material";
import {
    StepContainer,
    StepHeaderProgress,
    StepHeaderTitle,
} from "@pages/BookingFlow/Booking.styles";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { DurationSelector } from "@pages/BookingFlow/components/DurationSelector";
import { useBookingFormActions } from "@pages/BookingFlow/hooks/useBookingFormActions";

export function FirstStep() {
    const theme = useTheme();
    const { handleChangeField } = useBookingFormActions();

    const quantity = useBookingSelector(state => state.form.quantity);

    const handleQuantity = (value: number) => {
        handleChangeField("quantity", value);
    };

    return (
        <StepContainer id="step-1">
            <StepHeaderProgress>STEP 1 OF 5</StepHeaderProgress>
            <StepHeaderTitle>How many boxes do you want to store?</StepHeaderTitle>
            <FirstStepProductCard />
            <FirstStepNoteContainer>
                <Note Icon={<InfoIcon color={theme.palette.textCustom.info} width={"15px"} />}>
                    <h2>This service is only applicable for packing the following items</h2>
                    <ProductList>
                        <li>Item weighing &lt; 20kg each</li>
                        <li>Item measuring &lt; 1.8mm in any dimension</li>
                        <li>One person can carry</li>
                        <li>Maximum 20 items per order</li>
                    </ProductList>
                </Note>
            </FirstStepNoteContainer>
            <BoxCounter value={quantity} onChange={handleQuantity} />
            <FirstStepStorageTitle>How long is your storage for?</FirstStepStorageTitle>
            <DurationSelector />
        </StepContainer>
    );
}
