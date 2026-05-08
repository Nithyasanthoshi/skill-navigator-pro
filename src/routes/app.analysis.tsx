import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FolderGit2,
  AlertCircle,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sampleResume, skillGaps } from "@/lib/sample-data";

export const Route = createFileRoute("/app/analysis")({
  component: Analysis,
  head: () => ({ meta: [{ title: "Skill Analysis — SkillForge" }] }),
});

const SKILL_GROUPS: { key: keyof typeof sampleResume.skills; label: string; tone: string }[] = [
  { key: "frontend", label: "Frontend", tone: "bg-chart-1/15 text-chart-1 border-chart-1/30" },
  { key: "backend", label: "Backend", tone: "bg-chart-2/15 text-chart-2 border-chart-2/30" },
  { key: "database", label: "Database", tone: "bg-chart-3/15 text-chart-3 border-chart-3/30" },
  { key: "devops", label: "DevOps", tone: "bg-chart-4/15 text-chart-4 border-chart-4/30" },
  { key: "languages", label: "Languages", tone: "bg-chart-5/15 text-chart-5 border-chart-5/30" },
  { key: "tools", label: "Tools", tone: "bg-muted text-muted-foreground border-border" },
];

function Analysis() {
  const r = sampleResume;
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skill analysis</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-extracted profile and gap analysis for <span className="font-medium text-foreground">{r.targetRole}</span>
          </p>
        </div>
        <Button asChild className="gradient-primary text-primary-foreground shadow-glow border-0">
          <Link to="/app/courses">
            View learning path <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Card className="glass shadow-elegant p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Candidate profile</p>
            <h2 className="mt-1 text-2xl font-bold">{r.name}</h2>
            <p className="text-sm text-muted-foreground">{r.headline}</p>
          </div>
          <div className="grid gap-1 text-sm">
            <span className="inline-flex items-center gap-2 text-muted-foreground"><Mail className="h-3.5 w-3.5" />{r.email}</span>
            <span className="inline-flex items-center gap-2 text-muted-foreground"><Phone className="h-3.5 w-3.5" />{r.phone}</span>
            <span className="inline-flex items-center gap-2 text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{r.location}</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.summary}</p>
      </Card>

      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="glass">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="gaps">Gap Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {SKILL_GROUPS.map((g) => {
              const items = r.skills[g.key];
              return (
                <Card key={g.key} className="glass shadow-elegant p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{g.label}</h3>
                    <Badge variant="secondary">{items.length}</Badge>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.length === 0 ? (
                      <span className="text-xs text-muted-foreground italic">
                        No {g.label.toLowerCase()} skills detected
                      </span>
                    ) : (
                      items.map((s) => (
                        <span
                          key={s}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${g.tone}`}
                        >
                          {s}
                        </span>
                      ))
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="experience" className="mt-4 space-y-3">
          {r.experience.map((e) => (
            <Card key={e.role} className="glass shadow-elegant p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{e.role}</h3>
                    <span className="text-xs text-muted-foreground">{e.duration}</span>
                  </div>
                  <p className="text-sm text-primary">{e.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="education" className="mt-4 space-y-3">
          {r.education.map((ed) => (
            <Card key={ed.degree} className="glass shadow-elegant p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{ed.degree}</h3>
                    <span className="text-xs text-muted-foreground">{ed.year}</span>
                  </div>
                  <p className="text-sm text-primary">{ed.institution}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{ed.grade}</p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="projects" className="mt-4 grid gap-3 md:grid-cols-2">
          {r.projects.map((p) => (
            <Card key={p.name} className="glass shadow-elegant p-5">
              <div className="flex items-center gap-2">
                <FolderGit2 className="h-4 w-4 text-primary" />
                <h3 className="text-base font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="gaps" className="mt-4 space-y-4">
          <Card className="glass shadow-elegant border-warning/40 p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
              <div>
                <h3 className="text-base font-semibold">Critical gaps detected</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your resume targets <span className="font-medium text-foreground">{r.targetRole}</span> but
                  backend, database, and DevOps coverage is below the role baseline.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {skillGaps.map((g) => (
              <Card key={g.category} className="glass shadow-elegant p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{g.category}</h3>
                  <Badge variant="destructive">{g.missing.length} missing</Badge>
                </div>
                {g.missing.length > 0 && (
                  <div className="mt-3">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Missing</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {g.missing.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-destructive/30 bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {g.weak.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" /> Weak
                    </p>
                    <ul className="mt-1.5 space-y-1.5">
                      {g.weak.map((w) => (
                        <li
                          key={w.skill}
                          className="rounded-lg border border-warning/30 bg-warning/10 px-3 py-2 text-xs"
                        >
                          <span className="font-medium text-warning-foreground">{w.skill}</span>
                          <span className="text-muted-foreground"> — {w.reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
