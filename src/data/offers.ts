export type ProviderKey =
  | "airalo"
  | "holafly"
  | "nomad"
  | "saily"
  | "alosim"
  | "ubigi";

export type Offer = {
  provider: ProviderKey;
  name: string;
  badge?: "Best value" | "Unlimited" | "Short trip";
  priceFrom?: string; // display only for now
  data?: string; // e.g. 10GB, Unlimited
  validity?: string; // e.g. 15 days
  notes?: string;
  affiliateUrl: string;
};

export const providers: Record<ProviderKey, { label: string; color: string }> = {
  airalo: { label: "Airalo", color: "from-amber-400/30 to-amber-400/10" },
  holafly: { label: "Holafly", color: "from-rose-400/30 to-rose-400/10" },
  nomad: { label: "Nomad", color: "from-teal-400/30 to-teal-400/10" },
  saily: { label: "Saily", color: "from-violet-400/30 to-violet-400/10" },
  alosim: { label: "aloSIM", color: "from-emerald-400/30 to-emerald-400/10" },
  ubigi: { label: "Ubigi", color: "from-sky-400/30 to-sky-400/10" },
};

/**
 * Placeholder offers — replace affiliateUrl with real links per provider.
 * Keep URLs as plain strings so we can swap to deep links later.
 */
export function getDefaultOffers(countryName: string): Offer[] {
  return [
    {
      provider: "airalo",
      name: `${countryName} eSIM plans`,
      badge: "Best value",
      priceFrom: "$4.50",
      data: "5–20GB",
      validity: "7–30 days",
      notes: "Good balance of price & coverage.",
      affiliateUrl: "#",
    },
    {
      provider: "holafly",
      name: `${countryName} unlimited eSIM`,
      badge: "Unlimited",
      priceFrom: "$19.90",
      data: "Unlimited",
      validity: "5–30 days",
      notes: "Best for heavy data users.",
      affiliateUrl: "#",
    },
    {
      provider: "nomad",
      name: `${countryName} short-trip eSIM`,
      badge: "Short trip",
      priceFrom: "$6.00",
      data: "3–10GB",
      validity: "7–15 days",
      notes: "Fast setup, good for weekend trips.",
      affiliateUrl: "#",
    },
  ];
}
