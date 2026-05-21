"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GlitchText } from "@/components/glitch-text";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { CharReveal } from "@/components/motion/char-reveal";

export function Cta() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* 거대 백그라운드 텍스트 (모바일 사이즈 축소) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <span className="font-heading text-[7rem] font-black leading-none tracking-tighter text-white/[0.03] sm:text-[14rem] md:text-[20rem]">
          ALPHA
        </span>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div className="eyebrow mb-5">— 상담 신청</div>
          <h2 className="font-heading text-3xl font-bold leading-[1.0] tracking-tight sm:text-6xl md:text-7xl">
            <CharReveal text="이제 " />
            <GlitchText className="inline-block">움직일</GlitchText>{" "}
            <span className="gradient-text">
              <CharReveal text="차례입니다." delay={0.2} />
            </span>
          </h2>
          <p className="lead-copy mt-7 max-w-md">
            폼을 남겨주시면 영업일 기준 12시간 내 답변드립니다.
            상담은 언제나 무료. 부담 없이 던져보세요.
          </p>

          <div className="mt-10 space-y-3.5">
            {[
              "평균 24시간 셋업",
              "성과 안 나오면 멈추세요 — 위약금 없음",
              "수출바우처/정부지원 정산 호환",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 shadow-[0_0_10px_oklch(0.78_0.22_305_/_0.6)]" />
                <span className="text-[15px] text-foreground-soft">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 4000);
          }}
          initial={{ opacity: 0, y: 80, rotate: 4, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            mass: 0.9,
          }}
          className="glow-border relative rounded-3xl glass p-6 sm:p-8"
        >
          <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            </span>
            응답 12h
          </div>

          <h3 className="font-heading text-2xl font-semibold tracking-tight">
            무료 상담 신청
          </h3>

          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="brand" className="mb-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                브랜드명
              </Label>
              <div className="relative">
                <Building2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="brand"
                  placeholder="ALPHA Inc."
                  className="pl-9"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="name" className="mb-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                담당자
              </Label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="홍길동"
                  className="pl-9"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="mb-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                이메일
              </Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@brand.com"
                  className="pl-9"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="msg" className="mb-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                간단한 캠페인 목표
              </Label>
              <Textarea
                id="msg"
                placeholder="ex) 일본 시장에서 신제품 런칭하려고 합니다. 예산 월 500만 원."
                rows={4}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-xs text-muted-foreground">
              제출 시 개인정보 처리방침에 동의합니다.
            </span>
            <Magnetic strength={0.25}>
              <Button
                type="submit"
                size="lg"
                className="h-11 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 text-black shadow-[0_0_28px_oklch(0.78_0.22_305_/_0.5)] hover:opacity-90"
              >
                상담 신청
                <ArrowRight className="size-4" />
              </Button>
            </Magnetic>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-3 text-sm text-fuchsia-100"
            >
              ✨ 접수됐어요. 12시간 내 답변드립니다.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
