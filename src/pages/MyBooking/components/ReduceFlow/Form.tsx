import { useState } from "react";
import BoxImage from "../../../../assets/Box-GreyBG.jpeg";
import { Typography, Box } from "@mui/material";
import {
    formatDate,
    ContainerForm,
    BoxImg,
    BoxDetails,
    ChipContainer,
    BoxCount,
} from "./StyledDatePicker";
import { StyledChip } from "@pages/MyBooking/styles";

export const DateSelector = () => {
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    });

    const formattedDate = formatDate(selectedDate);

    return (
        <>
            <Typography sx={{ mt: "24px", fontSize: "15px", fontWeight: 600 }}>
                Select day to return your items
            </Typography>

            <ContainerForm>
                <BoxImg src={BoxImage} alt="Box" />
                <div>
                    <BoxDetails>Standard Box</BoxDetails>
                    <ChipContainer>
                        <Box>
                            <StyledChip>60 x 40 x 31cm</StyledChip>
                            <StyledChip>Max 20kg</StyledChip>
                        </Box>
                    </ChipContainer>
                    <BoxCount>2 boxes</BoxCount>
                </div>
            </ContainerForm>

            <Typography>When will we return your items to your place?</Typography>
        </>
    );
};
