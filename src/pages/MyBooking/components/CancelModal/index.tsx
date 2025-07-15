import { useTheme, useMediaQuery } from "@mui/material";
import { CancelModalDesktop } from "./DesktopUI";
import { CancelModalMobile } from "./MobileUI";

export const CancelModalContent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const ModalComponent = isMobile ? CancelModalMobile : CancelModalDesktop;
    return <ModalComponent />;
};

export const CancelModal = () => {
    return <CancelModalContent />;
};
