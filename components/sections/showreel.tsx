"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Play,
  Pause,
  MonitorPlay,
  Hash,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GlitchText } from "@/components/glitch-text";
import { LineReveal } from "@/components/motion/line-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { CRTReveal } from "@/components/motion/crt-reveal";
import { cn } from "@/lib/utils";

const CLIPS = [
  {
    title: "도쿄 뷰티 D2C",
    handle: "@yui.tokyo",
    tags: "릴스 · 일본",
    plays: "1.4M",
    grad: "from-fuchsia-500/80 via-violet-500/70 to-cyan-400/70",
  },
  {
    title: "방콕 카페 런칭",
    handle: "@bkk.foodie",
    tags: "틱톡 · 태국",
    plays: "820K",
    grad: "from-rose-500/80 via-fuchsia-500/70 to-violet-500/70",
  },
  {
    title: "LA 헬스 시리즈",
    handle: "@max.fitcoach",
    tags: "유튜브 · 미국",
    plays: "3.2M",
    grad: "from-cyan-400/80 via-emerald-400/70 to-lime-400/70",
  },
  {
    title: "타이베이 패션",
    handle: "@nora.style",
    tags: "릴스 · 대만",
    plays: "640K",
    grad: "from-orange-400/80 via-rose-500/70 to-fuchsia-500/70",
  },
  {
    title: "싱가포르 라이프",
    handle: "@sgp.daily",
    tags: "쇼츠 · 싱가포르",
    plays: "1.1M",
    grad: "from-emerald-400/80 via-cyan-400/70 to-fuchsia-500/70",
  },
  {
    title: "상하이 푸드",
    handle: "@shang.eats",
    tags: "틱톡 · 중국",
    plays: "2.5M",
    grad: "from-violet-500/80 via-rose-500/70 to-orange-400/70",
  },
];

export function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.04]);

  const [playing, setPlaying] = useState(false);

  const scrollRail = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="showreel" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6" ref={ref}>
        <Reveal className="mb-10 max-w-2xl">
          <div className="eyebrow mb-5">— 실제 캠페인 영상</div>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">
              <LineReveal>실제 캠페인을</LineReveal>
            </span>
            <span className="block">
              <LineReveal delay={0.15} sweep>
                <GlitchText className="inline-block">재생</GlitchText>
                <span className="ml-2 inline-block gradient-text">
                  해보세요.
                </span>
              </LineReveal>
            </span>
          </h2>
          <p className="lead-copy mt-5">
            아래는 최근 90일간 실제 송출된 컨텐츠의 하이라이트 일부입니다.
          </p>
        </Reveal>

        {/* 메인 영상 — 16:9 + 패럴랙스 + 브라운관 켜짐 모션 */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="relative isolate w-full overflow-hidden rounded-3xl"
        >
          <CRTReveal
            scanlines
            flicker
            className="aspect-video w-full overflow-hidden rounded-3xl"
          >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay={playing}
            muted
            loop
            playsInline
            poster=""
            preload="metadata"
          >
            {/* TODO: 실제 영상 URL — public/showreel.mp4 또는 CDN */}
            {/* <source src="/showreel.mp4" type="video/mp4" /> */}
          </video>

          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-cyan-400/40"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,oklch(0.78_0.22_305_/_0.6),transparent_60%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,oklch(0.09_0.012_280_/_0.7)_100%)]"
          />
          <div aria-hidden className="absolute inset-0 noise" />

          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] text-foreground sm:left-6 sm:top-6">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-fuchsia-400 opacity-80" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            </span>
            REC · LIVE CASE STUDY
          </div>

          <div className="absolute right-4 top-4 grid grid-cols-3 gap-3 sm:right-6 sm:top-6 sm:gap-5">
            {[
              { l: "총 도달", v: "8.7M" },
              { l: "전환", v: "21K" },
              { l: "ROAS", v: "5.2x" },
            ].map((m) => (
              <div key={m.l} className="text-right">
                <div className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {m.v}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/70 sm:text-[10px]">
                  {m.l}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Magnetic strength={0.18}>
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                aria-label={playing ? "일시정지" : "재생"}
                className="group/play relative inline-flex size-20 items-center justify-center rounded-full bg-background/30 backdrop-blur-md transition hover:scale-110 sm:size-24"
              >
                <span className="absolute inset-0 rounded-full border border-white/30" />
                <span className="absolute inset-0 animate-ping rounded-full border border-fuchsia-400/50" />
                <span className="absolute inset-1 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 opacity-90 shadow-[0_0_40px_oklch(0.78_0.22_305_/_0.7)]" />
                {playing ? (
                  <Pause className="relative size-7 fill-current text-black sm:size-8" />
                ) : (
                  <Play className="relative ml-1 size-7 fill-current text-black sm:size-8" />
                )}
              </button>
            </Magnetic>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70 sm:text-[11px]">
              Case · 2026 Q1 · Beauty · 도쿄
            </div>
            <div className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-3xl">
              7일만에 도쿄 점유율 2배 만든 캠페인
            </div>
          </div>
          </CRTReveal>
        </motion.div>

        {/* 클립 캐러셀 (Swiper-like) */}
        <div className="mt-10 sm:mt-14">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              // 6개 라이브 클립 · 드래그 가능
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollRail(-1)}
                aria-label="이전"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition hover:bg-white/[0.1]"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollRail(1)}
                aria-label="다음"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition hover:bg-white/[0.1]"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div
            ref={railRef}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
          >
            {CLIPS.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, x: 80, rotate: 4 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group glow-border relative isolate aspect-[9/16] w-[68vw] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[280px]"
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    c.grad
                  )}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.09_0.012_280_/_0.85)_100%)]"
                />
                <div aria-hidden className="absolute inset-0 noise" />

                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster=""
                />

                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-foreground">
                  <MonitorPlay className="size-3" />
                  {c.tags}
                </div>

                <div className="absolute right-3 top-3 rounded-full glass px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-foreground">
                  {c.plays}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
                    <Hash className="size-2.5" />
                    {c.handle}
                  </div>
                  <div className="mt-1 font-heading text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {c.title}
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-background/40 backdrop-blur-md">
                    <span className="absolute inset-0 rounded-full border border-white/30" />
                    <Play className="ml-0.5 size-5 fill-current text-foreground" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
