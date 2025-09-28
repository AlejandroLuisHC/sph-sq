import { describe, it, expect, vi, beforeEach } from "vitest";
import i18n from "../index";

// Mock the translation files
vi.mock("../locales/es.json", () => ({
  default: {
    title: "Reglas del Servidor SPH Squad",
    language: "Idioma",
  },
}));

vi.mock("../locales/en.json", () => ({
  default: {
    title: "SPH Squad Server Rules",
    language: "Language",
  },
}));

describe("i18n configuration", () => {
  beforeEach(() => {
    // Reset i18n state before each test
    i18n.changeLanguage("es");
  });

  it("initializes with Spanish as default language", () => {
    expect(i18n.language).toBe("es");
  });

  it("has English as fallback language", () => {
    expect(i18n.options.fallbackLng).toEqual(["en"]);
  });

  it("can change language to English", async () => {
    await i18n.changeLanguage("en");
    expect(i18n.language).toBe("en");
  });

  it("can change language back to Spanish", async () => {
    await i18n.changeLanguage("en");
    await i18n.changeLanguage("es");
    expect(i18n.language).toBe("es");
  });

  it("has correct interpolation settings", () => {
    expect(i18n.options.interpolation?.escapeValue).toBe(false);
  });

  it("has both Spanish and English resources", () => {
    const resources = i18n.options.resources;
    expect(resources).toHaveProperty("es");
    expect(resources).toHaveProperty("en");
    expect(resources?.es).toHaveProperty("translation");
    expect(resources?.en).toHaveProperty("translation");
  });

  it("translates Spanish text correctly", () => {
    const translation = i18n.t("title");
    expect(translation).toBe("Reglas del Servidor SPH Squad");
  });

  it("translates English text correctly after language change", async () => {
    await i18n.changeLanguage("en");
    const translation = i18n.t("title");
    expect(translation).toBe("SPH Squad Server Rules");
  });

  it("falls back to English when Spanish translation is missing", async () => {
    await i18n.changeLanguage("es");
    // Try to translate a key that doesn't exist in Spanish
    const translation = i18n.t("nonexistent.key");
    expect(translation).toBe("nonexistent.key");
  });

  it("has correct resource structure", () => {
    const resources = i18n.options.resources;
    expect(resources?.es?.translation).toHaveProperty("title");
    expect(resources?.es?.translation).toHaveProperty("language");
    expect(resources?.en?.translation).toHaveProperty("title");
    expect(resources?.en?.translation).toHaveProperty("language");
  });
});
