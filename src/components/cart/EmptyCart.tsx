
import React from "react";
import { Box, Typography } from "@mui/material";
import EmptyCartIcon from "../Icons/EmptyCart";
import { sectionBoxSx, BookingTryAgain, CenteredStack } from "./CartStyles";

const EmptyCartView: React.FC = () => {
  return (
    <CenteredStack>
      <Box sx={sectionBoxSx}>
        <EmptyCartIcon />
      </Box>
      <Typography sx={{ pb: 3 }}>No storage yet!</Typography>
      <BookingTryAgain>Book new storage</BookingTryAgain>
    </CenteredStack>
  );
};

export default EmptyCartView;

