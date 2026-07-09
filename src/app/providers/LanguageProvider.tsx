"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import en from "../../app/messages/en.json";
import ar from "../../app/messages/ar.json";


type Language = "en" | "ar";


interface LanguageContextType {

  language: Language;

  setLanguage: (language: Language) => void;

  messages: typeof en;

}


const LanguageContext =
  createContext<LanguageContextType | null>(null);



export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [language, setLanguage] =
    useState<Language>("en");



  const messages =
    language === "en"
      ? en
      : ar;



  const changeLanguage = (
    lang: Language
  ) => {

    setLanguage(lang);


    document.documentElement.lang = lang;


    document.documentElement.dir =
      lang === "ar"
        ? "rtl"
        : "ltr";

  };



  return (

    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        messages,
      }}
    >

      {children}

    </LanguageContext.Provider>

  );

}



export function useLanguage() {

  const context =
    useContext(LanguageContext);


  if (!context) {

    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );

  }


  return context;

}