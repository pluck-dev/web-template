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
      <div className="mx-auto mb-7 max-w-6xl px-5 sm:px-6">
        <p className="text-center text-[13.5px] font-semibold text-muted-foreground sm:text-[15px]">
          이미 다음 브랜드들과 일하고 있어요
        </p>
      </div>
      <Marquee items={BRANDS} />
    </section>
  );
}
