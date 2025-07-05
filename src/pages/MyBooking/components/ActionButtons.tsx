import React from "react";
import { GreyButton, PlainGreyButton, PrimaryButton, ButtonRow, MobileActionBox } from "../styles";
import { BookingStatus } from "../../../constants/Enums";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
    status: BookingStatus;
}

function ActionButtonContent({ status }: Props) {
    switch (status) {
        case BookingStatus.AwaitingPickup:
        case BookingStatus.BoxToBeDelivered:
            return <GreyButton fullWidth>Request Cancellation</GreyButton>;

        case BookingStatus.Stored:
            return (
                <ButtonRow>
                    <PlainGreyButton fullWidth>Reduce the storage date</PlainGreyButton>
                    <PrimaryButton variant="contained" color="primary" fullWidth>
                        Renew Storage
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
}

export const ActionButtons = ({ status }: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    if (!Object.values(BookingStatus).includes(status)) {
        return null;
    }

    if (isMobile) {
        return (
            <MobileActionBox>
                <ActionButtonContent status={status} />
            </MobileActionBox>
        );
    }

    return <ActionButtonContent status={status} />;
};