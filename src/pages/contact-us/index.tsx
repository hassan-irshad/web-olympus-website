import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  TextInput,
  SelectInput,
  ContactUsIllustration,
} from "@web-olympus/components";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: "108px",
  paddingBottom: "144px",
  display: "flex",
  flexDirection: "row",
  gap: "57px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "48px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  fontFamily: "Ganora",
  fontWeight: 400,
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

const Description = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 500,
  color: "#aaa",
  linedHeight: "24px",
  marginBottom: "48px",
}));

const FormFieldsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));

const SubmitButton = styled(Button)(() => ({
  backgroundColor: "transparent",
  color: "#fff",
  border: "1px solid #fff",
  borderRadius: 0,
  textTransform: "uppercase",
  fontSize: "16px",
  fontWeight: 600,
  letterSpacing: "2.88px",
  paddingTop: "18px",
  paddingBottom: "18px",
  ":hover": {
    backgroundColor: "#9C7339",
    borderColor: "#9C7339",
  },
  marginTop: "5px",
}));

const IllustrationBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function ContactUs() {
  const [formValues, setFormValues] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    messages: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <StyledContainer>
      <Box>
        <Title>Contact Us</Title>
        <Description>
          Book a call or write us to discover our different options. Whether
          it's membership for recurring missions or more "classic" quotes for
          big projects, we have the right package for you.
        </Description>
        <FormFieldsContainer>
          <TextInput
            label="Full Name"
            placeholder="Input your full name in here"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChangeInput}
          />
          <TextInput
            label="Email"
            placeholder="Input your Email in here"
            name="email"
            value={formValues.email}
            onChange={handleChangeInput}
          />
          <SelectInput
            label="Subjects"
            value={formValues.subject}
            onChange={handleChangeInput}
            name="subject"
          />
          <TextInput
            label="Messages"
            placeholder="Input your Messages in here"
            rows={5}
            multiline
            name="messages"
          />
          <SubmitButton>Submit</SubmitButton>
        </FormFieldsContainer>
      </Box>
      <IllustrationBox>
        <ContactUsIllustration />
      </IllustrationBox>
    </StyledContainer>
  );
}
