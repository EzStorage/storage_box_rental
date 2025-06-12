import { styled, TextField } from "@mui/material";

export const LocationInputContainer = styled(TextField)(({ theme }) => ({
    width: "100%",

    "& .MuiOutlinedInput-root": {
        backgroundColor: "#F4F4F6",
        borderRadius: "4px",
        height: "48px",
        color: theme.palette.textCustom.greyHigh,

        "& fieldset": {
            border: "none",
        },

        "& input": {
            "&::placeholder": {
                fontSize: "15px",
                fontHeight: 400,
                lineHeight: "24px",
                color: theme.palette.textCustom.greyLow,
                opacity: 1,
            },
        },
    },
}));
