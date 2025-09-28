import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-16 right-3 sm:top-20 sm:right-5 flex items-center gap-1.5 sm:gap-2.5 z-40">
      <span className="text-gray-300 text-xs sm:text-sm font-medium hidden sm:block">
        {t("language")}:
      </span>
      <button
        className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs font-semibold transition-all duration-300 border-2 ${
          i18n.language === "es"
            ? "bg-yellow-400 text-gray-900 border-yellow-400"
            : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
        }`}
        onClick={() => changeLanguage("es")}
      >
        ES
      </button>
      <button
        className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs font-semibold transition-all duration-300 border-2 ${
          i18n.language === "en"
            ? "bg-yellow-400 text-gray-900 border-yellow-400"
            : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
