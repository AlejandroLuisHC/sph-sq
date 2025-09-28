import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LanguageSelector from "../LanguageSelector";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        language: "Language",
      };
      return translations[key] || key;
    },
    i18n: {
      language: "es",
      changeLanguage: vi.fn(),
    },
  }),
}));

describe("LanguageSelector", () => {
  it("renders the language label", () => {
    render(<LanguageSelector />);
    expect(screen.getByText("Language:")).toBeInTheDocument();
  });

  it("renders ES and EN buttons", () => {
    render(<LanguageSelector />);
    expect(screen.getByText("ES")).toBeInTheDocument();
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("has correct styling for language label", () => {
    render(<LanguageSelector />);
    const label = screen.getByText("Language:");
    expect(label).toHaveClass(
      "text-gray-300",
      "text-xs",
      "sm:text-sm",
      "font-medium",
      "hidden",
      "sm:block"
    );
  });

  it("applies correct styling to buttons", () => {
    render(<LanguageSelector />);
    const esButton = screen.getByText("ES");
    const enButton = screen.getByText("EN");

    expect(esButton).toHaveClass(
      "px-2",
      "py-1",
      "sm:px-3",
      "sm:py-1.5",
      "rounded",
      "text-xs",
      "font-semibold",
      "transition-all",
      "duration-300",
      "border-2"
    );
    expect(enButton).toHaveClass(
      "px-2",
      "py-1",
      "sm:px-3",
      "sm:py-1.5",
      "rounded",
      "text-xs",
      "font-semibold",
      "transition-all",
      "duration-300",
      "border-2"
    );
  });

  it("has correct container styling", () => {
    render(<LanguageSelector />);
    const container = screen.getByText("ES").closest("div");
    expect(container).toHaveClass(
      "fixed",
      "top-16",
      "right-3",
      "sm:top-20",
      "sm:right-5",
      "flex",
      "items-center",
      "gap-1.5",
      "sm:gap-2.5",
      "z-40"
    );
  });

  it("renders language buttons with correct text", () => {
    render(<LanguageSelector />);
    const esButton = screen.getByText("ES");
    const enButton = screen.getByText("EN");

    expect(esButton).toBeInTheDocument();
    expect(enButton).toBeInTheDocument();
  });

  it("shows ES button as active when language is Spanish", () => {
    render(<LanguageSelector />);
    const esButton = screen.getByText("ES");
    expect(esButton).toHaveClass(
      "bg-yellow-400",
      "text-gray-900",
      "border-yellow-400"
    );
  });

  it("shows EN button as inactive when language is Spanish", () => {
    render(<LanguageSelector />);
    const enButton = screen.getByText("EN");
    expect(enButton).toHaveClass(
      "bg-transparent",
      "text-yellow-400",
      "border-yellow-400"
    );
  });
});
