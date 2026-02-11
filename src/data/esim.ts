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

export type Region = {
  code: RegionCode;
  name: string;
  tagline: string;
  heroImage: string;
  featuredCities: string[];
};

export const regions: Region[] = [
  {
    code: "europe",
    name: "Europe",
    tagline: "Paris, Rome, Barcelona and more — perfect for multi-country trips.",
    heroImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=70",
    featuredCities: ["Paris", "Rome", "Barcelona", "London", "Amsterdam"],
  },
  {
    code: "asia",
    name: "Asia",
    tagline: "Tokyo, Seoul, Bangkok — fast data for your next adventure.",
    heroImage:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=70",
    featuredCities: ["Tokyo", "Seoul", "Bangkok", "Singapore", "Bali"],
  },
  {
    code: "americas-north",
    name: "North America",
    tagline: "New York, Miami, LA — city breaks and road trips.",
    heroImage:
      "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1600&q=70",
    featuredCities: ["New York", "Miami", "Los Angeles", "Hollywood", "Vegas"],
  },
  {
    code: "americas-south",
    name: "South America",
    tagline: "Rio, Buenos Aires, Lima — beaches, cities, and nature.",
    heroImage:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=70",
    featuredCities: ["Rio", "São Paulo", "Buenos Aires", "Lima", "Bogotá"],
  },
  {
    code: "oceania",
    name: "Oceania",
    tagline: "Australia & New Zealand — beaches, cities, and epic drives.",
    heroImage:
      "https://images.unsplash.com/photo-1506973035872-a4f23efdc050?auto=format&fit=crop&w=1600&q=70",
    featuredCities: ["Sydney", "Melbourne", "Auckland", "Gold Coast"],
  },
];
