import React from "react";
import { BookingItem } from "./BookingItem";
import { Typography } from "@mui/material";
import { ListWrapper } from "../styles";
import { useMyBookingSelector , useMyBookingCommit} from "../context"; 

type Props = {
  activeTab: string;
};

export const BookingList: React.FC = () => {
  const bookings = useMyBookingSelector(state => state.bookings);
  const selectedTab = useMyBookingSelector(state => state.selectedTab); 

  const filteredBookings = bookings.filter(booking => {
    if (selectedTab === "Upcoming") {
      return ["Awaiting Pickup", "Box to be delivered"].includes(booking.status);
    } else if (selectedTab === "Stored") {
      return booking.status === "Stored";
    } else if (selectedTab === "History") {
      return booking.status === "Returned";
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
