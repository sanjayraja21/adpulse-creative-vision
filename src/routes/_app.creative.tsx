import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { PageHeader, StatusBadge } from "@/components/page-header";

export const Route = createFileRoute("/_app/creative")({
  component: Creative,
});

const variants = [
  {
    headline: "Run with 1M+",
    body: "Join 1 million+ runners who chose StrideRight.",
    angle: "social proof",
  },
  {
    headline: "Top Choice",
    body: "90% of athletes recommend StrideRight shoes.",
    angle: "social proof",
  },
  {
    headline: "Runners Love",
    body: "4.5/5 stars from 50k+ reviews. Try StrideRight.",
    angle: "social proof",
  },
];

function Creative() {
  return (
    <div>
      <PageHeader
        title="Agent 5 — Creative"
        description="Triggers only when fatigue is detected AND a messaging gap exists."
        badge={<StatusBadge status="live" />}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {variants.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
          >
            <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Variant {i + 1}
            </div>
            <h3 className="mt-2 text-xl font-bold tracking-tight">{v.headline}</h3>
            <p className="mt-2 text-sm text-foreground/80">{v.body}</p>
            <div className="mt-5 flex items-center gap-2">
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                {v.angle}
              </span>
              <span className="text-xs text-muted-foreground">AI-generated</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
