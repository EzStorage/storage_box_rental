import { Avatar, Badge, Popover, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { Button } from "../Button";
import { HeaderContainer, HeaderLeftNav, HeaderLogo, HeaderRight } from "./Header.styles";
import Logo from "../Logo";
import ShopCartIcon from "../Icons/ShopCartIcon";
import ProfilePopover from "./ProfilePopover";

const Header: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const user = useAppSelector(state => state.auth.user);
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const { scrollY } = useScroll();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useMotionValueEvent(scrollY, "change", latest => {
        setScrolled(latest > 250 ? true : false);
    });

    const isChangeColor = location.pathname === "/" && !scrolled;

    return (
        <HeaderContainer isChangeColor={isChangeColor}>
            <Stack direction="row" alignItems="center" gap={"24px"}>
                {/* Logo */}
                <HeaderLogo to="/" style={{ textDecoration: "none" }} isChangeColor={isChangeColor}>
                    <Stack direction="row" alignItems="center" gap={"4px"}>
                        <Logo />
                        <span>Storage</span>
                    </Stack>
                </HeaderLogo>

                {/* Navigation Links */}
                {!isMobile && (
                    <HeaderLeftNav isChangeColor={isChangeColor}>
                        <Link to="#about">About Us</Link>
                        <Link to="#faq">FAQs</Link>
                    </HeaderLeftNav>
                )}
            </Stack>

            <HeaderRight>
                <Badge>
                    <ShopCartIcon width={24} color={isChangeColor ? "white" : "black"} />
                </Badge>

                {!isMobile && (
                    <>
                        {user ? (
                            <Avatar src={(user as any)?.avatarUrl} onClick={handleClick} />
                        ) : (
                            <Link to="/login">
                                <Button variantType="login">Log In</Button>
                            </Link>
                        )}
                    </>
                )}
            </HeaderRight>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 56,
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                slotProps={{
                    paper: {
                        sx: { borderRadius: "8px" },
                    },
                }}
            >
                <ProfilePopover />
            </Popover>
        </HeaderContainer>
    );
};
export default Header;
