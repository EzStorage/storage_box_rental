import { Avatar, Badge, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../button";
import lightTextLogo from "../../assets/logo-light-text.png";
import darkTextLogo from "../../assets/logo-dark-text.png";
import { HeaderContainer, HeaderLeft, HeaderLeftNav, HeaderRight } from "./header.styles";

const Header: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const user = useAppSelector(state => state.auth.user);

  const isHomepage = location.pathname === "/";
  const logoSrc = (() => {
    if (isMobile) {
      return user ? darkTextLogo : lightTextLogo;
    } else {
      return !isHomepage ? darkTextLogo : lightTextLogo;
    }
  })();

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <img src={logoSrc} alt="EZ Logo" />
        </Link>

        {!isMobile && (
          <HeaderLeftNav isHomepage>
            <Link to="#about">About Us</Link>
            <Link to="#faq">FAQs</Link>
          </HeaderLeftNav>
        )}
      </HeaderLeft>

      <HeaderRight>
        <Badge>
          <FiShoppingCart size={24} color="white" />
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
