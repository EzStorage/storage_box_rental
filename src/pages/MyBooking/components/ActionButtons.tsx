import React from "react";
import { GreyButton, PlainGreyButton, PrimaryButton, ButtonRow, MobileActionBox } from "../styles";
import { BookingStatus } from "../../../constants/Enums";

export const ActionButtons = ({ status }: { status: BookingStatus }) => {
    switch (status) {
        case BookingStatus.AwaitingPickup:
        case BookingStatus.BoxToBeDelivered:
            return (
                <MobileActionBox>
                    <GreyButton fullWidth>Request Cancellation</GreyButton>
                </MobileActionBox>
            );
        case BookingStatus.Stored:
            return (
                <ButtonRow>
                    <MobileActionBox>
                        <PlainGreyButton fullWidth>Reduce the storage date</PlainGreyButton>

                        <PrimaryButton variant="contained" color="primary" fullWidth>
                            Renew storage
                        </PrimaryButton>
                    </MobileActionBox>
                </ButtonRow>
            );
        case BookingStatus.Returned:
            return (
                <MobileActionBox>
                    <PlainGreyButton fullWidth>Rate your booking</PlainGreyButton>
                </MobileActionBox>
            );
        case BookingStatus.Cancelled:
            return (
                <MobileActionBox>
                    <PrimaryButton variant="contained" color="primary" fullWidth>
                        Book Again
                    </PrimaryButton>
                </MobileActionBox>
            );
        default:
            return null;
    }
};
