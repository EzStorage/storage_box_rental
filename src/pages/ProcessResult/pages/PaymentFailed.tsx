import {
    FullPageContainer,
    BookingTryAgain,
    StyledWhiteButton,
    ResponsiveStack,
} from "./PaymentStatus.styles";
import { PaymentContent } from "./sections/PaymentContent";

export function PaymentFailed() {
    return (
        <FullPageContainer textAlign={"center"}>
            <PaymentContent />
            <ResponsiveStack>
                <StyledWhiteButton>Go to dashboard</StyledWhiteButton>
                <BookingTryAgain>Try again</BookingTryAgain>
            </ResponsiveStack>
        </FullPageContainer>
    );
}
