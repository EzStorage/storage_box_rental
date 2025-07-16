import {
    ModalWrapper,
    HeaderRow,
    ModalTitle,
    CloseIconButton,
    StyledDialogContent,
    ReasonLabel,
    StyledSelect,
    StyledTextField,
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
    const selectOpen = useCancelModalSelector(state => state.selectOpen);
    const isLoading = useCancelModalSelector(state => state.isLoading);
    const open = useCancelModalSelector(s => s.open);
    const { close, handleProceed } = useCancelModalController();

    return (
        <CustomDialog open={open} onClose={close}>
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

                <RedButton variant="contained" onClick={handleProceed} disabled={!reason}>
                    {isLoading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Proceed"}
                </RedButton>
            </ModalWrapper>
        </CustomDialog>
    );
};
