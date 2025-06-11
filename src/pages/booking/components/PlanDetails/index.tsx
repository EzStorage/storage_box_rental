import { useBookingSelector } from "@pages/booking/context";
import { PlanDetailsInfoContainer, PlanDetailsTitle } from "./PlanDetails.styles";
import { DURATION_PLANS } from "@pages/booking/constants";

export function PlanDetails() {
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    const plans = DURATION_PLANS.find(m => m.id === commitmentPeriod);

    return (
        <div>
            <PlanDetailsTitle>Plan details</PlanDetailsTitle>
            <div>
                <PlanDetailsInfoContainer>
                    <div>Box size</div>
                    <div>20 sqft</div>
                </PlanDetailsInfoContainer>
                <PlanDetailsInfoContainer>
                    <div>Commitment Period</div>
                    <div>
                        {plans?.title} ({plans?.days} days)
                    </div>
                </PlanDetailsInfoContainer>
            </div>
        </div>
    );
}
