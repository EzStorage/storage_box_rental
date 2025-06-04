import { Avatar, CircularProgress, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import {
    ProfilePopoverContainer,
    ProfilePopoverHeader,
    ProfilePopoverInfo,
    ProfilePopoverMenu,
} from "./Header.styles";
import { useAppSelector } from "src/app/hooks";
import { Button } from "../Button";
import EditIcon from "../Icons/EditIcon";
import { Link } from "react-router";
import CalendarIcon from "../Icons/CalendarIcon";
import LogOutIcon from "../Icons/LogOutIcon";
import { getStatusCards } from "src/pages/Homepage/constants";
import SummaryCards from "../SummaryCards";

const ProfilePopover: React.FC = () => {
    const user = useAppSelector(state => state.auth.user);
    if (!user) return <CircularProgress />;

    return (
        <ProfilePopoverContainer>
            <ProfilePopoverHeader>
                <div>
                    <Avatar src={(user as any)?.avatarUrl} />
                    <div className="phone">{user.phone}</div>
                </div>
                <Button endIcon={<EditIcon />} className="edit-button">
                    Edit
                </Button>
            </ProfilePopoverHeader>

            <ProfilePopoverInfo>
                <SummaryCards />
            </ProfilePopoverInfo>

            <ProfilePopoverMenu>
                <MenuItem>
                    <ListItemIcon>
                        <CalendarIcon />
                    </ListItemIcon>
                    <ListItemText>My Bookings</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <LogOutIcon />
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
            </ProfilePopoverMenu>
        </ProfilePopoverContainer>
    );
};
export default ProfilePopover;
