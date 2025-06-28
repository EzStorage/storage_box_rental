import { IconButton } from "@mui/material";
import { ChevronContainer } from "./TimePeriodDropdown.styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface Props {
    value: number;
    onChange: (value: number) => void;
}

export function SideActions({ value, onChange }: Props) {
    const handleIncrementDays = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!isNaN(value)) {
            onChange(value + 1);
        }
    };

    const handleDecrementtDays = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!isNaN(value) && value > 1) {
            onChange(value - 1);
        }
    };

    return (
        <ChevronContainer>
            <IconButton onClick={handleIncrementDays} aria-label="Increase days">
                <FaChevronUp size={"12px"} />
            </IconButton>
            <IconButton onClick={handleDecrementtDays} aria-label="Decrease days">
                <FaChevronDown size={"12px"} />
            </IconButton>
        </ChevronContainer>
    );
}
