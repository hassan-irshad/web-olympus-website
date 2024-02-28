import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Label = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 500,
  color: "#fff",
  marginBottom: "16px",
}));

const StyledSelect = styled(Select)(() => ({
  border: "1px solid #fff",
  outline: "none",
  color: "#fff",
  borderRadius: 0,
  width: "100%",
  fontSize: "16px",
  paddingTop: 0,
  "& fieldset": { border: "none" },
  "& .MuiSelect-select": {
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },
  "& legend": { display: "none" },
}));

const StyledInputLabel = styled(InputLabel)(() => ({
  color: "#797979",
}));

interface SelectInputProps {
  label: string;
  value?: string;
  onChange?: (e: any) => void;
  name: string;
}

export default function SelectInput({
  label,
  value,
  onChange,
  name,
}: SelectInputProps) {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <Box>
      <Label>{label}</Label>
      <FormControl fullWidth>
        {!focused && !value && <StyledInputLabel>Qustions</StyledInputLabel>}
        <StyledSelect
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          displayEmpty
          name={name}
        >
          <MenuItem value="Question 1">Question 1</MenuItem>
          <MenuItem value="Question 2">Question 2</MenuItem>
          <MenuItem value="Question 3">Question 3</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
}
