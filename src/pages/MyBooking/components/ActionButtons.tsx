import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GreyButton, PlainGreyButton, PrimaryButton, ButtonRow, MobileActionBox } from "../styles";
import { BookingStatus } from "../../../constants/Enums";
import { CancelModal } from "./CancelModal/index";
import { useCancelModalController } from "./CancelModal/LogicHook";
import { CancelModalProvider } from "./CancelModal/Context";

interface Props {
    status: BookingStatus;
}

const CancelActions = ({ isMobile }: { isMobile: boolean }) => {
    const { open } = useCancelModalController();

    const handleRequestCancel = () => {
        open();
    };

    const button = (
        <GreyButton fullWidth onClick={handleRequestCancel}>
            Request Cancel
        </GreyButton>
    );

    return isMobile ? <MobileActionBox>{button}</MobileActionBox> : button;
};

export const ActionButtons = ({ status }: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const cancelEligible =
        status === BookingStatus.AwaitingPickup || status === BookingStatus.BoxToBeDelivered;

    const content = (() => {
        switch (status) {
            case BookingStatus.Stored:
                const stored = (
                    <ButtonRow>
                        <PlainGreyButton fullWidth>Reduce the storage date</PlainGreyButton>
                        <PrimaryButton variant="contained" fullWidth>
                            Renew Storage
                        </PrimaryButton>
                    </ButtonRow>
                );
                return isMobile ? <MobileActionBox>{stored}</MobileActionBox> : stored;

            case BookingStatus.Returned:
                const returned = <PlainGreyButton fullWidth>Rate your booking</PlainGreyButton>;
                return isMobile ? <MobileActionBox>{returned}</MobileActionBox> : returned;

            case BookingStatus.Cancelled:
                const cancelled = (
                    <PrimaryButton variant="contained" fullWidth>
                        Book Again
                    </PrimaryButton>
                );
                return isMobile ? <MobileActionBox>{cancelled}</MobileActionBox> : cancelled;

            default:
                return null;
        }
    })();

    if (cancelEligible) {
        return (
            <CancelModalProvider>
                <CancelActions isMobile={isMobile} />
                <CancelModal />
            </CancelModalProvider>
        );
    }

    return content;
};
