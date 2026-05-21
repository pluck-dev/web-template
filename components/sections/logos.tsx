import { Marquee } from "@/components/marquee";

const BRANDS = [
  "SAMSUNG",
  "LG",
  "AMOREPACIFIC",
  "OLIVE YOUNG",
  "KAKAO",
  "NAVER",
  "CJ",
  "HYBE",
  "MUSINSA",
  "29CM",
  "BABY ARMOR",
  "DEILEA",
  "CARYOUNG",
  "BAYADA",
];

export function Logos() {
  return (
    <section className="border-y border-white/[0.06] bg-background/40 py-10 backdrop-blur">
      <div className="mx-auto mb-6 max-w-6xl px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          // Trusted by ambitious brands
        </p>
      </div>
      <Marquee items={BRANDS} />
    </section>
  );
}
