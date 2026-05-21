"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/glitch-text";
import { Reveal } from "@/components/motion/reveal";
import { CharReveal } from "@/components/motion/char-reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "최소 계약 단위가 어떻게 되나요?",
    a: "단일 캠페인(SPARK)부터 시작 가능합니다. 보통 첫 캠페인 결과를 보고 월간/분기 단위로 확장하세요.",
  },
  {
    q: "어떤 국가 인플루언서를 보유하고 있나요?",
    a: "일본, 태국, 싱가포르, 미국, 중국, 베트남 등 12개국. 마이크로(1만~)부터 미드티어(100만)까지 13,850명을 보유합니다.",
  },
  {
    q: "성과 측정은 어떻게 하나요?",
    a: "도달 · 저장 · 클릭 · 전환을 한 페이지 대시보드로 제공합니다. UTM 자동 부착, GA4 · Meta 픽셀 연동까지 무료.",
  },
  {
    q: "수출바우처 사업과 연동되나요?",
    a: "네, 정부지원 사업 정산 호환 프로세스를 SURGE 플랜에서 제공합니다. 견적 시 알려주시면 서류까지 챙겨드립니다.",
  },
  {
    q: "셋업까지 얼마나 걸리나요?",
    a: "평균 24시간 내 큐레이션 시작, 7일 내 첫 콘텐츠 노출입니다. 시즌 캠페인은 사전 협의로 더 빠르게도 가능합니다.",
  },
  {
    q: "콘텐츠 가이드/검수는 누가 하나요?",
    a: "전담 매니저가 광고법 · 표절 · 브랜드 가이드까지 체크합니다. 1차 편집본 단계에서 피드백을 받아 수정합니다.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal className="mb-12">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-white/15 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            / 06 — FAQ
          </Badge>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            <CharReveal text="자주 묻는 " />
            <GlitchText className="inline-block">질문</GlitchText>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.21, 1.02, 0.73, 1],
                }}
                className={cn(
                  "overflow-hidden rounded-2xl glass transition-colors",
                  isOpen && "border-fuchsia-400/30 bg-white/[0.06]"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "inline-flex size-7 shrink-0 items-center justify-center rounded-full border",
                      isOpen
                        ? "border-fuchsia-400/40 bg-fuchsia-400/15 text-fuchsia-300"
                        : "border-white/10 bg-white/[0.04] text-muted-foreground"
                    )}
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 1.02, 0.73, 1] }}
                    >
                      <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
