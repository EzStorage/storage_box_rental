import React from "react";
import { BackArrowIcon } from "@components/Icons/ChevronLeft";
import { TopSectionWrapper, BackRow, BackButton, BackLabel, BookingTitle } from "../styles";

export const TopSection = () => (
    <TopSectionWrapper>
        <BackRow>
            <BackButton onClick={() => window.history.back()}>
                <BackArrowIcon /> <BackLabel>Back</BackLabel>
            </BackButton>
        </BackRow>
        <BookingTitle>Booking details</BookingTitle>
    </TopSectionWrapper>
);
