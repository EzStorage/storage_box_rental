import React from "react";
import { BackArrowIcon } from "@components/Icons/ChevronLeft";
import { useMediaQuery, useTheme } from "@mui/material";
import { TopSectionWrapper, BackRow, BackButton, BackLabel, BookingTitle } from "../styles";
import { BackArrowIconMobile } from "@components/Icons/BackArrowMobile";
export const TopSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <TopSectionWrapper>
            <BackRow>
                <BackButton onClick={() => window.history.back()}>
                    {isMobile ? <BackArrowIconMobile /> : <BackArrowIcon />}
                    {!isMobile && <BackLabel>Back</BackLabel>}
                </BackButton>
            </BackRow>
            <BookingTitle>Booking details</BookingTitle>
        </TopSectionWrapper>
    );
};
