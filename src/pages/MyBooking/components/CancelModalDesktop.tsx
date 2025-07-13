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
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { CloseCircleIcon } from "@components/Icons/CloseCircleIcon";
import { GreyExpandDown } from "@components/Icons/GreyExpandDown";
import { GreyExpandUp } from "@components/Icons/GreyExpandUp";
type Props = {
    open: boolean;
    onClose: () => void;
    reason: string;
    details: string;
    selectOpen: boolean;
    isLoading: boolean;
    onReasonChange: (e: SelectChangeEvent) => void;
    onDetailsChange: (val: string) => void;
    onProceed: () => void;
    onSelectOpen: () => void;
    onSelectClose: () => void;
};

export const CancelModalDesktop = ({
    open,
    onClose,
    reason,
    details,
    selectOpen,
    isLoading,
    onReasonChange,
    onDetailsChange,
    onProceed,
    onSelectOpen,
    onSelectClose,
}: Props) => (
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
                    onChange={onReasonChange}
                    onOpen={onSelectOpen}
                    onClose={onSelectClose}
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
                    onChange={e => onDetailsChange(e.target.value)}
                />
            </StyledDialogContent>

            <FullWidthDivider />

            <RedButton variant="contained" onClick={onProceed} disabled={!reason}>
                {isLoading ? "Sending..." : "Proceed"}
            </RedButton>
        </ModalWrapper>
    </CustomDialog>
);
