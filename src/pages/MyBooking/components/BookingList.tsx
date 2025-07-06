import React from "react";
import { BookingItem } from "./BookingItem";
import { Typography } from "@mui/material";
import { ListWrapper } from "../styles";
import { useMyBookingSelector } from "../context";
import { BookingStatus, BookingTab } from "../../../constants/Enums";
import { useParams } from "react-router";

export const BookingList: React.FC = () => {
    const bookings = useMyBookingSelector(state => state.bookings);
    const selectedTab = useParams().type as BookingTab;

    const filteredBookings = bookings.filter(booking => {
        switch (selectedTab) {
            case BookingTab.Upcoming:
                return (
                    booking.status === BookingStatus.AwaitingPickup ||
                    booking.status === BookingStatus.BoxToBeDelivered
                );
            case BookingTab.Stored:
                return booking.status === BookingStatus.Stored;
            case BookingTab.History:
                return (
                    booking.status === BookingStatus.Returned ||
                    booking.status === BookingStatus.Cancelled
                );
            default:
                return false;
        }
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
