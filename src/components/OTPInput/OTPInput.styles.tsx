import styled from "@emotion/styled";
import { Box, Stack, TextField } from "@mui/material";

export const OTPInputContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
}));

interface OTPInputItemProps {
    isInvalid?: boolean;
}

export const OTPInputItem = styled(TextField)<OTPInputItemProps>(({ theme, isInvalid }) => ({
    "& .MuiOutlinedInput-root": {
        borderRadius: "4px",
        backgroundColor: isInvalid ? "#F9F9FA" : "#F4F4F6",
        borderColor: isInvalid ? "#f44336" : "#f8c8a3",

        "& fieldset": {
            borderColor: isInvalid ? "#FAA466" : "transparent",
            borderWidth: "1px",
            boxShadow: isInvalid ? "0 0 0 3px #FDCA99" : "none",
        },

        "&:hover fieldset": {
            borderColor: isInvalid ? "#FAA466" : theme.palette.outline.greyMed,
        },

        "&.Mui-focused fieldset": {
            borderColor: isInvalid ? "#FAA466" : theme.palette.outline.greyLow,
        },
    },
}));

export const OTPDash = styled(Box)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "28px",
    color: theme.palette.textCustom.greyLow,
}));

export const OTPError = styled(Stack)(() => ({
    display: "flex",
    alignItems: "center",
    color: "#EF151E",

    div: {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
    },
}));
