import React from "react";
import { BookingTabs } from "./components/Tabs";
import { BookingList } from "./components/BookingList";
import { Container, HeaderBox, NewStorageButton } from "./styles";
import { Typography } from "@mui/material";
import { useMyBookingSelector, useMyBookingCommit } from "./context";

const MyBooking = () => {
  const selectedTab = useMyBookingSelector(state => state.selectedTab);
  const commit = useMyBookingCommit();

  const setActiveTab = (tab: string) => {
    commit(() => ({
      selectedTab: tab,
    }));
  };

  return (
    <Container>
      <HeaderBox>
        <Typography variant="h6" style={{ fontWeight: 600, fontSize: "26px" }}>
          My Bookings
        </Typography>
        <NewStorageButton>+ New storage</NewStorageButton>
      </HeaderBox>

      <BookingTabs activeTab={selectedTab} setActiveTab={setActiveTab} />
      <BookingList activeTab={selectedTab} />
    </Container>
  );
};

export default MyBooking;
