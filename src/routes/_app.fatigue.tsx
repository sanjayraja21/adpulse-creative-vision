import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader, StatusBadge } from "@/components/page-header";

export const Route = createFileRoute("/_app/fatigue")({
  component: Fatigue,
});

// Build 30-day CTR series for 3 ads
function build() {
  const data: Array<Record<string, number>> = [];
  for (let day = 1; day <= 30; day++) {
    // Summer Sale Video: stable ~0.035 then declines after day 9
    const summer =
      day <= 9
        ? 0.036 + Math.sin(day) * 0.001
        : Math.max(0.018, 0.036 - (day - 9) * 0.0012 + Math.cos(day) * 0.0008);
    // Free Shipping Static: stable ~0.032 then declines after day 18
    const shipping =
      day <= 18
        ? 0.033 + Math.cos(day) * 0.0009
        : Math.max(0.019, 0.033 - (day - 18) * 0.0018 + Math.sin(day) * 0.0007);
    // New Arrival Carousel: stable ~0.028
    const carousel = 0.028 + Math.sin(day / 2) * 0.0015;
    data.push({
      day,
      "Summer Sale Video": +summer.toFixed(4),
      "Free Shipping Static": +shipping.toFixed(4),
      "New Arrival Carousel": +carousel.toFixed(4),
    });
  }
  return data;
}

const data = build();

const alerts = [
  {
    ad: "Free Shipping Static",
    text: "CTR down 29% vs 7-day baseline (freq 4.2) — creative fatigue detected.",
  },
  {
    ad: "Summer Sale Video",
    text: "CTR down 28% vs 7-day baseline (freq 4.2) — creative fatigue detected.",
  },
];

function Fatigue() {
  return (
    <div>
      <PageHeader
        title="Agent 4 — Fatigue Monitor"
        description="Real-time creative fatigue detection across active ads."
        badge={<StatusBadge status="live" />}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border bg-card p-6 shadow-card"
      >
        <div className="mb-4 flex items-baseline justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            CTR — Last 30 Days
          </h3>
          <span className="text-xs text-muted-foreground">Higher is better</span>
        </div>
        <div className="h-[340px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.01 255)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="oklch(0.55 0.03 260)" />
              <YAxis tick={{ fontSize: 12 }} stroke="oklch(0.55 0.03 260)" />
              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid oklch(0.92 0.01 255)",
                  fontSize: 12,
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="Summer Sale Video"
                stroke="oklch(0.6 0.22 25)"
                strokeWidth={2.5}
                dot={false}
                animationDuration={1600}
              />
              <Line
                type="monotone"
                dataKey="Free Shipping Static"
                stroke="oklch(0.53 0.22 275)"
                strokeWidth={2.5}
                dot={false}
                animationDuration={1600}
              />
              <Line
                type="monotone"
                dataKey="New Arrival Carousel"
                stroke="oklch(0.68 0.18 150)"
                strokeWidth={2.5}
                dot={false}
                animationDuration={1600}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {alerts.map((a, i) => (
          <motion.div
            key={a.ad}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 rounded-2xl border border-destructive/30 bg-destructive/5 p-5 shadow-card"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-destructive">
                '{a.ad}'
              </div>
              <p className="mt-1 text-sm text-foreground/80">{a.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
