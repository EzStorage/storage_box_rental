import { styled, TextField } from "@mui/material";

export const TimePeriodDropdownContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    backgroundColor: theme.palette.surface.greySurface2,
    cursor: "text",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyHigh,
    },
}));

export const ChevronContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "8px",

    "> button": {
        padding: 0,
    },
});

export const TextFieldStyled = styled(TextField)`
    input {
        padding: 0;
        border: none;
        width: 50px;
    }
    fieldset {
        border: none;
    }
`;
