"use client";

// import { RiEnglishInput } from "react-icons/ri";
import { TbAlphabetKorean } from "react-icons/tb";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

const LanguageBtn = () => {
  const toggleModal = () => {
    window.alert(
      "현재 다국어 지원 기능이 준비 중입니다. \n곧 업데이트될 예정이니, 기다려 주세요!"
    );
  };
  //   const [locale, setLocale] = useState<"en" | "ko">("en");
  //   const router = useRouter();

  //   useEffect(() => {
  //     // 초기 로딩 시 현재 언어 감지 (기본값: 'en')
  //     const savedLocale = localStorage.getItem("locale") as "en" | "ko";
  //     if (savedLocale) {
  //       setLocale(savedLocale);
  //     }
  //   }, []);

  //   const toggleLanguage = () => {
  //     const newLocale = locale === "en" ? "ko" : "en";
  //     setLocale(newLocale);
  //     localStorage.setItem("locale", newLocale);
  //     router.push(router.pathname, router.asPath, { locale: newLocale });
  //   };

  return (
    <button
      onClick={toggleModal}
      className="cursor-pointer transition-all duration-300"
    >
      <TbAlphabetKorean size={25} />
    </button>
  );
};

export default LanguageBtn;
