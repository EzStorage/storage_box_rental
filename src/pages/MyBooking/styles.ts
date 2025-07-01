import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Chip, Link, Stack, IconButton } from "@mui/material";
import { SURFACE, TEXT_CUSTOM, STATUS, OUTLINE } from "../../constants/palette";
import { BookingStatus } from "../../constants/Enums";
import { Height, Padding } from "@mui/icons-material";
import { RetrieveBoxIcon } from "@components/Icons/BackupIcon";
import { BoxToBeDeliveredIcon } from "@components/Icons/BoxToBeDeliveredIcon";
import { VerifiedStoredStatusIcon } from "@components/Icons/VartifiedStoreddStatusIcon";
import { AwaitingPickupIcon } from "@components/Icons/AwaitngPickupIcon";
import { CrossIcon } from "@components/Icons/CrossIcon";
import { SuccessIcon } from "@components/Icons/TickIcon";

export const Container = styled(Box)(({ theme }) => ({
    padding: "40px",

    backgroundColor: SURFACE.GREY_SURFACE_2,
    minHeight: "calc(100vh - 72px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "72px",
    paddingTop: "40px",
    [theme.breakpoints.up("sm")]: {
        padding: "16px",
        marginTop: "0px",
    },
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
    width: "592px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
        flexWrap: "nowrap",
        padding: "12px 0 0 0",
    },
}));

export const NewStorageButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#D221311A",
    color: SURFACE.PRIMARY_MED,
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "none",
    width: "fit-content",
    [theme.breakpoints.up("sm")]: {
        fontSize: "13px",
        padding: "6px 12px",
    },
}));
export const Wrapper = styled("div")`
    width: 100%;
    padding: 0 16px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
        padding: 0 6px;
        max-width: 100%;
        align-items: stretch;
    }
`;

export const ItemWrapper = styled(Box)<{ activeTab: string }>(({ theme, activeTab }) => ({
    backgroundColor: SURFACE.GREY_SURFACE_0,
    borderRadius: 8,
    padding: activeTab === "Stored" ? "12px 12px 12px 12px" : "12px 12px 12px 12px", //
    display: "flex",
    gap: 0,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    width: 592,
    //height: activeTab === "Stored" ? 144 : 126,
    //position: "relative",
    flexDirection: "column",
    height: activeTab === "Stored" ? 144 : "auto",

    [theme.breakpoints.up("sm")]: {
        width: "100%",
        height: "auto",
        padding: "8px 12px 8px 8px",
    },
}));

export const BoxIcon = styled("img")(({ theme }) => ({
    width: 102,
    height: 102,
    borderRadius: 4,
    [theme.breakpoints.up("sm")]: {
        width: "92px",
        height: "92px",
    },
}));

export const Details = styled(Box)(() => ({
    flex: 1,
    fontSize: "13px !important",
}));

export const DateRange = styled(Typography)(({ theme }) => ({
    fontSize: "15px !important",
    fontWeight: "600 !important",
    paddingTop: 8,
    paddingBottom: 6,
    [theme.breakpoints.up("sm")]: {
        paddingTop: 3,
    },
}));

export const Meta = styled(Typography)(() => ({
    fontSize: "13px !important",
    color: TEXT_CUSTOM.GREY_LOW,
    paddingBottom: "4px",
    display: "flex",
    alignItems: "center",
    gap: 6,
    wordBreak: "break-word",
}));

export const ProgressTrack = styled(Box)(({ theme }) => ({
    bottom: "10px",
    left: 16,
    right: 16,
    height: 6,
    borderRadius: 4,
    backgroundColor: OUTLINE.GREY_MED,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.up("sm")]: {
        height: 5,
    },
}));

export const ProgressBar = styled(Box, {
    shouldForwardProp: prop => prop !== "percentage",
})<{ percentage: number }>(({ percentage }) => ({
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: SURFACE.GREEN,
    borderRadius: 4,
    transition: "width 0.3s ease-in-out",
}));

export const ListWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "592px",
    [theme.breakpoints.up("sm")]: {
        width: "100%",
    },
}));

export const TabContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: 592,
    backgroundColor: OUTLINE.GREY_LOW,
    borderRadius: 8,
    height: 40,
    marginBottom: 24,
    overflowX: "auto",
    overflowY: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 4,
    [theme.breakpoints.up("sm")]: {
        width: "100%",
    },
}));

export const Tab = styled(Button, {
    shouldForwardProp: prop => prop !== "active",
})<{ active?: boolean }>(({ active, theme }) => ({
    width: 200,
    height: 33,
    border: "none",
    backgroundColor: active ? SURFACE.GREY_SURFACE_0 : OUTLINE.GREY_LOW,
    fontWeight: active ? "bold" : "normal",
    cursor: "pointer",
    color: TEXT_CUSTOM.GREY_HIGH,
    fontSize: 12,
    textAlign: "center",
    borderRadius: 5,
    textTransform: "none",
    whiteSpace: "nowrap",

    [theme.breakpoints.up("sm")]: {
        width: 120,
        fontSize: 11,
    },
}));

interface StatusProps {
    bookingStatus: BookingStatus;
}

export const Status = styled(Chip, {
    shouldForwardProp: prop => prop !== "bookingStatus",
})<StatusProps>(({ bookingStatus }) => {
    let background = SURFACE.GREY_SURFACE_2;
    let color = TEXT_CUSTOM.GREY_HIGH;

    switch (bookingStatus) {
        case BookingStatus.AwaitingPickup:
            background = STATUS.WARNING_BG;
            color = STATUS.WARNING_TEXT;
            break;
        case BookingStatus.BoxToBeDelivered:
            background = STATUS.INFO_BG;
            color = STATUS.INFO_TEXT;
            break;
        case BookingStatus.Returned:
        case BookingStatus.Cancelled:
            background = SURFACE.GREY_SURFACE_1;
            color = TEXT_CUSTOM.PRIMARY_MED;
            break;
        default:
            break;
    }

    return {
        backgroundColor: background,
        color: color,
        fontSize: "12px",
        fontWeight: 400,
        borderRadius: "4px",
        textTransform: "capitalize",
        height: "20px",
        paddingLeft: "4.26px !important",
        paddingRight: "4.26px !important",
        "& .MuiChip-label": {
            padding: "0px !important",
            lineHeight: "16px",
        },
    };
});

export const IconWrapper = styled("span")({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "16px",
    width: "16px",
    minHeight: "16px",
    minWidth: "16px",

    marginRight: "6px",
    svg: {
        height: "100%",
        width: "100%",
        verticalAlign: "middle",
        display: "block",
    },
});
export const ContentRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: 12,
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
    padding: 0,
    alignItems: "flex-start",
    [theme.breakpoints.up("sm")]: {
        alignItems: "flex-start",
    },
}));
export const ResponsiveHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: "23px",

    [theme.breakpoints.up("sm")]: {
        fontSize: "22px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "26px",
    },
}));

export const getStatusStyles = (
    status: BookingStatus,
): {
    backgroundColor: string;
    textColor: string;
    Icon: React.FC<{ size?: number }>;
} => {
    switch (status) {
        case BookingStatus.AwaitingPickup:
            return {
                backgroundColor: STATUS.WARNING_BG,
                textColor: STATUS.WARNING_TEXT,
                Icon: AwaitingPickupIcon,
            };
        case BookingStatus.BoxToBeDelivered:
            return {
                backgroundColor: STATUS.INFO_BG,
                textColor: STATUS.INFO_TEXT,
                Icon: BoxToBeDeliveredIcon,
            };
        case BookingStatus.Stored:
            return {
                backgroundColor: STATUS.SUCCESS_BG,
                textColor: STATUS.SUCCESS_TEXT,
                Icon: VerifiedStoredStatusIcon,
            };
        case BookingStatus.Cancelled:
            return {
                backgroundColor: SURFACE.DISABLED_LOW,
                textColor: TEXT_CUSTOM.PRIMARY_MED,
                Icon: CrossIcon,
            };
        case BookingStatus.Returned:
            return {
                backgroundColor: SURFACE.DISABLED_LOW,
                textColor: TEXT_CUSTOM.PRIMARY_MED,
                Icon: SuccessIcon,
            };
        default:
            return {
                backgroundColor: "#E0E0E0",
                textColor: "#333",
                Icon: () => null,
            };
    }
};

export const OuterContainer = styled(Box)({
    backgroundColor: SURFACE.GREY_SURFACE_1,
});

export const InnerWrapper = styled(Box)(({ theme }) => ({
    width: "624px",
    padding: "16px",
    maxWidth: "720px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "72px",

    [theme.breakpoints.up("sm")]: {
        width: "100%",
        padding: "12px",
        marginTop: 0,
        gap: "8px",
        "& > *:nth-of-type(2)": {
            marginTop: "-1px",
        },
    },
}));
export const BackButton = styled(Button)(({ theme }) => ({
    fontSize: "13px",
    minWidth: 0,
    padding: 0,
    color: "#555",
    marginTop: "32px",
    marginBottom: "16px",
    textTransform: "none",
    gap: "12px",
    [theme.breakpoints.up("sm")]: {
        marginTop: 0,
        marginBottom: 0,
    },
}));
export const BookingTitle = styled(Typography)(({ theme }) => ({
    fontSize: "26px",
    fontWeight: 600,
    marginBottom: "6.4px",
    [theme.breakpoints.up("sm")]: {
        fontSize: "15px",
        marginLeft: "90px",
    },
}));
export const StatusBanner = styled(Box)(({ theme }) => ({
    padding: `${1.2 * 8}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: `${1 * 8}px`,
}));
export const StatusText = styled(Typography)({
    height: "16px",
    fontSize: "12px",
    fontWeight: 500,
});
export const BoxDetailsRow = styled(Box)({
    display: "flex",
    alignItems: "center",
    marginLeft: `${0.5 * 8}px`,
    padding: `${1.5 * 8}px`,
    gap: `${2 * 8}px`,
    marginBottom: `${-0.2 * 8}px`,
});
export const PriceToggleRow = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${2 * 8}px`,
    fontWeight: 600,
    cursor: "pointer",
    gap: "0px",
});
export const CollapsesIconButton = styled(IconButton)({
    padding: 0,
    marginLeft: 0,
});
export const ReturnItemsRow = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: `${0.2 * 8}px`,
    marginTop: `${1.5 * 8}px`,
});
export const ReturnChangeLink = styled(Typography)({
    textDecoration: "none",
    fontWeight: 600,
    marginTop: 2,
    cursor: "pointer",
    fontSize: 14,
    color: STATUS.DANGER_BG,
    display: "inline-block",
    "&:hover": {
        textDecoration: "underline",
    },
});
export const InfoNoteBox = styled(Box)({
    display: "flex",
    backgroundColor: SURFACE.GREY_SURFACE_2,
    borderRadius: 8,
    marginTop: 8,
    padding: 6.4,
    fontSize: 11,
    alignItems: "center",
    color: TEXT_CUSTOM.GREY_LOW,
});
export const RetrieveBoxCard = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: SURFACE.GREY_SURFACE_0,
    borderRadius: 8,
    padding: 16,
    boxShadow: `0 0 0 1px ${OUTLINE.GREY_LOW}`,
    cursor: "pointer",
    marginTop: -1,
});

export const BookingRowWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "11.2px",
    paddingBottom: "11.2px",
});

export const BookingLabel = styled(Typography)({
    fontSize: 14,
    color: TEXT_CUSTOM.GREY_LOW,
});

export const BookingValueWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    [theme.breakpoints.up("sm")]: {
        flexWrap: "wrap",
        maxWidth: "100%",
        wordBreak: "break-word",
    },
}));

export const BookingValueText = styled(Typography)<{ bold?: boolean; color?: string }>(
    ({ bold, color, theme }) => ({
        fontSize: 15,
        fontWeight: bold ? 600 : 400,
        color: color || theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        gap: 4,
        [theme.breakpoints.up("sm")]: {
            maxWidth: "180px",
            overflowWrap: "break-word",
            whiteSpace: "normal",
        },
    }),
);
export const SectionHeaderText = styled(Typography)({
    fontWeight: 600,
    marginBottom: "12px",
});
export const StyledChip = styled("span")({
    backgroundColor: SURFACE.GREY_SURFACE_2,
    padding: "2px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 500,
    marginRight: "8px",
    marginBottom: "8px",
    color: TEXT_CUSTOM.GREY_LOW,
});
export const GreyButton = styled(Button)(({ theme }) => ({
    backgroundColor: SURFACE.GREY_SURFACE_0,
    border: `1px solid ${OUTLINE.GREY_LOW}`,
    color: TEXT_CUSTOM.PRIMARY_MED,
    textTransform: "none",
    [theme.breakpoints.up("sm")]: {
        height: "48px",
    },
}));

export const PlainGreyButton = styled(Button)(({ theme }) => ({
    backgroundColor: SURFACE.GREY_SURFACE_0,
    color: TEXT_CUSTOM.PRIMARY_MED,
    textTransform: "none",
    [theme.breakpoints.up("sm")]: {
        height: "48px",
    },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    boxShadow: "none",
    [theme.breakpoints.up("sm")]: {
        height: "48px",
    },
}));

export const ButtonRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "column",
    },
}));
export const BackLabel = styled(Typography)({
    fontWeight: 400,
    fontSize: "13px",
});
export const BoxImageStyled = styled("img")({
    borderRadius: 4,
    width: 86,
    height: 86,
});
export const PaidAmountText = styled(Typography)({
    fontSize: "15px",
    fontWeight: 600,
});
export const RetrieveBoxText = styled(Typography)({
    fontSize: 13,
    color: TEXT_CUSTOM.PRIMARY_MED,
});
export const BookingLabelHeader = styled(Typography)({
    fontWeight: 600,
    fontSize: 15,
    color: TEXT_CUSTOM.GREY_HIGH,
});
export const BreakdownAmountBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "2px",
});
export const ContactBoxWrapper = styled(Box)({
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 4,
});
export const TopSectionWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 8,

    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
        justifyContent: "flex-start",
        marginTop: "5px",
        marginBottom: "5px",

        "& > *:last-child": {
            marginBottom: 0,
        },
    },
}));
export const BackRow = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 8,
});
export const PaperCard = styled(Box)({
    backgroundColor: SURFACE.GREY_SURFACE_0,
    borderRadius: 8,
    overflow: "hidden",
});
export const BoxTitle = styled(Typography)({
    marginTop: "8px",
    fontSize: "18px",
    fontWeight: 600,
});
export const BoxSubText = styled(Typography)({
    marginTop: "9.6px",
    fontSize: "14px",
    color: TEXT_CUSTOM.GREY_LOW,
});
export const ChangeText = styled(Typography)({
    fontSize: "14px",
    fontWeight: 600,
    marginTop: "2px",
    color: STATUS.DANGER_BG,
    textDecoration: "none",
    cursor: "pointer",
});
export const PriceBreakdownContainer = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: 14,
    color: "#555",
}));
export const WhiteCard = styled(Box)(({ theme }) => ({
    backgroundColor: SURFACE.GREY_SURFACE_0,
    borderRadius: 8,
    padding: theme.spacing(2),
}));
export const WhitePaperBox = styled(Box)({
    backgroundColor: SURFACE.GREY_SURFACE_0,
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
});

export const FlexRowStart = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 8,
});

export const FlexRow = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "12px",
});
