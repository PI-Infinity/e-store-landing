import { MdDone } from "react-icons/md";
import styled from "styled-components";
import { useAppContext } from "../context";
import { templates } from "./templates";

export default function FifthPage({ activeTemplate }: any) {
  const { activeLanguage, isMobile } = useAppContext();
  return (
    <Container>
      <div>
        <div
          style={{
            marginTop: "8px",
          }}
        >
          <h1>{activeLanguage.built}</h1>

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
              <h2>{activeLanguage.tested}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.autoEmails}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.inApp}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.sendingEmails}</h2>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          borderRadius: "10px",
          gap: "24px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            width: "100%",
            boxShadow: isMobile
              ? "3px 3px 6px rgba(0,0,0,0.7)"
              : "5px 5px 10px rgba(0,0,0,0.7)",
          }}
        >
          <img
            className="img"
            src={templates[activeTemplate]?.chatAdmin}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            boxShadow: isMobile
              ? "3px 3px 6px rgba(0,0,0,0.7)"
              : "5px 5px 10px rgba(0,0,0,0.7)",
          }}
        >
          <img
            className="img"
            src={templates[activeTemplate]?.chatUser}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
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
  justify-content: space-between;
  gap: 16px;
  color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 8px;
  }

  .img {
    transition: ease-in-out 300ms;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      border-radius: 10px;
      z-index: 1;

      & > h1 {
        font-size: 24px;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
      & > div {
        & > div > h2 {
          font-size: 16px;

          @media (max-width: 768px) {
            font-size: 14px;
          }
          color: #9696a0;
        }
      }
    }
  }
`;
