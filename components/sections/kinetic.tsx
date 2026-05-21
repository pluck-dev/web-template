"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * 키네틱 타이포그래피 — 스크롤에 따라 거대 텍스트가 좌/우로 흐르고,
 * 단어가 글리치/그라데이션/아웃라인 등 다양한 스타일로 교차.
 */
const ROW_A = ["ALPHA", "GLOBAL", "MICRO", "MID-TIER", "CREATORS", "REWIRE"];
const ROW_B = ["TOKYO", "BANGKOK", "SINGAPORE", "L.A.", "SHANGHAI", "HANOI"];
const ROW_C = ["REELS", "TIKTOK", "YOUTUBE", "BLOG", "SHORTS", "CAMPAIGN"];

export function Kinetic() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 행마다 다른 속도/방향
  const xA = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xB = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const xC = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      aria-hidden
      className="relative overflow-hidden border-y border-white/[0.06] bg-background/40 py-16 sm:py-24"
    >
      <div className="space-y-4 sm:space-y-8">
        <Row words={ROW_A} x={xA} variant="gradient" />
        <Row words={ROW_B} x={xB} variant="outline" />
        <Row words={ROW_C} x={xC} variant="glitch" />
      </div>
    </section>
  );
}

function Row({
  words,
  x,
  variant,
}: {
  words: string[];
  x: import("motion/react").MotionValue<string>;
  variant: "gradient" | "outline" | "glitch";
}) {
  const items = [...words, ...words, ...words];

  return (
    <motion.div style={{ x }} className="flex shrink-0 whitespace-nowrap">
      {items.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="mr-8 inline-flex items-center font-heading text-[3.2rem] font-black leading-none tracking-tighter sm:mr-14 sm:text-[6rem] md:text-[9rem]"
        >
          {variant === "gradient" && (
            <span className="gradient-text">{w}</span>
          )}
          {variant === "outline" && (
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1.5px oklch(0.78 0.22 305 / 0.45)",
              }}
            >
              {w}
            </span>
          )}
          {variant === "glitch" && (
            <span
              data-text={w}
              className="glitch text-foreground/80"
            >
              {w}
            </span>
          )}
          <span className="mx-6 inline-block size-3 rounded-full bg-fuchsia-400/60 shadow-[0_0_18px_oklch(0.78_0.22_305_/_0.7)] sm:mx-10 sm:size-4" />
        </span>
      ))}
    </motion.div>
  );
}
