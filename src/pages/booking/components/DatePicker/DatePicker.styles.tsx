import { styled } from "@mui/material";

export const CalendarContainer = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "16px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme.palette.outline.greyLow}`,
}));

export const CalendarHeader = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}));

export const CalendarTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    color: "#101828",
}));

export const CalendarGrid = styled("div")(({}) => ({
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginTop: "16px",
}));

export const CalendarWeekday = styled("div")(({}) => ({
    textAlign: "center",
    fontWeight: 600,
    fontSize: "11px",
    lineHeight: "16px",
    height: "40px",
    padding: "12px 0",
}));

export const CalendarDayCell = styled("div")(({}) => ({
    position: "relative",
    padding: "2px",
}));

interface CalendarDayButtonProps {
    isCurrentMonth?: boolean;
    isSelected?: boolean;
}

export const CalendarDayButton = styled("button")<CalendarDayButtonProps>(
    ({ theme, isCurrentMonth, isSelected }) => ({
        width: "40px",
        height: "40px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
        backgroundColor: "white",
        border: "none",

        transition: "background-color 0.2s",
        cursor: "pointer",
        color: isCurrentMonth
            ? theme.palette.textCustom.greyMed
            : theme.palette.textCustom.greyBase,

        "&:hover": {
            ...(isCurrentMonth
                ? { backgroundColor: theme.palette.surface.greySurface1 }
                : { color: theme.palette.textCustom.greyMed }),
        },

        ...(isSelected && {
            backgroundColor: theme.palette.surface.primaryMed,
            color: "white",
            borderRadius: "8px",

            "&:hover": {
                backgroundColor: theme.palette.surface.greySurface1,
                color: theme.palette.textCustom.greyMed,
            },
        }),
    }),
);

export const CalendarTodayDateDot = styled("div")(({ theme }) => ({
    width: "4px",
    height: "4px",
    position: "absolute",
    borderRadius: "999px",
    background: theme.palette.surface.primaryHigh,
    bottom: "8px",
    transform: "translateX(-50%)",
    left: "50%",
}));

export const DatePickerContainer = styled("div")(() => ({
    position: "relative",
}));

export const DatePickerCalendarWrapper = styled("div")(() => ({
    position: "absolute",
    top: "100%",
    marginTop: "0.5rem",
    zIndex: 10,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
}));

export const DatePickerInputWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 16px",
    backgroundColor: theme.palette.surface.greySurface2,
    borderRadius: "4px",
    cursor: "pointer",
}));

export const IconContainer = styled("div")(({ theme }) => ({
    display: "flex",
    color: theme.palette.textCustom.greyMed,
}));

export const DateText = styled("span")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
}));
