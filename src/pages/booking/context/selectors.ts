import { createBookingSelector } from ".";

export const selectBookingData = createBookingSelector(
    [state => state.bookingId],
    bookingId => bookingId,
);
