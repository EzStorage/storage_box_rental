import { useEffect } from "react";
import { getInitialBookingData } from "../booking.services";
import { useBookingCommit } from "../context";

export async function useBookingInitialization() {
    const commit = useBookingCommit();

    useEffect(() => {
        async function initializeBooking() {
            try {
                const data = await getInitialBookingData();
                commit({ bookingId: "12345" });
            } catch (error) {
                console.error("Failed to initialize booking:", error);
            }
        }

        initializeBooking();
    }, []);
}
