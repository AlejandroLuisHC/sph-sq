import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import sphLogo from "../assets/sph_logo.png";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-gray-900 border-b-2 border-yellow-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center h-14 sm:h-16">
          {/* Left - Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src={sphLogo}
                alt="SPH Logo"
                className="h-8 w-auto sm:h-10 hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="flex-1 flex justify-center">
            <nav
              className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6"
              role="navigation"
              aria-label="Main navigation"
            >
              <Link
                to="/"
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? "text-yellow-400 bg-gray-800"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/rules"
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/rules")
                    ? "text-yellow-400 bg-gray-800"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {t("nav.rules")}
              </Link>
              <a
                href="https://sph-bans-table-ventepen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-yellow-400"
              >
                {t("nav.sanctions")}
              </a>
              <Link
                to="/support"
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/support")
                    ? "text-yellow-400 bg-gray-800"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {t("nav.support")}
              </Link>
            </nav>
          </div>

          {/* Right - Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Language Selector (hidden on very small screens) */}
            <div
              className="hidden xs:flex items-center gap-1 sm:gap-2"
              role="group"
              aria-label="Language selection"
            >
              <span className="text-gray-300 text-xs sm:text-sm font-medium hidden sm:block">
                {t("language")}:
              </span>
              <button
                className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs font-semibold transition-all duration-300 border-2 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-40 focus:ring-offset-1 focus:ring-offset-gray-900 ${
                  i18n.language === "es"
                    ? "bg-yellow-400 text-gray-900 border-yellow-400"
                    : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                }`}
                onClick={() => changeLanguage("es")}
                aria-pressed={i18n.language === "es"}
                aria-label="Switch to Spanish"
              >
                ES
              </button>
              <button
                className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs font-semibold transition-all duration-300 border-2 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-40 focus:ring-offset-1 focus:ring-offset-gray-900 ${
                  i18n.language === "en"
                    ? "bg-yellow-400 text-gray-900 border-yellow-400"
                    : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                }`}
                onClick={() => changeLanguage("en")}
                aria-pressed={i18n.language === "en"}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-40 focus:ring-offset-1 focus:ring-offset-gray-900"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-gray-700 bg-gray-900"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {/* Language Selector for Mobile */}
            <div
              className="px-3 py-2 border-b border-gray-700"
              role="group"
              aria-label="Language selection"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm font-medium">
                  {t("language")}:
                </span>
                <div className="flex gap-2">
                  <button
                    className={`px-3 py-1.5 rounded text-sm font-semibold transition-all duration-300 border-2 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-40 focus:ring-offset-1 focus:ring-offset-gray-900 ${
                      i18n.language === "es"
                        ? "bg-yellow-400 text-gray-900 border-yellow-400"
                        : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                    }`}
                    onClick={() => changeLanguage("es")}
                    aria-pressed={i18n.language === "es"}
                    aria-label="Switch to Spanish"
                  >
                    ES
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded text-sm font-semibold transition-all duration-300 border-2 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-40 focus:ring-offset-1 focus:ring-offset-gray-900 ${
                      i18n.language === "en"
                        ? "bg-yellow-400 text-gray-900 border-yellow-400"
                        : "bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                    }`}
                    onClick={() => changeLanguage("en")}
                    aria-pressed={i18n.language === "en"}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? "text-yellow-400 bg-gray-800"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/rules"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/rules")
                    ? "text-yellow-400 bg-gray-800"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.rules")}
              </Link>
              <a
                href="https://sph-bans-table-ventepen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.sanctions")}
              </a>
              <Link
                to="/support"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/support")
                    ? "text-yellow-400 bg-gray-800"
                    : "text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.support")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
