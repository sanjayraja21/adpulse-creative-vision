import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export const AGENT_STEPS = [
  { key: "scout", label: "Scout" },
  { key: "analyst", label: "Analyst" },
  { key: "strategist", label: "Strategist" },
  { key: "fatigue", label: "Fatigue" },
  { key: "creative", label: "Creative" },
] as const;

export type AgentKey = (typeof AGENT_STEPS)[number]["key"];

type PipelineCtx = {
  running: boolean;
  activeStep: number; // -1 idle, 0..4 running that step, 5 done
  run: () => void;
};

const Ctx = createContext<PipelineCtx | null>(null);

export function PipelineProvider({ children }: { children: ReactNode }) {
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  const run = useCallback(() => {
    if (running) return;
    setRunning(true);
    setActiveStep(0);
    let i = 0;
    const tick = () => {
      i += 1;
      if (i >= AGENT_STEPS.length) {
        setActiveStep(AGENT_STEPS.length);
        setTimeout(() => {
          setRunning(false);
          setActiveStep(-1);
        }, 1200);
        return;
      }
      setActiveStep(i);
      setTimeout(tick, 900);
    };
    setTimeout(tick, 900);
  }, [running]);

  return <Ctx.Provider value={{ running, activeStep, run }}>{children}</Ctx.Provider>;
}

export function usePipeline() {
  const c = useContext(Ctx);
  if (!c) throw new Error("PipelineProvider missing");
  return c;
}
