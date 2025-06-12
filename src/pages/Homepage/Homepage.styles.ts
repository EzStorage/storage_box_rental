import styled from "@emotion/styled";
import background from "../../assets/background-hero.jpg";
import { Box, Grid, Stack,Button,Chip } from "@mui/material";
import { motion } from "framer-motion";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CrossCircleIcon } from "@components/Icons/CrossCircleIcon";
import { SURFACE, OUTLINE, TEXT_CUSTOM } from "../../constants/palette";
// ----- Hero -----
interface HeroContainerProps {
    isLogin?: boolean;
    isMobile?: boolean;
}

export const HeroContainer = styled("section")<HeroContainerProps>(
    ({ theme, isLogin, isMobile }) => ({
        width: "100%",
        height: "100vh",

        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        position: "relative",

        padding: "72px 112px",

        "&::before":
            isMobile && isLogin
                ? {}
                : {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      zIndex: 1,
                  },

        "& > *": {
            position: "relative",
            zIndex: 2,
            height: "100%",

            [theme.breakpoints.down("md")]: {
                textAlign: isLogin ? "left" : "center",
            },

            [theme.breakpoints.between("md", "lg")]: {
                textAlign: "center",
            },
        },

        [theme.breakpoints.down("md")]: {
            padding: "56px 16px",
            height: "100%",
            backgroundImage: isLogin ? "none" : `url(${background})`,
            backgroundColor: isLogin ? "#F4F4F6" : "transparent",
        },
    }),
);

export const HeroIntro = styled("div")(({ theme }) => ({
    padding: "24px 16px 0",

    "> .name": {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "26px",
        color: theme.palette.textCustom.greyHigh,
    },

    "> .subtitle": {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyMed,
    },

    "> div:nth-of-type(3)": {
        display: "flex",
        padding: "16px 0",
        justifyContent: "space-between",
        gap: "8px",
    },
}));

export const HeroLeft = styled(Stack)(({ theme }) => ({
    color: theme.palette.textCustom.white,
    width: "100%",

    h1: {
        fontSize: "64px",
        fontWeight: "600",
        lineHeight: "72px",
        letterSpacing: "-0.2px",

        [theme.breakpoints.down("lg")]: {
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "0px",
        },
    },

    p: {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "26px",

        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
            lineHeight: "24px",
            letterSpacing: "0px",
        },
    },
}));

// ----- Card Hero -----
export const CardHeroContainer = styled("div")(() => ({
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
}));

export const CardHeroImage = styled("div")(({}) => ({
    width: "137px",
    height: "137px",
    borderRadius: "4px",
    backgroundColor: "#F4F4F6",
    marginRight: "20px",

    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
}));

export const ProductInfo = styled(Stack)(({ theme }) => ({
    textAlign: "left",

    h3: {
        fontWeight: "600",
        fontSize: "22px",
        lineHeight: "28px",
        color: "#1F1F1F",
    },

    ".chip-row": {
        backgroundColor: "#F4F4F6",
        borderRadius: "4px",
        padding: "4px 6px",

        fontSize: "12px",
        fontWeight: "600",
        lineHeight: "16px",
        color: theme.palette.textCustom.greyMed,
    },

    ".original-price": {
        textDecoration: "line-through",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyMed,
    },

    ".discounted-price": {
        "& > span:first-child": {
            fontSize: "22px",
            fontWeight: "600",
            lineHeight: "28px",
            color: theme.palette.surface.primaryHigh,
        },

        "& > span:last-child": {
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            color: theme.palette.textCustom.greyMed,
        },
    },

    ".bulk-button": {
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyMed,
        textDecoration: "underline",
        cursor: "pointer",

        "&:hover": {
            color: theme.palette.textCustom.primary,
        },
    },
}));

export const CardHeroQuality = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",

    p: {
        fontSize: "15px",
        fontWeight: "400",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyMed,
    },

    button: {
        border: `1px solid ${theme.palette.outline.greyLow}`,
        borderRadius: "4px",
        width: "40px",
        height: "40px",
    },

    span: {
        fontWeight: "600",
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyHigh,
    },
}));

export const CardHeroPricingBreakdown = styled(Stack)(({ theme }) => ({
    margin: "20px 0",

    div: {
        display: "flex",
        justifyContent: "space-between",
    },

    p: {
        fontSize: "15px",
        fontWeight: "400",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyMed,
    },

    ".discount": {
        color: theme.palette.textCustom.success,
    },

    ".total": {
        fontWeight: "600",
        color: theme.palette.textCustom.greyHigh,
    },
}));

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
    fontSize: "3rem",

    fontWeight: 600,
    lineHeight: 1.2,
    margin: 0,
    padding: 0,

    color: theme.palette.text.primary,
    span: {
        color: theme.palette.textCustom.primary,
    },
}));

export const QuestionText = styled("h4")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    margin: 0,
    maxWidth: "552px",
    width: "100%",
    minWidth: "320px",
    letterSpacing: "normal",
    color: theme.palette.text.primary,
}));

export const AnswerText = styled("p")(({ theme }) => ({
    color: theme.palette.text.secondary,
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.5,
}));

export const FooterTitle = styled("h6")({
    fontSize: "13px",
    width: "245.33px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "#8C929C",
    marginBottom: "8px",
});

export const FooterText = styled("p")({
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "24px",
    color: "#C3C6CC",
    margin: 0,
    marginBottom: "6px",

});


export const Bold_text = styled("h5")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    color: SURFACE.BLACK,
    paddingLeft:"30px",
    fontFamily: '"Poppins", sans-serif',
    [theme.breakpoints.up('md')]: {
    paddingLeft:"0px"
  },
}));
export const SuperScript = styled("h5")({
    color: SURFACE.GREY_SURFACE_0,
    fontWeight: 600,
    fontSize: "18px",
    position: "relative",
    top: "-1px",
    padding: "6px",
});
export const StyledDrawerPaper = styled(Paper)(({ theme }) => ({
    width: 480,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
}));
export const Button_Cart = styled(Button)({
    fontWeight: 400,
    fontSize: "12px",
    pt: 1,
    backgroundColor: SURFACE.PRIMARY_MED,
    color: "white",
    textTransform: "none",
    "&:hover": { backgroundColor:SURFACE.PRIMARY_DARK },
    width: "305px",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
export const BoxAttributeChip = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Poppins",
  fontSize: "13px",
  borderRadius: "4px",
  color: TEXT_CUSTOM.PRIMARY_MED,
  backgroundColor:OUTLINE.GREY_BASE,
  height: "24px", 
  "& .MuiChip-label": {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));
export const AddressText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "20px",
  color: TEXT_CUSTOM.GREY_HIGH,
  marginBottom: theme.spacing(0.2),
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));
export const TimeText = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "11px",
  lineHeight: "20px",
  color: TEXT_CUSTOM.PRIMARY_MED,
});
export const FullPageContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  minHeight: "100vh",
  width: "100vw",
  backgroundColor:SURFACE.DISABLED_BASE,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(6, 4),
  boxSizing: "border-box",
  paddingTop: theme.spacing(15),

  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(4), 
  },
}));
export const SuccessFailureHeading = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", sans-serif',
  fontWeight: "bold",
  color: SURFACE.BLACK,
  paddingTop: theme.spacing(2),
  paddingBottom:theme.spacing(0.8),
  fontSize:"22px"
}));
export const IDText= styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", sans-serif',
  fontSize: "15px",
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: 0,
  color: TEXT_CUSTOM.PRIMARY_MED,
}));
export const BorderBox = styled(Box)(({ theme }) => ({
  border: "1px solid #EBECF0",
  borderRadius: "8px",
  padding: theme.spacing(2),
  fontFamily: '"Poppins", sans-serif',
}));
export const ThankText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Poppins", sans-serif',
  color: TEXT_CUSTOM.PRIMARY_MED,
  marginBottom: theme.spacing(4),
}));
export const StyledWhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor:TEXT_CUSTOM.WHITE,
  width: "174px",
  height: "48px",
  color: theme.palette.grey[700],
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 600,
  
  boxShadow: "none",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
}));
export const BookingTryAgain = styled(Button) ({
  width: "174px",
  height: "48px",
  textTransform: "none",
  fontFamily: '"Poppins", sans-serif',
  backgroundColor:SURFACE.PRIMARY_MED,
  color:TEXT_CUSTOM.WHITE
});
export const VerticalDivider = styled(Box)(({ theme }) => ({
  width: "1px",
  height: "16px",
  backgroundColor: OUTLINE.GREY_LIGHT,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));
export const StatusText = styled(Box)(() => ({
  fontFamily: '"Poppins", sans-serif',
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: "20px",
  color: SURFACE.GREEN,
}));
export const DimensionText = styled(Typography) ({
  fontFamily: '"Poppins", sans-serif',
  fontSize: "14px",
  fontWeight: 600,
  marginTop: "8px", 
  color: TEXT_CUSTOM.PRIMARY_MED,
  textAlign: "left",
});
export const LabelRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  marginBottom: "8px", 
  fontFamily: '"Poppins", sans-serif',
  color: SURFACE.BLACK,
}));

export const LabelText = styled(Typography)(() => ({
  fontSize: "13px",
  fontWeight: 600,
  fontFamily: '"Poppins", sans-serif',
}));

export const ValueColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  textAlign: "right",
  fontFamily: '"Poppins", sans-serif',
});
export const ResponsiveIcon = styled(CrossCircleIcon)(({ theme }) => ({
  width: '40px',
  height: '40px',
  [theme.breakpoints.up('sm')]: {
    width: '50px',
    height: '50px',
  },
  [theme.breakpoints.up('md')]: {
    width: '60px',
    height: '60px',
  },
}));

export const ResponsiveFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
}));

export const ResponsiveStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap:theme.spacing(1),
  marginTop: theme.spacing(2),
  fontFamily: "Poppins",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: theme.spacing(0.1),
  },

  "& > *": {
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2),
    },
  },
}));
export const ResponsivePaper = styled(Paper)(({ theme }) => ({
  backgroundColor: TEXT_CUSTOM.WHITE,
  padding: theme.spacing(3),
  width: "100%",
  height: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "400px",
  },
  [theme.breakpoints.up("md")]: {
    width: "480px",
    height: 380,
  },
}));

export const StyledBoxChip = styled(Chip)({
  fontSize: "12px",
  fontFamily: '"Poppins", sans-serif',
  height: "24px",
  
  color:TEXT_CUSTOM.PRIMARY_MED,
  fontWeight:600,
  backgroundColor:SURFACE.GREY_SURFACE_2,
  borderRadius:"2px",
  paddingLeft: 8,
  paddingRight: 8,
  "& .MuiChip-label": {
    paddingLeft: 0,
    paddingRight: 0,
  },

});

