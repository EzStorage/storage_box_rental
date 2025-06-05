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
    const [selectedPlan, setSelectedPlan] = useState("1 month");
    return (
        <DurationSelectorContainer>
            {DURATION_PLANS.map(plan => (
                <DurationSelectorItem
                    key={plan.id}
                    isSelected={selectedPlan === plan.title}
                    onClick={() => setSelectedPlan(plan.title)}
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
