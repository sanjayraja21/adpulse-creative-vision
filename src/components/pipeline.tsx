import { motion } from "motion/react";
import { Radar, BarChart3, Target, Activity, Sparkles, Check, Loader2 } from "lucide-react";
import { AGENT_STEPS, usePipeline } from "@/lib/pipeline";

const meta: Record<
  string,
  { icon: typeof Radar; title: string; desc: string; status: "live" | "pending" }
> = {
  scout: {
    icon: Radar,
    title: "Agent 1 — Scout",
    desc: "Discovers active competitor ads across platforms.",
    status: "pending",
  },
  analyst: {
    icon: BarChart3,
    title: "Agent 2 — Analyst",
    desc: "Extracts angles, hooks, offers and CTAs from creatives.",
    status: "pending",
  },
  strategist: {
    icon: Target,
    title: "Agent 3 — Strategist",
    desc: "Surfaces long-running angles and messaging gaps.",
    status: "pending",
  },
  fatigue: {
    icon: Activity,
    title: "Agent 4 — Fatigue Monitor",
    desc: "Watches CTR & frequency to detect creative fatigue.",
    status: "live",
  },
  creative: {
    icon: Sparkles,
    title: "Agent 5 — Creative",
    desc: "Generates fresh variants when fatigue + gaps align.",
    status: "live",
  },
};

export function Pipeline() {
  const { activeStep, running } = usePipeline();

  return (
    <div className="relative">
      {AGENT_STEPS.map((step, i) => {
        const m = meta[step.key];
        const Icon = m.icon;
        const isActive = running && activeStep === i;
        const isDone = running && activeStep > i;
        const isLast = i === AGENT_STEPS.length - 1;

        return (
          <div key={step.key} className="relative pb-6 last:pb-0">
            {!isLast && (
              <svg
                className="absolute left-[27px] top-14 h-[calc(100%-2rem)] w-2 -translate-x-1/2"
                aria-hidden
              >
                <line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-border ${running ? "flow-line" : ""} ${
                    isDone ? "text-primary" : ""
                  }`}
                />
              </svg>
            )}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              className={`relative flex items-start gap-4 rounded-2xl border bg-card p-4 shadow-card transition-all ${
                isActive
                  ? "border-primary/50 shadow-lift ring-2 ring-primary/20"
                  : isDone
                    ? "border-success/40"
                    : "border-border"
              }`}
            >
              <div
                className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : isDone
                      ? "bg-success text-success-foreground"
                      : "bg-secondary text-muted-foreground"
                }`}
              >
                {isActive ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : isDone ? (
                  <Check className="h-6 w-6" />
                ) : (
                  <Icon className="h-6 w-6" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold">{m.title}</h3>
                  {m.status === "live" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-success">
                      <span className="live-dot" />
                      Live
                    </span>
                  ) : (
                    <span className="rounded-full border border-warning/40 bg-warning/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-warning-foreground">
                      Pending
                    </span>
                  )}
                  {isActive && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                      Running
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
