import type { Locale } from "@/i18n";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background/50">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 text-sm text-muted-foreground md:grid-cols-2 md:px-6">
        <div className="space-y-1">
          <div className="font-medium text-foreground">eSIMWorld</div>
          <div className="text-xs">
            © {year} · Affiliate disclosure: we may earn commissions.
          </div>
        </div>
        <div className="text-xs md:text-right">
          {locale.toUpperCase()} · Built with Next.js
        </div>
      </div>
    </footer>
  );
}
