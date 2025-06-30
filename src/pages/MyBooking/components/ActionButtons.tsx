import React from "react";
import { GreyButton, PlainGreyButton, PrimaryButton, ButtonRow } from "../styles";
import { BookingStatus } from "../../../constants/Enums";

export const ActionButtons = ({ status }: { status: BookingStatus }) => {
  switch (status) {
    case BookingStatus.AwaitingPickup:
    case BookingStatus.BoxToBeDelivered:
      return <GreyButton fullWidth>Request Cancellation</GreyButton>;
    case BookingStatus.Stored:
      return (
        <ButtonRow>
          <PlainGreyButton fullWidth>Reduce the storage date</PlainGreyButton>
          <PrimaryButton variant="contained" color="primary" fullWidth>
            Renew storage
          </PrimaryButton>
        </ButtonRow>
      );
    case BookingStatus.Returned:
      return <PlainGreyButton fullWidth>Rate your booking</PlainGreyButton>;
    case BookingStatus.Cancelled:
      return (
        <PrimaryButton variant="contained" color="primary" fullWidth>
          Book Again
        </PrimaryButton>
      );
    default:
      return null;
  }
};