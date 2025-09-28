import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        title: "SPH Squad Server Rules",
        "home.description":
          "Welcome to the SPH Squad server. Here you will find all the rules and guidelines.",
        "home.features.rules.title": "Complete Rules",
        "home.features.rules.description":
          "All server rules organized by categories.",
        "home.features.community.title": "Active Community",
        "home.features.community.description":
          "A server with a respectful community.",
        "home.features.support.title": "24/7 Support",
        "home.features.support.description":
          "Reporting system and support available.",
      };
      return translations[key] || key;
    },
  }),
}));

describe("Home", () => {
  it("renders the main title", () => {
    render(<Home />);
    expect(screen.getByText("SPH Squad Server Rules")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Home />);
    expect(
      screen.getByText(
        "Welcome to the SPH Squad server. Here you will find all the rules and guidelines."
      )
    ).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    render(<Home />);

    expect(screen.getByText("Complete Rules")).toBeInTheDocument();
    expect(screen.getByText("Active Community")).toBeInTheDocument();
    expect(screen.getByText("24/7 Support")).toBeInTheDocument();
  });

  it("renders feature descriptions", () => {
    render(<Home />);

    expect(
      screen.getByText("All server rules organized by categories.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("A server with a respectful community.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Reporting system and support available.")
    ).toBeInTheDocument();
  });

  it("applies correct styling to title", () => {
    render(<Home />);
    const title = screen.getByText("SPH Squad Server Rules");
    expect(title).toHaveClass(
      "text-2xl",
      "sm:text-3xl",
      "md:text-4xl",
      "lg:text-5xl",
      "xl:text-6xl",
      "font-bold",
      "text-yellow-400"
    );
  });

  it("applies correct styling to feature cards", () => {
    render(<Home />);
    const featureCards = screen.getAllByText(
      /Complete Rules|Active Community|24\/7 Support/
    );

    featureCards.forEach((card) => {
      const cardContainer = card.closest("div");
      expect(cardContainer).toHaveClass(
        "bg-gray-800",
        "rounded-lg",
        "border",
        "border-yellow-400"
      );
    });
  });
});
