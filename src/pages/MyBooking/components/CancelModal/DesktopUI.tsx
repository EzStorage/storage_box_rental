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
import { useCancelModalLogic } from "./LogicHook";
import { MenuItem, CircularProgress } from "@mui/material";
import { CloseCircleIcon } from "@components/Icons/CloseCircleIcon";
import { GreyExpandDown } from "@components/Icons/GreyExpandDown";
import { GreyExpandUp } from "@components/Icons/GreyExpandUp";
import { useCancelModalSelector, useCancelModalCommit } from "./Context";

export const CancelModalDesktop = () => {
    const reason = useCancelModalSelector(state => state.reason);
    const details = useCancelModalSelector(state => state.details);
    const selectOpen = useCancelModalSelector(state => state.selectOpen);
    const isLoading = useCancelModalSelector(state => state.isLoading);
    const open = useCancelModalSelector(s => s.open);
    const commit = useCancelModalCommit();
    const { close, handleProceed } = useCancelModalLogic();

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
                    <StyledSelect
                        fullWidth
                        displayEmpty
                        value={reason}
                        onChange={e => commit({ reason: e.target.value })}
                        onOpen={() => commit({ selectOpen: true })}
                        onClose={() => commit({ selectOpen: false })}
                        IconComponent={selectOpen ? GreyExpandUp : GreyExpandDown}
                    >
                        <MenuItem value="" disabled>
                            Select reason
                        </MenuItem>
                        <MenuItem value="Changed mind">Changed mind</MenuItem>
                        <MenuItem value="Wrong date">Booked wrong date</MenuItem>
                    </StyledSelect>

                    <StyledTextField
                        fullWidth
                        multiline
                        minRows={4}
                        placeholder="Tell us more your reason"
                        value={details}
                        onChange={e => commit({ details: e.target.value })}
                    />
                </StyledDialogContent>

                <FullWidthDivider />

                <RedButton variant="contained" onClick={handleProceed} disabled={!reason}>
                    {isLoading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Proceed"}
                </RedButton>
            </ModalWrapper>
        </CustomDialog>
    );
};
