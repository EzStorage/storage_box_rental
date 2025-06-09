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

interface DatePickerProps {
    onChange?: (date: Date) => void;
    value?: Date;
}

function formatDate(date: Date): string {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
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
