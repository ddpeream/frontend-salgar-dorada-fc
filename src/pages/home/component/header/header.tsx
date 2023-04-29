import { Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  HeaderIconButton,
  HeaderAppBar,
  HeaderMenuIcon,
  HeaderTypography,
  HeaderButton,
} from "./header.styled";

export const Header = () => {
  return (
    <HeaderAppBar position="static">
      <Toolbar>
        <HeaderIconButton
          edge="start"
          sx={{ mr: 2 }}
          color="inherit"
          aria-label="menu"
        >
          <HeaderMenuIcon />
        </HeaderIconButton>
        <HeaderTypography variant="h6" sx={{ flexGrow: 1 }}>
          Salgar Dorada FC
        </HeaderTypography>
        <HeaderButton color="inherit" sx={{ mr: 2 }}>
          Home
        </HeaderButton>
        <HeaderButton color="inherit" sx={{ mr: 2 }}>
          About
        </HeaderButton>
        <HeaderButton color="inherit" sx={{ mr: 2 }}>
          Contact
        </HeaderButton>
        <HeaderIconButton color="inherit" aria-label="search">
          <SearchIcon />
        </HeaderIconButton>
        <HeaderIconButton color="inherit" sx={{ mr: 2 }} aria-label="account">
          <AccountCircleIcon />
        </HeaderIconButton>
        <HeaderIconButton color="inherit" aria-label="cart">
          <ShoppingCartIcon />
        </HeaderIconButton>
      </Toolbar>
    </HeaderAppBar>
  );
};
