// CancelModal.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

import { CancelModalDesktop } from "./CancelModalDesktop";
import { CancelModalMobile } from "./CancelModalMobile";
import { fakeRequest } from "src/services/mockHttp";

type CancelModalProps = {
    open: boolean;
    onClose: () => void;
};

export const CancelModal = ({ open, onClose }: CancelModalProps) => {
    const [reason, setReason] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [selectOpen, setSelectOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleReasonChange = (e: SelectChangeEvent) => setReason(e.target.value);
    const handleDetailsChange = (val: string) => setDetails(val);

    const handleProceed = async () => {
        setIsLoading(true);
        try {
            await fakeRequest({ resolve: () => ({}), duration: 1500 });
            navigate("/cancellation/success");
        } catch (err) {
            console.error("Cancellation failed", err);
        } finally {
            setIsLoading(false);
        }
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();

    const sharedProps = {
        open,
        onClose,
        reason,
        details,
        selectOpen,
        isLoading,
        onReasonChange: handleReasonChange,
        onDetailsChange: handleDetailsChange,
        onProceed: handleProceed,
        onSelectOpen: () => setSelectOpen(true),
        onSelectClose: () => setSelectOpen(false),
    };

    return isMobile ? (
        <CancelModalMobile {...sharedProps} />
    ) : (
        <CancelModalDesktop {...sharedProps} />
    );
};
