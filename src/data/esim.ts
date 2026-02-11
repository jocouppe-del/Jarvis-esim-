export type RegionCode =
  | "europe"
  | "asia"
  | "americas-north"
  | "americas-south"
  | "oceania";

export type Country = {
  code: string; // ISO-ish
  name: string;
  region: RegionCode;
  tagline: string;
  typicalPlans: string[];
};

const countries: Country[] = [
  {
    code: "JP",
    name: "Japan",
    region: "asia",
    tagline: "Tokyo · Kyoto · Osaka",
    typicalPlans: ["5GB / 7 days", "10GB / 15 days", "Unlimited"],
  },
  {
    code: "TH",
    name: "Thailand",
    region: "asia",
    tagline: "Bangkok · Chiang Mai · Islands",
    typicalPlans: ["3GB / 7 days", "10GB / 15 days", "Unlimited"],
  },
  {
    code: "US",
    name: "United States",
    region: "americas-north",
    tagline: "NYC · LA · Road trips",
    typicalPlans: ["5GB / 7 days", "20GB / 30 days", "Unlimited"],
  },
  {
    code: "FR",
    name: "France",
    region: "europe",
    tagline: "Paris · Riviera · Alps",
    typicalPlans: ["3GB / 7 days", "10GB / 15 days", "20GB / 30 days"],
  },
  {
    code: "ES",
    name: "Spain",
    region: "europe",
    tagline: "Barcelona · Madrid · Islands",
    typicalPlans: ["3GB / 7 days", "10GB / 15 days", "20GB / 30 days"],
  },
  {
    code: "BR",
    name: "Brazil",
    region: "americas-south",
    tagline: "Rio · São Paulo · Beaches",
    typicalPlans: ["3GB / 7 days", "10GB / 15 days", "20GB / 30 days"],
  },
  {
    code: "AU",
    name: "Australia",
    region: "oceania",
    tagline: "Sydney · Melbourne · Outback",
    typicalPlans: ["5GB / 7 days", "20GB / 30 days", "Unlimited"],
  },
];

export function getCountryByCode(code: string): Country | undefined {
  return countries.find((c) => c.code.toLowerCase() === code.toLowerCase());
}

export function getCountriesByRegion(region: RegionCode): Country[] {
  return countries.filter((c) => c.region === region);
}

export function getTopCountries(): Country[] {
  return countries.slice(0, 6);
}

export const regions: Array<{ code: RegionCode; name: string; tagline: string }> = [
  { code: "europe", name: "Europe", tagline: "Multi-country trips & cities" },
  { code: "asia", name: "Asia", tagline: "Fast data for top destinations" },
  { code: "americas-north", name: "North America", tagline: "USA, Canada, Mexico" },
  { code: "americas-south", name: "South America", tagline: "Brazil, Argentina, more" },
  { code: "oceania", name: "Oceania", tagline: "Australia & New Zealand" },
];
