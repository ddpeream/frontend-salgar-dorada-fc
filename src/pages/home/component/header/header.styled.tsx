import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderAppBar = styled(AppBar)`
  background-color: #acd9b2;
  position: sticky;
  top: 0;
  z-index: 1100;
`;

export const HeaderIconButton = styled(IconButton)`
  color: #fff;
`;

export const HeaderMenuIcon = styled(MenuIcon)`
  color: #fff;
`;

export const HeaderTypography = styled(Typography)`
  flex-grow: 1;
`;

export const HeaderButton = styled(Button)`
  color: #fff;
`;

export const HeaderNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;

  &.active ${HeaderButton} {
    background-color: rgba(255, 255, 255, 0.18);
  }
`;

export const HeaderNavLinksWrapper = styled.nav`
  display: none;
  align-items: center;
  gap: 12px;

  @media (min-width: 900px) {
    display: flex;
  }
`;
