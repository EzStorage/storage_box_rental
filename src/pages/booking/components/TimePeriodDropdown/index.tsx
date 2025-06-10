import { useEffect, useRef, useState } from "react";
import { ChevronContainer, TimePeriodDropdownContainer } from "./TimePeriodDropdown.styles";
import { IconButton } from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface TimePeriodDropdownProps {
    value?: number;
    onChange?: (value: number) => void;
}

export function TimePeriodDropdown({ value = 7, onChange }: TimePeriodDropdownProps) {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleIncrementDays = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const currentNum = selectedValue;
        if (!isNaN(currentNum)) {
            const newValue = currentNum + 1;
            setSelectedValue(newValue);
            onChange?.(newValue);
        }
    };

    const handleDecrementtDays = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const currentNum = selectedValue;
        if (!isNaN(currentNum) && currentNum > 1) {
            const newValue = currentNum - 1;
            setSelectedValue(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <TimePeriodDropdownContainer>
            <div>
                {selectedValue} {selectedValue <= 1 ? "day" : "days"}
            </div>
            <ChevronContainer>
                <IconButton onClick={handleIncrementDays} aria-label="Increase days">
                    <FaChevronUp size={"12px"} />
                </IconButton>
                <IconButton onClick={handleDecrementtDays} aria-label="Decrease days">
                    <FaChevronDown size={"12px"} />
                </IconButton>
            </ChevronContainer>
        </TimePeriodDropdownContainer>
    );
}
