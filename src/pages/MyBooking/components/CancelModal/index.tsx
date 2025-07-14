import { CancelModalProvider } from "../../../../helpers/createFastContext";
import { CancelModalDesktop } from "./DesktopUI";
import { CancelModalMobile } from "./MobileUI";
import { fakeRequest } from "src/services/mockHttp";

import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { useCancelModalCommit } from "../../../../helpers/createFastContext";

export type CancelModalProps = {
    open: boolean;
    onClose: () => void;
};

export const CancelModalContent = ({ open, onClose }: CancelModalProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const commit = useCancelModalCommit();

    const handleProceed = async () => {
        commit({ isLoading: true });
        try {
            await fakeRequest({ resolve: () => ({}) });
            navigate("/cancellation/success");
        } catch (err) {
            console.error("Cancellation failed", err);
        } finally {
            commit({ isLoading: false });
        }
    };

    const ModalComponent = isMobile ? CancelModalMobile : CancelModalDesktop;

    return <ModalComponent open={open} onClose={onClose} onProceed={handleProceed} />;
};

export const CancelModal = (props: CancelModalProps) => {
    return (
        <CancelModalProvider>
            <CancelModalContent {...props} />
        </CancelModalProvider>
    );
};
