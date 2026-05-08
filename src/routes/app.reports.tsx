import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/app/reports")({
  component: Reports,
  head: () => ({ meta: [{ title: "Reports — SkillForge" }] }),
});

const reports = [
  { id: 1, title: "Full Stack Developer — Gap Report", date: "May 6, 2026", score: 78, status: "Latest" },
  { id: 2, title: "Frontend Developer — Match Report", date: "Apr 19, 2026", score: 84, status: "Archive" },
  { id: 3, title: "ATS Optimization Audit", date: "Apr 02, 2026", score: 72, status: "Archive" },
];

function Reports() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Download your past skill-gap and ATS analyses as PDF.
        </p>
      </div>

      <div className="grid gap-3">
        {reports.map((r) => (
          <Card key={r.id} className="glass shadow-elegant p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold">{r.title}</p>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {r.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Score</p>
                  <p className="text-2xl font-bold text-gradient">{r.score}</p>
                </div>
                <Badge variant={r.status === "Latest" ? "default" : "secondary"}>{r.status}</Badge>
                <Button variant="outline" className="glass">
                  <Download className="mr-2 h-4 w-4" /> PDF
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
