import { Avatar, Badge, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../Button";
import { HeaderContainer, HeaderLeftNav, HeaderLogo, HeaderRight } from "./header.styles";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Logo from "../Logo";

interface HeaderProps {
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const user = useAppSelector((state) => state.auth.user);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  const isChangeColor = location.pathname === "/" && !scrolled;

  return (
    <HeaderContainer isChangeColor={isChangeColor}>
      <Stack direction="row" alignItems="center" gap={"24px"}>
        <HeaderLogo to="/" style={{ textDecoration: "none" }} isChangeColor={isChangeColor}>
          <Stack direction="row" alignItems="center" gap={"4px"}>
            <Logo />
            <span>Storage</span>
          </Stack>
        </HeaderLogo>

        {!isMobile && (
          <HeaderLeftNav isChangeColor={isChangeColor}>
            <Link to="#about">About Us</Link>
            <Link to="#faq">FAQs</Link>
          </HeaderLeftNav>
        )}
      </Stack>

      <HeaderRight>
        <Badge>
          <IconButton onClick={onCartOpen}>
            <FiShoppingCart size={24} color={isChangeColor ? "white" : "black"} />
          </IconButton>
        </Badge>

        {!isMobile && (
          <>
            {user ? (
              <Avatar src={(user as any)?.avatarUrl} />
            ) : (
              <Button variantType="login">Log In</Button>
            )}
          </>
        )}
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
