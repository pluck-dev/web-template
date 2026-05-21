"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * LineReveal — Elementor 'reveal-text' 시그니처 모션 차용.
 * 텍스트 라인이 마스크에 가려졌다가 아래에서 위로 슬라이드되며 드러남.
 * + 동시에 컬러 sweep이 좌→우로 한 번 지나가서 강조.
 */
type LineRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** sweep 컬러 (그라데이션 가능) */
  sweep?: boolean;
};

export function LineReveal({
  children,
  className,
  delay = 0,
  sweep = true,
}: LineRevealProps) {
  return (
    <span className={cn("relative inline-block overflow-hidden align-bottom", className)}>
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
      {sweep && (
        <motion.span
          aria-hidden
          initial={{ x: "-100%" }}
          whileInView={{ x: "110%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            delay: delay + 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent mix-blend-overlay"
        />
      )}
    </span>
  );
}

/**
 * 멀티라인용 - 여러 줄을 차례로 reveal
 */
export function MultiLineReveal({
  lines,
  className,
  baseDelay = 0,
  step = 0.12,
}: {
  lines: ReactNode[];
  className?: string;
  baseDelay?: number;
  step?: number;
}) {
  return (
    <span className={cn("inline-block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          <LineReveal delay={baseDelay + i * step} sweep={i === 0}>
            {line}
          </LineReveal>
        </span>
      ))}
    </span>
  );
}
