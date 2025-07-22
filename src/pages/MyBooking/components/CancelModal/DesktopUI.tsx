import React from "react";
import {
    ModalWrapper,
    HeaderRow,
    ModalTitle,
    CloseIconButton,
    StyledDialogContent,
    ReasonLabel,
    FullWidthDivider,
    RedButton,
    CustomDialog,
} from "../../styles";
import { useCancelModalController } from "./LogicHook";
import { CircularProgress } from "@mui/material";
import { CloseCircleIcon } from "@components/Icons/CloseCircleIcon";
import { useCancelModalSelector } from "./Context";
import { CancelModalForm } from "./Form";

export const CancelModalDesktop = () => {
    const reason = useCancelModalSelector(state => state.reason);
    const details = useCancelModalSelector(state => state.details);
    const isLoading = useCancelModalSelector(state => state.isLoading);
    const open = useCancelModalSelector(s => s.open);
    const { close, handleProceed } = useCancelModalController();
    return (
        <CustomDialog
            open={open}
            onClose={close}
            transitionDuration={0}
            keepMounted
            slotProps={{ transition: { timeout: 0 } }}
        >
            <ModalWrapper>
                <HeaderRow>
                    <ModalTitle variant="h6">Request cancel</ModalTitle>
                    <CloseIconButton onClick={close}>
                        <CloseCircleIcon />
                    </CloseIconButton>
                </HeaderRow>

                <StyledDialogContent>
                    <ReasonLabel>Reason</ReasonLabel>
                    <CancelModalForm />
                </StyledDialogContent>

                <FullWidthDivider />

                <RedButton
                    variant="contained"
                    onClick={handleProceed}
                    disabled={!reason || details.trim() === ""}
                >
                    {isLoading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Proceed"}
                </RedButton>
            </ModalWrapper>
        </CustomDialog>
    );
};
