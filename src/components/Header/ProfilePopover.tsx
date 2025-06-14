import { Avatar, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import {
    ProfilePopoverContainer,
    ProfilePopoverHeader,
    ProfilePopoverInfo,
    ProfilePopoverMenu,
} from "./Header.styles";
import { useAppSelector } from "src/app/hooks";
import { Button } from "../Button";
import EditIcon from "../Icons/EditIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import LogOutIcon from "../Icons/LogOutIcon";
import SummaryCards from "../SummaryCards";
import { Link } from "react-router";

interface ProfilePopoverProps {
    onLogout: () => void;
}

const ProfilePopover: React.FC<ProfilePopoverProps> = ({ onLogout }) => {
    const user = useAppSelector(state => state.auth.user);

    return (
        <ProfilePopoverContainer>
            <ProfilePopoverHeader>
                <div>
                    <Avatar src={(user as any)?.avatarUrl} />
                    <div className="phone">{user?.phone}</div>
                </div>
                <Button endIcon={<EditIcon />} className="edit-button">
                    Edit
                </Button>
            </ProfilePopoverHeader>

            <ProfilePopoverInfo>
                <SummaryCards />
            </ProfilePopoverInfo>

            <ProfilePopoverMenu>
                <Link to="/my-booking">
                    <MenuItem>
                        <ListItemIcon>
                            <CalendarIcon />
                        </ListItemIcon>
                        <ListItemText>My Bookings</ListItemText>
                    </MenuItem>
                </Link>

                <MenuItem>
                    <ListItemIcon>
                        <LogOutIcon />
                    </ListItemIcon>
                    <ListItemText onClick={onLogout}>Log Out</ListItemText>
                </MenuItem>
            </ProfilePopoverMenu>
        </ProfilePopoverContainer>
    );
};
export default ProfilePopover;
