import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

// ----- How It Works -----
export const HowItWorksContainer = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "64px 112px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "64px",

    [theme.breakpoints.down("lg")]: {
        padding: "32px 16px",
        gap: "32px",
    },
}));

export const HowItWorksHeader = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "16px",

    h1: {
        color: theme.palette.textCustom.greyHigh,
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: "600",

        [theme.breakpoints.down("lg")]: {
            fontSize: "26px",
            lineHeight: "32px",
        },

        span: {
            color: theme.palette.textCustom.primary,
        },
    },

    p: {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "26px",
        color: theme.palette.textCustom.greyMed,

        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
            lineHeight: "24px",
        },
    },
}));

// ----- Feature Section -----
export const FeatureSectionContainer = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "64px 112px",

    [theme.breakpoints.down("md")]: {
        padding: "64px 16px",
    },
}));

export const FeatureSectionHeader = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "600px",

    h1: {
        color: theme.palette.textCustom.greyHigh,
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: "600",

        [theme.breakpoints.down("md")]: {
            fontSize: "26px",
            lineHeight: "32px",
        },

        span: {
            color: theme.palette.textCustom.primary,
        },
    },

    p: {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "26px",
        color: theme.palette.textCustom.greyMed,

        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
            lineHeight: "24px",
        },
    },
}));

export const FeatureSectionItem = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",

    h2: {
        color: theme.palette.textCustom.greyHigh,
        fontSize: "15px",
        fontWeight: "600",
        lineHeight: "24px",
    },

    p: {
        color: theme.palette.textCustom.greyMed,
        fontSize: "13px",
        fontWeight: "400",
        lineHeight: "20px",
    },

    ".icon": {
        width: "56px",
        height: "56px",
        padding: "12px",
        background: "#FEE2E5",
        borderRadius: "8px",
    },
}));

// ---- Testimonial -----
export const TestimonialSectionContainer = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "96px 112px",

    [theme.breakpoints.down("lg")]: {
        padding: "48px 16px",
    },
}));

export const TestimonialSectionHeader = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "16px",
    marginBottom: "64px",

    [theme.breakpoints.down("lg")]: {
        marginBottom: "32px",
    },

    h1: {
        color: theme.palette.textCustom.greyHigh,
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: "600",

        [theme.breakpoints.down("lg")]: {
            fontSize: "26px",
            lineHeight: "32px",
        },

        span: {
            color: theme.palette.textCustom.primary,
        },
    },

    p: {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "26px",
        color: theme.palette.textCustom.greyMed,

        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
            lineHeight: "24px",
        },
    },
}));

export const TestimonialMotionList = styled(motion.div)(({ theme }) => ({
    display: "flex",
    gap: "24px",
    padding: "24px 0",

    [theme.breakpoints.up("lg")]: {
        flexDirection: "column",
    },
}));

export const ScrollContainer = styled("div")(({ theme }) => ({
    position: "relative",

    [theme.breakpoints.up("lg")]: {
        overflowY: "hidden",
        height: "600px",
    },

    [theme.breakpoints.down("lg")]: {
        overflowX: "hidden",
    },
}));

export const HorizontalGradientOverlay = styled.div<{ position: "left" | "right" }>`
    position: absolute;
    top: 0;
    bottom: 0;
    ${props => props.position}: 0;
    width: 6rem; /* w-24 */
    z-index: 10;
    background: ${props =>
        props.position === "left"
            ? "linear-gradient(to right, #FFFFFF, transparent)"
            : "linear-gradient(to left, #FFFFFF, transparent)"};
`;

export const VerticalGradientOverlay = styled.div<{ position: "top" | "bottom" }>`
    position: absolute;
    ${props => props.position}: 0;
    left: 0;
    right: 0;
    height: 6rem;
    z-index: 10;
    background: ${props =>
        props.position === "top"
            ? "linear-gradient(to bottom, #FFFFFF, transparent)"
            : "linear-gradient(to top, #FFFFFF, transparent)"};
`;

export const ColumnsContainer = styled.div`
    display: flex;
    gap: 24px;
    height: 100%;
`;

export const Row = styled("div")({
    display: "flex",
    alignItems: "center",
});

export const Column = styled.div`
    flex: 1;
`;

export const TestimonialCard = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    border: `1px solid ${theme.palette.outline.greyLow}`,
    flexShrink: 0,
    width: "30%",
    overflow: "hidden",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.breakpoints.up("lg")]: {
        width: "100%",
    },
}));

export const StarsContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

export const TestimonialText = styled("p")(({ theme }) => ({
    color: theme.palette.textCustom.greyMed,
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "24px",
    marginBottom: "16px",
}));

export const AuthorSection = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`;

export const AuthorName = styled("h4")(({ theme }) => ({
    color: theme.palette.textCustom.greyHigh,
    fontSize: "15px",
    fontWeight: 600,
}));

export const FAQContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "32px 56px",
    color: theme.palette.text.primary,

    [theme.breakpoints.down("md")]: {
        padding: "8px 16px",
    },
}));

export const FAQHeading = styled("h2")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "48px",
    color: theme.palette.text.primary,

    [theme.breakpoints.down("lg")]: {
        fontSize: "26px",
        lineHeight: "32px",
    },

    span: {
        color: theme.palette.textCustom.primary,
    },
}));

export const QuestionText = styled("h4")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "26px",
    color: theme.palette.textCustom.greyMed,

    [theme.breakpoints.down("lg")]: {
        fontSize: "15px",
        lineHeight: "24px",
    },
}));

export const AnswerText = styled("p")(({ theme }) => ({
    color: theme.palette.text.secondary,
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.5,
}));

export const FooterTitle = styled("h6")(({ theme }) => ({
    fontSize: "13px",
    width: "245.33px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#8C929C",
    marginBottom: "8px",
}));

export const FooterText = styled("p")({
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "24px",
    color: "#C3C6CC",
    margin: 0,
    marginBottom: "6px",
});
