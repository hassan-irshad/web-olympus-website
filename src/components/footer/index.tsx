import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../logo";
import TwitterIcon from "../icons/twitter";
import InstagramIcon from "../icons/instagram";
import LinkedinIcon from "../icons/linkedin";
import BehanceIcon from "../icons/behance";
import BallIcon from "../icons/ball";
import Shadow from "./shadow";

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#111",
  height: "360px",
  [theme.breakpoints.down("md")]: {
    height: "100%",
    paddingTop: "1px",
  },
}));

const OuterBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    position: "relative",
  },
}));

const InnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "50px",
  marginBottom: "25px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StyledContainer = styled(Container)(() => ({
  marginTop: "52px",
}));

const LogoContainer = styled(Box)(() => ({
  "> svg": {
    width: "250px",
  },
}));

const SocialButtonsContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  marginTop: "25px",
}));

const StyledIconButton = styled(IconButton)(() => ({
  ":hover": {
    backgroundColor: "#9C7339",
  },
}));

const LinksTitle = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 600,
  color: "#fff",
  marginBottom: "10px",
}));

const Link = styled("a")(() => ({
  fontSize: "15px",
  fontWeight: "500",
  color: "#AAA",
  textDecoration: "none",
  cursor: "pointer",
  ":hover": {
    color: "#9C7339",
  },
}));

const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StyledDivider = styled(Divider)(() => ({
  background: "rgba(255, 255, 255, 0.15)",
  width: "100%",
}));

const CopyrightText = styled(Typography)(() => ({
  fontSize: "15px",
  color: "#888",
  fontWeight: 500,
  textAlign: "center",
  paddingTop: "25px",
  paddingBottom: "30px",
}));

export default function Footer() {
  return (
    <MainBox>
      <OuterBox>
        <StyledContainer>
          <InnerBox>
            <Box>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <SocialButtonsContainer>
                <StyledIconButton>
                  <TwitterIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <InstagramIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <LinkedinIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <BehanceIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <BallIcon />
                </StyledIconButton>
              </SocialButtonsContainer>
            </Box>
            <LinksContainer>
              <LinksTitle>Quick Links</LinksTitle>
              <Link>About Us</Link>
              <Link>Pricing Table</Link>
              <Link>Contact Us</Link>
              <Link>Meet Our Team</Link>
              <Link>Latest News</Link>
            </LinksContainer>
            <LinksContainer>
              <LinksTitle>Company</LinksTitle>
              <Link>Case Studies</Link>
              <Link>FAQ's</Link>
              <Link>Services</Link>
              <Link>Customer Support</Link>
            </LinksContainer>
            <LinksContainer>
              <LinksTitle>Legal</LinksTitle>
              <Link>Privacy Policy</Link>
              <Link>Terms of Use</Link>
            </LinksContainer>
          </InnerBox>
          <StyledDivider />
          <CopyrightText>© 2023 Web Olympus. All Rights Reserved</CopyrightText>
        </StyledContainer>
      </OuterBox>
      <Shadow />
    </MainBox>
  );
}
