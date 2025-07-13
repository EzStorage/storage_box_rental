import { ReasonLabel, StyledSelect, StyledTextField } from "../styles";
import {
    SwipeableDrawer,
    Box,
    Typography,
    Divider,
    Button,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import { TopSectionWrapper, BackRowModal } from "../styles";
import { MobileCloseIcon } from "@components/Icons/CrossDrawer";
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

export const CancelModalMobile = ({
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
                onClick={onProceed}
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
                {isLoading ? "Sending..." : "Send"}
            </Button>
        </Box>
    </SwipeableDrawer>
);
