import React from "react";
import { Box, Typography, Collapse, Divider } from "@mui/material";

import BoxImage from "../../../assets/Box-GreyBG.jpeg";
import {
    PaperCard,
    StatusBanner,
    StatusText,
    BoxDetailsRow,
    BoxImageStyled,
    BoxTitle,
    BoxSubText,
    StyledChip,
    PriceToggleRow,
    BreakdownAmountBox,
    PaidAmountText,
    CollapsesIconButton,
    PriceBreakdownContainer,
    BookingRowWrapper,
    BookingLabel,
    BookingValueWrapper,
    BookingValueText,
} from "../styles";

import { ExpandUp } from "@components/Icons/ExpandUp";
import { ExpandDown } from "@components/Icons/ExpandDown";
import { RetrieveBoxIcon } from "@components/Icons/BackupIcon";

import { BookingStatus } from "../../../constants/Enums";
import { getStatusStyles } from "../styles";

type Props = {
    booking: {
        id: string;
        status: BookingStatus | string;
        quantity: number;
        duration: string;
    };
    showBreakdown: boolean;
    toggleBreakdown: () => void;
};

export const InfoAndPaymentSection = ({ booking, showBreakdown, toggleBreakdown }: Props) => {
    const { backgroundColor, textColor, Icon } = getStatusStyles(booking.status as BookingStatus);

    return (
        <PaperCard>
            {/* Status banner */}
            <StatusBanner sx={{ backgroundColor }}>
                <Icon />
                <StatusText sx={{ color: textColor }}>
                    {booking.status === BookingStatus.Stored
                        ? "Your inventory has been stored"
                        : booking.status}
                </StatusText>
            </StatusBanner>

            {/* Box info row */}
            <BoxDetailsRow>
                <BoxImageStyled src={BoxImage} alt="Box" />
                <Box>
                    <BoxTitle>Standard Box</BoxTitle>
                    <Box>
                        <StyledChip>60 x 40 x 31cm</StyledChip>
                        <StyledChip>Max 20kg</StyledChip>
                    </Box>
                    <BoxSubText>
                        {booking.quantity} boxes × {booking.duration}
                    </BoxSubText>
                </Box>
            </BoxDetailsRow>

            <Box sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: 2 }}>
                <Divider sx={{ width: "100%" }} />
            </Box>

            {/* Payment section */}
            <Box>
                <PriceToggleRow onClick={toggleBreakdown}>
                    <Typography>Paid</Typography>
                    <BreakdownAmountBox>
                        <PaidAmountText>S$1,164.99</PaidAmountText>
                        <CollapsesIconButton size="small" disableRipple>
                            {showBreakdown ? <ExpandUp /> : <ExpandDown />}
                        </CollapsesIconButton>
                    </BreakdownAmountBox>
                </PriceToggleRow>

                <Collapse in={showBreakdown} timeout="auto" unmountOnExit>
                    <PriceBreakdownContainer>
                        <BookingRow label="Box storage fee" value="S$1040.00" />
                        <BookingRow label="Empty Box Drop-off fee" value="S$58.99" />
                        <BookingRow label="Packed Box Pick-up fee" value="S$50.00" />
                        <BookingRow label="Packed box drop-off fee" value="S$12.99" />
                        <BookingRow label="Student discount" value="- S$5.00" color="green" bold />
                    </PriceBreakdownContainer>
                </Collapse>
            </Box>
        </PaperCard>
    );
};

// Inner row used inside breakdown
export const BookingRow = ({
    label,
    value,
    bold,
    color,
}: {
    label: React.ReactNode;
    value: React.ReactNode;
    bold?: boolean;
    color?: string;
}) => (
    <BookingRowWrapper>
        <BookingLabel>{label}</BookingLabel>
        <BookingValueWrapper>
            <BookingValueText bold={bold} color={color}>
                {value}
            </BookingValueText>
        </BookingValueWrapper>
    </BookingRowWrapper>
);
