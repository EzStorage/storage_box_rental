import { Avatar, Badge, Popover, Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { Button } from "../Button";
import { HeaderContainer, HeaderLeftNav, HeaderLogo, HeaderRight } from "./Header.styles";
import Logo from "../Logo";
import ShopCartIcon from "../Icons/ShopCartIcon";
import ProfilePopover from "./ProfilePopover";
import { useScreenSize } from "@hooks/useScreenSize";
import { NAV_ITEMS } from "./constants";

const Header: React.FC = () => {
    const { isDesktop } = useScreenSize();
    const location = useLocation();
    const navigate = useNavigate();
    const user = useAppSelector(state => state.auth.user);
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const { scrollY } = useScroll();

    const isWhiteBackground =
        location.pathname !== "/" ||
        (location.pathname === "/" && (scrolled || (!isDesktop && user !== null)));

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleScrollTo = (id: string) => {
        navigate("/", { state: { scrollToId: id } });
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 50;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useMotionValueEvent(scrollY, "change", latest => {
        setScrolled(latest > 250 ? true : false);
    });

    return (
        <HeaderContainer isWhiteBackground={isWhiteBackground}>
            <Stack direction="row" alignItems="center" gap={"24px"}>
                {/* Logo */}
                <HeaderLogo
                    to="/"
                    style={{ textDecoration: "none" }}
                    isWhiteBackground={isWhiteBackground}
                >
                    <Stack direction="row" alignItems="center" gap={"4px"}>
                        <Logo />
                        <span>Storage</span>
                    </Stack>
                </HeaderLogo>

                {/* Navigation Links */}
                {isDesktop && (
                    <HeaderLeftNav isWhiteBackground={isWhiteBackground}>
                        {NAV_ITEMS.map(item => (
                            <div key={item.id} onClick={() => handleScrollTo(item.id)}>
                                {item.name}
                            </div>
                        ))}
                    </HeaderLeftNav>
                )}
            </Stack>

            <HeaderRight>
                <Badge>
                    <ShopCartIcon width={24} color={isWhiteBackground ? "black" : "white"} />
                </Badge>

                {isDesktop && (
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
