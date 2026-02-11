import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { isLocale, type Locale } from "@/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "eSIMWorld",
    template: "%s · eSIMWorld",
  },
  description:
    "Find the best eSIM for your trip. Compare plans by country and region, estimate data needs, and save money.",
  applicationName: "eSIMWorld",
  metadataBase: new URL("https://esimworld.pages.dev"),
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang: Locale = isLocale(locale) ? locale : "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-dvh bg-background text-foreground">
          <SiteHeader locale={lang} />
          <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
            {children}
          </main>
          <SiteFooter locale={lang} />
        </div>
      </body>
    </html>
  );
}
