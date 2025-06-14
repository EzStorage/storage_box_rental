import { useAppSelector } from "src/app/hooks";
import { ProfileContainer, ProfileInfoContainer } from "./Profile.styles";
import { LoginCard } from "@components/LoginCard";
import EditIcon from "@components/Icons/EditIcon";
import { Avatar, Button } from "@mui/material";
import { ProfileMenu } from "./ProfileMenu";

export function Profile() {
    const user = useAppSelector(state => state.auth.user);

    return (
        <ProfileContainer>
            <div>Profile</div>
            {!user ? (
                <LoginCard />
            ) : (
                <ProfileInfoContainer>
                    <div>
                        <Avatar src={(user as any)?.avatarUrl} sizes="48px" />
                        <div>{user?.phone}</div>
                    </div>
                    <Button endIcon={<EditIcon />}>Edit</Button>
                </ProfileInfoContainer>
            )}
            <ProfileMenu />
        </ProfileContainer>
    );
}
