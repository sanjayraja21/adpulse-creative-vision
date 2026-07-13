import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { TopBar } from "@/components/top-bar";
import { PipelineProvider } from "@/lib/pipeline";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <PipelineProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar collapsed={collapsed} />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar onToggleSidebar={() => setCollapsed((c) => !c)} />
          <main className="flex-1 px-6 py-8 md:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-7xl"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </PipelineProvider>
  );
}
