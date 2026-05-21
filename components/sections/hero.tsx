"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CharReveal } from "@/components/motion/char-reveal";
import { LineReveal, MultiLineReveal } from "@/components/motion/line-reveal";
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
      <FloatingOrbs />
      <div aria-hidden className="absolute inset-x-0 top-32 bottom-0 -z-10 bg-grid" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-24">
        {/* 라이브 배지 */}
        <motion.div
          initial={{ y: -40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.21, 1.02, 0.73, 1] }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-medium text-muted-foreground sm:text-xs"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-fuchsia-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
          </span>
          <span className="font-mono uppercase tracking-[0.18em] sm:tracking-[0.22em]">
            Live · 12 Countries · 13,850 Creators
          </span>
        </motion.div>

        {/* 거대 타이틀 — Elementor reveal-text 스타일 */}
        <h1 className="mt-6 text-balance font-heading text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:mt-8 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <MultiLineReveal
            eager
            lines={[
              <span key="l1">글로벌 인플루언서를</span>,
              <span key="l2">
                <span data-text="REWIRE" className="glitch gradient-text mr-2 sm:mr-3">
                  REWIRE
                </span>
                <span>합니다.</span>
              </span>,
            ]}
            step={0.14}
          />
        </h1>

        {/* 서브 카피 - 시적 줄바꿈 (pd6 영향) */}
        <motion.div
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="lead-copy mt-7 max-w-2xl text-pretty sm:mt-8"
        >
          <span className="block">
            <LineReveal eager delay={0.7} sweep={false}>
              일본 · 태국 · 싱가포르 · 미국 · 중국까지.
            </LineReveal>
          </span>
          <span className="block">
            <LineReveal eager delay={0.85} sweep={false}>
              <span className="text-foreground">13,850명의 진짜 크리에이터</span>
              가 브랜드를 시장에 꽂아드립니다.
            </LineReveal>
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center"
        >
          <Magnetic strength={0.3} className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-7 text-[15px] font-semibold text-black shadow-[0_0_40px_oklch(0.78_0.22_305_/_0.55)] transition-shadow hover:shadow-[0_0_60px_oklch(0.78_0.22_305_/_0.85)] sm:w-auto"
            >
              <Link href="#contact">
                무료 캠페인 견적받기
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic strength={0.2} className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-white/15 bg-white/[0.03] px-6 text-[15px] backdrop-blur hover:bg-white/[0.08] sm:w-auto"
            >
              <Link href="#showreel">
                <Play className="size-4 fill-current" />
                90초 데모 보기
              </Link>
            </Button>
          </Magnetic>
        </motion.div>

        {/* 메트릭 */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:mt-16 sm:grid-cols-4"
        >
          {METRICS.map((m) => (
            <div key={m.l} className="bg-background/40 px-4 py-5 text-left">
              <Counter
                to={m.v}
                suffix={m.suffix}
                decimals={m.decimals ?? 0}
                className="block font-heading text-3xl font-bold tracking-tight gradient-text sm:text-3xl"
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
          className="mt-7 inline-flex items-center gap-2 sm:mt-9"
        >
          <Sparkles className="size-3.5 text-fuchsia-400" />
          <span className="shimmer-text label-mono">
            평균 셋업 24시간 · 첫 캠페인 7일 내 런칭
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-10 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 pt-1.5"
          >
            <span className="h-1.5 w-1 rounded-full bg-fuchsia-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
