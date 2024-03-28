import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { en, ru, ka } from "./languages";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextWrapper({ children }) {
  // define device type
  const [isMobile, setIsMobile] = useState("undefined");

  useEffect(() => {
    const handleResize = () => {
      // Assuming a width less than 768px is a mobile device
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the function to set the initial state
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // app loading
  const [appLoad, setAppLoad] = useState(true);
  // backend url
  const backendUrl = "https://estoretemplate-7a004e17b17a.herokuapp.com";
  // const backendUrl = "http://192.168.1.6:8000";
  // open animation designed search in navbar
  // alert message
  const [alert, setAlert] = useState({ active: false, type: "", text: "" });
  // backdrop loader
  const [openBackDrop, setOpenBackDrop] = useState({ active: false, text: "" });
  // page loading
  const [pageLoading, setPageLoading] = useState(false);
  const [loadActive, setLoadActive] = useState(false);

  // confirm popup
  const [confirm, setConfirm] = useState({
    active: false,
    close: null,
    agree: null,
    text: "",
  });
  // store info

  const [storeInfo, setStoreInfo] = useState({});
  const [rerender, setRerender] = useState(false);

  const setRerenderStoreInfo = () => {
    setRerender((prev) => !prev);
  };

  // get store info
  useEffect(() => {
    const GetStore = async () => {
      try {
        const response = await axios.get(
          backendUrl + "/api/v1/project?theme=sport-dark"
        );
        setStoreInfo(response.data.data.project);
      } catch (error) {
        console.log(error);
      }
    };
    GetStore();
  }, [rerender]);

  /**
   * languages
   */
  const [language, setLanguage] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState("en");

  useEffect(() => {
    if (storeInfo) {
      let appLang = localStorage.getItem("eStore:language");
      if (appLang) {
        setLanguage(appLang);
      } else {
        setLanguage(storeInfo.language);
      }
    }
  }, [storeInfo]);

  console.log(language);

  useEffect(() => {
    if (language) {
      if (language === "en") {
        setActiveLanguage(en);
      } else if (language === "ru") {
        setActiveLanguage(ru);
      } else {
        setActiveLanguage(ka);
      }
      localStorage.setItem("eStore:language", language);
    }
  }, [language]);

  // mobile menu open
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        appLoad,
        setAppLoad,
        backendUrl,
        alert,
        setAlert,
        openBackDrop,
        setOpenBackDrop,
        pageLoading,
        setPageLoading,
        loadActive,
        confirm,
        setConfirm,
        storeInfo,
        setStoreInfo,
        setRerenderStoreInfo,
        language,
        setLanguage,
        activeLanguage,
        setOpenMenu,
        openMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
