import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";
import Logo from "../logo";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#181818",
  boxShadow: "none",
  paddingTop: "20px",
});

const LogoContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  "> svg": {
    width: "179px",
  },
}));

const LogoContainerMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  "> svg": {
    height: "35px",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
  },
}));

const DesktopLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  gap: "40px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledDesktopNavLink = styled(Button)({
  color: "#fff",
  fontWeight: 500,
  letterSpacing: "0.98px",
  fontSize: "14px",
  ":hover": {
    background: "#9C7339",
  },
});

const ContactUsButton = styled(Button)(({ theme }) => ({
  background: "tranparent",
  border: "1px solid #fff",
  color: "#fff",
  fontWeight: 700,
  borderRadius: 0,
  paddingLeft: "29px",
  paddingRight: "29px",
  fontSize: "16px",
  letterSpacing: "2.88px",
  paddingTop: "10px",
  paddingBottom: "10px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  ":hover": {
    background: "#9C7339",
    borderColor: "#9C7339",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const PlaceholderIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    opacity: 0,
  },
}));

const pages = ["Services", "Portfolio", "About Us"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <StyledToolbar disableGutters>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LogoContainerMobile>
            <Logo />
          </LogoContainerMobile>
          <DesktopLinksContainer>
            {pages.map((page) => (
              <StyledDesktopNavLink key={page} onClick={handleCloseNavMenu}>
                {page}
              </StyledDesktopNavLink>
            ))}
          </DesktopLinksContainer>
          <ContactUsButton>
            <span>Contact Us</span>
            <ArrowForwardIcon />
          </ContactUsButton>
          <PlaceholderIconButton size="large">
            <MenuIcon />
          </PlaceholderIconButton>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}
export default Header;
