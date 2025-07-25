import { PaymentFailed } from "@pages/ProcessResult/pages/PaymentFailed";
import { PaymentSuccess } from "@pages/ProcessResult/pages/PaymentSuccess";
import { CancellationSuccess } from "@pages/MyBooking/components/CancellationSuccess";
import { ReduceSuccess } from "@pages/MyBooking/components/ReduceSuccess";
interface Props {
    processFlow?: string;
    status?: string;
}

export function ResultBody({ processFlow, status }: Props) {
    const key = `${processFlow}-${status}`;
    if (key === "payment-success") {
        return <PaymentSuccess />;
    }
    if (key === "payment-failed") {
        return <PaymentFailed />;
    }
    if (key === "cancellation-success") {
        return <CancellationSuccess />;
    }
    if (key === "cancellation-failed") {
        return <div>Cancellation failed</div>;
    }
    if (key === "reduce-success") {
        return <ReduceSuccess />;
    }
    if (key === "reduce-failed") {
        return <div>Reduce storage time failed</div>;
    }
    if (key === "retrive-return-success") {
        return <div>Retrive box and return successful</div>;
    }
    if (key === "retrive-return-failed") {
        return <div>Retrive box and return failed</div>;
    }
    if (key === "change-time-success") {
        return <div>Change return time successful</div>;
    }
    if (key === "change-time-failed") {
        return <div>Change return time failed</div>;
    }
    if (key === "renewal-success") {
        return <div>Renewal successful</div>;
    }
    if (key === "renewal-failed") {
        return <div>Renewal failed</div>;
    }
    return null;
}
