import { CancelContainer } from "../../ProcessResult/ProcessResult.styles";
import { RedButton, ResponsivePaper } from "../styles";
import { Divider, Box, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BoxDetailsRow, BoxImageStyled, BoxTitle, StyledChip, BookingValueText } from "../styles";
import BoxImage from "../../../assets/Box-GreyBG.jpeg";
import { StyledOuterBox, StyledBoxMeta, StyledDropoffTitle, StyledDropoffMeta } from "../styles";

export function ReturnContent() {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <CancelContainer>
            <ResponsivePaper sx={{ height: "244px" }}>
                <StyledOuterBox>
                    <BoxDetailsRow>
                        <BoxImageStyled
                            src={BoxImage}
                            alt="Box"
                            sx={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                        <Box>
                            <BoxTitle>Standard Box</BoxTitle>
                            <Box>
                                <StyledChip>60 x 40 x 31cm</StyledChip>
                                <StyledChip>Max 20kg</StyledChip>
                            </Box>
                            <StyledBoxMeta>2 boxes x Extra 2 days</StyledBoxMeta>
                        </Box>
                    </BoxDetailsRow>

                    <Box sx={{ padding: 2 }}>
                        <StyledDropoffTitle>Packed box dropoff</StyledDropoffTitle>
                        <BookingValueText>123 Changi, Singapore</BookingValueText>
                        <StyledDropoffMeta>
                            Wed, 21 Sep 2025 · 6-hour slot · 8am - 2pm
                        </StyledDropoffMeta>
                    </Box>
                </StyledOuterBox>

                <Box sx={{ flexGrow: 1 }} />

                {isMobile && (
                    <Box mt={2}>
                        <Divider sx={{ marginRight: "-16px", marginLeft: "-16px" }} />
                        <RedButton
                            fullWidth
                            onClick={() => navigate("/my-bookings")}
                            sx={{ mt: "12px" }}
                        >
                            Go to my bookings
                        </RedButton>
                    </Box>
                )}
            </ResponsivePaper>

            {!isMobile && (
                <Box mt={-0.5}>
                    <RedButton sx={{ padding: 2.5 }} onClick={() => navigate("/my-bookings")}>
                        Go to my bookings
                    </RedButton>
                </Box>
            )}
        </CancelContainer>
    );
}

export function ReduceSuccess() {
    return <ReturnContent />;
}
