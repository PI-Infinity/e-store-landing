import { useEffect, useState } from "react";
import { MdDone, MdZoomIn, MdZoomInMap } from "react-icons/md";
import styled from "styled-components";
import { templates } from "./templates";
import { useAppContext } from "../context";

export default function FourthPage({ activeTemplate }: any) {
  const { activeLanguage, isMobile } = useAppContext();

  return (
    <Container>
      <div>
        <div
          style={{
            marginTop: "8px",
          }}
        >
          <h1>{activeLanguage.allInOne}</h1>

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
              <h2>{activeLanguage.manage}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.control}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.detailed}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.addMember}</h2>
            </div>
          </div>
        </div>
      </div>

      <a
        style={{
          width: isMobile ? "100%" : "auto",
          color: "inherit",
          textDecoration: "none",
        }}
        className="hover"
        href={templates[activeTemplate].dashboard}
        target="_blank"
      >
        <div
          style={{
            borderRadius: "10px",
            cursor: "pointer",
            background: "rgba(255,255,255,0.03)",
            padding: "8px 48px",
            height: isMobile ? "60px" : "90px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontWeight: "500",
          }}
        >
          <div>
            <MdZoomInMap color="orange" size={24} />
          </div>
          <span>{activeLanguage.dashboardOverview}</span>
        </div>
      </a>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 8px;
    flex-direction: column;
  }

  .hover {
    transition: ease-in 200ms;
    &:hover {
      filter: brightness(0.8);
    }
  }

  .img {
    cursor: zoom-in;
    transition: ease-in-out 300ms;
    &:hover {
      transform: scale(1.02);
      filter: brightness(0.8);
    }
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
