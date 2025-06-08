import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Stack,
  Chip
} from "@mui/material";
import { Product } from ".././types/product.type";
import { CheckCircleIcon } from "../components/Icons/CheckCircleIcon";
import  Standard from "../assets/standard-box.png";
import { Bold_text, BoxAttributeChip ,AddressText, TimeText} from "./Homepage/Homepage.styles";
export default function App() {
  return (
    <Box
      sx={{
        fontFamily: "Poppins",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f6f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 32px",
        boxSizing: "border-box",
        paddingTop:"120px"
      }}
    >
      {/* Success Icon */}
      <CheckCircleIcon />

      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "black", pt: 2, fontFamily: "Poppins" }}
      >
        Payment success
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, fontFamily: "Poppins",color:"#5B616D" }}
      >
        Thank you for purchase! Your booking information will be sent to{" "}
        <strong style={{ color: "black" }}>(+65) 1234 123 124</strong>
      </Typography>

      {/* Booking Card */}
      <Paper elevation={0} sx={{ backgroundColor:"white",p: 3, width: "492px", height: "380px" }}>
        {/* Top Line */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "15px",
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 0,
            fontFamily: "Poppins",
            color: "#5B616D"
          }}
        >
          <span>Booking ID: 234KHHK</span>
          <Box
            sx={{
              width: "1px",
              height: "16px",
              backgroundColor: "#D1D5DB",
              mx: 1
            }}
          />
          <Box
            sx={{
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: "20px",
              color: "#59961F"
            }}
          >
            Paid
          </Box>
        </Typography>

        {/* Bordered Section */}
        <Box sx={{ border: "1px solid #EBECF0", borderRadius: "8px", padding: 2 }}>
          {/* Box Info */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "flex-start",
              mb: 2,
              flexWrap: "wrap"
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
              <Bold_text style={{fontSize:"18px"}}
              >
                Standard Box
              </Bold_text>
              <Stack direction="row" spacing={1} mt={0.5}>
                <BoxAttributeChip label="60 x 40 x 31cm" />
                <BoxAttributeChip label="Max 20kg" />
              </Stack>
              <Typography
                fontSize="14px"
                sx={{
                  fontWeight: 600,
                  mt: 1,
                  fontFamily: "Poppins",
                  color: "#5B616D"
                }}
              >
                2 boxes × 6 months
              </Typography>
            </Box>
          </Box>

          {/* Events List */}
          {[
            { label: "Empty Box Dropoff" },
            { label: "Packed Box Pickup" },
            { label: "Packed box dropoff" }
          ].map((item, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                  mb: 1,
                  fontFamily: "Poppins",
                  color:"black"
                }}
              >
                <Typography
                  fontWeight={600}
                  sx={{ fontSize: "13px", fontFamily: "Poppins" }}
                >
                  {item.label}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    textAlign: "right"
                  }}
                >
                  <AddressText>
                    123 Changi, Singapore
                  </AddressText>
                  <TimeText>
                    Wed, 24 Sep 2025 · 6-hour slot · 8am - 2pm
                  </TimeText>
                </Box>
              </Box>
              {index < 2 && <Divider sx={{ backgroundColor:"#EBECF0",my: 1 }} />}
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Stack direction="row" spacing={4} sx={{ mt: 4, fontFamily: "Poppins" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            width: "174px",
            height: "48px",
            color: "grey.700",
            "&:hover": {
              backgroundColor: "grey.100"
            },
            fontFamily: "Poppins",
            boxShadow: "none",
            textTransform: "none",
            fontWeight: 600
          }}
        >
          Go to dashboard
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            width: "174px",
            height: "48px",
            textTransform: "none",
            fontFamily: "Poppins"
          }}
        >
          Go to my bookings
        </Button>
      </Stack>
    </Box>
  );
}
