import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Sparkles,
  Target,
  TrendingUp,
  GraduationCap,
  ArrowUpRight,
  Download,
  FileText,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  CartesianGrid,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/stat-card";
import { courses, dashboardStats, sampleResume } from "@/lib/sample-data";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "Dashboard — SkillForge" }] }),
});

function Dashboard() {
  const { resumeScore, atsScore, skillMatch, weeklyProgress, skillRadar, rolesMatched } =
    dashboardStats;
  const inProgress = courses.filter((c) => c.progress > 0 && c.progress < 100).slice(0, 3);

  return (
    <div className="space-y-8">
      <section className="flex flex-wrap items-center justify-between gap-4 animate-fade-in">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <h1 className="text-3xl font-bold tracking-tight">{sampleResume.name.split(" ")[0]} 👋</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Targeting <span className="font-medium text-foreground">{sampleResume.targetRole}</span> · Last analysis 2 days ago
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="glass">
            <Download className="mr-2 h-4 w-4" /> Download report
          </Button>
          <Button asChild className="gradient-primary text-primary-foreground shadow-glow border-0">
            <Link to="/app/upload">
              <FileText className="mr-2 h-4 w-4" /> Re-analyze
            </Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Resume Score" value={`${resumeScore}/100`} hint="+6 vs last upload" icon={Award} accent="primary" />
        <StatCard label="ATS Score" value={`${atsScore}%`} hint="Recruiter-bot ready" icon={Sparkles} accent="success" />
        <StatCard label="Skill Match" value={`${skillMatch}%`} hint={`vs ${sampleResume.targetRole}`} icon={Target} accent="warning" />
        <StatCard label="Roles Matched" value={rolesMatched.length} hint={rolesMatched[0]} icon={TrendingUp} accent="info" />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="glass shadow-elegant lg:col-span-2 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Skill match trajectory</h3>
              <p className="text-xs text-muted-foreground">Past 7 weeks</p>
            </div>
            <Badge variant="secondary" className="gap-1">
              <TrendingUp className="h-3 w-3" /> +30%
            </Badge>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyProgress}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-popover)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="score" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#grad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass shadow-elegant p-6">
          <h3 className="text-base font-semibold">Skill landscape</h3>
          <p className="text-xs text-muted-foreground">Strengths & gaps</p>
          <div className="mt-2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillRadar}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis dataKey="area" tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} />
                <Radar
                  dataKey="value"
                  stroke="var(--color-primary)"
                  fill="var(--color-primary)"
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="glass shadow-elegant p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold">Continue learning</h3>
              <p className="text-xs text-muted-foreground">Pick up where you left off</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app/courses">
                View all <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
          <div className="mt-4 space-y-3">
            {inProgress.map((c) => (
              <div
                key={c.id}
                className="rounded-xl border border-border/60 bg-background/40 p-4 transition hover:bg-background/70"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{c.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {c.platform} · {c.duration} · {c.level}
                    </p>
                  </div>
                  <Badge variant={c.paid ? "default" : "secondary"} className="shrink-0">
                    {c.paid ? "Paid" : "Free"}
                  </Badge>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Progress value={c.progress} className="h-2 flex-1" />
                  <span className="text-xs font-medium tabular-nums">{c.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="glass shadow-elegant p-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <h3 className="text-base font-semibold">Recommended roles</h3>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Roles where you're most competitive today</p>
          <ul className="mt-4 space-y-3">
            {rolesMatched.map((role, i) => (
              <li
                key={role}
                className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium">{role}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {[78, 71, 65][i]}% match · {[412, 1.2, 0.8][i]}{i === 0 ? "" : "k"} open jobs
                  </p>
                </div>
                <Badge variant="secondary" className="tabular-nums">{[78, 71, 65][i]}%</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
