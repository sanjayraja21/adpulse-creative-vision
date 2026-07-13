import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 90, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function MetricCard({
  label,
  value,
  icon,
  accent = "primary",
  delay = 0,
}: {
  label: string;
  value: number;
  icon: ReactNode;
  accent?: "primary" | "success" | "warning" | "destructive";
  delay?: number;
}) {
  const accentMap = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/20 text-warning-foreground",
    destructive: "bg-destructive/10 text-destructive",
  } as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-lift"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accentMap[accent]}`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 text-4xl font-bold tracking-tight">
        <AnimatedNumber value={value} />
      </div>
    </motion.div>
  );
}
