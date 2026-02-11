import Link from "next/link";
import { type Locale } from "@/i18n";
import { getTopCountries } from "@/data/esim";
import Hero from "@/components/Hero";
import CountryCard from "@/components/CountryCard";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const top = getTopCountries();

  return (
    <div className="space-y-10">
      <Hero locale={locale} />

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold md:text-2xl">
            Top destinations
          </h2>
          <Link
            className="text-sm text-muted-foreground hover:text-foreground"
            href={`/${locale}/esim/region/europe`}
          >
            Browse regions
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((c) => (
            <CountryCard key={c.code} locale={locale} country={c} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
          <div className="text-sm font-medium">Compare fast</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Pick the best plan for your destination in minutes.
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
          <div className="text-sm font-medium">Regional picks</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Road trip? Use Europe / Asia / Americas regional eSIMs.
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
          <div className="text-sm font-medium">Transparent</div>
          <div className="mt-1 text-sm text-muted-foreground">
            We use affiliate links to keep the site free.
          </div>
        </div>
      </section>
    </div>
  );
}
