import { useEffect } from "react";
import { getInitialBookingData } from "../booking.services";
import { useBookingCommit } from "../context";

export async function useBookingInitialization() {
    const commit = useBookingCommit();

    useEffect(() => {
        async function initializeBooking() {
            try {
                await getInitialBookingData();
                commit({});
            } catch (error) {
                console.error("Failed to initialize booking:", error);
            }
        }

        initializeBooking();
    }, [commit]);
}
