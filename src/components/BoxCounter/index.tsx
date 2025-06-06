import {
    BoxCounterButton,
    BoxCounterContainer,
    BoxCounterQuality,
    BoxCounterQuantity,
    BoxCounterTitle,
} from "./BoxCounter.styles";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { useTheme } from "@mui/material";

export function BoxCounter({
    value,
    onChange,
}: {
    value: number;
    onChange: (newValue: number) => void;
}) {
    const theme = useTheme();
    const incrementQuantity = () => onChange(value + 1);
    const decrementQuantity = () => onChange(Math.max(1, value - 1));

    return (
        <BoxCounterContainer>
            <BoxCounterTitle>Number of box</BoxCounterTitle>
            <BoxCounterQuality>
                <BoxCounterButton onClick={decrementQuantity}>
                    <IoRemoveOutline color={theme.palette.textCustom.greyMed} />
                </BoxCounterButton>
                <BoxCounterQuantity>{value}</BoxCounterQuantity>
                <BoxCounterButton onClick={incrementQuantity}>
                    <IoAddOutline color={theme.palette.textCustom.greyMed} />
                </BoxCounterButton>
            </BoxCounterQuality>
        </BoxCounterContainer>
    );
}
