import { createContext, useContext } from "react";
import { SelectChangeEvent } from "@mui/material";

export type CancelModalContextType = {
    reason: string;
    details: string;
    selectOpen: boolean;
    isLoading: boolean;
    setReason: (val: string | SelectChangeEvent) => void;
    setDetails: (val: string) => void;
    setSelectOpen: (val: boolean) => void;
    handleProceed: () => void;
};

export const CancelModalContext = createContext<CancelModalContextType | null>(null);

export const useCancelModal = () => {
    const context = useContext(CancelModalContext);
    if (!context) throw new Error("useCancelModal must be used within CancelModalProvider");
    return context;
};
