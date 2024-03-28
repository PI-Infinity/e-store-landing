import { MdDone } from "react-icons/md";
import styled from "styled-components";
import { useAppContext } from "../context";

export default function SeventhPage() {
  const { activeLanguage, isMobile } = useAppContext();
  return (
    <Container>
      <div>
        <div
          style={{
            marginTop: "8px",
          }}
        >
          <h1>{activeLanguage.whyOurEstore}</h1>

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
              <h2>{activeLanguage.quickSetup}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.supports}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.rebust}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.proven}</h2>
            </div>
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
