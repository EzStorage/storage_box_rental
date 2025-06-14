import { MyBookingProvider } from "./context";

export function MyBookingContent() {
    return (
        <div>
            <h1>My Booking</h1>
            <p>This page will display</p>
            {/* Additional components and logic for displaying booking information can be added here */}
        </div>
    );
}

export function MyBooking() {
    return (
        <MyBookingProvider>
            <MyBookingContent />
        </MyBookingProvider>
    );
}
