import { styled } from "@mui/material";

// ----- Custom DatePicker -----
export const DatePickerContainer = styled("div")(({ theme }) => ({
    ".react-datepicker": {
        borderRadius: "20px",
        padding: "8px",
    },

    ".react-datepicker-wrapper": {
        width: "100%",
    },

    ".react-datepicker__header": {
        background: "white",
        border: "none",
        padding: 0,
    },

    ".react-datepicker__navigation": {
        top: "8px",
        width: "24px",
        height: "24px",
    },

    ".react-datepicker__current-month": {
        marginBottom: "16px",
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "24px",
        color: "#101828",
    },

    ".react-datepicker__day-names": {
        fontWeight: 600,
        fontSize: "11px",
        lineHeight: "16px",
        color: theme.palette.textCustom.greyMed,
    },

    ".react-datepicker__day": {
        fontWeight: 400,
        color: theme.palette.textCustom.greyMed,
        position: "relative",
    },

    '.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle': {
        color: "white",
        fill: "white",
    },

    ".react-datepicker__day--outside-month": {
        color: "#A4A7AE",
    },

    ".react-datepicker__day--today": {
        position: "relative",

        "&::after": {
            content: '""',
            width: "4px",
            height: "4px",
            position: "absolute",
            borderRadius: "999px",
            background: theme.palette.surface.primaryHigh,
            bottom: 0,
            transform: "translateX(-50%)",
            left: "50%",
        },
    },

    ".react-datepicker__day--selected": {
        backgroundColor: theme.palette.surface.primaryMed,
        color: "white",
        borderRadius: "8px",
        border: "none",

        ":hover": {
            backgroundColor: theme.palette.surface.primaryMed,
            borderRadius: "8px",
        },
    },

    ".react-datepicker__day--keyboard-selected": {
        background: "transparent",
    },

    ".react-datepicker__day--selected.react-datepicker__day--today::after": {
        background: "transparent",
    },

    ".react-datepicker__day--disabled": {
        color: theme.palette.textCustom.greyBase,
    },
}));

// ----- Custom Input -----
export const CustomInputContainer = styled("div")(({ theme }) => ({
    width: "100%",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 16px",
    backgroundColor: theme.palette.surface.greySurface2,
    borderRadius: "4px",
    cursor: "pointer",
}));

export const CustomDateText = styled("span")({
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
});
