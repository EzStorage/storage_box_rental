import { useMediaQuery, useTheme } from "@mui/material";
import { BookingInformationContainer, BookingInformationTitle } from "./BookingInformation.styles";
import { BookingProductCard } from "./BookingProductCard";
import { useBookingSelector } from "@pages/booking/context";
import { BookingInfo } from "./BookingInfo";

export function BookingInformation() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    // Delivery
    const deliveryLocation = useBookingSelector(state => state.form.delivery.location);
    const deliveryDate = useBookingSelector(state => state.form.delivery.date);
    const deliveryTimeType = useBookingSelector(state => state.form.delivery.timeType);
    const deliveryTimeSlot = useBookingSelector(state => state.form.delivery.timeSlot);

    // Delivery
    const pickupLocation = useBookingSelector(state => state.form.pickup.location);
    const pickupDate = useBookingSelector(state => state.form.pickup.date);
    const pickupTimeType = useBookingSelector(state => state.form.pickup.timeType);
    const pickupTimeSlot = useBookingSelector(state => state.form.pickup.timeSlot);

    // Return
    const returnLocation = useBookingSelector(state => state.form.return.location);
    const returnDate = useBookingSelector(state => state.form.return.date);
    const returnTimeType = useBookingSelector(state => state.form.return.timeType);
    const returnTimeSlot = useBookingSelector(state => state.form.return.timeSlot);

    return (
        <>
            {isMobile && <BookingInformationTitle>Booking Informations</BookingInformationTitle>}
            <BookingInformationContainer>
                {!isMobile && (
                    <BookingInformationTitle>Booking Informations</BookingInformationTitle>
                )}
                <BookingProductCard />
                <div>
                    <BookingInfo
                        title="Empty Box Drop-off"
                        location={deliveryLocation}
                        date={deliveryDate}
                        timeTypeId={deliveryTimeType}
                        timeSlotId={deliveryTimeSlot}
                    />

                    <BookingInfo
                        title="Packed Box Pick-up"
                        location={pickupLocation}
                        date={pickupDate}
                        timeTypeId={pickupTimeType}
                        timeSlotId={pickupTimeSlot}
                    />

                    <BookingInfo
                        title="Packed box Drop-off"
                        location={returnLocation}
                        date={returnDate}
                        timeTypeId={returnTimeType}
                        timeSlotId={returnTimeSlot}
                        isBorder={false}
                    />
                </div>
            </BookingInformationContainer>
        </>
    );
}
