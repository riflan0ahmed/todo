import { ChangeEvent } from "react";

interface InputProps {
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id = "",
  placeholder = "",
  value = "",
  onChange,
}: InputProps) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
