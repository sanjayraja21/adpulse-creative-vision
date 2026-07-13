import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader } from "@/components/page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/_app/history")({
  component: History,
});

const runs = [
  {
    run_time: "2026-07-13 09:14",
    new_ads: 12,
    notes: "2 fatigue alerts; top gap angle: social proof",
  },
  { run_time: "2026-07-12 09:02", new_ads: 8, notes: "1 fatigue alert; refreshed 2 variants" },
  { run_time: "2026-07-11 09:07", new_ads: 15, notes: "New competitor detected: Hoka" },
  { run_time: "2026-07-10 09:00", new_ads: 6, notes: "No new fatigue signals" },
  { run_time: "2026-07-09 09:03", new_ads: 11, notes: "Angle shift observed: Nike → performance" },
];

function History() {
  return (
    <div>
      <PageHeader title="Run History" description="Every pipeline execution, with detected signals." />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Run Time</TableHead>
              <TableHead className="text-right">New Ads</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {runs.map((r, i) => (
              <motion.tr
                key={r.run_time}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
                className="border-b hover:bg-muted/40"
              >
                <TableCell className="font-mono text-sm">{r.run_time}</TableCell>
                <TableCell className="text-right tabular-nums font-semibold">{r.new_ads}</TableCell>
                <TableCell className="text-muted-foreground">{r.notes}</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      <div className="mt-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Timeline
        </h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-1 h-full w-px bg-border" />
          {runs.map((r, i) => (
            <motion.div
              key={r.run_time}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
              className="relative mb-5 rounded-xl border border-border bg-card p-4 shadow-card"
            >
              <div className="absolute -left-[18px] top-5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-mono text-xs text-muted-foreground">{r.run_time}</span>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                  +{r.new_ads} ads
                </span>
              </div>
              <div className="mt-1 text-sm">{r.notes}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
