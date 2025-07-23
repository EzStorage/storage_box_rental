import React, { useRef, useState, useEffect } from "react";
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
import { BodyPortal } from "./BodyPortal";
import { useReduceTimeController } from "./LogicHook";
import { CustomDatePicker } from "@pages/BookingFlow/components/CustomDatePicker";
import { CircularProgress, Box } from "@mui/material";
import { CloseCircleIcon } from "@components/Icons/CloseCircleIcon";
import { ReduceFlowSelector, ReduceFlowCommit } from "./Context";
import FormReduceFlow from "./Form";

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
    const date = ReduceFlowSelector(state => state.date);
    const isLoading = ReduceFlowSelector(state => state.isLoading);
    const open = ReduceFlowSelector(s => s.open);
    const commit = ReduceFlowCommit();

    const triggerRef = useRef<HTMLDivElement>(null);
    const [calendarAnchor, setCalendarAnchor] = useState<DOMRect | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        if (open && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setCalendarAnchor(rect);
            setShowCalendar(true);
        } else {
            setShowCalendar(false);
        }
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
                    <FormReduceFlow />
                </StyledDialogContent>

                <Box ref={triggerRef} sx={{ mb: 3 }} />

                {calendarAnchor && showCalendar && (
                    <BodyPortal>
                        <div
                            style={{
                                position: "absolute",
                                top: calendarAnchor.bottom + window.scrollY - 48,
                                left: calendarAnchor.left + window.scrollX,
                                zIndex: 9999,
                                width: "420px",
                            }}
                        >
                            <CustomDatePicker
                                defaultValue={date ? new Date(date) : new Date()}
                                onChange={(date: Date) => {
                                    commit({ date: date.toISOString() });
                                }}
                                minDate={new Date()}
                            />
                        </div>
                    </BodyPortal>
                )}

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
