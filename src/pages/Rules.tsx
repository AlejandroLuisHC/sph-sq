import React from "react";
import { useTranslation } from "react-i18next";
import RuleSection from "../components/RuleSection";
import RuleList from "../components/RuleList";

const Rules: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-8 sm:mb-12 uppercase tracking-wide px-4">
          {t("nav.rules")}
        </h2>
        <div className="flex flex-col gap-4 sm:gap-5">
          <RuleSection sectionKey="general" isExpanded={true}>
            <RuleList sectionKey="general" />
          </RuleSection>

          <RuleSection sectionKey="squad">
            <RuleList sectionKey="squad" />
          </RuleSection>

          <RuleSection sectionKey="infantry">
            <RuleList sectionKey="infantry" />
          </RuleSection>

          <RuleSection sectionKey="vehicles">
            <RuleList sectionKey="vehicles" />
          </RuleSection>

          <RuleSection sectionKey="fobs">
            <RuleList sectionKey="fobs" />
          </RuleSection>

          <RuleSection sectionKey="mainCamping">
            <RuleList sectionKey="mainCamping" />
          </RuleSection>

          <RuleSection sectionKey="seeding">
            <RuleList sectionKey="seeding" />
          </RuleSection>

          <RuleSection sectionKey="support">
            <RuleList sectionKey="support" />
          </RuleSection>
        </div>
      </div>
    </div>
  );
};

export default Rules;
