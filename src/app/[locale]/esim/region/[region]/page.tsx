import { notFound } from "next/navigation";
import type { Locale } from "@/i18n";
import { getCountriesByRegion, regions, type RegionCode } from "@/data/esim";
import CountryCard from "@/components/CountryCard";

export default async function RegionPage({
  params,
}: {
  params: Promise<{ locale: Locale; region: string }>;
}) {
  const { locale, region } = await params;
  const r = regions.find((x) => x.code === (region as RegionCode));
  if (!r) return notFound();
  const list = getCountriesByRegion(r.code);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-border/60 bg-card/50 p-6 md:p-8">
        <div className="text-xs text-muted-foreground">Regional eSIMs</div>
        <h1 className="mt-1 text-3xl font-semibold md:text-4xl">{r.name}</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{r.tagline}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CountryCard key={c.code} locale={locale} country={c} />
        ))}
      </div>
    </div>
  );
}
