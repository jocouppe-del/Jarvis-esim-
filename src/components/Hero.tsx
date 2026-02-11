import Link from "next/link";
import type { Locale } from "@/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-teal-500/15 via-violet-500/10 to-rose-500/10 p-8 md:p-12">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(60%_60%_at_50%_10%,rgba(20,184,166,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_30%,rgba(139,92,246,0.18),transparent_60%),radial-gradient(40%_40%_at_10%_40%,rgba(251,113,133,0.14),transparent_60%)]" />

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-teal-400" />
          eSIMWorld · free guide & comparisons
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Find the best eSIM for your trip.
        </h1>

        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Compare plans by country and region, estimate data needs, and save
          money—without the hassle.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/${locale}/esim/region/asia`}
            className="rounded-xl bg-teal-500 px-5 py-3 text-sm font-medium text-black hover:bg-teal-400"
          >
            Explore Asia
          </Link>
          <Link
            href={`/${locale}/esim/region/europe`}
            className="rounded-xl border border-border/60 bg-background/30 px-5 py-3 text-sm font-medium hover:bg-background/40"
          >
            Browse Europe
          </Link>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Disclosure: We may earn affiliate commissions. It helps keep the site
          free.
        </p>
      </div>
    </section>
  );
}
