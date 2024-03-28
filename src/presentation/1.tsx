import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import styled from "styled-components";
import { useAppContext } from "../context";

export default function FirstPage() {
  const [transition, setTransition] = useState(false);
  const [rotate, setRotate] = useState(false);

  const { setLanguage, language, isMobile } = useAppContext();

  useEffect(() => {
    setTransition(true);
    setTimeout(() => {
      setRotate(true);
    }, 700);
  }, []);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "visible",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "50px",
              width: "50px",
              transition: "ease-in-out 700ms",
              borderRadius: "50px",
              background: "gray",
              position: "absolute",
              zIndex: 0,
              left: "-20px",
              opacity: transition ? 0.1 : 0,
              transform: `scale(${transition ? 1 : 30})`,
            }}
          />
          <h1
            style={{
              fontWeight: 900,
              fontSize: isMobile ? "32px" : "40px",
              marginBottom: "8px",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "0" : "2px",
            }}
          >
            <div
              style={{
                transition: "ease-in-out 300ms",
                transform: `rotate(${rotate ? "-15deg" : "0"})`,
                color: rotate ? "orange" : "inherit",
                position: "relative",
                right: "4px",
              }}
            >
              e
            </div>
            Store
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <ReactCountryFlag
            className="emojiFlag"
            countryCode="GE"
            onClick={() => setLanguage("ka")}
            style={{ opacity: language === "ka" ? 1 : 0.5, cursor: "pointer" }}
          />
          <ReactCountryFlag
            className="emojiFlag"
            countryCode="US"
            onClick={() => setLanguage("en")}
            style={{ opacity: language === "en" ? 1 : 0.5, cursor: "pointer" }}
          />
          <ReactCountryFlag
            className="emojiFlag"
            countryCode="RU"
            onClick={() => setLanguage("ru")}
            style={{ opacity: language === "ru" ? 1 : 0.5, cursor: "pointer" }}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > div {
      display: flex;
      align-items: center;
      gap: 8px;
      overflow: hidden;
      border-radius: 10px;
      z-index: 1;

      img {
        cursor: zoom-in;
        transition: ease-in-out 300ms;
        &:hover {
          transform: scale(1.02);
          filter: brightness(0.8);
        }
      }

      & > h1 {
        font-size: 24px;
      }
      & > h2 {
        font-size: 16px;
        color: #9696a0;
        letter-spacing: 0.5px;
      }
    }
  }
`;
