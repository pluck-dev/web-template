"use client";

import {
  Package,
  MapPin,
  MonitorPlay,
  Sparkles,
  Globe2,
  Megaphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/glitch-text";
import { FlyInCard } from "@/components/motion/fly-in-card";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { CharReveal } from "@/components/motion/char-reveal";

const SERVICES = [
  {
    icon: Package,
    tag: "배송형",
    title: "제품 체험단",
    desc: "해외 인플루언서가 제품을 직접 받고 콘텐츠로 풀어냅니다. 선별부터 SNS 업로드까지 6단계 풀턴키.",
    metric: "평균 ROAS 4.8x",
    accent: "from-fuchsia-500/40 to-fuchsia-500/0",
    spot: "oklch(0.78 0.22 305 / 0.25)",
  },
  {
    icon: MapPin,
    tag: "방문형",
    title: "오프라인 체험단",
    desc: "병원 · 음식점 · 호텔. 현지 관광객의 발길을 직접 만들어냅니다.",
    metric: "월 평균 220+ 방문",
    accent: "from-violet-500/40 to-violet-500/0",
    spot: "oklch(0.7 0.25 295 / 0.25)",
  },
  {
    icon: MonitorPlay,
    tag: "롱폼",
    title: "유튜브 체험단",
    desc: "13,850명의 글로벌 마이크로 유튜버 풀. 가성비와 전환율을 동시에 잡습니다.",
    metric: "구독 1만~100만",
    accent: "from-rose-500/40 to-rose-500/0",
    spot: "oklch(0.78 0.24 340 / 0.25)",
  },
  {
    icon: Sparkles,
    tag: "숏폼",
    title: "Reels · TikTok",
    desc: "트렌드를 타는 짧고 강한 영상. 알고리즘에 노출되는 포맷 전략까지.",
    metric: "평균 도달 320K",
    accent: "from-cyan-400/40 to-cyan-400/0",
    spot: "oklch(0.85 0.18 200 / 0.25)",
  },
  {
    icon: Globe2,
    tag: "글로벌",
    title: "수출바우처 대응",
    desc: "정부지원 사업과 연동 가능한 정규 프로세스 운영. 정산까지 안심.",
    metric: "12개국 커버",
    accent: "from-lime-400/40 to-lime-400/0",
    spot: "oklch(0.9 0.22 130 / 0.22)",
  },
  {
    icon: Megaphone,
    tag: "올인원",
    title: "캠페인 매니지먼트",
    desc: "기획 · 섭외 · 가이드 · 검수 · 리포트. 마케팅팀이 따로 필요 없습니다.",
    metric: "셋업 24시간",
    accent: "from-orange-400/40 to-orange-400/0",
    spot: "oklch(0.83 0.18 60 / 0.22)",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mb-14 max-w-2xl">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-white/15 bg-white/[0.03] font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            / 01 — Services
          </Badge>
          <h2 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <CharReveal text="한 곳에서 굴리는 " />
            <GlitchText className="inline-block">6가지</GlitchText>{" "}
            <span className="gradient-text">
              <CharReveal text="실전 채널" delay={0.2} />
            </span>
          </h2>
          <p className="lead-copy mt-5 max-w-xl">
            예산 · 시장 · 목적에 따라 채널을 조립합니다. 결국 매출이 나오는
            방식으로.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <FlyInCard key={s.title} index={i} from="scatter">
                <SpotlightCard
                  color={s.spot}
                  className="group glow-border h-full rounded-2xl glass p-6 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-gradient-to-br ${s.accent} blur-2xl transition-transform duration-500 group-hover:scale-125`}
                  />
                  <div className="flex items-center justify-between">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-fuchsia-300 shadow-[inset_0_0_24px_oklch(0.78_0.22_305_/_0.18)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <Badge className="rounded-full bg-white/[0.06] text-[10px] font-medium text-foreground hover:bg-white/[0.06]">
                      {s.tag}
                    </Badge>
                  </div>

                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="body-copy mt-2.5 text-[14.5px]">
                    {s.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Result
                    </span>
                    <span className="font-mono text-sm font-semibold gradient-text">
                      {s.metric}
                    </span>
                  </div>
                </SpotlightCard>
              </FlyInCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
