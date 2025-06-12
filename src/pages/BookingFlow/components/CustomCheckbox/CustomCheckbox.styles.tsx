import { Checkbox, FormControlLabel, styled } from "@mui/material";

export const CustomCheckboxFormControl = styled(FormControlLabel)(({ theme }) => ({
    alignItems: "center",
    gap: "8px",
    marginLeft: 0,
    "& .MuiFormControlLabel-label": {
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "20px",
        color: theme.palette.textCustom.greyHigh,
    },
}));

export const CustomCheckboxContainer = styled(Checkbox)(({ theme }) => ({
    padding: 0,
    width: "18px",
    height: "18px",
    borderRadius: "6px",
    "&.Mui-checked": {
        backgroundColor: theme.palette.surface.primaryHigh,
        color: "white",
    },
    "&:not(.Mui-checked)": {
        backgroundColor: "white",
        border: `2px solid ${theme.palette.outline.greyLow}`,
        color: "transparent",
    },
}));
