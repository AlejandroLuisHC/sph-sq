import React from "react";
import { useTranslation } from "react-i18next";

const Sanctions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-8">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 uppercase tracking-wide px-4">
            {t("nav.sanctions")}
          </h1>
        </header>

        <section className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-yellow-400">
          <div className="text-center">
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">
                {t("sanctions.comingSoon.title")}
              </h2>
            </div>

            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 px-4">
              {t("sanctions.comingSoon.description")}
            </p>

            <div className="bg-gray-700 rounded-lg p-4 sm:p-6 border border-gray-600">
              <h3 className="text-yellow-400 font-bold text-base sm:text-lg mb-3">
                {t("sanctions.features.title")}
              </h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2" aria-hidden="true">
                    •
                  </span>
                  <span className="text-sm sm:text-base">
                    {t("sanctions.features.sanctions")}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2" aria-hidden="true">
                    •
                  </span>
                  <span className="text-sm sm:text-base">
                    {t("sanctions.features.appeals")}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2" aria-hidden="true">
                    •
                  </span>
                  <span className="text-sm sm:text-base">
                    {t("sanctions.features.reports")}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2" aria-hidden="true">
                    •
                  </span>
                  <span className="text-sm sm:text-base">
                    {t("sanctions.features.history")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sanctions;
