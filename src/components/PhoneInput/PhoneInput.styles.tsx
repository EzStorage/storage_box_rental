import styled from "@emotion/styled";
import { Box, Select, SelectProps } from "@mui/material";

export const PhoneInputContainer = styled(Box)(() => ({
    display: "flex",
    gap: "12px",
}));

export const PhoneInputSelectContainer = styled(Select<string>)<SelectProps<string>>(
    ({ theme }) => ({
        backgroundColor: "#F4F4F6",
        borderRadius: "4px",
        height: "48px",

        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },

        "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "18px",
            padding: "14px 16px",
        },

        "> div": {
            display: "flex",
            alignItems: "center",
            color: theme.palette.textCustom.greyHigh,
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "24px",
        },

        ".select": {
            display: "flex",
            alignItems: "center",
            gap: "12px",

            "span:first-of-type": {
                fontSize: "20px",
            },

            "span:nth-of-type(2)": {
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
            },
        },
    }),
);
