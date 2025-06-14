import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";
import { Locale } from "date-fns";
import {
    MultipleDatePickerActions,
    MultipleDatePickerContainer,
} from "./MultipleDatePicker.styles";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "@components/Button/MyButton";

interface CustomMultipleDatePickerProps {
    onChange?: (dates: [Date | null, Date | null]) => void;
    onCancel?: () => void;
    readOnly?: boolean;
    defaultStartDate?: Date | null;
    defaultEndDate?: Date | null;
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

export function MultipleDatePicker({
    onChange,
    onCancel,
    readOnly = false,
    defaultStartDate = null,
    defaultEndDate = null,
    minDate = new Date(),
    maxDate,
}: CustomMultipleDatePickerProps) {
    const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
    const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);

    const handleDateSelect = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <MultipleDatePickerContainer>
            <DatePicker
                inline
                selectsRange
                disabled={readOnly}
                monthsShown={2}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                dateFormat="EEE, dd MMM yyyy"
                calendarStartDay={1}
                locale="custom-en"
                minDate={minDate}
                maxDate={maxDate}
                onChange={handleDateSelect}
            />
            <MultipleDatePickerActions>
                <MyButton variantType="back" onClick={onCancel}>
                    Cancel
                </MyButton>
                <MyButton
                    variantType="primary"
                    onClick={() => {
                        if (onChange) {
                            onChange([startDate, endDate]);
                        }
                    }}
                >
                    Done
                </MyButton>
            </MultipleDatePickerActions>
        </MultipleDatePickerContainer>
    );
}
