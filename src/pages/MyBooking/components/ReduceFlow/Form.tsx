import React, { useState, useEffect, useRef } from "react";
import BoxImage from "../../../../assets/Box-GreyBG.jpeg";
import { Typography, Chip } from "@mui/material";
import {
    formatDate,
    ContainerForm,
    BoxImg,
    BoxDetails,
    ChipContainer,
    BoxCount,
} from "./StyledDatePicker";

const DateSelector = () => {
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    });

    const [formattedDate, setFormattedDate] = useState(formatDate(selectedDate));
    const dateInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFormattedDate(formatDate(selectedDate));
    }, [selectedDate]);

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
                        <Chip label="60 x 40 x 31cm" />
                        <Chip label="Max 20kg" />
                    </ChipContainer>
                    <BoxCount>2 boxes</BoxCount>
                </div>
            </ContainerForm>

            <Typography>When will we return your items to your place?</Typography>
        </>
    );
};

export default DateSelector;
