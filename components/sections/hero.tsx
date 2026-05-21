"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CharReveal } from "@/components/motion/char-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { FloatingOrbs } from "@/components/motion/floating-orbs";

const METRICS = [
  { v: 13850, suffix: "+", l: "Creators" },
  { v: 12, suffix: "", l: "Countries" },
  { v: 4.8, suffix: "x", l: "Avg ROAS", decimals: 1 },
  { v: 98, suffix: "%", l: "재의뢰율" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden noise"
    >
      {/* 떠다니는 오로라 블롭 */}
      <FloatingOrbs />
      {/* 그리드 라인 */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-28 pt-24 text-center sm:pt-32">
        {/* 라이브 배지 — slide-down */}
        <motion.div
          initial={{ y: -40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.21, 1.02, 0.73, 1] }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-fuchsia-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
          </span>
          <span className="font-mono uppercase tracking-[0.22em]">
            Live · 12 Countries · 13,850 Creators
          </span>
        </motion.div>

        {/* 거대 타이틀 — 캐릭터 단위 비산 */}
        <h1 className="mt-8 text-balance font-heading text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]">
          <span className="block">
            <CharReveal text="글로벌 인플루언서를" />
          </span>
          <span className="mt-2 block">
            <CharReveal
              text="REWIRE"
              delay={0.2}
              className="glitch gradient-text"
            />
            <span className="ml-3 inline-block">
              <CharReveal text="합니다." delay={0.35} />
            </span>
          </span>
        </h1>

        {/* 글리치 데이터-텍스트 보강 — 같은 텍스트의 RGB 분리 잔상 */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          data-text="REWIRE"
          className="glitch sr-only"
        >
          REWIRE
        </motion.span>

        {/* 서브 카피 */}
        <motion.p
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-7 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          일본 · 태국 · 싱가포르 · 미국 · 중국까지.
          <span className="text-foreground">
            {" "}
            13,850명의 진짜 크리에이터
          </span>
          가 당신의 브랜드를 시장에 꽂아드립니다. 단 6단계.
        </motion.p>

        {/* CTA — 자석 효과 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Magnetic strength={0.3}>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-7 text-base font-semibold text-black shadow-[0_0_40px_oklch(0.78_0.22_305_/_0.55)] transition-shadow hover:shadow-[0_0_60px_oklch(0.78_0.22_305_/_0.85)]"
            >
              <Link href="#contact">
                무료 캠페인 견적받기
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-base backdrop-blur hover:bg-white/[0.08]"
            >
              <Link href="#process">
                <Play className="size-4 fill-current" />
                90초 데모 보기
              </Link>
            </Button>
          </Magnetic>
        </motion.div>

        {/* 메트릭 — 카운트업 */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-4"
        >
          {METRICS.map((m) => (
            <div key={m.l} className="bg-background/40 px-4 py-5 text-left">
              <Counter
                to={m.v}
                suffix={m.suffix}
                decimals={m.decimals ?? 0}
                className="block font-heading text-2xl font-bold tracking-tight gradient-text sm:text-3xl"
              />
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {m.l}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-fuchsia-400" />
          <span className="shimmer-text font-medium">
            평균 셋업 24시간 · 첫 캠페인 7일 내 런칭
          </span>
        </motion.div>
      </div>

      {/* 하단 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 pt-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-fuchsia-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
