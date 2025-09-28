import React from "react";
import { useTranslation } from "react-i18next";

interface RuleListProps {
  sectionKey: string;
}

const RuleList: React.FC<RuleListProps> = ({ sectionKey }) => {
  const { t } = useTranslation();

  const rules = t(`sections.${sectionKey}.rules`, {
    returnObjects: true,
  }) as string[];

  return (
    <div className="rule-container flex flex-col gap-2 sm:gap-3">
      {rules.map((rule, index) => (
        <div
          key={index}
          className="flex items-start gap-2 sm:gap-3 py-1.5 sm:py-2"
        >
          <div className="text-yellow-400 text-sm sm:text-base font-bold mt-0.5 flex-shrink-0">
            ✓
          </div>
          <div className="rule-text text-gray-300 text-sm sm:text-base leading-relaxed flex-1 break-words overflow-wrap-anywhere">
            {rule}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RuleList;
