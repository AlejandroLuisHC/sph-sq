import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RuleSection from "../RuleSection";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "sections.general.title": "General Rules / Normas Generales",
        "sections.squad.title": "Squad Rules / Reglas para Escuadrones",
      };
      return translations[key] || key;
    },
  }),
}));

describe("RuleSection", () => {
  it("renders section title", () => {
    render(
      <RuleSection sectionKey="general">
        <div>Test content</div>
      </RuleSection>
    );

    expect(
      screen.getByText("General Rules / Normas Generales")
    ).toBeInTheDocument();
  });

  it("renders children when expanded", () => {
    render(
      <RuleSection sectionKey="general" isExpanded={true}>
        <div>Test content</div>
      </RuleSection>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("does not render children when collapsed", () => {
    render(
      <RuleSection sectionKey="general" isExpanded={false}>
        <div>Test content</div>
      </RuleSection>
    );

    expect(screen.queryByText("Test content")).not.toBeInTheDocument();
  });

  it("toggles expansion when clicked", () => {
    render(
      <RuleSection sectionKey="general">
        <div>Test content</div>
      </RuleSection>
    );

    const sectionHeader = screen.getByText("General Rules / Normas Generales");

    // Initially collapsed
    expect(screen.queryByText("Test content")).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(sectionHeader);
    expect(screen.getByText("Test content")).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(sectionHeader);
    expect(screen.queryByText("Test content")).not.toBeInTheDocument();
  });

  it("shows correct arrow direction when expanded", () => {
    render(
      <RuleSection sectionKey="general" isExpanded={true}>
        <div>Test content</div>
      </RuleSection>
    );

    const arrow = screen.getByText("▼");
    expect(arrow).toHaveClass("rotate-180");
  });

  it("shows correct arrow direction when collapsed", () => {
    render(
      <RuleSection sectionKey="general" isExpanded={false}>
        <div>Test content</div>
      </RuleSection>
    );

    const arrow = screen.getByText("▼");
    expect(arrow).not.toHaveClass("rotate-180");
  });
});
