import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme, SelectChangeEvent } from "@mui/material";

import { CancelModalDesktop } from "./CancelModalDesktop";
import { CancelModalMobile } from "./CancelModalMobile";
import { fakeRequest } from "src/services/mockHttp";
import { CancelModalContext, CancelModalContextType } from "./CancelModalContext";

type CancelModalProps = {
    open: boolean;
    onClose: () => void;
};

export const CancelModal = ({ open, onClose }: CancelModalProps) => {
    const [reason, setReasonState] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [selectOpen, setSelectOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const setReason = (val: string | SelectChangeEvent) => {
        const newValue = typeof val === "string" ? val : val.target.value;
        setReasonState(newValue);
    };

    const handleProceed = async () => {
        setIsLoading(true);
        try {
            await fakeRequest({ resolve: () => ({}) });
            navigate("/cancellation/success");
        } catch (err) {
            console.error("Cancellation failed", err);
        } finally {
            setIsLoading(false);
        }
    };

    const contextValue: CancelModalContextType = {
        reason,
        details,
        selectOpen,
        isLoading,
        setReason,
        setDetails,
        setSelectOpen,
        handleProceed,
    };

    return (
        <CancelModalContext.Provider value={contextValue}>
            {isMobile ? (
                <CancelModalMobile open={open} onClose={onClose} />
            ) : (
                <CancelModalDesktop open={open} onClose={onClose} />
            )}
        </CancelModalContext.Provider>
    );
};
