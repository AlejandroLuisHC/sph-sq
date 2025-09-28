import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Support from "../Support";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "nav.support": "Support",
        "support.description":
          "Join our community and support us on our platforms!",
        "support.discord.description":
          "Join our Discord server to chat and organize games.",
        "support.twitch.description": "Follow us on Twitch for live streams.",
        "support.patreon.description":
          "Support the server and get exclusive benefits.",
        "support.youtube.description":
          "Subscribe to our YouTube channel for highlights.",
        "support.thankYou.title": "Thank you for your support!",
        "support.thankYou.description":
          "Your support helps us keep the server running.",
      };
      return translations[key] || key;
    },
  }),
}));

// Mock the icon imports
vi.mock("../../assets/discord_icon.png", () => ({
  default: "mocked-discord-icon.png",
}));

vi.mock("../../assets/twitch_icon.png", () => ({
  default: "mocked-twitch-icon.png",
}));

vi.mock("../../assets/patreon_icon.png", () => ({
  default: "mocked-patreon-icon.png",
}));

vi.mock("../../assets/yt_icon.png", () => ({
  default: "mocked-youtube-icon.png",
}));

describe("Support", () => {
  it("renders the support title", () => {
    render(<Support />);
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Support />);
    expect(
      screen.getByText("Join our community and support us on our platforms!")
    ).toBeInTheDocument();
  });

  it("renders all social platform links", () => {
    render(<Support />);

    expect(screen.getByText("Discord")).toBeInTheDocument();
    expect(screen.getByText("Twitch")).toBeInTheDocument();
    expect(screen.getByText("Patreon")).toBeInTheDocument();
    expect(screen.getByText("YouTube")).toBeInTheDocument();
  });

  it("renders platform descriptions", () => {
    render(<Support />);

    expect(
      screen.getByText("Join our Discord server to chat and organize games.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Follow us on Twitch for live streams.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Support the server and get exclusive benefits.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Subscribe to our YouTube channel for highlights.")
    ).toBeInTheDocument();
  });

  it("renders thank you section", () => {
    render(<Support />);

    expect(screen.getByText("Thank you for your support!")).toBeInTheDocument();
    expect(
      screen.getByText("Your support helps us keep the server running.")
    ).toBeInTheDocument();
  });

  it("has correct external links", () => {
    render(<Support />);

    const discordLink = screen.getByText("Discord").closest("a");
    const twitchLink = screen.getByText("Twitch").closest("a");
    const patreonLink = screen.getByText("Patreon").closest("a");
    const youtubeLink = screen.getByText("YouTube").closest("a");

    expect(discordLink).toHaveAttribute("href", "https://discord.gg/td6N9M3Z");
    expect(twitchLink).toHaveAttribute(
      "href",
      "https://www.twitch.tv/sph_milsim"
    );
    expect(patreonLink).toHaveAttribute("href", "https://www.patreon.com/home");
    expect(youtubeLink).toHaveAttribute(
      "href",
      "https://www.youtube.com/@sphmilsimspain5600"
    );
  });

  it("has correct target and rel attributes for external links", () => {
    render(<Support />);

    const discordLink = screen.getByText("Discord").closest("a");
    expect(discordLink).toHaveAttribute("target", "_blank");
    expect(discordLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders platform icons", () => {
    render(<Support />);

    const discordIcon = screen.getByAltText("Discord icon");
    const twitchIcon = screen.getByAltText("Twitch icon");
    const patreonIcon = screen.getByAltText("Patreon icon");
    const youtubeIcon = screen.getByAltText("YouTube icon");

    expect(discordIcon).toHaveAttribute("src", "mocked-discord-icon.png");
    expect(twitchIcon).toHaveAttribute("src", "mocked-twitch-icon.png");
    expect(patreonIcon).toHaveAttribute("src", "mocked-patreon-icon.png");
    expect(youtubeIcon).toHaveAttribute("src", "mocked-youtube-icon.png");
  });
});
