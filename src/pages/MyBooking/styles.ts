import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Chip } from "@mui/material";
import { SURFACE, TEXT_CUSTOM, STATUS, OUTLINE } from "../../constants/palette";

export const Container = styled(Box)(() => ({
    padding: "40px",
    backgroundColor: SURFACE.GREY_SURFACE_2,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "72px",
}));

export const NewStorageButton = styled(Button)(() => ({
    backgroundColor: "#D221311A",
    color: SURFACE.PRIMARY_MED,
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "none",
    wwidth: 32,
}));

export const HeaderBox = styled(Box)(() => ({
    width: "592px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
}));

interface StatusProps {
    status: string;
}

export const Status = styled(Chip, {
    shouldForwardProp: prop => prop !== "status",
})<StatusProps>(({ status }) => {
    let background = SURFACE.GREY_SURFACE_2;
    let color = TEXT_CUSTOM.GREY_HIGH;

    switch (status.toLowerCase()) {
        case "awaiting pickup":
            background = STATUS.WARNING_BG;
            color = STATUS.WARNING_TEXT;
            break;
        case "box to be delivered":
            background = STATUS.INFO_BG;
            color = STATUS.INFO_TEXT;
            break;
        case "completed":
            background = SURFACE.GREEN;
            color = TEXT_CUSTOM.WHITE;
            break;
        case "cancelled":
            background = STATUS.DANGER_BG;
            color = TEXT_CUSTOM.WHITE;
            break;
        default:
            break;
    }

    return {
        backgroundColor: background,
        color: color,
        fontWeight: 500,
        borderRadius: "4px",
        textTransform: "capitalize",
        height: "20px",
    };
});

export const ItemWrapper = styled(Box)<{ activeTab: string }>(({ activeTab }) => ({
    backgroundColor: SURFACE.GREY_SURFACE_0,
    borderRadius: 8,
    padding: 16,
    display: "flex",
    gap: 16,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    width: 592,
    height: activeTab === "Stored" ? 144 : 126,
    position: "relative",
    flexDirection: "row",
}));

export const BoxIcon = styled("img")(() => ({
    width: 102,
    height: 102,
    borderRadius: 4,
}));

export const Details = styled(Box)(() => ({
    flex: 1,
    fontSize: "13px !important",
}));

export const DateRange = styled(Typography)(() => ({
    fontSize: "15px !important",
    fontWeight: "600 !important",
    paddingTop: 2,
    paddingBottom: 6,
}));

export const Meta = styled(Typography)(() => ({
    fontSize: "13px !important",
    color: TEXT_CUSTOM.GREY_LOW,
    paddingBottom: "4px",
    display: "flex",
    alignItems: "center",
    gap: 6,
}));

export const ProgressTrack = styled(Box)(() => ({
    position: "absolute",
    bottom: 10,
    left: 16,
    right: 16,
    height: 6,
    borderRadius: 4,
    backgroundColor: OUTLINE.GREY_MED,
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

export const ListWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: 16,
}));

export const TabContainer = styled(Box)(() => ({
    display: "flex",
    width: 592,
    backgroundColor: OUTLINE.GREY_LOW,
    borderRadius: 8,
    height: 40,
    marginBottom: 40,
    overflow: "hidden",
    justifyContent:"flex",
    alignItems:"center",
    padding:4,
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
    
    
}));
