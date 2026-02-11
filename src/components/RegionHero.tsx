import Image from "next/image";
import type { Locale } from "@/i18n";
import type { Region } from "@/data/esim";

export default function RegionHero({
  region,
}: {
  region: Region;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50">
      <div className="relative h-[220px] w-full md:h-[280px]">
        <Image
          src={region.heroImage}
          alt={`${region.name} skyline`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(251,191,36,0.25),transparent_55%),radial-gradient(40%_60%_at_70%_20%,rgba(139,92,246,0.22),transparent_55%)]" />
      </div>

      <div className="relative z-10 -mt-10 p-6 md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          {region.name} · regional eSIM picks
        </div>

        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{region.name}</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {region.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
          {region.featuredCities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border/60 bg-background/30 px-3 py-1"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
