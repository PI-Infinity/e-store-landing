import styled from "styled-components";
import FirstPage from "./1";
import SecondPage from "./2";
import ThirdPage from "./3";
import FourthPage from "./4";
import { useState } from "react";
import FifthPage from "./5";
import SixthPage from "./6";
import SeventhPage from "./7";
import Eight from "./8";

export default function Presentation() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  return (
    <Container>
      <FirstPage />
      <Divider />
      <SecondPage
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />
      <Divider />

      <ThirdPage />
      <Divider />
      <FourthPage
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
      />
      <Divider />
      <FifthPage activeTemplate={activeTemplate} />
      <Divider />
      <SixthPage />
      <Divider />
      <SeventhPage />
      <Divider />
      <Eight />
      <Divider />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: 56px;
`;

const Divider = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin: 16px 0;
`;
