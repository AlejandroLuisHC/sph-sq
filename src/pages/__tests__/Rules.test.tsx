import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Rules from "../Rules";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "nav.rules": "Rules",
        "sections.general.title": "General Rules / Normas Generales",
        "sections.squad.title": "Squad Rules / Reglas para Escuadrones",
        "sections.infantry.title": "Infantry Rules / Reglas para Infantería",
        "sections.vehicles.title": "Vehicles / Vehículos",
        "sections.fobs.title": "FOBs",
        "sections.mainCamping.title": "Main Camping",
        "sections.seeding.title": "Seeding and SPH Members",
        "sections.support.title": "Support",
      };
      return translations[key] || key;
    },
  }),
}));

// Mock the RuleSection and RuleList components
vi.mock("../../components/RuleSection", () => ({
  default: ({ sectionKey, isExpanded, children }: any) => (
    <div data-testid={`rule-section-${sectionKey}`} data-expanded={isExpanded}>
      <h3>{sectionKey} Section</h3>
      {children}
    </div>
  ),
}));

vi.mock("../../components/RuleList", () => ({
  default: ({ sectionKey }: any) => (
    <div data-testid={`rule-list-${sectionKey}`}>Rules for {sectionKey}</div>
  ),
}));

describe("Rules", () => {
  it("renders the rules title", () => {
    render(<Rules />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Rules" })
    ).toBeInTheDocument();
  });

  it("renders all rule sections", () => {
    render(<Rules />);

    const expectedSections = [
      "general",
      "squad",
      "infantry",
      "vehicles",
      "fobs",
      "mainCamping",
      "seeding",
      "support",
    ];

    expectedSections.forEach((section) => {
      expect(screen.getByTestId(`rule-section-${section}`)).toBeInTheDocument();
    });
  });

  it("renders rule lists for each section", () => {
    render(<Rules />);

    const expectedSections = [
      "general",
      "squad",
      "infantry",
      "vehicles",
      "fobs",
      "mainCamping",
      "seeding",
      "support",
    ];

    expectedSections.forEach((section) => {
      expect(screen.getByTestId(`rule-list-${section}`)).toBeInTheDocument();
    });
  });

  it("has general section expanded by default", () => {
    render(<Rules />);
    const generalSection = screen.getByTestId("rule-section-general");
    expect(generalSection).toHaveAttribute("data-expanded", "true");
  });

  it("applies correct styling to title", () => {
    render(<Rules />);
    const title = screen.getByRole("heading", { level: 1, name: "Rules" });
    expect(title).toHaveClass(
      "text-2xl",
      "sm:text-3xl",
      "md:text-4xl",
      "font-bold",
      "text-yellow-400",
      "uppercase",
      "tracking-wide",
      "px-4"
    );
  });

  it("has proper container structure", () => {
    render(<Rules />);
    const title = screen.getByRole("heading", { level: 1, name: "Rules" });
    const container = title.closest("div");
    expect(container).toBeInTheDocument();
  });
});
