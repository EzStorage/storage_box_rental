import { ReasonLabel, StyledSelect, StyledTextField } from "../../styles";
import { SwipeableDrawer, Box, Typography, Divider, Button, MenuItem } from "@mui/material";
import { TopSectionWrapper, BackRowModal } from "../../styles";
import { MobileCloseIcon } from "@components/Icons/CrossDrawer";
import { GreyExpandDown } from "@components/Icons/GreyExpandDown";
import { GreyExpandUp } from "@components/Icons/GreyExpandUp";
import {
    useCancelModalSelector,
    useCancelModalCommit,
} from "../../../../helpers/createFastContext";
import { CircularProgress } from "@mui/material";
type Props = {
    open: boolean;
    onClose: () => void;
};

export const CancelModalMobile = ({ open, onClose }: Props) => {
    const reason = useCancelModalSelector(state => state.reason);
    const details = useCancelModalSelector(state => state.details);
    const selectOpen = useCancelModalSelector(state => state.selectOpen);
    const isLoading = useCancelModalSelector(state => state.isLoading);
    const handleProceed = useCancelModalSelector(state => state.handleProceed);

    const commit = useCancelModalCommit();

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
                    <Button onClick={onClose} sx={{ mt: "0px", padding: 0 }}>
                        <MobileCloseIcon />
                    </Button>
                </BackRowModal>
                <Typography fontWeight={600} fontSize={16}>
                    Cancellation
                </Typography>
            </TopSectionWrapper>

            <Divider sx={{ mt: 1, mx: "-24px" }} />

            <Box mt={2} flex={1} display="flex" flexDirection="column">
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
            </Box>

            <Divider sx={{ mx: "-24px" }} />

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
                    {isLoading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Send"}
                </Button>
            </Box>
        </SwipeableDrawer>
    );
};
