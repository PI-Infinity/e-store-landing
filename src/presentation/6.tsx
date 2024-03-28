import { MdDone } from "react-icons/md";
import styled from "styled-components";

import Bog from "../assets/bog.png";
import Mern from "../assets/mern.png";
import PayPal from "../assets/paypal.png";
import Payze from "../assets/payze.png";
import Stripe from "../assets/stripe.png";
import Tbc from "../assets/tbc.png";
import { useAppContext } from "../context";

export default function SixthPage() {
  const { activeLanguage, isMobile } = useAppContext();
  return (
    <Container>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginTop: "8px",
          }}
        >
          <h1 style={{ whiteSpace: "nowrap" }}>
            {activeLanguage.advancedTechnology}
          </h1>

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
              <h2>{activeLanguage.builtMERN}</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2>{activeLanguage.highQualityAndScalable}</h2>
            </div>
          </div>
        </div>
        <div>
          <img
            className="img"
            src={Mern}
            style={{
              width: "450px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            marginTop: "8px",
          }}
        >
          <h1 style={{ whiteSpace: "nowrap" }}>
            {activeLanguage.paymentSystem}
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginTop: "16px",
              fontSize: isMobile ? "14px" : "inherit",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2 style={{ fontSize: isMobile ? "14px" : "inherit" }}>
                {activeLanguage.integratedPayments}
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div>
                <MdDone color="green" size={24} />
              </div>
              <h2 style={{ fontSize: isMobile ? "14px" : "inherit" }}>
                {activeLanguage.anyPayment}
              </h2>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "16px" : "24px",
            padding: isMobile ? "16px" : "inherit",
          }}
        >
          <img
            className="img"
            src={Bog}
            style={{
              height: "50px",
              objectFit: "cover",
            }}
          />
          <img
            className="img"
            src={Tbc}
            style={{
              height: "40px",
              objectFit: "cover",
            }}
          />
          <img
            className="img"
            src={Payze}
            style={{
              height: "20px",
              objectFit: "cover",
            }}
          />
          <img
            className="img"
            src={Stripe}
            style={{
              height: "50px",
              objectFit: "cover",
            }}
          />
          <img
            className="img"
            src={PayPal}
            style={{
              height: "60px",
              objectFit: "cover",
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
