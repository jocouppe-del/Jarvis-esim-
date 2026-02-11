import { notFound } from "next/navigation";
import type { Locale } from "@/i18n";
import { getCountryByCode, regions, type RegionCode, type Region } from "@/data/esim";
import CountryHero from "@/components/CountryHero";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ locale: Locale; country: string }>;
}) {
  const { country } = await params;
  const c = getCountryByCode(country);
  if (!c) return notFound();

  const r = regions.find((x) => x.code === (c.region as RegionCode)) as Region;

  return (
    <div className="space-y-8">
      <CountryHero country={c} region={r} />

      <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
        <p className="max-w-2xl text-sm text-muted-foreground">
          Compare popular plans, pick the best value, and get connected in
          minutes.
        </p>
        <div className="mt-4 text-sm text-muted-foreground">
          Typical plans: {c.typicalPlans.join(" · ")}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
          <div className="text-sm font-semibold">Best value</div>
          <div className="mt-1 text-sm text-muted-foreground">
            affiliate offer placeholder
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
          <div className="text-sm font-semibold">Unlimited</div>
          <div className="mt-1 text-sm text-muted-foreground">
            affiliate offer placeholder
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
          <div className="text-sm font-semibold">Short trip</div>
          <div className="mt-1 text-sm text-muted-foreground">
            affiliate offer placeholder
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-border/60 bg-card/50 p-6">
        <h2 className="text-lg font-semibold">FAQ</h2>
        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Does my phone support eSIM?</span> 
            Most modern iPhones and many Android devices do. Check the Devices page.
          </p>
          <p>
            <span className="font-medium text-foreground">Can I keep my number?</span> 
            Yes—eSIM data plans typically keep your primary SIM active.
          </p>
        </div>
      </section>
    </div>
  );
}
