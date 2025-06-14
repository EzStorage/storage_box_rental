import UserIcon from "@components/Icons/UserIcon";
import {
    LoginCardContainer,
    LoginHeader,
    LoginIconContainer,
    LoginTextContainer,
} from "./LoginCard.styles";
import MyButton from "@components/Button/MyButton";
import { Link } from "react-router";

export function LoginCard() {
    return (
        <LoginCardContainer>
            <LoginHeader>
                <LoginIconContainer>
                    <UserIcon width={"28px"} />
                </LoginIconContainer>
                <LoginTextContainer>
                    <div>Log In</div>
                    <div>A short description goes here.</div>
                </LoginTextContainer>
            </LoginHeader>
            <Link to="/login">
                <MyButton variantType="primary" fullWidth>
                    Login
                </MyButton>
            </Link>
        </LoginCardContainer>
    );
}
