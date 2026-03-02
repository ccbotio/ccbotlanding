"use client";

const partners = [
  "Canton Foundation",
  "Digital Asset",
  "Delphi Digital",
  "Wintermute",
  "GSR",
  "Paper VC",
];

export default function PartnerTicker() {
  const items = [...partners, ...partners];

  return (
    <div className="w-full bg-background-surface border-y border-border-subtle overflow-hidden py-4">
      <div className="flex whitespace-nowrap gap-16 animate-marquee items-center justify-center opacity-60">
        {items.map((name, i) => (
          <span key={i} className="contents">
            <span className="text-lg font-ui font-semibold text-secondary uppercase tracking-wider">
              {name}
            </span>
            <span className="w-1 h-1 bg-secondary rounded-full inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
