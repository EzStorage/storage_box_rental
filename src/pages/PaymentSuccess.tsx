import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Stack,
  Chip,
} from "@mui/material";

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
} from "./Homepage/Homepage.styles";

import { CheckCircleIcon } from "../components/Icons/CheckCircleIcon";
import Standard from "../assets/standard-box.png";
import { Product } from ".././types/product.type";

export default function App() {
  return (
    <FullPageContainer>
      <CheckCircleIcon />

      <SuccessFailureHeading>Payment success</SuccessFailureHeading>

      <ThankText>
        Thank you for purchase! Your booking information will be sent to{" "}
        <strong style={{ color: "black" }}>(+65) 1234 123 124</strong>
      </ThankText>

      <Paper elevation={0} sx={{ backgroundColor: "white", p: 3, width: 492, height: 380 }}>
        <IDText>
          <span>Booking ID: 234KHHK</span>
          <VerticalDivider />
          <StatusText>Paid</StatusText>
        </IDText>

        <BorderBox>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "flex-start",
              mb: 2,
              flexWrap: "wrap",
            }}
          >
            <img
              src={Standard}
              alt="Standard Box"
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
            />
            <Box>
              <Bold_text style={{ fontSize: 18 }}>Standard Box</Bold_text>
              <Stack direction="row" spacing={1} mt={0.5}>
                <BoxAttributeChip style={{fontSize:"12px",fontFamily: '"Poppins", sans-serif',}}label="60 x 40 x 31cm" />
                <BoxAttributeChip style={{fontSize:"12px",fontFamily: '"Poppins", sans-serif',}}label="Max 20kg" />
              </Stack>
              <DimensionText>2 boxes × 6 months</DimensionText>
            </Box>
          </Box>

          {[
            { label: "Empty Box Dropoff" },
            { label: "Packed Box Pickup" },
            { label: "Packed box dropoff" },
          ].map((item, index) => (
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
      </Paper>

      {/* Action Buttons */}
      <Stack direction="row" spacing={4} sx={{ mt: 4, fontFamily: "Poppins" }}>
        <StyledWhiteButton>Go to dashboard</StyledWhiteButton>
        <BookingTryAgain>Go to my bookings</BookingTryAgain>
      </Stack>
    </FullPageContainer>
  );
}
