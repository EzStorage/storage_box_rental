import React from "react";
import { Divider, Typography, Box } from "@mui/material";
import { InfosIcon } from "@components/Icons/InfosIcon";
import { SectionHeader } from "./SectionHeader";
import { BookingRow } from "./BookingRow";
import { ReturnItemsRow, ChangeText, InfoNoteBox, ContactBoxWrapper } from "../styles";

export const DeliveryPickupSection = ({ booking }: { booking: any }) => (
  <ContactBoxWrapper>
    <SectionHeader>Delivery box & Pick-up</SectionHeader>
    <BookingRow label="Drop-off box location" value={booking.address} />
    <Divider />
    <BookingRow label="Drop-off box time" value="19 Sep 2025, 8AM – 2PM" />
    <Divider />
    <BookingRow label="Pickup location" value="51 Ubi Avenue 1 #02-28 (2D), Paya Ubi Industrial Park" />
    <Divider />
    <BookingRow label="Pick-up time" value="19 Mar 2025, 8AM – 2PM" />
    <ReturnItemsRow>
      <Typography fontWeight={600}>Return items</Typography>
      <ChangeText onClick={() => alert("Change return location")}>Change</ChangeText>
    </ReturnItemsRow>
    <BookingRow label="Return location" value="51 Ubi Avenue 1 #02-28 (2D), Paya Ubi Industrial Park" />
    <Divider />
    <BookingRow label="Return time" value="19 Sep 2025, 8AM" />
    <Box mb={-1} mt={1.9}>
      <SectionHeader>Collect empty box</SectionHeader>
    </Box>
    <BookingRow label="Pick-up empty box time" value="3 Oct 2025, 8AM – 2PM" />
    <InfoNoteBox>
      <InfosIcon /> &nbsp;We will collect empty box after you take item out of box
    </InfoNoteBox>
  </ContactBoxWrapper>
);
