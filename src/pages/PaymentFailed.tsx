import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Stack,
  Chip,
  Button
} from "@mui/material";
import Standard from "./assets/standard_box.png";
import { CrossCircleIcon } from "../../src/components/icons/CrossCircleIcon";


export default function App() {
  return (
    <Box
      sx={{
        fontFamily: "Poppins",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f5f6f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 16px",
        boxSizing: "border-box"
      }}
    >
      {/* Success Icon */}
      <CrossCircleIcon />

      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "black", pt: 2, fontFamily: "Poppins" }}
      >
        Payment Failed
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, fontFamily: "Poppins", textAlign: "center" }}
      >
        Thank you for purchase! Your booking information will be sent to{" "}
        <strong style={{ color: "black" }}>(+65) 1234 123 124</strong>
      </Typography>

      {/* Booking Card */}
      <Paper
        elevation={0}
        sx={{
          p: "24px",
          width: "492px",
          backgroundColor: "white",
          borderRadius: "12px"
        }}
      >
        {/* Top Line */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "15px",
            mb: 2,
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
              color: "#CE2E02"
            }}
          >
            Payment Failed
          </Box>
        </Typography>

        {/* Bordered Section */}
        <Box
          sx={{
            border: "1px solid #EBECF0",
            borderRadius: "12px",
            padding: "16px",
            backgroundColor: "white"
          }}
        >
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
             <div>
      <img src={Standard} alt="Standard" style={{width:"80px"}} />
    </div>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontWeight: "bold",
                  mb: 0.5
                }}
              >
                Standard Box
              </Typography>
              <Stack direction="row" spacing={1} mt={0.5} mb={1.5}>
                <Chip
                  label="60 x 40 x 31cm"
                  size="small"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    borderRadius: "4px",
                    color: "#5B616D"
                  }}
                />
                <Chip
                  label="Max 20kg"
                  size="small"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    borderRadius: "4px",
                    color: "#5B616D"
                  }}
                />
              </Stack>
              <Typography
                fontSize="14px"
                sx={{
                  fontWeight: 600,
                  mt: 1,
                  fontFamily: "Poppins",
                  color: "#5B616D",
                  mb:1.5
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
            <Box key={index} sx={{ mb: index < 2 ? 2 : 0 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                  fontFamily: "Poppins",
                  mb: 1
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
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#0A0C11",
                      mb: 0.2
                    }}
                  >
                    123 Changi, Singapore
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "11px",
                      lineHeight: "20px",
                      color: "#5B616D"
                    }}
                  >
                    Wed, 24 Sep 2025 · 6-hour slot · 8am - 2pm
                  </Typography>
                </Box>
              </Box>
              {index < 2 && <Divider sx={{ my: 1 }} />}
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mt: 5 }}
      >
        <Button
          
          sx={{
            textTransform: "none",
            fontFamily: "Poppins",
            paddingX: 2,
            width:"174px",
            height:"48px",
            backgroundColor:"#FFFFFF",
            paddingY: 1.25,
            borderRadius: "4px",
            fontWeight:600,
            fontSize:"15px",
            color:"#5B616D"
          }}
        >
          Go to dashboard
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontFamily: "Poppins",
            paddingX: 1,
            width:"174px",
            height:"48px",
            fontSize:"15px",
            paddingY: 1.25,
            backgroundColor: "#EF151E",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#1E293B"
            }
          }}
        >
          Try again
        </Button>
      </Stack>
    </Box>
  );
}
