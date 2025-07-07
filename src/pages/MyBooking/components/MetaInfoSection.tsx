import { useMemo } from "react";
import { ApplePayIcon } from "@components/Icons/ApplePayIcon";
import { PaynowIcon } from "@components/Icons/PayNowIcon";
import { BookingRow } from "./InfoAndPaymentSection";
import { WhiteCard, BookingLabelHeader, CustomDivider } from "../styles";

export const MetaInfoSection = ({ booking }: { booking: any }) => {
    const paymentMethodValue = useMemo(() => {
        if (booking.paymentMode === "ApplePay") {
            return <ApplePayIcon />;
        } else if (booking.paymentMode?.trim() === "PAYNOW") {
            return <PaynowIcon />;
        }  else if (booking.paymentMode?.toLowerCase() === "creditcard") {
            return `Credit card, ${booking.cardNumber}`;
    
        } else {
            return booking.paymentMode ?? "N/A";
        }
    }, [booking.paymentMode]);

    return (
        <WhiteCard>
            <BookingRow
                label={<BookingLabelHeader>Booking ID</BookingLabelHeader>}
                value={booking.id}
                bold
            />
            <BookingRow label="Payment method" value={paymentMethodValue}/>
            <CustomDivider/>
            <BookingRow label="Booking time" value={`${booking.startDate}, 8:00 PM`} />
        </WhiteCard>
    );
};
