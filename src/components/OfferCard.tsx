import Link from "next/link";
import { providers, type Offer } from "@/data/offers";

export default function OfferCard({ offer }: { offer: Offer }) {
  const p = providers[offer.provider];

  return (
    <Link
      href={offer.affiliateUrl}
      className="group rounded-2xl border border-border/60 bg-card/50 p-5 transition hover:-translate-y-0.5 hover:bg-card/70"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-muted-foreground">{p.label}</div>
          <div className="mt-1 text-sm font-semibold text-foreground">
            {offer.badge ?? offer.name}
          </div>
        </div>
        <div
          className={`h-10 w-10 rounded-xl bg-gradient-to-br ${p.color}`}
          aria-hidden
        />
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        {offer.data ? <span>{offer.data}</span> : null}
        {offer.validity ? <span> · {offer.validity}</span> : null}
        {offer.priceFrom ? <span> · from {offer.priceFrom}</span> : null}
      </div>

      {offer.notes ? (
        <div className="mt-3 text-sm text-muted-foreground">{offer.notes}</div>
      ) : null}

      <div className="mt-4 inline-flex text-xs font-semibold text-amber-300 group-hover:text-amber-200">
        View deal →
      </div>

      <div className="mt-2 text-[11px] text-muted-foreground">
        Affiliate link (placeholder)
      </div>
    </Link>
  );
}
