import {
    FullPageContainer,
    BookingTryAgain,
    StyledWhiteButton,
    ResponsiveStack,
} from "./PaymentStatus.styles";
import { PaymentContent } from "./sections/PaymentContent";

export function PaymentSuccess() {
    return (
        <FullPageContainer>
            <PaymentContent />
            <ResponsiveStack>
                <StyledWhiteButton>Go to dashboard</StyledWhiteButton>
                <BookingTryAgain>Go to my bookings</BookingTryAgain>
            </ResponsiveStack>
        </FullPageContainer>
    );
}
