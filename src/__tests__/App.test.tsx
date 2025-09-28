import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: "es",
      changeLanguage: vi.fn(),
    },
  }),
}));

// Mock the logo imports
vi.mock("../assets/sph_logo.png", () => ({
  default: "mocked-sph-logo.png",
}));

vi.mock("../assets/sph_spade_logo.png", () => ({
  default: "mocked-spade-logo.png",
}));

// Mock all page components
vi.mock("../pages/Home", () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock("../pages/Rules", () => ({
  default: () => <div data-testid="rules-page">Rules Page</div>,
}));

vi.mock("../pages/Sanctions", () => ({
  default: () => <div data-testid="sanctions-page">Sanctions Page</div>,
}));

vi.mock("../pages/Support", () => ({
  default: () => <div data-testid="support-page">Support Page</div>,
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("renders the header", () => {
    render(<App />);
    expect(screen.getByAltText("SPH Logo")).toBeInTheDocument();
  });

  it("renders the background logo", () => {
    render(<App />);
    const backgroundLogo = screen.getByAltText("SPH Spade Logo Background");
    expect(backgroundLogo).toBeInTheDocument();
    expect(backgroundLogo).toHaveAttribute("src", "mocked-spade-logo.png");
  });

  it("renders with proper structure", () => {
    render(<App />);
    // Check that the main container exists
    const mainContainer = screen
      .getByTestId("home-page")
      .closest("div")
      ?.closest("div");
    expect(mainContainer).toBeInTheDocument();
  });

  it("renders router structure", () => {
    render(<App />);
    // The router should be present and working
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
