import {
    BoxCounterButton,
    BoxCounterContainer,
    BoxCounterQuality,
    BoxCounterQuantity,
    BoxCounterTitle,
} from "./BoxCounter.styles";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { useTheme } from "@mui/material";

export function BoxCounter() {
    const theme = useTheme();
    const [quantity, setQuantity] = useState(2);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <BoxCounterContainer>
            <BoxCounterTitle>Number of box</BoxCounterTitle>
            <BoxCounterQuality>
                <BoxCounterButton onClick={decrementQuantity}>
                    <IoRemoveOutline color={theme.palette.textCustom.greyMed} />
                </BoxCounterButton>
                <BoxCounterQuantity>{quantity}</BoxCounterQuantity>
                <BoxCounterButton onClick={incrementQuantity}>
                    <IoAddOutline color={theme.palette.textCustom.greyMed} />
                </BoxCounterButton>
            </BoxCounterQuality>
        </BoxCounterContainer>
    );
}
