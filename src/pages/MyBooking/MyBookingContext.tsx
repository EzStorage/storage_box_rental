import React, { useState } from "react";
import { BookingTabs } from "./components/Tabs";
import { BookingList } from "./components/BookingList";
import { Container, HeaderBox, NewStorageButton } from "./styles";
import { Typography } from "@mui/material";

const MyBooking = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <Container>
      <HeaderBox>
        <Typography variant="h6" style={{ fontWeight: 600, fontSize: "26px" }}>
          My Bookings
        </Typography>
        <NewStorageButton>+ New storage</NewStorageButton>
      </HeaderBox>

      <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <BookingList activeTab={activeTab} />
    </Container>
  );
};

export default MyBooking;
