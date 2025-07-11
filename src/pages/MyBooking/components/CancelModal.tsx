import { MenuItem, SelectChangeEvent } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CloseCircleIcon } from "@components/Icons/CloseCircleIcon";
import { GreyExpandUp } from "@components/Icons/GreyExpandUp";
import { GreyExpandDown } from "@components/Icons/GreyExpandDown";

import {
    ModalWrapper,
    HeaderRow,
    StyledSelect,
    StyledTextField,
    RedButton,
    CustomDialog,
    ModalTitle,
    CloseIconButton,
    StyledDialogContent,
    ReasonLabel,
    FullWidthDivider,
} from "../styles";

type CancelModalProps = {
    open: boolean;
    onClose: () => void;
};

export const CancelModal = ({ open, onClose }: CancelModalProps) => {
    const [reason, setReason] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [selectOpen, setSelectOpen] = useState(false);

    const handleReasonChange = (e: SelectChangeEvent) => {
        setReason(e.target.value as string);
    };

    const navigate = useNavigate();

    const handleProceed = () => {
        navigate("/cancellation/success");
    };
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
                        onChange={handleReasonChange}
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
                    Proceed
                </RedButton>
            </ModalWrapper>
        </CustomDialog>
    );
};
