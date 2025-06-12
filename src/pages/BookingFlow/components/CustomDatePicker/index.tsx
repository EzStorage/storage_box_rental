import { useState } from "react";
import { DatePickerContainer } from "./CustomDatePicker.styles";
import DatePicker from "react-datepicker";
import { CustomInput } from "./CustomInput";
import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";
import { Locale } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
    onChange?: (date: Date) => void;
    defaultValue?: Date;
    readOnly?: boolean;
    minDate?: Date;
    maxDate?: Date;
}

const customLocale: Locale = {
    ...enUS,
    localize: {
        ...enUS.localize,
        day: (n: number) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n],
    },
};

registerLocale("custom-en", customLocale);

export function CustomDatePicker({
    onChange,
    defaultValue = new Date(),
    readOnly = false,
    minDate = new Date(),
    maxDate,
}: CustomDatePickerProps) {
    const [selectedDate, setSelectedDate] = useState<Date>(defaultValue);

    const handleDateSelect = (date: Date | null) => {
        if (date) {
            setSelectedDate(date);
            if (onChange) {
                onChange(date);
            }
        }
    };

    return (
        <DatePickerContainer>
            <DatePicker
                closeOnScroll
                disabled={readOnly}
                selected={selectedDate}
                customInput={<CustomInput />}
                dateFormat="EEE, dd MMM yyyy"
                locale="custom-en"
                calendarStartDay={1}
                minDate={minDate}
                maxDate={maxDate}
                onChange={handleDateSelect}
            />
        </DatePickerContainer>
    );
}
