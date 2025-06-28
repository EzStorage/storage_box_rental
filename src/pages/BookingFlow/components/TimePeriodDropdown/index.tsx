import { useRef, useState } from "react";
import { TextFieldStyled, TimePeriodDropdownContainer } from "./TimePeriodDropdown.styles";
import { SideActions } from "./SideActions";

interface TimePeriodDropdownProps {
    value?: number;
    onChange?: (value: number) => void;
}

const LIMIT_DATE = 1000;

export function TimePeriodDropdown({ value = 7, onChange }: TimePeriodDropdownProps) {
    const [selectedValue, setSelectedValue] = useState(value);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleChange = (value: number) => {
        setSelectedValue(value);
        onChange?.(value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const textVal = event.target.value;
        if (textVal === "") {
            handleChange(0);
            return;
        }
        const newValue = parseInt(textVal, 10);
        if (newValue >= LIMIT_DATE) return;
        if (!isNaN(newValue) && newValue > 0) {
            handleChange(newValue);
        }
    };

    const onFocus = () => {
        if (inputRef.current) {
            inputRef.current.querySelector("input")?.focus();
        }
    };

    return (
        <TimePeriodDropdownContainer onClick={onFocus}>
            <TextFieldStyled
                ref={inputRef}
                value={selectedValue.toString()}
                onChange={handleInputChange}
                slotProps={{ input: { endAdornment: <span>days</span> } }}
            />
            <SideActions value={selectedValue} onChange={handleChange} />
        </TimePeriodDropdownContainer>
    );
}
