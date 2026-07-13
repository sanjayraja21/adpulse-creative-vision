import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Radar,
  BarChart3,
  Target,
  Activity,
  Sparkles,
  History,
  Settings,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Agent 1 — Scout", url: "/scout", icon: Radar },
  { title: "Agent 2 — Analyst", url: "/analyst", icon: BarChart3 },
  { title: "Agent 3 — Strategist", url: "/strategist", icon: Target },
  { title: "Agent 4 — Fatigue Monitor", url: "/fatigue", icon: Activity },
  { title: "Agent 5 — Creative", url: "/creative", icon: Sparkles },
  { title: "Run History", url: "/history", icon: History },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside
      className={`sticky top-0 h-screen shrink-0 border-r border-sidebar-border bg-sidebar transition-[width] duration-300 ${
        collapsed ? "w-[72px]" : "w-64"
      }`}
    >
      <div className="flex h-16 items-center gap-2 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
          <Zap className="h-5 w-5" />
        </div>
        {!collapsed && (
          <div>
            <div className="text-sm font-bold tracking-tight">AdPulse</div>
            <div className="text-[10px] text-muted-foreground">Creative Intelligence</div>
          </div>
        )}
      </div>
      <nav className="flex flex-col gap-1 px-3 py-3">
        {items.map((item) => {
          const active = pathname === item.url;
          return (
            <Link
              key={item.url}
              to={item.url}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="sb-active"
                  className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <item.icon className="h-[18px] w-[18px] shrink-0" />
              {!collapsed && <span className="truncate">{item.title}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
