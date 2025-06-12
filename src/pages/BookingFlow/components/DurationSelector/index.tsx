import { formatAmount } from "@helpers/amount";
import {
    DurationSelectorContainer,
    DurationSelectorItem,
    DurationSelectorPrice,
    DurationSelectorTitle,
} from "./DurationSelector.styles";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { useBookingFormActions } from "@pages/BookingFlow/hooks/useBookingFormActions";
import { DURATION_PLANS } from "@pages/BookingFlow/constants";

export function DurationSelector() {
    const { handleChangeField } = useBookingFormActions();
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);

    const handleCommitmentPeriod = (value: string) => {
        handleChangeField("commitmentPeriod", value);
    };

    return (
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
                    <DurationSelectorPrice>From {formatAmount(plan.price)}</DurationSelectorPrice>
                </DurationSelectorItem>
            ))}
        </DurationSelectorContainer>
    );
}
