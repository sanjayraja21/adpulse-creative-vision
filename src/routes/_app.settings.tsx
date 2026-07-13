import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_app/settings")({
  component: Settings,
});

function Settings() {
  return (
    <div>
      <PageHeader title="Settings" description="Configure agents, integrations and alerts." />

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="text-base font-semibold">Brand</h3>
          <p className="mt-1 text-sm text-muted-foreground">Used across generated creatives.</p>
          <div className="mt-4 space-y-3">
            <div>
              <Label htmlFor="brand">Brand name</Label>
              <Input id="brand" defaultValue="StrideRight" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="voice">Voice</Label>
              <Input id="voice" defaultValue="Confident, athletic, community-first" className="mt-1" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h3 className="text-base font-semibold">Alerts</h3>
          <p className="mt-1 text-sm text-muted-foreground">When to notify the team.</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="fatigue">Creative fatigue alerts</Label>
              <Switch id="fatigue" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="gaps">New messaging-gap alerts</Label>
              <Switch id="gaps" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="daily">Daily digest</Label>
              <Switch id="daily" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-card md:col-span-2">
          <h3 className="text-base font-semibold">Integrations</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Meta Ad Library, TikTok Creative Center and Google Ads coming soon.
          </p>
          <div className="mt-4 flex gap-2">
            <Button variant="outline">Connect Meta</Button>
            <Button variant="outline">Connect TikTok</Button>
            <Button variant="outline">Connect Google</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
