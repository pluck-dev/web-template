"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type CRTRevealProps = {
  children: ReactNode;
  className?: string;
  /** scanlines 오버레이 표시 */
  scanlines?: boolean;
  /** 켜진 후에도 미세 깜빡임/지터 유지 */
  flicker?: boolean;
};

/**
 * 브라운관 TV 켜짐 모션
 *  1) 화면 가운데 얇은 점이 빛남
 *  2) 좌우로 가로선 한 줄 펼침
 *  3) 세로로 펼쳐지며 화면 등장
 *  4) 밝기 안정화 + scanlines/jitter
 */
export function CRTReveal({
  children,
  className,
  scanlines = true,
  flicker = true,
}: CRTRevealProps) {
  return (
    <div className={cn("relative isolate", className)}>
      <motion.div
        initial={{
          scaleY: 0.004,
          scaleX: 0.35,
          opacity: 0,
          filter: "brightness(2.4) saturate(0.6)",
        }}
        whileInView={{
          scaleY: [0.004, 0.004, 1, 1, 1],
          scaleX: [0.35, 1, 1, 1, 1],
          opacity: [0, 1, 1, 1, 1],
          filter: [
            "brightness(2.4) saturate(0.6)",
            "brightness(2.4) saturate(0.6)",
            "brightness(1.6) saturate(0.85)",
            "brightness(1.05) saturate(1)",
            "brightness(1) saturate(1)",
          ],
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.7,
          times: [0, 0.22, 0.62, 0.86, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "center center" }}
        className="relative"
      >
        {/* 켜질 때 가운데 빛나는 흰색 라인 (라인 펼침 직후 fadeout) */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 0, 0],
            scaleX: [0, 1, 1, 1, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.7,
            times: [0, 0.22, 0.5, 0.7, 1],
            ease: "easeOut",
          }}
          style={{ transformOrigin: "center" }}
          className="pointer-events-none absolute left-0 right-0 top-1/2 z-30 h-[2px] -translate-y-1/2 bg-white shadow-[0_0_28px_8px_oklch(0.99_0.005_280_/_0.85)]"
        />

        {/* 화면 본체 */}
        <motion.div
          animate={
            flicker
              ? {
                  opacity: [1, 0.985, 1, 0.97, 1],
                  filter: [
                    "brightness(1)",
                    "brightness(1.02)",
                    "brightness(1)",
                    "brightness(0.98)",
                    "brightness(1)",
                  ],
                }
              : undefined
          }
          transition={
            flicker
              ? {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8,
                }
              : undefined
          }
          className="relative"
        >
          {children}
        </motion.div>

        {/* scanlines 오버레이 */}
        {scanlines && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay"
            style={{
              background:
                "repeating-linear-gradient(0deg, oklch(0 0 0 / 0.28) 0px, oklch(0 0 0 / 0.28) 1px, transparent 1px, transparent 3px)",
            }}
          />
        )}

        {/* 비네팅 (모서리 어둠) — 브라운관 곡면 인상 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{
            boxShadow:
              "inset 0 0 80px 10px oklch(0 0 0 / 0.55), inset 0 0 20px oklch(0 0 0 / 0.3)",
          }}
        />
      </motion.div>
    </div>
  );
}
