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

export const Route = createFileRoute("/_app/scout")({
  component: Scout,
});

const rows = [
  { competitor: "Nike", headline: "Just Do It. Again.", format: "Video", days_running: 22 },
  { competitor: "Adidas", headline: "Impossible Is Nothing — Summer Drop", format: "Carousel", days_running: 14 },
  { competitor: "Under Armour", headline: "Train Loud. Rest Louder.", format: "Static", days_running: 9 },
  { competitor: "New Balance", headline: "Made For Runners, By Runners", format: "Video", days_running: 31 },
  { competitor: "Asics", headline: "Sound Mind, Sound Body — 20% Off", format: "Static", days_running: 6 },
  { competitor: "Hoka", headline: "Fly Human Fly — New Clifton 10", format: "Carousel", days_running: 18 },
];

function Scout() {
  return (
    <div>
      <PageHeader
        title="Agent 1 — Scout"
        description="Discovers competitor ads across ad libraries and social channels."
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
              <TableHead>Competitor</TableHead>
              <TableHead>Headline</TableHead>
              <TableHead>Format</TableHead>
              <TableHead className="text-right">Days Running</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.3 }}
                className="border-b transition-colors hover:bg-muted/40"
              >
                <TableCell className="font-medium">{r.competitor}</TableCell>
                <TableCell className="text-muted-foreground">{r.headline}</TableCell>
                <TableCell>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                    {r.format}
                  </span>
                </TableCell>
                <TableCell className="text-right tabular-nums">{r.days_running}</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
