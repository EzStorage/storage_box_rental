import { styled } from "@mui/material";
import { NoteVariantsEnum } from ".";

type NoteContainerProps = {
    variant?: NoteVariantsEnum;
};

export const NoteContainer = styled("div")<NoteContainerProps>(({ theme, variant }) => {
    let background;
    let color;
    let padding;

    switch (variant) {
        case "transparent":
            background = "transparent";
            color = theme.palette.textCustom.greyMed;
            padding = 0;
            break;

        case "info":
        default:
            background = theme.palette.surface.info;
            color = theme.palette.textCustom.info;
            padding = "12px 16px";
            break;
    }

    return {
        background,
        color,
        padding,
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
    };
});

export const NoteColumn = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
});

interface NoteProps {
    isTitle?: boolean;
}

export const NoteIcon = styled("div")<NoteProps>(({ isTitle }) => ({
    ...(isTitle && {
        display: "flex",
        alignItems: "center",
    }),
}));

export const NoteRow = styled("div")<NoteProps>(({ isTitle }) => ({
    display: "flex",
    alignItems: isTitle ? "center" : "flex-start",
    gap: "4px",

    ...(isTitle && {
        marginBottom: "4px",
    }),
}));

export const NoteContent = styled("div")({
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
});

export const NoteTitle = styled("div")({
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
});
