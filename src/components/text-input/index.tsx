import { Box, Typography, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

const Label = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 500,
  color: "#fff",
  marginBottom: "16px",
}));

const StyledInput = styled(OutlinedInput)(() => ({
  border: "1px solid #fff",
  outline: "none",
  color: "#fff",
  borderRadius: 0,
  width: "100%",
  fontSize: "16px",
  "& input": {
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "16.63px",
  },
  "& fieldset": { border: "none" },
}));

interface TextInputProps {
  placeholder: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  multiline?: boolean;
  rows?: number;
}

export default function TextInput({
  placeholder,
  label,
  value,
  onChange,
  name,
  multiline,
  rows,
}: TextInputProps) {
  return (
    <Box>
      <Label>{label}</Label>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        multiline={multiline}
        rows={rows}
      />
    </Box>
  );
}
