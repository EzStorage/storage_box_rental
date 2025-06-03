import {
    Avatar,
    CircularProgress,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Stack,
} from "@mui/material";
import {
    ProfilePopoverCard,
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

const ProfilePopover: React.FC = () => {
    const user = useAppSelector(state => state.auth.user);
    if (!user) return <CircularProgress />;

    const statusCards = [
        {
            title: "Upcoming",
            count: user.upcomingBooking,
            bgColor: "#FFFEEC",
            borderColor: "#FAF39B",
        },
        { title: "Stored", count: user.storedBooking, bgColor: "#F8FDEB", borderColor: "#D8F4A6" },
        {
            title: "History",
            count: user.historyBooking,
            bgColor: "#FFFEEC",
            borderColor: "#FAF39B",
        },
    ];

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
                {statusCards.map((info, index) => (
                    <ProfilePopoverCard
                        key={index}
                        background={info.bgColor}
                        borderColor={info.borderColor}
                    >
                        <div>
                            <div className="title">{info.title}</div>
                            <div className="count">{info.count}</div>
                        </div>
                        <Link to="/" className="view-all">
                            View all
                        </Link>
                    </ProfilePopoverCard>
                ))}
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
