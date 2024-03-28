import { TextField } from "@mui/material";
import React from "react";

interface PropsType {
  label: string;
  value: any;
  onChange: (e: any) => void;
  type: string;
  warning: boolean;
  onKeyDown?: (prev: any) => void;
  textarea?: boolean;
  id?: string;
}

export const Input: React.FC<PropsType> = ({
  label,
  value,
  onChange,
  type,
  warning,
  onKeyDown,
  textarea,
  id,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      value={value}
      autoFocus={false}
      type={type}
      autoComplete="off"
      onChange={(e: any) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      multiline={textarea ? true : false}
      rows={textarea ? 3 : 1}
      sx={{
        width: "100%",

        borderRadius: "10px",
        "& .MuiOutlinedInput-root": {
          height: "53px",

          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1.5px",
            borderColor: "rgba(255,255,255,0.1)",
            borderRadius: "10px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
        },
        "& .MuiOutlinedInput-input": {
          borderRadius: "10px",
          color: "#888",
        },
        "& label": {
          color: "#888",
          fontSize: "14px",
          letterSpacing: "0.5px",
        },
        "& label.Mui-focused": {
          color: "#e5e5e5",
          fontSize: "14px",
          letterSpacing: "0.5px",
        },
      }}
    />
  );
};
