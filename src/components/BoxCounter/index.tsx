import {
    BoxCounterButton,
    BoxCounterContainer,
    BoxCounterQuality,
    BoxCounterTitle,
} from "./BoxCounter.styles";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

export function BoxCounter() {
    const [quantity, setQuantity] = useState(2);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <BoxCounterContainer>
            <BoxCounterTitle>Number of box</BoxCounterTitle>
            <BoxCounterQuality>
                <BoxCounterButton onClick={decrementQuantity}>
                    <IoRemoveOutline color="#5B616D" />
                </BoxCounterButton>
                <span>{quantity}</span>
                <BoxCounterButton onClick={incrementQuantity}>
                    <IoAddOutline color="#5B616D" />
                </BoxCounterButton>
            </BoxCounterQuality>
        </BoxCounterContainer>
    );
}
