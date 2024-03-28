import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";
import { Input } from "./input";
import { TextEditor } from "./textEditor";
import { useAppContext } from "../context";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // defines loading backdrop
  const [loading, setLoading] = useState(false);
  // alert message
  const { setAlert, backendUrl, activeLanguage } = useAppContext();

  const onSubmit = async () => {
    try {
      if (name?.length < 1) {
        return setAlert({
          active: true,
          text: activeLanguage.provideName,
          type: "error",
        });
      }
      if (email?.length < 3 || !email?.includes("@")) {
        return setAlert({
          active: true,
          text: activeLanguage.provideEmail,
          type: "error",
        });
      }
      if (phone?.length < 3) {
        return setAlert({
          active: true,
          text: activeLanguage.providePhone,
          type: "error",
        });
      }
      setLoading(true);
      await axios.post(backendUrl + "/emails/form", {
        message:
          message +
          " / Name: " +
          name +
          " / User Email: " +
          email +
          " / Phone: " +
          phone,
        email: email,
      });
      setEmail("");
      setMessage("");
      setName("");
      setPhone("");
      setAlert({
        active: true,
        text: activeLanguage.success,
        type: "success",
      });
      setLoading(false);
    } catch (error) {
      setAlert({
        active: true,
        text: error.response.data.message,
        type: "error",
      });
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Container>
      <h1 style={{ color: "orange", letterSpacing: "0.5px" }}>
        {activeLanguage.form}
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        <Input
          value={name}
          onChange={setName}
          label={activeLanguage.name + "*"}
          width="90%"
        />
        <Input
          value={email}
          onChange={setEmail}
          label={activeLanguage.email + "*"}
          width="90%"
        />
        <Input
          value={phone}
          type="text"
          onChange={setPhone}
          label={activeLanguage.phone + "*"}
          width="90%"
        />
      </div>
      <TextEditor text={message} setText={setMessage} />
      <Button
        variant="contained"
        style={{
          backgroundColor: loading ? "#ccc" : "orange",
          color: "white",
        }}
        className="button"
        sx={{
          width: "100%",
          borderRadius: "50px",
          marginTop: "16px",
          height: "48px",
        }}
        onClick={onSubmit}
      >
        {loading ? (
          <BounceLoader color={"orange"} loading={loading} size={20} />
        ) : (
          activeLanguage.send
        )}
      </Button>
      {alert?.active && (
        <div style={{ boxSizing: "border-box", padding: "10vw" }}>
          (
          <Alert
            onClick={() => setAlert({ type: "", text: "", active: false })}
            severity={alert?.type}
          >
            {activeLanguage.wrong}
          </Alert>
          )
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 0;
  margin-top: 16px;

  @media only screen and (max-width: 600px) {
    padding: 0;
    padding 7vh 0;
  }

  h1 {
    color: #f866b1;
    letter-spacing: 0.5px;
    padding: 0;


    @media only screen and (max-width: 600px) {
      line-height: 7.5vw;
      font-size: 4.5vw;
    }
  }
`;
