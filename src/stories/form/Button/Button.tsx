import Button from "@material-ui/core/Button";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    borderRadius: 25,
    width: 100,
    height: 40,
  },
  label: {
    textTransform: "capitalize",
    fontWeight: 700,
  },
  disabled: {
    backgroundColor: "blue",
  },
})(Button);

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "inherit" | "default";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#2196f3",
    },
    action: {
      disabledBackground: "LightSkyBlue",
      disabled: "white",
    },
  },
});

export const Btn = ({
  variant = "contained",
  color = "default",
  size = "medium",
  label = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        type="button"
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        {...props}
        style={{
          marginTop: "15px",
          marginBottom: "5px",
          marginLeft: "5px",
          marginRight: "5px",
        }}
        className="button"
      >
        {label}
      </StyledButton>
    </ThemeProvider>
  );
};
