import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";
import { PageHeader, StatusBadge } from "@/components/page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/_app/strategist")({
  component: Strategist,
});

const rows = [
  { angle: "Performance", avg_days_running: 24.3, n_ads: 12 },
  { angle: "Aspirational", avg_days_running: 19.7, n_ads: 9 },
  { angle: "Social Proof", avg_days_running: 27.8, n_ads: 8 },
  { angle: "Innovation", avg_days_running: 15.2, n_ads: 6 },
  { angle: "Discount", avg_days_running: 8.4, n_ads: 5 },
  { angle: "Brand Legacy", avg_days_running: 22.0, n_ads: 4 },
];

function Strategist() {
  return (
    <div>
      <PageHeader
        title="Agent 3 — Strategist"
        description="Finds messaging angles competitors ride longest — and gaps in your own brand."
        badge={<StatusBadge status="pending" />}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Angle</TableHead>
              <TableHead className="text-right">Avg Days Running</TableHead>
              <TableHead className="text-right"># Ads</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <motion.tr
                key={r.angle}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
                className="border-b hover:bg-muted/40"
              >
                <TableCell className="font-medium">{r.angle}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {r.avg_days_running.toFixed(1)}
                </TableCell>
                <TableCell className="text-right tabular-nums">{r.n_ads}</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-6 flex gap-4 rounded-2xl border border-warning/40 bg-warning/10 p-5 shadow-card"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warning/30 text-warning-foreground">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-warning-foreground">
            Messaging gaps our brand hasn't used
          </div>
          <p className="mt-1 text-sm text-warning-foreground/80">
            Competitors are riding <b>Social Proof</b> (avg 27.8 days) and <b>Brand Legacy</b>{" "}
            (avg 22 days) hard — neither appears in our own active creative set. Consider testing
            variants in these angles.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
