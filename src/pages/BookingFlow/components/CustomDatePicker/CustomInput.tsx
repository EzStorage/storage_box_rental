import { forwardRef } from "react";
import { CustomDateText, CustomInputContainer } from "./CustomDatePicker.styles";
import CalendarIcon from "@components/Icons/CalendarIcon";

type CustomInputProps = {
    value?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const CustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
        <CustomInputContainer onClick={onClick} ref={ref}>
            <CalendarIcon />
            <CustomDateText>{value}</CustomDateText>
        </CustomInputContainer>
    ),
);
