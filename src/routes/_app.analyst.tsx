import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHeader, StatusBadge } from "@/components/page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/_app/analyst")({
  component: Analyst,
});

const rows = [
  { headline: "Just Do It. Again.", angle: "Brand Legacy", hook: "Nostalgia", offer: "—", cta: "Shop Now" },
  { headline: "Impossible Is Nothing — Summer Drop", angle: "Aspirational", hook: "Bold statement", offer: "New drop", cta: "Explore" },
  { headline: "Train Loud. Rest Louder.", angle: "Performance", hook: "Duality", offer: "—", cta: "Shop Gear" },
  { headline: "Made For Runners, By Runners", angle: "Social Proof", hook: "Community", offer: "—", cta: "Learn More" },
  { headline: "Sound Mind, Sound Body — 20% Off", angle: "Discount", hook: "Wellness", offer: "20% off", cta: "Save Now" },
  { headline: "Fly Human Fly — New Clifton 10", angle: "Innovation", hook: "Product news", offer: "New model", cta: "Discover" },
];

const angleData = [
  { angle: "Social Proof", n: 8 },
  { angle: "Performance", n: 12 },
  { angle: "Discount", n: 5 },
  { angle: "Aspirational", n: 9 },
  { angle: "Innovation", n: 6 },
  { angle: "Brand Legacy", n: 4 },
];
const max = Math.max(...angleData.map((d) => d.n));

function Analyst() {
  return (
    <div>
      <PageHeader
        title="Agent 2 — Analyst"
        description="Deconstructs competitor creative into angles, hooks, offers and CTAs."
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
              <TableHead>Headline</TableHead>
              <TableHead>Angle</TableHead>
              <TableHead>Hook</TableHead>
              <TableHead>Offer</TableHead>
              <TableHead>CTA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
                className="border-b hover:bg-muted/40"
              >
                <TableCell className="font-medium">{r.headline}</TableCell>
                <TableCell>{r.angle}</TableCell>
                <TableCell className="text-muted-foreground">{r.hook}</TableCell>
                <TableCell className="text-muted-foreground">{r.offer}</TableCell>
                <TableCell>{r.cta}</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card"
      >
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Angle Distribution
        </h3>
        <div className="mt-4 space-y-3">
          {angleData.map((d, i) => (
            <div key={d.angle} className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium">{d.angle}</div>
              <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(d.n / max) * 100}%` }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-indigo-400"
                />
              </div>
              <div className="w-8 text-right text-sm font-semibold tabular-nums">{d.n}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
