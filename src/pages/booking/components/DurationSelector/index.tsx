import { formatAmount } from "@helpers/amount";
import { DURATION_PLANS } from "./constants";
import {
    DurationSelectorContainer,
    DurationSelectorItem,
    DurationSelectorPrice,
    DurationSelectorTitle,
} from "./DurationSelector.styles";
import { useBookingSelector } from "@pages/booking/context";
import { useBookingFormActions } from "@pages/booking/hooks/useBookingFormActions";

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
