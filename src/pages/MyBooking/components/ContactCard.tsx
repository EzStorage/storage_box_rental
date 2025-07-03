import React from "react";
import { Typography } from "@mui/material";
import { WhitePaperBox, FlexRowStart } from "../styles";
import { WhatsAppIcon } from "@components/Icons/Whatsapp";
import { SectionHeader } from "./SectionHeader";
export const ContactCard = () => (
    <>
        <WhitePaperBox>
            <SectionHeader>Support</SectionHeader>
            <FlexRowStart>
                <WhatsAppIcon />
                <Typography fontSize="15px">Contact Us (WhatsApp)</Typography>
            </FlexRowStart>
        </WhitePaperBox>
    </>
);
