import React from "react";
import { Box, Typography } from "@mui/material";
import EmptyCartIcon from "../../components/Icons/EmptyCart";
import { BookingTryAgain } from "../../pages/PaymentStatus/PaymentStatus.styles";
import { EmptyCartWrapper } from "@pages/Homepage/Homepage.styles";
import { EmptyCartBox } from "./CartStyles";
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

