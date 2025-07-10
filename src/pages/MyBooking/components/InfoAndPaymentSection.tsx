import React from "react";
import { SURFACE } from "src/constants/palette";
import { Box, Typography, Collapse } from "@mui/material";
import { calculateUnitPrice } from "@helpers/calculateUnitPrice";
import { formatAmount } from "@helpers/amount";
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
    CustomDivider2
} from "../styles";

import { ExpandUp } from "@components/Icons/ExpandUp";
import { ExpandDown } from "@components/Icons/ExpandDown";
import { BookingStatus } from "../../../constants/Enums";
import { getStatusStyles } from "../styles";
import { PRODUCTS } from "src/constants/product.constants";
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
    const product = PRODUCTS.find(p => p.id === "standard-box");
    const unitPrice = calculateUnitPrice(booking.quantity, product?.bulkPricingTiers);
    const storageFee = (unitPrice ?? 0) * booking.quantity;
    const formattedStorageFee = formatAmount(storageFee, "SGD");
    const FEES = {
        EMPTY_BOX_DROPOFF: 58.99,
        PACKED_BOX_PICKUP: 50.0,
        PACKED_BOX_DROPOFF: 12.99,
        STUDENT_DISCOUNT: -5.0,
    };
    return (
        <PaperCard>
            {/* Status banner */}
            <StatusBanner sx={{ backgroundColor }}>
                <Box sx={{ pt: 1 }}>
                    <Icon />
                </Box>
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

            <Box sx={{ px: 2 }}>
                <CustomDivider2 />
            </Box>

            {/* Payment section */}
            <Box>
                <PriceToggleRow expanded={showBreakdown} onClick={toggleBreakdown}>
                    <Typography>Paid</Typography>
                    <BreakdownAmountBox>
                        <PaidAmountText>{formatAmount(1164.99)}</PaidAmountText>
                        <CollapsesIconButton size="small" disableRipple>
                            {showBreakdown ? <ExpandUp /> : <ExpandDown />}
                        </CollapsesIconButton>
                    </BreakdownAmountBox>
                </PriceToggleRow>

                <Collapse in={showBreakdown} timeout="auto" unmountOnExit>
                    <PriceBreakdownContainer>
                        <BookingRow label="Box storage fee" value={formattedStorageFee} compact />
                        <BookingRow
                            label="Empty Box Drop-off fee"
                            value={formatAmount(58.99)}
                            compact
                        />
                        <BookingRow
                            label="Packed Box Pick-up fee"
                            value={formatAmount(50)}
                            compact
                        />
                        <BookingRow
                            label="Packed box drop-off fee"
                            value={formatAmount(12.99)}
                            compact
                        />
                        <BookingRow
                            label="Student discount"
                            value={formatAmount(-5)}
                            color={SURFACE.SUCCESS_MED}
                            compact
                        />
                    </PriceBreakdownContainer>
                </Collapse>
            </Box>
        </PaperCard>
    );
};

export const BookingRow = ({
    label,
    value,
    bold,
    color,
    compact,
    medcompact,
    small,
}: {
    label: React.ReactNode;
    value: React.ReactNode;
    bold?: boolean;
    color?: string;
    compact?: boolean;
    medcompact?: boolean;
    small?: boolean
}) => (
    <BookingRowWrapper compact={compact} medcompact={medcompact} >
        <BookingLabel small={small}>{label}</BookingLabel>
        <BookingValueWrapper>
            <BookingValueText bold={bold} color={color} small={small}>
                {value}
            </BookingValueText>
        </BookingValueWrapper>
    </BookingRowWrapper>
);
