import React from "react";
import { GreyButton, PlainGreyButton, PrimaryButton, ButtonRow, MobileActionBox } from "../styles";
import { BookingStatus } from "../../../constants/Enums";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ActionButtons = ({ status }: { status: BookingStatus }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 'sm' usually means <600px

    const wrapMobile = (content: React.ReactNode) =>
        isMobile ? <MobileActionBox>{content}</MobileActionBox> : content;

    switch (status) {
        case BookingStatus.AwaitingPickup:
        case BookingStatus.BoxToBeDelivered:
            return wrapMobile(<GreyButton fullWidth>Request Cancellation</GreyButton>);

        case BookingStatus.Stored:
            return (
                <ButtonRow>
                    {wrapMobile(
                        <>
                            <PlainGreyButton fullWidth>Reduce the storage date</PlainGreyButton>
                            <PrimaryButton variant="contained" color="primary" fullWidth>
                                Renew STORAGE
                            </PrimaryButton>
                        </>,
                    )}
                </ButtonRow>
            );

        case BookingStatus.Returned:
            return wrapMobile(<PlainGreyButton fullWidth>Rate your booking</PlainGreyButton>);

        case BookingStatus.Cancelled:
            return wrapMobile(
                <PrimaryButton variant="contained" color="primary" fullWidth>
                    Book Again
                </PrimaryButton>,
            );

        default:
            return null;
    }
};
