import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";

interface InputProps {
  id?: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id = "",
  label = "",
  value = "",
  variant = "standard",
  onChange,
}: InputProps) => {
  return (
    <TextField
      type="text"
      id={id}
      value={value}
      label={label}
      variant={variant}
      onChange={onChange}
    />
  );
};
