import Link from "next/link";
import type { Locale } from "@/i18n";
import type { Country } from "@/data/esim";

export default function CountryCard({
  locale,
  country,
}: {
  locale: Locale;
  country: Country;
}) {
  return (
    <Link
      href={`/${locale}/esim/${country.code.toLowerCase()}`}
      className="group rounded-2xl border border-border/60 bg-card/50 p-5 transition hover:-translate-y-0.5 hover:bg-card/70"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-foreground">
            {country.name}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {country.tagline}
          </div>
        </div>
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400/30 via-violet-400/20 to-rose-400/20" />
      </div>

      <div className="mt-4 text-xs text-muted-foreground">
        Typical plans: {country.typicalPlans.join(" · ")}
      </div>

      <div className="mt-3 inline-flex text-xs font-medium text-teal-300 group-hover:text-teal-200">
        View offers →
      </div>
    </Link>
  );
}
