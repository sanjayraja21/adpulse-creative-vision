import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  badge,
}: {
  title: string;
  description?: string;
  badge?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6 flex flex-wrap items-start justify-between gap-3"
    >
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {badge}
    </motion.div>
  );
}

export function StatusBadge({
  status,
}: {
  status: "live" | "pending";
}) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
        <span className="live-dot" />
        LIVE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/40 bg-warning/15 px-3 py-1 text-xs font-semibold text-warning-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-warning" />
      Pending — API integration
    </span>
  );
}
