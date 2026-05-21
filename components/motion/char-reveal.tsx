"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type CharRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  /** 각 글자가 들어오는 방향 다양화 */
  scatter?: boolean;
};

export function CharReveal({
  text,
  className,
  delay = 0,
  scatter = true,
}: CharRevealProps) {
  const chars = Array.from(text);

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
    >
      {chars.map((c, i) => {
        const dir = scatter ? (i % 4) : 0;
        const offsets: Record<number, { x: number; y: number; r: number }> = {
          0: { x: 0, y: 80, r: -8 },
          1: { x: -80, y: 40, r: 12 },
          2: { x: 80, y: -40, r: -16 },
          3: { x: 0, y: -90, r: 6 },
        };
        const off = offsets[dir];
        return (
          <motion.span
            key={`${c}-${i}`}
            aria-hidden
            className="inline-block whitespace-pre"
            variants={{
              hidden: {
                opacity: 0,
                x: off.x,
                y: off.y,
                rotate: off.r,
                filter: "blur(12px)",
              },
              show: {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 16,
                  mass: 0.6,
                },
              },
            }}
          >
            {c === " " ? " " : c}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
