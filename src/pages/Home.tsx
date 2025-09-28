import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-8">
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-400 uppercase tracking-wider drop-shadow-lg mb-4 sm:mb-6">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {t("home.description")}
          </p>
        </header>

        {/* Quick Stats or Features */}
        <section className="mt-8 sm:mt-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            {t("home.features.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <article className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-yellow-400">
              <h3 className="text-yellow-400 text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {t("home.features.rules.title")}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t("home.features.rules.description")}
              </p>
            </article>

            <article className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-yellow-400">
              <h3 className="text-yellow-400 text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {t("home.features.community.title")}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t("home.features.community.description")}
              </p>
            </article>

            <article className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-yellow-400 sm:col-span-2 lg:col-span-1">
              <h3 className="text-yellow-400 text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {t("home.features.support.title")}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {t("home.features.support.description")}
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
