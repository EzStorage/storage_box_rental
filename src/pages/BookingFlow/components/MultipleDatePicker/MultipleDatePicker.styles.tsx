import { styled } from "@mui/material";

export const MultipleDatePickerContainer = styled("div")(({ theme }) => ({
    ".react-datepicker": {
        padding: "16px 16px 0",
        border: "none",
    },

    ".react-datepicker__month-container:first-of-type": {
        borderRight: `1px solid ${theme.palette.outline.greyLow}`,
    },

    ".react-datepicker__header": {
        background: "white",
        border: "none",
        padding: 0,
    },

    ".react-datepicker__navigation": {
        top: "16px",
    },

    ".react-datepicker__navigation--previous": {
        left: "16px",
    },

    ".react-datepicker__navigation--next": {
        right: "16px",
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

        ".react-datepicker__day-name": {
            margin: 0,
            width: "36px",
        },
    },

    ".react-datepicker__day": {
        fontWeight: 400,
        color: theme.palette.textCustom.greyMed,
        position: "relative",
        margin: 0,
        width: "36px",
        lineHeight: "36px",
    },

    ".react-datepicker__day--outside-month": {
        color: "#A4A7AE",
    },

    ".react-datepicker__day--today": {
        position: "relative",

        ":hover": {
            background: theme.palette.surface.greySurface2,
        },

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

    ".react-datepicker__day--keyboard-selected": {
        background: "transparent",
    },

    ".react-datepicker__day--selected.react-datepicker__day--today::after": {
        background: "transparent",
    },

    ".react-datepicker__day--disabled": {
        color: theme.palette.textCustom.greyBase,
    },

    // Style day

    ".react-datepicker__day--selected, .react-datepicker__day--selected.react-datepicker__day--in-selecting-range":
        {
            backgroundColor: theme.palette.surface.primaryMed,
            color: "white",
            borderRadius: "8px",

            ":hover": {
                backgroundColor: theme.palette.surface.primaryMed,
                color: "white",
                borderRadius: "8px",
            },
        },

    ".react-datepicker__day--selected.react-datepicker__day--range-start": {
        backgroundColor: theme.palette.surface.primaryMed,
        color: "white",
        borderRadius: "8px 0 0 8px",

        ":hover": {
            backgroundColor: theme.palette.surface.primaryMed,
            color: "white",
            borderRadius: "8px 0 0 8px",
        },
    },

    '.react-datepicker__day--selected:not([aria-disabled="true"]):hover, .react-datepicker__day--in-selecting-range:not([aria-disabled="true"]):hover':
        {
            backgroundColor: theme.palette.surface.primaryMed,
            color: "white",
            borderRadius: "8px",
        },

    ".react-datepicker__day--range-end.react-datepicker__day--in-range, .react-datepicker__day--keyboard-selected.react-datepicker__day--range-end, .react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-end:not(.react-datepicker__day--selecting-range-start)":
        {
            backgroundColor: theme.palette.surface.primaryMed,
            color: "white",
            borderRadius: "0 8px 8px 0",

            ":hover": {
                backgroundColor: theme.palette.surface.primaryMed,
                color: "white",
                borderRadius: "0 8px 8px 0",
            },
        },

    ".react-datepicker__day--in-range, .react-datepicker__day--in-selecting-range": {
        backgroundColor: theme.palette.surface.greySurface2,
        borderRadius: 0,
        ":hover": {
            backgroundColor: theme.palette.surface.greySurface2,
            borderRadius: 0,
        },
    },
}));

export const MultipleDatePickerActions = styled("div")(({ theme }) => ({
    marginTop: "16px",
    paddingTop: "20px",
    paddingBottom: "16px",
    paddingRight: "24px",
    display: "flex",
    gap: "16px",
    justifyContent: "flex-end",
    borderTop: `1px solid ${theme.palette.outline.greyLow}`,

    "> button": {
        width: "140px",
    },
}));
