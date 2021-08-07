import Button from "@material-ui/core/Button";

import "./button.scss";

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "inherit" | "default";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

export const Btn = ({
  variant = "contained",
  color = "default",
  size = "medium",
  label = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <Button
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
    </Button>
  );
};
