import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Sanctions from "../Sanctions";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "nav.sanctions": "Sanctions",
        "sanctions.comingSoon.title": "Coming Soon",
        "sanctions.comingSoon.description":
          "We are working on a complete table of sanctions that will be available soon.",
        "sanctions.features.title": "Features it will include:",
        "sanctions.features.sanctions": "Sanctions table by type of violation",
        "sanctions.features.appeals": "Appeals system",
        "sanctions.features.reports": "Reports history",
        "sanctions.features.history": "Administrative sanctions record",
      };
      return translations[key] || key;
    },
  }),
}));

describe("Sanctions", () => {
  it("renders the sanctions title", () => {
    render(<Sanctions />);
    expect(screen.getByText("Sanctions")).toBeInTheDocument();
  });

  it("renders the coming soon title", () => {
    render(<Sanctions />);
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("renders the coming soon description", () => {
    render(<Sanctions />);
    expect(
      screen.getByText(
        "We are working on a complete table of sanctions that will be available soon."
      )
    ).toBeInTheDocument();
  });

  it("renders the features title", () => {
    render(<Sanctions />);
    expect(screen.getByText("Features it will include:")).toBeInTheDocument();
  });

  it("renders all feature items", () => {
    render(<Sanctions />);

    expect(
      screen.getByText("Sanctions table by type of violation")
    ).toBeInTheDocument();
    expect(screen.getByText("Appeals system")).toBeInTheDocument();
    expect(screen.getByText("Reports history")).toBeInTheDocument();
    expect(
      screen.getByText("Administrative sanctions record")
    ).toBeInTheDocument();
  });

  it("renders the document icon container", () => {
    render(<Sanctions />);
    const iconContainer = screen
      .getByText("Coming Soon")
      .closest("div")
      ?.querySelector("div");
    expect(iconContainer).toHaveClass(
      "inline-flex",
      "items-center",
      "justify-center"
    );
  });

  it("applies correct styling to title", () => {
    render(<Sanctions />);
    const title = screen.getByText("Sanctions");
    expect(title).toHaveClass(
      "text-2xl",
      "sm:text-3xl",
      "md:text-4xl",
      "font-bold",
      "text-yellow-400",
      "text-center",
      "uppercase",
      "tracking-wide"
    );
  });

  it("applies correct styling to coming soon title", () => {
    render(<Sanctions />);
    const comingSoonTitle = screen.getByText("Coming Soon");
    expect(comingSoonTitle).toHaveClass(
      "text-xl",
      "sm:text-2xl",
      "font-bold",
      "text-yellow-400"
    );
  });

  it("applies correct styling to main container", () => {
    render(<Sanctions />);
    const mainContainer = screen.getByText("Coming Soon").closest("div");
    expect(mainContainer).toBeInTheDocument();
  });

  it("renders feature list with proper structure", () => {
    render(<Sanctions />);
    const featuresList = screen
      .getByText("Features it will include:")
      .closest("div");
    expect(featuresList).toHaveClass(
      "bg-gray-700",
      "rounded-lg",
      "border",
      "border-gray-600"
    );
  });

  it("renders all feature list items with bullets", () => {
    render(<Sanctions />);
    const bullets = screen.getAllByText("•");
    expect(bullets).toHaveLength(4);
  });
});
