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
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto mb-6 max-w-6xl px-5 sm:px-6">
        <p className="text-center font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground sm:text-[13px] sm:tracking-[0.32em]">
          // Trusted by ambitious brands
        </p>
      </div>
      <Marquee items={BRANDS} />
    </section>
  );
}
