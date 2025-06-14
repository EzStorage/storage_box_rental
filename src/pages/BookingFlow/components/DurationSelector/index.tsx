import { formatAmount } from "@helpers/amount";
import {
    CustomDurationButton,
    DialogCustomDuration,
    DurationSelectorContainer,
    DurationSelectorItem,
    DurationSelectorPrice,
    DurationSelectorTitle,
} from "./DurationSelector.styles";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { useBookingFormActions } from "@pages/BookingFlow/hooks/useBookingFormActions";
import { DURATION_PLANS } from "@pages/BookingFlow/constants";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { MultipleDatePicker } from "../MultipleDatePicker";
import { CustomDurationSelector } from "./CustomDurationSelector";

export function DurationSelector() {
    const [isOpen, setIsOpen] = useState(false);

    const { handleChangeCommitmentPeriodField, handleChangePickupField, handleChangeReturnField } =
        useBookingFormActions();
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);

    const handleCommitmentPeriod = (value: string) => {
        handleChangeCommitmentPeriodField(value);
    };

    const handleCustomCommitmentPeriod = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        if (start && end) {
            setIsOpen(!isOpen);
            handleChangeCommitmentPeriodField({
                startDate: start.toISOString(),
                endDate: end.toISOString(),
            });
            handleChangePickupField("date", start);
            handleChangeReturnField("date", end);
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleClose = () => setIsOpen(false);

    const handleDeleteCustomDuration = () => {
        handleChangeCommitmentPeriodField("1M");
    };

    return (
        <>
            <DurationSelectorContainer>
                {DURATION_PLANS.map(plan => (
                    <DurationSelectorItem
                        key={plan.id}
                        isSelected={commitmentPeriod === plan.id}
                        onClick={() => handleCommitmentPeriod(plan.id)}
                    >
                        <DurationSelectorTitle>
                            {plan.title} <span>({plan.days} days)</span>
                        </DurationSelectorTitle>
                        <DurationSelectorPrice>
                            From {formatAmount(plan.price)}
                        </DurationSelectorPrice>
                    </DurationSelectorItem>
                ))}
            </DurationSelectorContainer>

            {typeof commitmentPeriod === "object" && commitmentPeriod !== null ? (
                <CustomDurationSelector
                    onEdit={() => setIsOpen(true)}
                    onDelete={handleDeleteCustomDuration}
                />
            ) : (
                <CustomDurationButton startIcon={<IoAddOutline />} onClick={handleClick}>
                    Custom duration
                </CustomDurationButton>
            )}

            <DialogCustomDuration open={isOpen} onClose={handleClose}>
                <MultipleDatePicker
                    defaultStartDate={
                        typeof commitmentPeriod === "object" && commitmentPeriod.startDate
                            ? new Date(commitmentPeriod.startDate)
                            : null
                    }
                    defaultEndDate={
                        typeof commitmentPeriod === "object" && commitmentPeriod.endDate
                            ? new Date(commitmentPeriod.endDate)
                            : null
                    }
                    onCancel={handleClose}
                    onChange={handleCustomCommitmentPeriod}
                />
            </DialogCustomDuration>
        </>
    );
}
