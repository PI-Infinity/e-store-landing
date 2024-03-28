import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useAppContext } from "../context";

export const TextEditor = ({ text, setText }) => {
  const [addCounter, setAddCounter] = useState(false);
  const maxLength = 1500;

  const { activeLanguage } = useAppContext();

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
      }}
    >
      <TextField
        id="outlined-multiline-static"
        label={`${activeLanguage.message} ${addCounter ? text.length : ""}${
          addCounter ? "/" : ""
        }${addCounter ? maxLength : ""} `}
        multiline
        minRows={3}
        variant="outlined"
        value={text}
        type="text"
        onChange={handleTextChange}
        onFocus={() => setAddCounter(true)}
        onBlur={() => setAddCounter(false)}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1.5px",
              borderColor: "rgba(255,255,255,0.1)",
              borderRadius: "15px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
          },
          "& .MuiOutlinedInput-input": {
            // borderRadius: '15px',
            color: "#ccc",
          },
          "& label": {
            color: "#888",
            fontSize: "14px",
            letterSpacing: "0.5px",
          },
          "& label.Mui-focused": {
            color: "#ccc",
            fontSize: "14px",
            letterSpacing: "0.5px",
          },
        }}
        inputProps={{ maxLength: maxLength }}
      />
    </div>
  );
};
