"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CharReveal } from "@/components/motion/char-reveal";

/**
 * 거대 진술 (Big Statement) — 섹션 사이 강한 휴식.
 * 스크롤에 따라 글자 크기 / 블러 / 글로우가 변하면서 강렬한 인상.
 */
export function BigStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["blur(14px)", "blur(0px)", "blur(14px)"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1, 1.05]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-24 sm:px-6 sm:py-32"
    >
      <motion.div
        style={{ filter: blur, scale, opacity }}
        className="relative z-10 text-center"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground sm:text-xs">
          // statement
        </div>
        <h3 className="mt-5 font-heading text-[2.4rem] font-black leading-[1.0] tracking-tighter sm:text-7xl md:text-[7.5rem]">
          <span className="block gradient-text">
            <CharReveal text="MICRO." />
          </span>
          <span className="block">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1.5px oklch(0.78 0.22 305 / 0.85)",
              }}
            >
              <CharReveal text="GLOBAL." delay={0.15} />
            </span>
          </span>
          <span className="block">
            <span data-text="UNFAIR." className="glitch gradient-text">
              <CharReveal text="UNFAIR." delay={0.3} />
            </span>
          </span>
        </h3>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] text-muted-foreground sm:text-lg">
          작은 인플루언서들의 큰 신뢰. 우리가 정의한 새로운 무기.
        </p>
      </motion.div>

      {/* 배경 거대 패럴랙스 텍스트 */}
      <motion.span
        aria-hidden
        style={{
          y: useTransform(scrollYProgress, [0, 1], [80, -80]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.04]),
        }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-heading text-[10rem] font-black leading-none tracking-tighter text-white sm:text-[18rem] md:text-[24rem]"
      >
        α
      </motion.span>
    </section>
  );
}
