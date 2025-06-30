import React from "react";
import { Typography } from "@mui/material";
import { WhitePaperBox, FlexRowStart } from "../styles";
import { WhatsAppIcon } from "@components/Icons/Whatsapp";

export const ContactCard = () => (
  <WhitePaperBox>
    <FlexRowStart>
      <WhatsAppIcon />
      <Typography>Contact Us (WhatsApp)</Typography>
    </FlexRowStart>
  </WhitePaperBox>
);
