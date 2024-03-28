import styled from "styled-components";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { templates } from "./templates";
import { RiExternalLinkFill } from "react-icons/ri";
import { useAppContext } from "../context";

export default function SecondPage({ activeTemplate, setActiveTemplate }: any) {
  const [transition, setTransition] = useState(false);
  const { activeLanguage, isMobile } = useAppContext();
  useEffect(() => {
    setTransition(true);
  }, []);
  return (
    <Container>
      <div
        style={{
          marginTop: "8px",
        }}
      >
        {/* <MdDone color="green" size={24} />{" "} */}
        <h1 style={{ fontSize: isMobile ? "24px" : "32px" }}>
          {activeLanguage.introducing}
        </h1>
      </div>
      <div>
        {/* <MdDone color="green" size={24} />{" "} */}
        <h2>{activeLanguage.highQuality}</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "24px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "300px",
            padding: "4px 8px",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.1)",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <MdArrowDropDown
              style={{
                transform: `rotate(90deg)`,
                cursor: "pointer",
                color: activeTemplate === 0 ? "#555" : "inherit",
              }}
              size={32}
              onClick={
                activeTemplate === 0
                  ? undefined
                  : () => setActiveTemplate((prev: number) => (prev -= 1))
              }
            />
          </div>
          <div>
            <h2 style={{ fontSize: "16px" }}>
              {
                <span style={{ color: "#fff" }}>
                  {templates[activeTemplate]?.title}
                </span>
              }
            </h2>
          </div>
          <div>
            <MdArrowDropDown
              style={{
                transform: `rotate(-90deg)`,
                cursor: "pointer",
                color:
                  activeTemplate === templates?.length - 1 ? "#555" : "inherit",
              }}
              size={32}
              onClick={
                activeTemplate === templates?.length - 1
                  ? undefined
                  : () => setActiveTemplate((prev: number) => (prev += 1))
              }
            />
          </div>
        </div>
        <a
          className="hover"
          href={templates[activeTemplate]?.link}
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontWeight: 600,
            textDecoration: "none",
            color: "orange",
          }}
        >
          <h2 style={{ color: "orange", textDecoration: "underline" }}></h2>
          {activeLanguage.visit} <RiExternalLinkFill />
        </a>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "10px",
          paddingBottom: "16px",
        }}
      >
        {!isMobile && (
          <div
            style={{
              width: isMobile ? "100%" : "1120px",
              height: isMobile ? "100%" : "550px",
              boxShadow: isMobile
                ? "3px 3px 6px rgba(0,0,0,0.7)"
                : "5px 5px 10px rgba(0,0,0,0.7)",
              opacity: transition ? 1 : 0,
              transition: "ease-in-out 1300ms",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <img
              className="img"
              src={templates[activeTemplate].desktopCover}
              width={isMobile ? "100%" : "1120px"}
              height={isMobile ? "100%" : "550px"}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        )}
        <div
          style={{
            boxShadow: isMobile
              ? "3px 3px 6px rgba(0,0,0,0.7)"
              : "5px 5px 10px rgba(0,0,0,0.7)",
            opacity: transition ? 1 : 0,
            transition: "ease-in-out 1300ms",
            cursor: "pointer",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            className="img"
            src={templates[activeTemplate].mobileCover}
            height={isMobile ? "100%" : "550px"}
            width={isMobile ? "100%" : "auto"}
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
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 8px;
  }

  .hover {
    &:hover {
      opacity: 0.8;
    }
  }

  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 16px;
    color: #9696a0;
  }

  .img {
  }

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
    }
  }
`;
