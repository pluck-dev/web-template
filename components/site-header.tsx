import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "서비스", href: "#services" },
  { label: "프로세스", href: "#process" },
  { label: "성과", href: "#stats" },
  { label: "요금", href: "#pricing" },
  { label: "고객사례", href: "#testimonials" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-4 py-2 sm:px-6">
        <Link
          href="#top"
          className="flex items-center gap-2 font-heading text-base font-semibold tracking-tight"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_18px_oklch(0.78_0.22_305_/_0.6)]">
            <span className="absolute inset-[2px] rounded-full bg-background/90" />
            <span className="relative font-mono text-[10px] font-bold gradient-text">
              α
            </span>
          </span>
          <span>ALPHA</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/[0.04] hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            <Link href="#contact">로그인</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-black shadow-[0_0_22px_oklch(0.78_0.22_305_/_0.45)] hover:opacity-90"
          >
            <Link href="#contact">무료 상담 →</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
