import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

interface InputProps {
  id?: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#2196f3",
    },
  },
});

export const Input = ({
  id = "",
  label = "",
  value = "",
  variant = "standard",
  onChange,
}: InputProps) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        type="text"
        id={id}
        value={value}
        label={label}
        variant={variant}
        onChange={onChange}
      />
    </ThemeProvider>
  );
};
