"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/glitch-text";
import { FlyInCard } from "@/components/motion/fly-in-card";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { CharReveal } from "@/components/motion/char-reveal";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "SPARK",
    price: "₩ 1.9M",
    sub: "월 / 단일 캠페인",
    desc: "첫 글로벌 캠페인. 빠르게 검증하고 싶을 때.",
    features: [
      "마이크로 인플루언서 5~8명",
      "1개 국가 · 1개 채널 선택",
      "콘텐츠 가이드 & 검수",
      "리포트 1회",
    ],
    cta: "스파크 시작하기",
    featured: false,
    from: "left" as const,
  },
  {
    name: "WAVE",
    price: "₩ 4.9M",
    sub: "월 / 멀티 채널",
    desc: "전환을 키울 시점. 채널 믹스로 굴립니다.",
    features: [
      "큐레이티드 12~20명",
      "3개 국가 · 멀티 채널",
      "트렌드 리서치 리포트",
      "주간 그로스 리포트",
      "전담 매니저 1인",
    ],
    cta: "웨이브 시작하기",
    featured: true,
    from: "bottom" as const,
  },
  {
    name: "SURGE",
    price: "맞춤형",
    sub: "분기 / 글로벌 시즌 캠페인",
    desc: "신제품 런칭 · 시즌 폭격 · IPO 직전 부스트.",
    features: [
      "30~80명 마스터 큐레이션",
      "12개국 전체 커버",
      "수출바우처 정산 호환",
      "전담 PM + 콘텐츠 디렉터",
      "Slack 채널 24/7 대응",
    ],
    cta: "서지 상담받기",
    featured: false,
    from: "right" as const,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 max-w-2xl">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-white/15 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            / 04 — Pricing
          </Badge>
          <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <GlitchText className="inline-block">단순한</GlitchText>{" "}
            <span className="gradient-text">3가지</span>{" "}
            <CharReveal text="플랜" delay={0.15} />
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            숨겨진 비용 없음. 성과 안 나오면 그만하셔도 됩니다.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <FlyInCard key={p.name} index={i} from={p.from}>
              <SpotlightCard
                color={
                  p.featured
                    ? "oklch(0.78 0.22 305 / 0.32)"
                    : "oklch(0.85 0.18 200 / 0.18)"
                }
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-2",
                  p.featured
                    ? "glow-border bg-gradient-to-b from-fuchsia-500/15 via-background to-background scale-[1.02]"
                    : "glass"
                )}
              >
                {p.featured && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-fuchsia-500/15 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-fuchsia-300">
                    <Star className="size-3 fill-current" />
                    Most picked
                  </div>
                )}

                <div className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
                  {p.name}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={cn(
                      "font-heading text-5xl font-bold tracking-tight",
                      p.featured && "gradient-text"
                    )}
                  >
                    {p.price}
                  </span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {p.sub}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
                          p.featured
                            ? "bg-gradient-to-br from-fuchsia-400 to-cyan-400 text-black"
                            : "bg-white/[0.06] text-foreground"
                        )}
                      >
                        <Check className="size-3" />
                      </span>
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Magnetic strength={0.2}>
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        "h-11 w-full rounded-full",
                        p.featured
                          ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-black shadow-[0_0_28px_oklch(0.78_0.22_305_/_0.5)] hover:opacity-90"
                          : "bg-white/[0.06] text-foreground hover:bg-white/[0.1]"
                      )}
                    >
                      <Link href="#contact">{p.cta}</Link>
                    </Button>
                  </Magnetic>
                </div>
              </SpotlightCard>
            </FlyInCard>
          ))}
        </div>
      </div>
    </section>
  );
}
