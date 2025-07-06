import { BackArrowIcon } from "@components/Icons/ChevronLeft";
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TopSectionWrapper, BackRow, BackButton, BackLabel, BookingTitle } from "../styles";
import { BackArrowIconMobile } from "@components/Icons/BackArrowMobile";

export const TopSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <TopSectionWrapper>
            <BackRow>
                <BackButton onClick={handleBack}>
                    {isMobile ? <BackArrowIconMobile /> : <BackArrowIcon />}
                    {!isMobile && <BackLabel>Back</BackLabel>}
                </BackButton>
            </BackRow>
            <BookingTitle>Booking details</BookingTitle>
        </TopSectionWrapper>
    );
};
