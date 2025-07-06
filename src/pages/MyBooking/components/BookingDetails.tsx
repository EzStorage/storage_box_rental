import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { OuterContainer, InnerWrapper } from "../styles";
import { BookingStatus } from "../../../constants/Enums";
import { useMyBookingSelector } from "../context";

import { TopSection } from "./TopSection";
import { InfoAndPaymentSection } from "./InfoAndPaymentSection";
import { DeliveryPickupSection } from "./DeliveryPickupSection";
import { MetaInfoSection } from "./MetaInfoSection";
import { RetrieveBox } from "./RetrieveBox";
import { ContactCard } from "./ContactCard";
import { ActionButtons } from "./ActionButtons";
import { MyBookingProvider } from "../context";
export const BookingDetails = () => {
    const { bookingID } = useParams();
    const booking = useMyBookingSelector(state => state.bookings.find(b => b.id === bookingID));

    const [showBreakdown, setShowBreakdown] = useState(false);
    const toggleBreakdown = () => setShowBreakdown(prev => !prev);

    if (!booking) return <div>Booking not found</div>;

    return (
        <OuterContainer>
            <InnerWrapper>
                <TopSection />

                <InfoAndPaymentSection
                    booking={booking}
                    showBreakdown={showBreakdown}
                    toggleBreakdown={toggleBreakdown}
                />

                <DeliveryPickupSection booking={booking} />
                <MetaInfoSection booking={booking} />

                {booking.status === BookingStatus.Stored && <RetrieveBox />}

                <ContactCard />

                <Box mt={-1} mb={8}>
                    <ActionButtons status={booking.status as BookingStatus} />
                </Box>
            </InnerWrapper>
        </OuterContainer>
    );
};
export const BookingDetailsElement = () => (
    <MyBookingProvider>
        <BookingDetails />
    </MyBookingProvider>
);
