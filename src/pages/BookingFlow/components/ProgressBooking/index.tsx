import { LinearProgress } from "@mui/material";
import { useBookingSelector } from "@pages/BookingFlow/context";
import { ProgressBookingContainer } from "./ProgressBooking.styles";

export function ProgressBooking() {
    const step = useBookingSelector(state => state.step);

    return (
        <ProgressBookingContainer>
            <LinearProgress variant="determinate" value={step * 20} />
        </ProgressBookingContainer>
    );
}
