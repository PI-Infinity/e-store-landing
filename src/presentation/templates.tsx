import landingDesktopDark from "../assets/landing-desktop-dark.png";
import landingDesktopLight from "../assets/landing-desktop-light.png";
import landingMobileDark from "../assets/landing-mobile-dark.jpg";
import landingMobileLight from "../assets/landing-mobile-light.jpg";
import chatUserDark from "../assets/chat-dark-user.png";
import chatUserLight from "../assets/chat-light-user.png";
import chatAdminDark from "../assets/chat-dark-admin.png";
import chatAdminLight from "../assets/chat-light-admin.png";

export const templates = [
  {
    title: "Sport Dark",
    desktopCover: landingDesktopDark,
    mobileCover: landingMobileDark,
    dashboard:
      "https://e-store-d2232.web.app/admin/orders?theme=sport-dark?overview=true",
    link: "https://e-store-d2232.web.app/?theme=sport-dark",
    chatUser: chatUserDark,
    chatAdmin: chatAdminDark,
  },
  {
    title: "Sport Light",
    desktopCover: landingDesktopLight,
    mobileCover: landingMobileLight,
    dashboard:
      "https://e-store-d2232.web.app/admin/orders?theme=sport-light?overview=true",
    link: "https://e-store-d2232.web.app/?theme=sport-light",
    chatUser: chatUserLight,
    chatAdmin: chatAdminLight,
  },
];
