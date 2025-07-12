import { MenuItem, SelectChangeEvent, Button, Typography, Box, Divider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme, SwipeableDrawer } from "@mui/material";
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
import { TopSectionWrapper, BackRowModal } from "../styles";
import { MobileCloseIcon } from "@components/Icons/CrossDrawer";
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const modalContent = (
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
    );
    if (isMobile) {
        return (
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={onClose}
                onOpen={() => {}}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: "white",
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            height: "53vh",
                            px: 2,
                            pt: 0,
                            display: "flex",
                            flexDirection: "column",
                        },
                    },
                }}
            >
                <TopSectionWrapper>
                    <BackRowModal>
                        <CloseIconButton onClick={onClose} sx={{ mt: "0px", padding: 0 }}>
                            <MobileCloseIcon />
                        </CloseIconButton>
                    </BackRowModal>
                    <Typography fontWeight={600} fontSize={16}>
                        Cancellation
                    </Typography>
                </TopSectionWrapper>
                <Divider sx={{ mt: 1, marginRight: "-24px", marginLeft: "-24px" }} />

                <Box mt={2} flex={1} display="flex" flexDirection="column">
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
                </Box>
                <Divider sx={{ marginRight: "-24px", marginLeft: "-24px" }} />

                <Box display="flex" gap={1} mt={2} mb={2}>
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={onClose}
                        sx={{
                            height: 48,
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: "none",
                            color: "#2D2D2D",
                            borderColor: "#E0E0E0",
                            backgroundColor: "#F4F4F4",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleProceed}
                        disabled={!reason}
                        sx={{
                            height: 48,
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: "none",
                            backgroundColor: "#EF151E",
                            color: "white",
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </SwipeableDrawer>
        );
    }
    return (
        <CustomDialog open={open} onClose={onClose}>
            {modalContent}
        </CustomDialog>
    );
};
