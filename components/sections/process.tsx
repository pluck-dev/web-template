"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/glitch-text";
import { Reveal } from "@/components/motion/reveal";
import { CharReveal } from "@/components/motion/char-reveal";
import { FlyInCard } from "@/components/motion/fly-in-card";

const STEPS = [
  {
    n: "01",
    t: "타겟팅",
    d: "산업 · 시장 · 페르소나를 잡고 13,850명 풀에서 후보 100~300명을 자동 정렬합니다.",
  },
  {
    n: "02",
    t: "큐레이션",
    d: "팬덤 진성도 · 평균 ER · 가격 효율로 12~20명을 큐레이션. 사람이 한 번 더 봅니다.",
  },
  {
    n: "03",
    t: "컨택 & 협상",
    d: "현지어 컨택, NDA, 일정 · 단가 · 가이드 합의. 다 우리가 합니다.",
  },
  {
    n: "04",
    t: "제작 & 검수",
    d: "스토리보드 → 1차 편집 → 가이드 피드백 → 최종본. 표절/광고법 체크 포함.",
  },
  {
    n: "05",
    t: "발행",
    d: "포스트 · 릴스 · 유튜브 · 틱톡 · 블로그 동시 송출. 채널별 최적화는 자동.",
  },
  {
    n: "06",
    t: "리포트",
    d: "도달 · 저장 · 클릭 · 매출 전환을 한 장으로. 다음 사이클 액션까지 첨부.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });
  // 좌측 그라데이션 트랙을 스크롤 진행에 맞춰 차오르게
  const trackHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-white/15 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              / 02 — Process
            </Badge>
            <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              <CharReveal text="0에서 매출까지 " />
              <GlitchText className="inline-block">6 STEPS</GlitchText>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground sm:max-w-sm sm:text-right">
            평균 셋업 24시간, 첫 노출까지 7일.
            <br />
            셋팅 후엔 우리가 굴리고 당신은 매출만 봅니다.
          </p>
        </Reveal>

        <div ref={ref} className="relative">
          {/* 좌측 세로 트랙 (배경) */}
          <div
            aria-hidden
            className="absolute left-[15px] top-0 hidden h-full w-px bg-white/[0.08] sm:block"
          />
          {/* 좌측 세로 트랙 (스크롤 진행) */}
          <motion.div
            aria-hidden
            style={{ height: trackHeight }}
            className="absolute left-[15px] top-0 hidden w-px bg-gradient-to-b from-fuchsia-400 via-violet-500 to-cyan-400 shadow-[0_0_18px_oklch(0.78_0.22_305_/_0.65)] sm:block"
          />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <FlyInCard key={s.n} index={i} from="scatter">
                <li className="group relative overflow-hidden rounded-2xl glass p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-8 items-center justify-center rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 font-mono text-xs font-bold text-fuchsia-300 transition-transform group-hover:scale-110">
                      {s.n}
                    </span>
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {s.t}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full bg-fuchsia-500/10 blur-2xl transition-transform group-hover:scale-150 group-hover:bg-fuchsia-500/20"
                  />
                </li>
              </FlyInCard>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
