import React from "react";
import { BookingTabs } from "./components/Tabs";
import { BookingList } from "./components/BookingList";
import { Container, HeaderBox, NewStorageButton } from "./styles";
import { Typography } from "@mui/material";
import { useMyBookingSelector, useMyBookingCommit, MyBookingProvider } from "./context";

export const MyBookingContent = () => {
    const commit = useMyBookingCommit();
    return (
        <Container>
            <HeaderBox>
                <Typography variant="h6" style={{ fontWeight: 600, fontSize: "26px" }}>
                    My Bookings
                </Typography>
                <NewStorageButton>+ New storage</NewStorageButton>
            </HeaderBox>

            <BookingTabs />
            <BookingList />
        </Container>
    );
};
export const MyBooking = () => {
    return (
        <MyBookingProvider>
            <MyBookingContent />
        </MyBookingProvider>
    );
};
