import { useBookingSelector } from "@pages/BookingFlow/context";
import { PlanDetailsInfoContainer, PlanDetailsTitle } from "./PlanDetails.styles";
import { DURATION_PLANS } from "@pages/BookingFlow/constants";
import { differenceInDays } from "date-fns";
import { formatDate } from "@helpers/formatDate";

export function PlanDetails() {
    const commitmentPeriod = useBookingSelector(state => state.form.commitmentPeriod);
    const plans = DURATION_PLANS.find(m => m.id === commitmentPeriod);
    const differenceDays =
        typeof commitmentPeriod === "object" &&
        commitmentPeriod !== null &&
        differenceInDays(commitmentPeriod.endDate, commitmentPeriod.startDate);

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
                        {plans
                            ? `${plans.title} (${plans.days} ${plans.days <= 1 ? "day" : "days"})`
                            : typeof commitmentPeriod === "object" && commitmentPeriod !== null
                              ? `${formatDate(new Date(commitmentPeriod.startDate))} - ${formatDate(new Date(commitmentPeriod.endDate))} (${differenceDays} ${typeof differenceDays === "number" && differenceDays <= 1 ? "day" : "days"})`
                              : null}
                    </div>
                </PlanDetailsInfoContainer>
            </div>
        </div>
    );
}
