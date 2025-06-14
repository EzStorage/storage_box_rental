import { LoginCard } from "@components/LoginCard";
import { MyBookingContainer } from "./MyBooking.styles";
import { useAppSelector } from "src/app/hooks";

export function MyBooking() {
    const user = useAppSelector(state => state.auth.user);

    return (
        <MyBookingContainer>
            <div>My Bookings</div>
            {!user && <LoginCard />}
        </MyBookingContainer>
    );
}
