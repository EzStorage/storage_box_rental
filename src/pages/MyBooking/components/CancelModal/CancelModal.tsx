import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme, SelectChangeEvent } from "@mui/material";

import { CancelModalDesktop } from "./CancelModalDesktop";
import { CancelModalMobile } from "./CancelModalMobile";
import { fakeRequest } from "src/services/mockHttp";

import { CancelModalProvider, useCancelModalCommit } from "../../../../helpers/createFastContext";
type CancelModalProps = {
    open: boolean;
    onClose: () => void;
};

export const CancelModalContent = ({ open, onClose }: CancelModalProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const commit = useCancelModalCommit();

    useEffect(() => {
        commit({
            handleProceed: async () => {
                commit({ isLoading: true });
                try {
                    await fakeRequest({ resolve: () => ({}) });
                    navigate("/cancellation/success");
                } catch (err) {
                    console.error("Cancellation failed", err);
                } finally {
                    commit({ isLoading: false });
                }
            },
        });
    }, [commit, navigate]);

    return isMobile ? (
        <CancelModalMobile open={open} onClose={onClose} />
    ) : (
        <CancelModalDesktop open={open} onClose={onClose} />
    );
};

export const CancelModal = (props: CancelModalProps) => (
    <CancelModalProvider>
        <CancelModalContent {...props} />
    </CancelModalProvider>
);
