import React from "react";
import { Box, Typography } from "@mui/material";
import EmptyCartIcon from "../../components/Icons/EmptyCart";
import { BookingTryAgain } from "../../pages/PaymentStatus/PaymentStatus.styles";
import { EmptyCartWrapper } from "@pages/Homepage/Homepage.styles";
const EmptyCart: React.FC = () => {
    return (
        <EmptyCartWrapper>
            <Box sx={{ mt: 6, mb: -6.65, paddingBottom: 3.7 }}>
                <EmptyCartIcon />
            </Box>
            <Typography sx={{ paddingBottom: 3 }}>No storage yet!</Typography>
            <BookingTryAgain>Book new storage</BookingTryAgain>
        </EmptyCartWrapper>
    );
};

export default EmptyCart;
