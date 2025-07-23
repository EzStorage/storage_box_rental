import { useTheme, useMediaQuery } from "@mui/material";
import { ChangeTimeModalDesktop } from "./DesktopUI";

export const ChangeTimeModalContent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const ModalComponent = ChangeTimeModalDesktop;
    return <ModalComponent />;
};

export const ChangeTimeModal = () => {
    return <ChangeTimeModalContent />;
};
