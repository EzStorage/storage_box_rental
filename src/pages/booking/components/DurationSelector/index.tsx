import { formatAmount } from "@helpers/amount";
import { DURATION_PLANS } from "./constants";
import {
    DurationSelectorContainer,
    DurationSelectorItem,
    DurationSelectorPrice,
    DurationSelectorTitle,
} from "./DurationSelector.styles";
import { useState } from "react";

export function DurationSelector() {
    const [selectedPlan, setSelectedPlan] = useState("1month");
    return (
        <DurationSelectorContainer>
            {DURATION_PLANS.map(plan => (
                <DurationSelectorItem
                    key={plan.id}
                    isSelected={selectedPlan === plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
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
