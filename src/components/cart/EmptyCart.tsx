import React from "react";
import { Typography } from "@mui/material";
import EmptyCartIcon from "../../components/Icons/EmptyCart";
import { EmptyCartWrapper } from "@pages/Homepage/Homepage.styles";
import { EmptyCartBox } from "./CartStyles";
import { BookingTryAgain } from "@pages/ProcessResult/pages/PaymentStatus.styles";

export const EmptyCart: React.FC = () => {
    return (
        <EmptyCartWrapper>
            <EmptyCartBox>
                <EmptyCartIcon />
            </EmptyCartBox>
            <Typography sx={{ paddingBottom: 3 }}>No storage yet!</Typography>
            <BookingTryAgain>Book new storage</BookingTryAgain>
        </EmptyCartWrapper>
    );
};
