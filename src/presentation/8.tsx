import { MdDone } from "react-icons/md";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri";
import styled from "styled-components";
import { useAppContext } from "../context";
import { Form } from "./form";

export default function Eight() {
  const { activeLanguage, isMobile } = useAppContext();
  return (
    <Container>
      <div style={{ width: isMobile ? "100%" : "50%" }}>
        <div
          style={{
            marginTop: "8px",
          }}
        >
          <h1>{activeLanguage.ready}</h1>

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
              <h2>{activeLanguage.transform}</h2>
            </div>
          </div>
        </div>
        <Form />
      </div>
      <div
        style={{
          marginTop: isMobile ? "24px" : "inherit",
          width: isMobile ? "100%" : "50%",
          display: "flex",
          alignItems: "flex-end",
          fontSize: isMobile ? "14px" : "inherit",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "60%",
            fontWeight: 500,
            color: "#9696a0",
            display: "flex",
            gap: "16px",
          }}
        >
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              width: "100%",
            }}
          >
            <span style={{ color: "#ccc" }}>{activeLanguage.phone}:</span> +995
            599 48 46 04
          </p>
          <p
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "8px",
              flexWrap: "nowrap",
            }}
          >
            <span style={{ color: "#ccc", whiteSpace: "nowrap" }}>
              {activeLanguage.email}:
            </span>{" "}
            ecommerceshoptemplate@gmail.com
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
              marginTop: isMobile ? "16px" : "inherit",
            }}
          >
            <RiFacebookBoxFill
              size={24}
              color="orange"
              style={{ cursor: "pointer" }}
              className="hover"
            />
            <RiInstagramFill
              size={24}
              color="orange"
              style={{ cursor: "pointer" }}
              className="hover"
            />
            <RiLinkedinBoxFill
              size={24}
              color="orange"
              style={{ cursor: "pointer" }}
              className="hover"
            />
            <RiTiktokFill
              size={24}
              color="orange"
              style={{ cursor: "pointer" }}
              className="hover"
            />
            <RiYoutubeFill
              size={24}
              color="orange"
              style={{ cursor: "pointer" }}
              className="hover"
            />
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 16px;
    flex-direction: column;
    align-items: start;
  }

  .hover {
    transition: ease-in 200ms;
    &:hover {
      filter: brightness(0.8);
    }
  }

  .img {
    transition: ease-in-out 300ms;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
      width: 100%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      border-radius: 10px;
      z-index: 1;

      @media (max-width: 768px) {
        width: 100%;
      }

      & > h1 {
        font-size: 24px;
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
      & > div {
        & > div > h2 {
          font-size: 16px;
          color: #9696a0;
        }
      }
    }
  }
`;
