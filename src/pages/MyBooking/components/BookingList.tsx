import React from "react";
import { BookingItem } from "./BookingItem";
import { Typography } from "@mui/material";
import { ListWrapper } from "../styles";
import { useMyBookingSelector } from "../context"; // <-- import context selector

type Props = {
  activeTab: string;
};

export const BookingList: React.FC<Props> = ({ activeTab }) => {
  // Get bookings from context
  const bookings = useMyBookingSelector(state => state.bookings);

  // Filter based on active tab
  const filteredBookings = bookings.filter(booking => {
    if (activeTab === "Upcoming") {
      return ["Awaiting Pickup", "Box to be delivered"].includes(booking.status);
    } else if (activeTab === "Stored") {
      return booking.status === "Stored";
    } else if (activeTab === "History") {
      return booking.status === "Returned";
    }
    return false;
  });

  return (
    <ListWrapper>
      {filteredBookings.length > 0 ? (
        filteredBookings.map(booking => (
          <BookingItem key={booking.id} booking={booking} activeTab={activeTab} />
        ))
      ) : (
        <Typography variant="body2" sx={{ color: "#666" }}>
          No {activeTab.toLowerCase()} bookings.
        </Typography>
      )}
    </ListWrapper>
  );
};
