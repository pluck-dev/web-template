"use client";

import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/glitch-text";
import { FlyInCard } from "@/components/motion/fly-in-card";
import { Reveal } from "@/components/motion/reveal";
import { CharReveal } from "@/components/motion/char-reveal";

const QUOTES = [
  {
    quote:
      "런칭 7일만에 도쿄 점유율 2배. 12개국 큐레이션이 진짜 무기입니다.",
    name: "K. Yoon",
    role: "Growth Lead · 뷰티 D2C",
    accent: "from-fuchsia-500/30 to-fuchsia-500/0",
  },
  {
    quote:
      "수출바우처랑 정합 맞춰주는 게 결정적이었어요. 정산 리스크 제로.",
    name: "M. Park",
    role: "CEO · 식품 수출",
    accent: "from-cyan-400/30 to-cyan-400/0",
  },
  {
    quote:
      "마이크로 유튜버를 이만큼 효율 좋게 굴리는 곳을 못 봤습니다. ROAS 5배.",
    name: "S. Kim",
    role: "CMO · 헬스케어",
    accent: "from-violet-500/30 to-violet-500/0",
  },
  {
    quote:
      "전담 PM이 Slack에 상주. 마케팅팀 한 명 더 뽑은 느낌이에요.",
    name: "J. Lee",
    role: "Founder · 패션",
    accent: "from-rose-500/30 to-rose-500/0",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 max-w-2xl">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-white/15 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            / 05 — Voices
          </Badge>
          <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <CharReveal text="고객이 " />
            <GlitchText className="inline-block">말합니다</GlitchText>
          </h2>
          <p className="lead-copy mt-5">
            우리가 떠드는 것보다 진짜 결과를 본 사람들의 이야기가 빠릅니다.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {QUOTES.map((q, i) => (
            <FlyInCard key={q.name} index={i} from={i % 2 === 0 ? "left" : "right"}>
              <article className="group relative overflow-hidden rounded-3xl glass p-8 transition-transform duration-300 hover:-translate-y-1">
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br ${q.accent} blur-2xl transition-transform group-hover:scale-125`}
                />
                <Quote className="size-7 text-fuchsia-300" />
                <p className="mt-5 text-pretty text-[17px] leading-[1.7] text-foreground sm:text-lg">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-500 to-cyan-400 shadow-[0_0_18px_oklch(0.78_0.22_305_/_0.45)]" />
                  <div>
                    <div className="text-[15px] font-semibold text-foreground">
                      {q.name}
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-muted-foreground">
                      {q.role}
                    </div>
                  </div>
                </div>
              </article>
            </FlyInCard>
          ))}
        </div>
      </div>
    </section>
  );
}
