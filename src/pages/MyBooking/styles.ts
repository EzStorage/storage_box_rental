import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Chip } from "@mui/material";
import { SURFACE, TEXT_CUSTOM, STATUS, OUTLINE } from "../../constants/palette";
import { BookingStatus } from "../../constants/Enums";
import { Padding } from "@mui/icons-material";

export const Container = styled(Box)({
    padding: "40px",

    backgroundColor: SURFACE.GREY_SURFACE_2,
    minHeight: "calc(100vh - 72px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "72px",
    paddingTop: "40px",
    "@media (max-width: 600px)": {
        padding: "16px",
        marginTop: "0px",
    },
});

export const HeaderBox = styled(Box)(() => ({
    width: "592px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    "@media (max-width: 600px)": {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "12px",
        flexWrap: "nowrap",
    },
}));

export const NewStorageButton = styled(Button)(() => ({
    backgroundColor: "#D221311A",
    color: SURFACE.PRIMARY_MED,
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "none",
    width: "fit-content",
    "@media (max-width: 600px)": {
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

export const ItemWrapper = styled(Box)<{ activeTab: string }>(({ activeTab }) => ({
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

    "@media (max-width: 600px)": {
        width: "100%",
        height: "auto",
        padding: "8px 12px 8px 8px",
    },
}));

export const BoxIcon = styled("img")(() => ({
    width: 102,
    height: 102,
    borderRadius: 4,
    "@media (max-width: 600px)": {
        width: "92px",
        height: "92px",
    },
}));

export const Details = styled(Box)(() => ({
    flex: 1,
    fontSize: "13px !important",
}));

export const DateRange = styled(Typography)(() => ({
    fontSize: "15px !important",
    fontWeight: "600 !important",
    paddingTop: 8,
    paddingBottom: 6,
    "@media (max-width: 600px)": {
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

export const ProgressTrack = styled(Box)({
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
    "@media (max-width: 600px)": {
        height: 5,
    },
});

export const ProgressBar = styled(Box, {
    shouldForwardProp: prop => prop !== "percentage",
})<{ percentage: number }>(({ percentage }) => ({
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: SURFACE.GREEN,
    borderRadius: 4,
    transition: "width 0.3s ease-in-out",
}));

export const ListWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "592px",
    "@media (max-width: 600px)": {
        width: "100%",
    },
}));

export const TabContainer = styled(Box)(() => ({
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
    "@media (max-width: 600px)": {
        width: "100%",
    },
}));

export const Tab = styled(Button, {
    shouldForwardProp: prop => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
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

    "@media (max-width: 600px)": {
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
export const ContentRow = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: 12,
    flex: 1,
    minHeight: 0,
    overflow: "hidden",
    padding: 0,
    alignItems: "flex-start",
    "@media (max-width: 600px)": {
        alignItems: "flex-start",
    },
});
