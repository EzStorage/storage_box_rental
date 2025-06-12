import { useEffect, useRef, useState } from "react";
import {
    DatePickerCalendarWrapper,
    DatePickerContainer,
    DatePickerInputWrapper,
    DateText,
    IconContainer,
} from "./DatePicker.styles";
import { Calendar } from "./Calendar";
import CalendarIcon from "@components/Icons/CalendarIcon";
import { formatDate } from "@helpers/formatDate";

interface DatePickerProps {
    onChange?: (date: Date) => void;
    value?: Date;
}

export function DatePicker({ onChange, value = new Date() }: DatePickerProps) {
    const [selectedDate, setSelectedDate] = useState<Date>(value);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const datePickerRef = useRef<HTMLDivElement>(null);

    const formattedDate = formatDate(selectedDate);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false);
        if (onChange) {
            onChange(date);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setIsCalendarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <DatePickerContainer ref={datePickerRef}>
            {isCalendarOpen && (
                <DatePickerCalendarWrapper>
                    <Calendar initialDate={selectedDate} onDateSelect={handleDateSelect} />
                </DatePickerCalendarWrapper>
            )}

            <DatePickerInputWrapper onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
                <IconContainer>
                    <CalendarIcon />
                </IconContainer>
                <DateText>{formattedDate}</DateText>
            </DatePickerInputWrapper>
        </DatePickerContainer>
    );
}
