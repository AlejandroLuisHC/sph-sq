import React from "react";
import { useTranslation } from "react-i18next";
import discordIcon from "../assets/discord_icon.png";
import twitchIcon from "../assets/twitch_icon.png";
import patreonIcon from "../assets/patreon_icon.png";
import youtubeIcon from "../assets/yt_icon.png";

const Support: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.gg/td6N9M3Z",
      icon: discordIcon,
      isImage: true,
      description: t("support.discord.description"),
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/sph_milsim",
      icon: twitchIcon,
      isImage: true,
      description: t("support.twitch.description"),
    },
    {
      name: "Patreon",
      url: "https://www.patreon.com/home",
      icon: patreonIcon,
      isImage: true,
      description: t("support.patreon.description"),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@sphmilsimspain5600",
      icon: youtubeIcon,
      isImage: true,
      description: t("support.youtube.description"),
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-8">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 uppercase tracking-wide px-4">
            {t("nav.support")}
          </h1>
        </header>

        <section className="text-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {t("support.description")}
          </p>
        </section>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          aria-labelledby="social-links-heading"
        >
          <h2 id="social-links-heading" className="sr-only">
            {t("support.socialLinks")}
          </h2>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-lg p-4 sm:p-6 border border-yellow-400 hover:border-yellow-300 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:ring-opacity-40 focus:ring-offset-1 focus:ring-offset-gray-800"
              aria-label={`Visit our ${link.name} page`}
            >
              <div className="text-center">
                <div className="mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {link.isImage ? (
                    <img
                      src={link.icon}
                      alt={`${link.name} icon`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  ) : (
                    <span className="text-3xl sm:text-4xl">{link.icon}</span>
                  )}
                </div>
                <h3 className="text-yellow-400 text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {link.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </section>

        <section className="mt-12 sm:mt-16 bg-gray-800 rounded-lg p-6 sm:p-8 border border-yellow-400">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">
              {t("support.thankYou.title")}
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl px-4">
              {t("support.thankYou.description")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
