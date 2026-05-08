import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ExternalLink, Clock, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/sample-data";

export const Route = createFileRoute("/app/courses")({
  component: Courses,
  head: () => ({ meta: [{ title: "Courses — SkillForge" }] }),
});

type Filter = "all" | "free" | "paid";

function Courses() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = courses.filter((c) =>
    filter === "all" ? true : filter === "free" ? !c.paid : c.paid,
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recommended courses</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-curated free & paid courses to close your skill gap.
          </p>
        </div>
        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)}>
          <TabsList className="glass">
            <TabsTrigger value="all">All ({courses.length})</TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Filter className="h-3.5 w-3.5" />
        Platforms:
        {["YouTube", "Coursera", "Udemy", "freeCodeCamp", "GeeksforGeeks", "NPTEL"].map((p) => (
          <Badge key={p} variant="secondary" className="font-normal">{p}</Badge>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((c, i) => (
          <Card
            key={c.id}
            className="glass shadow-elegant overflow-hidden p-0 group hover:-translate-y-0.5 transition animate-slide-up"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="relative h-28 gradient-primary p-4">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />
              <div className="relative flex items-start justify-between">
                <Badge className="bg-white/20 text-white border-0 backdrop-blur">{c.platform}</Badge>
                <Badge className={c.paid ? "bg-warning text-warning-foreground border-0" : "bg-success text-success-foreground border-0"}>
                  {c.paid ? "Paid" : "Free"}
                </Badge>
              </div>
              <p className="absolute bottom-3 left-4 text-xs text-white/80">For: {c.skill}</p>
            </div>
            <div className="p-5">
              <h3 className="line-clamp-2 text-base font-semibold leading-tight min-h-[2.75rem]">
                {c.title}
              </h3>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{c.duration}</span>
                <span>·</span>
                <span>{c.level}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-warning text-warning" />
                  {c.rating}
                </span>
              </div>

              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium tabular-nums">{c.progress}%</span>
                </div>
                <Progress value={c.progress} className="h-2" />
              </div>

              <Button
                asChild
                className="mt-5 w-full gradient-primary text-primary-foreground shadow-glow border-0"
              >
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.progress > 0 ? "Continue" : "Start course"}
                  <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
