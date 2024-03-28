import ReactCountryFlag from "react-country-flag";
import { MdDone } from "react-icons/md";
import styled from "styled-components";
import { useAppContext } from "../context";

export default function ThirdPage() {
  const { activeLanguage, isMobile } = useAppContext();
  return (
    <Container>
      <div
        style={{
          marginTop: "8px",
        }}
      >
        <h1>{activeLanguage.launch}</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginTop: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div>
              <MdDone color="green" size={24} />
            </div>
            <h2>{activeLanguage.noNeed}</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div>
              <MdDone color="green" size={24} />
            </div>
            <h2>{activeLanguage.fullyOperational}</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div>
              <MdDone color="green" size={24} />
            </div>
            <h2>{activeLanguage.designed}</h2>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "8px",
        }}
      >
        <h1>{activeLanguage.global}</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginTop: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div>
              <MdDone color="green" size={24} />
            </div>
            <h2>
              {activeLanguage.languageSupported} {activeLanguage.georgian}
              <ReactCountryFlag className="emojiFlag" countryCode="GE" />,{" "}
              {activeLanguage.english}
              <ReactCountryFlag className="emojiFlag" countryCode="US" />,{" "}
              {activeLanguage.russian}
              <ReactCountryFlag className="emojiFlag" countryCode="RU" />.
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div>
              <MdDone color="green" size={24} />
            </div>
            <h2>{activeLanguage.expand}</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 8px;
  }

  h1 {
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  h2 {
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    color: #9696a0;
  }
`;
