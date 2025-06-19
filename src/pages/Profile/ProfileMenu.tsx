import ChevronRightIcon from "@components/Icons/ChevronRightIcon";
import { MENU_SECTIONS, MenuItemTypes } from "./constants";
import { ProfileMenuItemContainer, ProfileSectionContainer } from "./Profile.styles";
import { useTheme } from "@mui/material";

const renderMenuItem = (item: MenuItemTypes) => {
    const theme = useTheme();

    return (
        <ProfileMenuItemContainer key={item.id}>
            <div>
                <item.Icon width={"20px"} />
                <div>{item.label}</div>
            </div>
            <ChevronRightIcon color={theme.palette.textCustom.greyMed} />
        </ProfileMenuItemContainer>
    );
};

export function ProfileMenu() {
    return (
        <div>
            {MENU_SECTIONS.map(section => (
                <ProfileSectionContainer key={section.title}>
                    <div>{section.title}</div>
                    <div>{section.items.map(renderMenuItem)}</div>
                </ProfileSectionContainer>
            ))}
        </div>
    );
}
