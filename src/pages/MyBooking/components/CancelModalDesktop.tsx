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
} from "../styles";
import { MenuItem } from "@mui/material";
import { CloseCircleIcon } from "@components/Icons/CloseCircleIcon";
import { GreyExpandDown } from "@components/Icons/GreyExpandDown";
import { GreyExpandUp } from "@components/Icons/GreyExpandUp";
import { useCancelModal } from "./CancelModalContext";
import { CircularProgress } from "@mui/material";
type Props = {
    open: boolean;
    onClose: () => void;
};

export const CancelModalDesktop = ({ open, onClose }: Props) => {
    const {
        reason,
        details,
        selectOpen,
        isLoading,
        setReason,
        setDetails,
        setSelectOpen,
        handleProceed,
    } = useCancelModal();

    return (
        <CustomDialog open={open} onClose={onClose}>
            <ModalWrapper>
                <HeaderRow>
                    <ModalTitle variant="h6">Request cancel</ModalTitle>
                    <CloseIconButton onClick={onClose}>
                        <CloseCircleIcon />
                    </CloseIconButton>
                </HeaderRow>

                <StyledDialogContent>
                    <ReasonLabel>Reason</ReasonLabel>
                    <StyledSelect
                        fullWidth
                        displayEmpty
                        value={reason}
                        onChange={setReason}
                        onOpen={() => setSelectOpen(true)}
                        onClose={() => setSelectOpen(false)}
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
                        onChange={e => setDetails(e.target.value)}
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
