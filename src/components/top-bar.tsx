import { Menu, Play, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePipeline } from "@/lib/pipeline";

export function TopBar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { run, running } = usePipeline();
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-6 backdrop-blur">
      <button
        onClick={onToggleSidebar}
        className="rounded-md p-2 text-muted-foreground hover:bg-accent"
        aria-label="Toggle sidebar"
      >
        <Menu className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2">
        <span className="text-base font-bold tracking-tight">AdPulse</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
          <span className="live-dot" />
          LIVE
        </span>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <Button
          onClick={run}
          disabled={running}
          className="gap-2 rounded-full bg-primary shadow-lift hover:bg-primary/90"
        >
          {running ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Play className="h-4 w-4 fill-current" />
          )}
          {running ? "Running…" : "Run Pipeline"}
        </Button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo-400 text-sm font-semibold text-primary-foreground">
          AR
        </div>
      </div>
    </header>
  );
}
