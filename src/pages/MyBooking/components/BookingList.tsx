import React from "react";
import { BookingItem } from "./BookingItem";
import { Typography } from "@mui/material";
import { ListWrapper } from "../styles";

type Booking = {
    id: number;
    status: string;
    startDate: string;
    endDate: string;
    quantity: number;
    duration: string;
    address: string;
};

const dummyBookings: Booking[] = [
    {
        id: 1,
        status: "Awaiting Pickup",
        startDate: "19 Mar 2025",
        endDate: "19 Sep 2025",
        quantity: 2,
        duration: "6 months (180 days)",
        address: "123 Changi, Singapore",
    },
    {
        id: 2,
        status: "Stored",
        startDate: "19 Mar 2025",
        endDate: "19 Sep 2025",
        quantity: 2,
        duration: "6 months (180 days)",
        address: "280 Bukit Batok East Avenue 3 #01-327",
    },
    {
        id: 3,
        status: "Returned",
        startDate: "01 Jan 2025",
        endDate: "01 Jun 2025",
        quantity: 1,
        duration: "5 months (150 days)",
        address: "5 Ang Mo Kio Industrial Park 2a 03-33",
    },
    {
        id: 4,
        status: "Box to be delivered",
        startDate: "19 Mar 2025",
        endDate: "19 Sep 2025",
        quantity: 2,
        duration: "6 months (180 days)",
        address: "123 Changi, Singapore",
    },
];

type Props = {
    activeTab: string;
};

export const BookingList: React.FC<Props> = ({ activeTab }) => {
    // Define filters based on the tab
    const filteredBookings = dummyBookings.filter(booking => {
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
