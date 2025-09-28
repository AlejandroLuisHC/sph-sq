import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface RuleSectionProps {
  sectionKey: string;
  isExpanded?: boolean;
  children?: React.ReactNode;
}

const RuleSection: React.FC<RuleSectionProps> = ({
  sectionKey,
  isExpanded = false,
  children,
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(isExpanded);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-6 sm:mb-8">
      <div
        className="flex items-center justify-between cursor-pointer py-3 sm:py-4 transition-all duration-300 hover:opacity-80"
        onClick={toggleExpanded}
      >
        <div className="flex items-center flex-1 gap-2 sm:gap-4">
          <div className="h-0.5 bg-yellow-400 flex-1 hidden sm:block"></div>
          <h2 className="text-gray-300 text-base sm:text-lg font-bold whitespace-nowrap uppercase tracking-wide px-2 sm:px-0">
            {t(`sections.${sectionKey}.title`)}
          </h2>
          <div className="h-0.5 bg-yellow-400 flex-1 hidden sm:block"></div>
        </div>
        <div
          className={`text-yellow-400 text-sm sm:text-base font-bold transition-transform duration-300 ml-2 sm:ml-5 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          ▼
        </div>
      </div>

      {expanded && (
        <div className="py-3 sm:py-5 animate-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default RuleSection;
