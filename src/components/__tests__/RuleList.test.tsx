import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RuleList from "../RuleList";

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, options?: { returnObjects?: boolean }) => {
      if (options?.returnObjects) {
        return [
          "First rule: Be respectful to all players",
          "Second rule: Follow the chain of command",
          "Third rule: Use proper communication",
        ];
      }
      return key;
    },
  }),
}));

describe("RuleList", () => {
  it("renders all rules from translation", () => {
    render(<RuleList sectionKey="general" />);

    expect(
      screen.getByText("First rule: Be respectful to all players")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Second rule: Follow the chain of command")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Third rule: Use proper communication")
    ).toBeInTheDocument();
  });

  it("renders checkmark icons for each rule", () => {
    render(<RuleList sectionKey="general" />);

    const checkmarks = screen.getAllByText("✓");
    expect(checkmarks).toHaveLength(3);
  });

  it("applies correct styling to rules", () => {
    render(<RuleList sectionKey="general" />);

    const firstRule = screen.getByText(
      "First rule: Be respectful to all players"
    );
    expect(firstRule).toHaveClass("text-gray-300", "text-sm", "sm:text-base");
  });

  it("applies correct styling to checkmarks", () => {
    render(<RuleList sectionKey="general" />);

    const checkmarks = screen.getAllByText("✓");
    checkmarks.forEach((checkmark) => {
      expect(checkmark).toHaveClass(
        "text-yellow-400",
        "text-sm",
        "sm:text-base",
        "font-bold"
      );
    });
  });
});
