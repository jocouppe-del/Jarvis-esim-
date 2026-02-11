import { notFound } from "next/navigation";
import type { Locale } from "@/i18n";
import {
  getCountriesByRegion,
  regions,
  type RegionCode,
  type Region,
} from "@/data/esim";
import CountryCard from "@/components/CountryCard";
import RegionHero from "@/components/RegionHero";

export default async function RegionPage({
  params,
}: {
  params: Promise<{ locale: Locale; region: string }>;
}) {
  const { locale, region } = await params;
  const r = regions.find((x) => x.code === (region as RegionCode)) as
    | Region
    | undefined;
  if (!r) return notFound();

  const list = getCountriesByRegion(r.code);

  return (
    <div className="space-y-8">
      <RegionHero region={r} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CountryCard key={c.code} locale={locale} country={c} />
        ))}
      </div>
    </div>
  );
}
