import { TEXT_CUSTOM } from "src/constants/palette";
import { CancelContainer } from "../../ProcessResult/ProcessResult.styles";
import { RedButton } from "../styles";
import { ResponsivePaper } from "../styles";

import { Divider, Typography } from "@mui/material";
import { BookingRow } from "./InfoAndPaymentSection";
import { formatAmount } from "@helpers/amount";
import { useNavigate } from "react-router-dom";

export function PaymentContent({ success = false }: { success?: boolean }) {
    const title = success ? "Paid" : "Payment Failed";
    const titleColor = success ? TEXT_CUSTOM.SUCCESS : TEXT_CUSTOM.DANGER;
    const navigate = useNavigate();
    return (
        <>
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
                </ResponsivePaper>
                <RedButton
                    sx={{ padding: 2.5, fontWeight: 400 }}
                    onClick={() => navigate("/my-bookings")}
                >
                    Go to my bookings
                </RedButton>
            </CancelContainer>
        </>
    );
}
export function CancellationSuccess() {
    return <PaymentContent success={true} />;
}
