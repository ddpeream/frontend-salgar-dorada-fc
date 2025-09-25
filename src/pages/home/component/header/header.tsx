import { MouseEvent as ReactMouseEvent, useState } from "react";
import { Toolbar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LanguageSelector } from "../../../../components/language-selector";
import { useAppTranslation } from "../../../../i18n/hooks";
import {
  HeaderIconButton,
  HeaderAppBar,
  HeaderMenuIcon,
  HeaderTypography,
  HeaderButton,
  HeaderNavLink,
  HeaderNavLinksWrapper,
} from "./header.styled";

export const Header = () => {
  const navigate = useNavigate();
  const { t } = useAppTranslation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  // Enlaces de navegación con traducciones
  const NAV_LINKS = [
    { label: t('navigation.home'), to: "/", end: true },
    { label: t('navigation.about'), to: "/about" },
    { label: t('navigation.players'), to: "/players" },
    { label: t('navigation.matches'), to: "/matches" },
    { label: t('navigation.form'), to: "/form" },
  ];

  const handleOpenNavMenu = (event: ReactMouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (to: string) => {
    if (to.includes("#")) {
      const [pathname, hash] = to.split("#");
      const targetPath = pathname || "/";
      navigate(targetPath);
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      navigate(to);
    }
  };

  const handleNavLinkClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    to: string,
  ) => {
    if (to.includes("#")) {
      event.preventDefault();
      handleNavigate(to);
    }
  };

  const handleMenuNavigate = (to: string) => {
    handleNavigate(to);
    handleCloseNavMenu();
  };

  return (
    <HeaderAppBar position="sticky">
      <Toolbar>
        <HeaderIconButton
          edge="start"
          sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          color="inherit"
          aria-label="menú"
          onClick={handleOpenNavMenu}
        >
          <HeaderMenuIcon />
        </HeaderIconButton>
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          {NAV_LINKS.map((link) => (
            <MenuItem key={`menu-${link.to}`} onClick={() => handleMenuNavigate(link.to)}>
              {link.label}
            </MenuItem>
          ))}
        </Menu>
        <HeaderTypography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          {t('home.title')}
        </HeaderTypography>
        <HeaderNavLinksWrapper>
          {NAV_LINKS.map((link) => (
            <HeaderNavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={(event) => handleNavLinkClick(event, link.to)}
            >
              <HeaderButton color="inherit">{link.label}</HeaderButton>
            </HeaderNavLink>
          ))}
        </HeaderNavLinksWrapper>
        <LanguageSelector position="header" />
      </Toolbar>
    </HeaderAppBar>
  );
};
