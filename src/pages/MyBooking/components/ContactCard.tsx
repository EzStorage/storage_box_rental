import { Typography, Box } from "@mui/material";
import { WhitePaperBox, FlexRowStart } from "../styles";
import { WhatsAppIcon } from "@components/Icons/Whatsapp";
import { SectionHeader } from "./SectionHeader";

import { ChevronRightCustomIcon } from "@components/Icons/ChevronRights";

export const ContactCard = () => (
    <WhitePaperBox>
        <Box display="flex" flexDirection="column">
            <SectionHeader>Support</SectionHeader>
            <FlexRowStart mt={"8px"}>
                <WhatsAppIcon />
                <Typography fontSize="15px">Contact Us (WhatsApp)</Typography>
            </FlexRowStart>
        </Box>
        <Box mt={6}> 
            <ChevronRightCustomIcon />
        </Box>
    </WhitePaperBox>
);
