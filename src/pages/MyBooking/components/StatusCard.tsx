import { Divider, Box } from "@mui/material";
import BoxImage from "../../../assets/Box-GreyBG.jpeg";
import { getStatusStyles, CustomDivider2 } from "../styles";
import { BookingStatus } from "../../../constants/Enums";
import {
    BoxDetailsRow,
    PaperCard,
    StatusBanner,
    StatusText,
    BoxImageStyled,
    BoxTitle,
    BoxSubText,
} from "../styles";
import { Chip } from "./Chip";

export const StatusCard = ({ booking }: { booking: any }) => {
    const { backgroundColor, textColor, Icon } = getStatusStyles(booking.status as BookingStatus);

    return (
        <PaperCard>
            <StatusBanner sx={{ backgroundColor }}>
                <Icon />
                <StatusText sx={{ color: textColor }}>
                    {booking.status === BookingStatus.Stored
                        ? "Your inventory has been stored"
                        : booking.status}
                </StatusText>
            </StatusBanner>
            <BoxDetailsRow>
                <BoxImageStyled src={BoxImage} alt="Box" />
                <Box>
                    <BoxTitle>Standard Box</BoxTitle>
                    <Box>
                        <Chip label="60 x 40 x 31cm" />
                        <Chip label="Max 20kg" />
                    </Box>
                    <BoxSubText>
                        {booking.quantity} boxes × {booking.duration}
                    </BoxSubText>
                </Box>
            </BoxDetailsRow>
            <CustomDivider2/>
        </PaperCard>
    );
};
