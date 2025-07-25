import {
    ModalWrapper,
    HeaderRow,
    ModalTitle,
    CloseIconButton,
    StyledDialogContent,
    FullWidthDivider,
    RedButton,
    CustomDialog,
} from "../../styles";
import { useReduceTimeController } from "./LogicHook";
import { CustomDatePicker } from "@pages/BookingFlow/components/CustomDatePicker";
import { CircularProgress, Box } from "@mui/material";
import { CloseCircleIcon } from "@components/Icons/CloseCircleIcon";
import { useReduceFlowSelector } from "./Context";
import { DateSelector } from "./Form";
import { useReduceFlowCommit } from "./Context";

import { useRef, useState, useEffect } from "react";

export const ChangeTimeModalDesktop = () => {
    const { close, handleProceed } = useReduceTimeController();

    return <ReduceFlowContent close={close} handleProceed={handleProceed} />;
};

const ReduceFlowContent = ({
    close,
    handleProceed,
}: {
    close: () => void;
    handleProceed: () => void;
}) => {
    const date = useReduceFlowSelector(state => state.date);
    const isLoading = useReduceFlowSelector(state => state.isLoading);
    const open = useReduceFlowSelector(s => s.open);
    const commit = useReduceFlowCommit();

    const triggerRef = useRef<HTMLDivElement>(null);
    const [calendarAnchor, setCalendarAnchor] = useState<DOMRect | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleCalendarOpen = () => {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCalendarAnchor(rect);
        }
        setShowCalendar(true);
    };

    const handleCalendarClose = () => {
        setShowCalendar(false);
    };

    useEffect(() => {
        if (!open) setShowCalendar(false);
    }, [open]);

    return (
        <CustomDialog
            open={open}
            onClose={close}
            transitionDuration={0}
            keepMounted
            slotProps={{ transition: { timeout: 0 } }}
            sx={{
                "& .MuiDialog-paper": {
                    height: "431px",
                },
            }}
        >
            <ModalWrapper>
                <HeaderRow>
                    <ModalTitle variant="h6">Reduce the storage time</ModalTitle>
                    <CloseIconButton onClick={close}>
                        <CloseCircleIcon />
                    </CloseIconButton>
                </HeaderRow>

                <StyledDialogContent>
                    <DateSelector />
                </StyledDialogContent>
                <Box ref={triggerRef} sx={{ mb: 4 }} onClick={handleCalendarOpen}>
                    <CustomDatePicker
                        defaultValue={date ? new Date(date) : new Date()}
                        onChange={(date: Date) => {
                            commit({ date: date.toISOString() });
                            handleCalendarClose();
                        }}
                        minDate={new Date()}
                    />
                </Box>

                <FullWidthDivider />

                <RedButton
                    variant="contained"
                    onClick={handleProceed}
                    disabled={!date || date.trim() === ""}
                >
                    {isLoading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Proceed"}
                </RedButton>
            </ModalWrapper>
        </CustomDialog>
    );
};
