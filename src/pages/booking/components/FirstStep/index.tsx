import {
    FirstStepAddDuration,
    FirstStepNoteContainer,
    FirstStepStorageTitle,
    ProductList,
} from "./FirstStep.styles";
import InfoIcon from "@components/Icons/InfoIcon";
import { Note } from "@components/Note";
import { BoxCounter } from "@components/BoxCounter";
import { IoAddOutline } from "react-icons/io5";
import { DurationSelector } from "../DurationSelector";
import { FirstStepProductCard } from "./FirstStepProductCard";
import { useTheme } from "@mui/material";
import { StepContainer, StepHeaderProgress, StepHeaderTitle } from "@pages/booking/Booking.styles";
import { useBookingCommit, useBookingSelector } from "@pages/booking/context";

export function FirstStep() {
    const theme = useTheme();

    const commit = useBookingCommit();
    const quantity = useBookingSelector(state => state.quantity);

    const handleQuantity = (newQuantity: number) => {
        commit({ quantity: newQuantity });
    };

    return (
        <StepContainer>
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
            <FirstStepAddDuration startIcon={<IoAddOutline />}>
                Custom duration
            </FirstStepAddDuration>
        </StepContainer>
    );
}
