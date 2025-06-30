import React from "react";
import { Divider } from "@mui/material";
import { ApplePayIcon } from "@components/Icons/ApplePayIcon";
import { PaynowIcon } from "@components/Icons/PayNowIcon";
import { BookingRow } from "./BookingRow";
import { WhiteCard, BookingLabelHeader } from "../styles";

export const MetaInfoSection = ({ booking }: { booking: any }) => (
  <WhiteCard>
    <BookingRow label={<BookingLabelHeader>Booking ID</BookingLabelHeader>} value={booking.id} bold />
    <BookingRow label="Payment method" value={booking.paymentMode === "ApplePay" ? <ApplePayIcon /> : booking.paymentMode === "PAYNOW " ? <PaynowIcon /> : (booking.paymentMode ?? "N/A")} bold color="purple" />
    <Divider />
    <BookingRow label="Booking time" value={booking.startDate + ", 8:00 PM"} />
  </WhiteCard>
);
