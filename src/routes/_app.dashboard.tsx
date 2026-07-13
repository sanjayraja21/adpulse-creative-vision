import { createFileRoute } from "@tanstack/react-router";
import { Eye, AlertTriangle, Sparkles, Users } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { Pipeline } from "@/components/pipeline";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/_app/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Overview"
        description="Live view of your agentic ad-intelligence pipeline."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Ads Tracked" value={148} icon={<Eye className="h-4 w-4" />} accent="primary" delay={0.0} />
        <MetricCard label="Fatigue Alerts" value={2} icon={<AlertTriangle className="h-4 w-4" />} accent="destructive" delay={0.08} />
        <MetricCard label="Creatives Generated" value={3} icon={<Sparkles className="h-4 w-4" />} accent="success" delay={0.16} />
        <MetricCard label="Competitors" value={3} icon={<Users className="h-4 w-4" />} accent="warning" delay={0.24} />
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Agent Pipeline</h2>
          <span className="text-xs text-muted-foreground">5 agents · vertical flow</span>
        </div>
        <Pipeline />
      </div>
    </div>
  );
}
