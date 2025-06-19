import React from "react";
import { BookingItem } from "./BookingItem";
import { Typography } from "@mui/material";
import { ListWrapper } from "../styles";
import { useMyBookingSelector } from "../context";
import { BookingStatus, BookingTab } from "../../../constants/Enums";

export const BookingList: React.FC = () => {
    const bookings = useMyBookingSelector(state => state.bookings);
    const selectedTab = useMyBookingSelector(state => state.selectedTab);

    const filteredBookings = bookings.filter(booking => {
        if (selectedTab === BookingTab.Upcoming) {
            return (
                booking.status === BookingStatus.AwaitingPickup ||
                booking.status === BookingStatus.BoxToBeDelivered
            );
        } else if (selectedTab === BookingTab.Stored) {
            return booking.status === BookingStatus.Stored;
        } else if (selectedTab === BookingTab.History) {
            return booking.status === BookingStatus.Returned;
        }
        return false;
    });

    return (
        <ListWrapper>
            {filteredBookings.length > 0 ? (
                filteredBookings.map(booking => (
                    <BookingItem key={booking.id} booking={booking} activeTab={selectedTab} />
                ))
            ) : (
                <Typography variant="body2" sx={{ color: "#666" }}>
                    No {selectedTab.toLowerCase()} bookings.
                </Typography>
            )}
        </ListWrapper>
    );
};
