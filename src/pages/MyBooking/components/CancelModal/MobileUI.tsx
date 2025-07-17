import { ReasonLabel } from "../../styles";
import { SwipeableDrawer, Box, Typography, Divider, Button } from "@mui/material";
import { TopSectionWrapper, BackRowModal } from "../../styles";
import { MobileCloseIcon } from "@components/Icons/CrossDrawer";
import { useCancelModalSelector } from "./Context";
import { CircularProgress } from "@mui/material";
import { useCancelModalController } from "./LogicHook";
import { CancelModalForm } from "./Form";
export const CancelModalMobile = () => {
    const reason = useCancelModalSelector(state => state.reason);
    const isLoading = useCancelModalSelector(state => state.isLoading);
    const open = useCancelModalSelector(s => s.open);
    const { close, handleProceed } = useCancelModalController();
    const details = useCancelModalSelector(state => state.details);
    return (
        <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={close}
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
                    <Button onClick={close} sx={{ mt: "0px", padding: 0, ml: -3 }}>
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
                <CancelModalForm />
            </Box>

            <Divider sx={{ mx: "-24px" }} />

            <Box display="flex" gap={1} mt={2} mb={2}>
                <Button
                    fullWidth
                    variant="outlined"
                    onClick={close}
                    sx={{
                        height: 48,
                        fontWeight: 600,
                        borderRadius: "4px",
                        textTransform: "none",
                        color: "#2D2D2D",
                        border: "none",
                        backgroundColor: "#F4F4F4",
                    }}
                >
                    Cancel
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleProceed}
                    disabled={!reason || details.trim() === ""}
                    sx={{
                        height: 48,
                        fontWeight: 600,
                        borderRadius: "4px",
                        textTransform: "none",
                        backgroundColor: "#EF151E",
                        color: "#5B616D",
                    }}
                >
                    {isLoading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "Send"}
                </Button>
            </Box>
        </SwipeableDrawer>
    );
};
