import Link from "next/link";
import type { Locale } from "@/i18n";

export default function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-400 via-violet-400 to-rose-400" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">eSIMWorld</div>
            <div className="text-xs text-muted-foreground">Find & compare eSIMs</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="text-muted-foreground hover:text-foreground" href={`/${locale}/esim/region/europe`}>Europe</Link>
          <Link className="text-muted-foreground hover:text-foreground" href={`/${locale}/esim/region/asia`}>Asia</Link>
          <Link className="text-muted-foreground hover:text-foreground" href={`/${locale}/esim/region/americas-north`}>North America</Link>
        </nav>

        <div className="text-xs text-muted-foreground">
          EN · more languages soon
        </div>
      </div>
    </header>
  );
}
