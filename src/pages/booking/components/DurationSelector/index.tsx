import { formatAmount } from "@helpers/amount";
import { DURATION_PLANS } from "./constants";
import {
    DurationSelectorContainer,
    DurationSelectorItem,
    DurationSelectorPrice,
    DurationSelectorTitle,
} from "./DurationSelector.styles";
import { useBookingCommit, useBookingSelector } from "@pages/booking/context";

export function DurationSelector() {
    const commit = useBookingCommit();
    const commitmentPeriod = useBookingSelector(state => state.commitmentPeriod);

    const handleCommitmentPeriod = (newPlan: string) => {
        commit({ commitmentPeriod: newPlan });
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
