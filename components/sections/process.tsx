"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/glitch-text";
import { Reveal } from "@/components/motion/reveal";
import { CharReveal } from "@/components/motion/char-reveal";
import { LineReveal } from "@/components/motion/line-reveal";

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
    offset: ["start 80%", "end 20%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:mb-20">
          <div className="max-w-xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-white/15 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              / 02 — Process
            </Badge>
            <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">
                <LineReveal>0에서 매출까지</LineReveal>
              </span>
              <span className="block">
                <LineReveal delay={0.15} sweep>
                  <GlitchText className="inline-block">6 STEPS</GlitchText>
                </LineReveal>
              </span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground sm:max-w-sm sm:text-right">
            평균 셋업 24시간, 첫 노출까지 7일.
            <br />
            셋팅 후엔 우리가 굴리고 당신은 매출만 봅니다.
          </p>
        </Reveal>

        {/* 가로 진행 트랙 (데스크탑) */}
        <div ref={ref} className="relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[2.6rem] hidden h-px bg-white/[0.06] lg:block"
          />
          <motion.div
            aria-hidden
            style={{ width: lineWidth }}
            className="absolute left-0 top-[2.6rem] hidden h-px bg-gradient-to-r from-fuchsia-400 via-violet-500 to-cyan-400 shadow-[0_0_24px_oklch(0.78_0.22_305_/_0.7)] lg:block"
          />

          <ol className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
            {STEPS.map((s, i) => (
              <li key={s.n} className="group relative">
                {/* 거대 번호 */}
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.7 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <span className="block font-heading text-[5.5rem] font-black leading-none tracking-tighter text-transparent sm:text-[6rem]"
                    style={{
                      WebkitTextStroke: "1.5px oklch(0.78 0.22 305 / 0.65)",
                    }}
                  >
                    {s.n}
                  </span>
                  {/* 라인 위 점 */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-[2.4rem] hidden size-3 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-400 shadow-[0_0_18px_oklch(0.78_0.22_305_/_0.85)] lg:block"
                  />
                </motion.div>

                {/* 내용 */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-4 lg:mt-6"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fuchsia-300">
                    step {s.n}
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl lg:text-xl xl:text-2xl">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>

        {/* 하단 요약 - 시적 한 줄 (pd6 영향) */}
        <Reveal className="mt-16 sm:mt-20">
          <div className="rounded-3xl glass p-6 text-center sm:p-10">
            <p className="font-heading text-2xl font-bold leading-[1.2] tracking-tight sm:text-4xl">
              <LineReveal>
                <CharReveal text="당신은 매출만 보세요." />
              </LineReveal>
            </p>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              섹션 사이 우리가 다 합니다 — 큐레이션, 협상, 가이드, 발행, 리포트.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
