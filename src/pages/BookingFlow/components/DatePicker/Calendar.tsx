import { useState } from "react";
import {
    CalendarContainer,
    CalendarDayButton,
    CalendarDayCell,
    CalendarGrid,
    CalendarHeader,
    CalendarTitle,
    CalendarTodayDateDot,
    CalendarWeekday,
} from "./DatePicker.styles";
import { IconButton, useTheme } from "@mui/material";
import { ChevronLeftIcon } from "@components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "@components/Icons/ChevronRightIcon";

interface CalendarProps {
    onDateSelect?: (date: Date) => void;
    initialDate?: Date;
}

export function Calendar({ onDateSelect, initialDate = new Date() }: CalendarProps) {
    const theme = useTheme();

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const monthName = monthNames[currentMonth];

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const handleDateSelect = (day: number, isCurrentMonth: boolean, isPreviousMonth: boolean) => {
        let targetMonth = currentMonth;
        if (!isCurrentMonth) {
            targetMonth = isPreviousMonth ? currentMonth - 1 : currentMonth + 1;
        }

        const newSelectedDate = new Date(currentYear, targetMonth, day);
        setSelectedDate(newSelectedDate);

        if (onDateSelect) {
            onDateSelect(newSelectedDate);
        }
    };

    const isDateSelected = (day: number, isCurrentMonth: boolean, isPreviousMonth: boolean) => {
        let targetMonth = currentMonth;
        if (!isCurrentMonth) {
            targetMonth = isPreviousMonth ? currentMonth - 1 : currentMonth + 1;
        }

        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === targetMonth &&
            selectedDate.getFullYear() === currentYear
        );
    };

    const isToday = (day: number, isCurrentMonth: boolean, isPreviousMonth: boolean) => {
        const today = new Date();
        let targetMonth = currentMonth;
        if (!isCurrentMonth) {
            targetMonth = isPreviousMonth ? currentMonth - 1 : currentMonth + 1;
        }

        return (
            today.getDate() === day &&
            today.getMonth() === targetMonth &&
            today.getFullYear() === currentYear
        );
    };

    const generateCalendarGrid = () => {
        const totalDays = 42;
        const days = [];

        for (let i = 0; i < firstDayOfWeek; i++) {
            const day = daysInPreviousMonth - firstDayOfWeek + i + 1;
            days.push({
                day,
                isCurrentMonth: false,
                isPreviousMonth: true,
            });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isCurrentMonth: true,
                isPreviousMonth: false,
            });
        }

        const remainingDays = totalDays - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                day: i,
                isCurrentMonth: false,
                isPreviousMonth: false,
            });
        }

        return days;
    };

    const calendarGrid = generateCalendarGrid();
    const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    return (
        <CalendarContainer>
            <CalendarHeader>
                <IconButton onClick={goToPreviousMonth}>
                    <ChevronLeftIcon width={"16px"} color={theme.palette.textCustom.greyMed} />
                </IconButton>
                <CalendarTitle>
                    {monthName} {currentYear}
                </CalendarTitle>
                <IconButton onClick={goToNextMonth}>
                    <ChevronRightIcon width={"16px"} color={theme.palette.textCustom.greyMed} />
                </IconButton>
            </CalendarHeader>

            <CalendarGrid>
                {weekDays.map(day => (
                    <CalendarWeekday key={day}>{day}</CalendarWeekday>
                ))}

                {calendarGrid.map((item, index) => {
                    const isSelected = isDateSelected(
                        item.day,
                        item.isCurrentMonth,
                        item.isPreviousMonth,
                    );

                    const isTodayDate = isToday(
                        item.day,
                        item.isCurrentMonth,
                        item.isPreviousMonth,
                    );

                    return (
                        <CalendarDayCell key={index}>
                            <CalendarDayButton
                                onClick={() =>
                                    handleDateSelect(
                                        item.day,
                                        item.isCurrentMonth,
                                        item.isPreviousMonth,
                                    )
                                }
                                isCurrentMonth={item.isCurrentMonth}
                                isSelected={isSelected}
                            >
                                {item.day}
                            </CalendarDayButton>
                            {isTodayDate && !isSelected && <CalendarTodayDateDot />}
                        </CalendarDayCell>
                    );
                })}
            </CalendarGrid>
        </CalendarContainer>
    );
}
