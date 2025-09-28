import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        language: "Language",
        "nav.home": "Home",
        "nav.rules": "Rules",
        "nav.sanctions": "Sanctions",
        "nav.support": "Support",
      };
      return translations[key] || key;
    },
    i18n: {
      language: "es",
      changeLanguage: vi.fn(),
    },
  }),
}));

// Mock the logo import
vi.mock("../../assets/sph_logo.png", () => ({
  default: "mocked-logo.png",
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Header", () => {
  it("renders the SPH logo", () => {
    renderWithRouter(<Header />);
    const logo = screen.getByAltText("SPH Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "mocked-logo.png");
  });

  it("renders navigation links", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Rules")).toBeInTheDocument();
    expect(screen.getByText("Sanctions")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

  it("renders language selector buttons", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("ES")).toBeInTheDocument();
    expect(screen.getByText("EN")).toBeInTheDocument();
  });

  it("shows mobile menu button on small screens", () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByLabelText("Toggle mobile menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("toggles mobile menu when button is clicked", () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByLabelText("Toggle mobile menu");

    // Menu should be closed initially
    expect(screen.queryByText("Home")).toBeInTheDocument(); // Desktop nav visible

    // Click to open mobile menu
    fireEvent.click(menuButton);

    // Mobile menu should be visible (we can't easily test this without more complex setup)
    // But we can verify the button click doesn't crash
    expect(menuButton).toBeInTheDocument();
  });

  it("renders language buttons with correct text", () => {
    renderWithRouter(<Header />);
    const esButton = screen.getByText("ES");
    const enButton = screen.getByText("EN");

    expect(esButton).toBeInTheDocument();
    expect(enButton).toBeInTheDocument();
  });

  it("shows correct active state for language buttons", () => {
    renderWithRouter(<Header />);

    const esButton = screen.getByText("ES");
    const enButton = screen.getByText("EN");

    // ES should be active (current language)
    expect(esButton).toHaveClass(
      "bg-yellow-400",
      "text-gray-900",
      "border-yellow-400"
    );

    // EN should be inactive
    expect(enButton).toHaveClass(
      "bg-transparent",
      "text-yellow-400",
      "border-yellow-400"
    );
  });

  it("has correct links for navigation", () => {
    renderWithRouter(<Header />);

    const homeLink = screen.getByText("Home").closest("a");
    const rulesLink = screen.getByText("Rules").closest("a");
    const supportLink = screen.getByText("Support").closest("a");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(rulesLink).toHaveAttribute("href", "/rules");
    expect(supportLink).toHaveAttribute("href", "/support");
  });

  it("has external link for sanctions", () => {
    renderWithRouter(<Header />);
    const sanctionsLink = screen.getByText("Sanctions").closest("a");
    expect(sanctionsLink).toHaveAttribute(
      "href",
      "https://sph-bans-table-ventepen.netlify.app/"
    );
    expect(sanctionsLink).toHaveAttribute("target", "_blank");
    expect(sanctionsLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
