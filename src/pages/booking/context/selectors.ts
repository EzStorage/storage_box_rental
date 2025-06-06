import { createBookingSelector } from ".";

export const selectBookingForm = createBookingSelector([state => state.form], form => form);

export const selectBookingPickupData = createBookingSelector(
    [state => state.form],
    form => form.pickup,
);
