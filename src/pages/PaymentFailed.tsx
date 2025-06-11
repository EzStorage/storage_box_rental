import React from "react";
import { Box, Typography, Paper, Button, Divider, Stack, Chip } from "@mui/material";

import {
    FullPageContainer,
    LabelRow,
    SuccessFailureHeading,
    IDText,
    ThankText,
    BorderBox,
    BookingTryAgain,
    ValueColumn,
    LabelText,
    StyledWhiteButton,
    VerticalDivider,
    DimensionText,
    StatusText,
    Bold_text,
    BoxAttributeChip,
    AddressText,
    TimeText,
    ResponsiveStack,
    ResponsivePaper,
    StyledBoxChip,
} from "./Homepage/Homepage.styles";

/*
import { CrossCircleIcon } from "../components/Icons/CrossCircleIcon";
*/
import { ResponsiveFlexBox } from "./Homepage/Homepage.styles";
import Standard from "../assets/standard-box.png";
import { Product } from ".././types/product.type";
import { CrossCircleIcon } from "../components/Icons/CrossCircleIcon";
import image from "../assets/image.png";
export default function App() {
    const boxSteps = [
        { label: "Empty Box Dropoff" },
        { label: "Packed Box Pickup" },
        { label: "Packed box dropoff" },
    ];
    return (
        <FullPageContainer textAlign={"center"}>
            <img src={image} alt="cross" width={69} height={69} />

            <SuccessFailureHeading>Payment Failed</SuccessFailureHeading>

            <ThankText>
                Thank you for purchase! Your booking information will be sent to{" "}
                <strong style={{ color: "black" }}>(+65) 1234 123 124</strong>
            </ThankText>

            <ResponsivePaper>
                <IDText>
                    <span>Booking ID: 234KHHK</span>
                    <VerticalDivider />
                    <StatusText style={{ color: "#CE2E02" }}>Payment Failed</StatusText>
                </IDText>

                <BorderBox>
                    <ResponsiveFlexBox>
                        <img
                            src={Standard}
                            alt="Standard Box"
                            width={80}
                            height={80}
                            style={{ objectFit: "contain" }}
                        />
                        <Box>
                            <Bold_text style={{ fontSize: 18 }}>Standard Box</Bold_text>
                            <Stack direction="row" spacing={0.8} mt={0.5}>
                                <StyledBoxChip
                                    label="60 x 40 x 31cm"
                                />
                                <StyledBoxChip
                                    label="Max 20kg"
                                />
                            </Stack>
                            <DimensionText>2 boxes × 6 months</DimensionText>
                        </Box>
                    </ResponsiveFlexBox>

                    {boxSteps.map((item, index) => (
                        <Box key={index} sx={{ mb: 1 }}>
                            <LabelRow>
                                <LabelText>{item.label}</LabelText>

                                <ValueColumn>
                                    <AddressText>123 Changi, Singapore</AddressText>
                                    <TimeText>Wed, 24 Sep 2025 · 6-hour slot · 8am - 2pm</TimeText>
                                </ValueColumn>
                            </LabelRow>
                            {index < 2 && <Divider sx={{ backgroundColor: "#EBECF0", my: 1 }} />}
                        </Box>
                    ))}
                </BorderBox>
            </ResponsivePaper>

            {/* Action Buttons */}
            <ResponsiveStack>
                <StyledWhiteButton>Go to dashboard</StyledWhiteButton>
                <BookingTryAgain>Try again</BookingTryAgain>
            </ResponsiveStack>
        </FullPageContainer>
    );
}
