export const locales = [
  "en",
  "fr",
  "es",
  "de",
  "pt",
  "ru",
  "ar",
  "hi",
  "ja",
  "zh",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}
