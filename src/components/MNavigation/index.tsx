import { useTheme } from "@mui/material";
import { NAVIGATION_ITEMS } from "./constants";
import { MNavigationContainer, MNavigationItem } from "./MNavigation.styles";
import { useLocation } from "react-router";

export function MNavigation() {
    const theme = useTheme();
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <MNavigationContainer>
            {NAVIGATION_ITEMS.map(info => (
                <MNavigationItem key={info.id} to={info.url} isSelected={info.url === pathname}>
                    <info.Icon
                        width="24px"
                        color={
                            info.url === pathname
                                ? theme.palette.surface.primaryMed
                                : theme.palette.textCustom.greyMed
                        }
                    />
                    <div>{info.title}</div>
                </MNavigationItem>
            ))}
        </MNavigationContainer>
    );
}
