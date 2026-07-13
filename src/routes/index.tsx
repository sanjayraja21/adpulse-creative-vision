import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Loader2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/dashboard" }), 900);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lift"
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lift">
            <Zap className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">AdPulse</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Agentic AI for Competitor Ad Intelligence & Creative Fatigue Detection
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@brand.com" defaultValue="demo@adpulse.ai" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" defaultValue="demo1234" required />
          </div>
          <Button type="submit" disabled={loading} className="mt-2 w-full gap-2 rounded-lg">
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Any credentials will take you to the dashboard.
        </p>
      </motion.div>
    </div>
  );
}
