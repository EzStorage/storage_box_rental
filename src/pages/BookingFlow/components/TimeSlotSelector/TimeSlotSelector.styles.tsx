import { RadioGroup, styled } from "@mui/material";

export const TimeSlotConatiner = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr));",
    gap: "12px",
});

interface TimeSlotProps {
    isSelected?: boolean;
}

export const TimeSlotOptionsConatiner = styled("div")<TimeSlotProps>(({ theme, isSelected }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "12px 16px",
    backgroundColor: isSelected ? theme.palette.surface.primaryBase : "white",
    border: `1px solid ${isSelected ? theme.palette.outline.primaryMed : theme.palette.outline.greyLow}`,
    borderRadius: "4px",
}));

export const TimeSlotTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",

    [theme.breakpoints.down("lg")]: {
        fontSize: "13px",
        lineHeight: "20px",
    },
}));

export const TimeSlotPrice = styled("div")({
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
});

export const TimeSlotOptionList = styled(RadioGroup)({
    width: "100%",
    marginTop: "16px",
});

export const TimeSlotOptionContainer = styled("label")<TimeSlotProps>(({ theme, isSelected }) => ({
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    cursor: "pointer",
    background: isSelected ? theme.palette.surface.primaryBase : "white",
    border: `1px solid ${isSelected ? theme.palette.outline.primaryMed : "transparent"}`,
    borderRadius: "4px",
}));

export const TimeSlotOptiontext = styled("span")({
    marginLeft: "12px",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
});

export const TimeSlotIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 18,
    height: 18,
    boxShadow: `inset 0 0 0 2px ${theme.palette.outline.greyLow}`,
    backgroundColor: "white",
}));

export const TimeSlotCheckedIcon = styled(TimeSlotIcon)(({ theme }) => ({
    backgroundColor: theme.palette.surface.primaryHigh,
    boxShadow: `inset 0 0 0 2px ${theme.palette.surface.primaryHigh}`,
    "&::before": {
        display: "block",
        width: 18,
        height: 18,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""',
    },
}));
