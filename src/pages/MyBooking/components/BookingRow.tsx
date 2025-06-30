import React from "react";
import { BookingRowWrapper, BookingLabel, BookingValueWrapper, BookingValueText } from "../styles";

export const BookingRow = ({
  label,
  value,
  bold,
  color,
}: {
  label: string | React.ReactNode;
  value: React.ReactNode;
  bold?: boolean;
  color?: string;
}) => (
  <BookingRowWrapper>
    <BookingLabel>{label}</BookingLabel>
    <BookingValueWrapper>
      <BookingValueText bold={bold} color={color}>
        {value}
      </BookingValueText>
    </BookingValueWrapper>
  </BookingRowWrapper>
);