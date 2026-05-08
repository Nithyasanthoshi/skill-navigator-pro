import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  value: string | number;
  hint?: string;
  icon: LucideIcon;
  accent?: "primary" | "success" | "warning" | "info";
  className?: string;
};

const accents = {
  primary: "from-primary/20 to-primary-glow/20 text-primary",
  success: "from-success/20 to-success/10 text-success",
  warning: "from-warning/20 to-warning/10 text-warning",
  info: "from-chart-3/20 to-chart-3/10 text-chart-3",
};

export function StatCard({ label, value, hint, icon: Icon, accent = "primary", className }: Props) {
  return (
    <Card className={cn("glass shadow-elegant overflow-hidden p-5 animate-slide-up", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
          {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
        </div>
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br",
            accents[accent],
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}
