import { CancelContainer } from "../../ProcessResult/ProcessResult.styles";
import { RedButton } from "../styles";
import { ResponsivePaper } from "../styles";

import { Divider, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { BookingRow } from "./BookingRow";
import { formatAmount } from "@helpers/amount";
import { useNavigate } from "react-router-dom";

export function PaymentContent() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <CancelContainer>
            <ResponsivePaper>
                <Typography fontSize="13px" fontWeight="400" mb="14.5px">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asiuyiuyiu
                    gconsectetur adipisicing e
                </Typography>
                <BookingRow
                    label="Total paid"
                    value={formatAmount(1498.99)}
                    medcompact
                    small
                ></BookingRow>
                <BookingRow
                    label="Cancellation fee"
                    value={formatAmount(20.99)}
                    medcompact
                    small
                ></BookingRow>
                <BookingRow
                    label="The box delivery fee"
                    value={formatAmount(20.99)}
                    medcompact
                    small
                ></BookingRow>
                <BookingRow
                    label="The box pick-up fee"
                    value={formatAmount(20.99)}
                    medcompact
                    small
                ></BookingRow>
                <Divider sx={{ mb: "5.5px", mt: "6.5px" }} />
                <BookingRow
                    label="Total Refund"
                    value={formatAmount(1435.03)}
                    medcompact
                    small
                ></BookingRow>
                <Box sx={{ flexGrow: 1 }} />
                {isMobile && (
                    <Box mt={2}>
                        <Divider sx={{ marginRight: "-16px", marginLeft: "-16px" }} />
                        <RedButton
                            fullWidth
                            onClick={() => navigate("/my-bookings")}
                            sx={{ mt: "12px" }}
                        >
                            Go to my bookings
                        </RedButton>
                    </Box>
                )}
            </ResponsivePaper>
            {!isMobile && (
                <Box mt={2}>
                    <RedButton sx={{ padding: 2.5 }} onClick={() => navigate("/my-bookings")}>
                        Go to my bookings
                    </RedButton>
                </Box>
            )}
        </CancelContainer>
    );
}
export function CancellationSuccess() {
    return <PaymentContent />;
}
