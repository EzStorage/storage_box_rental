import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GreyButton, PlainGreyButton, PrimaryButton, ButtonRow, MobileActionBox } from "../styles";
import { BookingStatus } from "../../../constants/Enums";
import { CancelModal } from "./CancelModal/index";
import { useCancelModalController } from "./CancelModal/LogicHook";

interface Props {
    status: BookingStatus;
}

export const ActionButtons = ({ status }: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const { open, resetFields } = useCancelModalController();

    const handleRequestCancel = () => {
        resetFields();
        open();
    };

    const content = (() => {
        switch (status) {
            case BookingStatus.AwaitingPickup:
            case BookingStatus.BoxToBeDelivered:
                return (
                    <GreyButton fullWidth onClick={handleRequestCancel}>
                        Request Cancel
                    </GreyButton>
                );

            case BookingStatus.Stored:
                return (
                    <ButtonRow>
                        <PlainGreyButton fullWidth>Reduce the storage date</PlainGreyButton>
                        <PrimaryButton variant="contained" fullWidth>
                            Renew Storage
                        </PrimaryButton>
                    </ButtonRow>
                );

            case BookingStatus.Returned:
                return <PlainGreyButton fullWidth>Rate your booking</PlainGreyButton>;

            case BookingStatus.Cancelled:
                return (
                    <PrimaryButton variant="contained" fullWidth>
                        Book Again
                    </PrimaryButton>
                );

            default:
                return null;
        }
    })();

    return (
        <>
            {isMobile ? <MobileActionBox>{content}</MobileActionBox> : content}

            {(status === BookingStatus.AwaitingPickup ||
                status === BookingStatus.BoxToBeDelivered) && <CancelModal />}
        </>
    );
};
