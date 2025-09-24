import { MouseEvent as ReactMouseEvent, useState } from "react";
import { Toolbar, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import {
  HeaderIconButton,
  HeaderAppBar,
  HeaderMenuIcon,
  HeaderTypography,
  HeaderButton,
  HeaderNavLink,
  HeaderNavLinksWrapper,
} from "./header.styled";

const NAV_LINKS = [
  { label: "Inicio", to: "/", end: true },
  { label: "Plantilla", to: "/players" },
  { label: "Inscripción", to: "/form" },
  { label: "Únete", to: "/#unete" },
];

export const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

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
    <HeaderAppBar position="static">
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
          keepMounted
        >
          {NAV_LINKS.map((link) => (
            <MenuItem key={`menu-${link.to}`} onClick={() => handleMenuNavigate(link.to)}>
              {link.label}
            </MenuItem>
          ))}
          <MenuItem onClick={() => handleMenuNavigate("/login")}>
            Iniciar sesión
          </MenuItem>
        </Menu>
        <HeaderTypography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Salgar Dorada FC
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
        <HeaderIconButton
          color="inherit"
          sx={{ ml: 1 }}
          aria-label="Iniciar sesión"
          onClick={() => navigate("/login")}
        >
          <AccountCircleIcon />
        </HeaderIconButton>
      </Toolbar>
    </HeaderAppBar>
  );
};
