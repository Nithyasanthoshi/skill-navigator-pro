import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Sparkles,
  Upload,
  Target,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "SkillForge — AI Resume Skill Gap Analyzer" },
      {
        name: "description",
        content:
          "Upload your resume, detect skill gaps with AI, and get personalized course recommendations. Land your dream tech role faster.",
      },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 glass-strong border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-glow">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold">SkillForge</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#workflow" className="text-muted-foreground hover:text-foreground">How it works</a>
            <a href="#platforms" className="text-muted-foreground hover:text-foreground">Platforms</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild className="gradient-primary text-primary-foreground shadow-glow border-0">
              <Link to="/app">
                Open dashboard <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI-powered career intelligence
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Close your <span className="text-gradient">skill gap</span>.
              <br />
              Land the role.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Upload your resume and let our AI extract skills, benchmark you against your target role,
              and build a personalized learning path with the best free and paid courses.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild className="gradient-primary text-primary-foreground shadow-glow border-0 h-12 px-7">
                <Link to="/app/upload">
                  <Upload className="mr-2 h-4 w-4" /> Analyze my resume
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="glass h-12 px-7">
                <Link to="/app">View live demo</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> PDF & DOCX</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> ATS scoring</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" /> 6 learning platforms</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "AI Skill Extraction",
              body: "NLP automatically pulls skills, experience, education and projects from your resume.",
            },
            {
              icon: Target,
              title: "Gap Analysis",
              body: "Compare against 100+ target roles and surface missing & weak skills with recommendations.",
            },
            {
              icon: GraduationCap,
              title: "Smart Learning Path",
              body: "Curated free and paid courses from YouTube, Coursera, Udemy, freeCodeCamp, NPTEL and more.",
            },
            {
              icon: Zap,
              title: "Real-time Matching",
              body: "Watch your skill match score climb as you complete recommended modules.",
            },
            {
              icon: Shield,
              title: "ATS Score Checker",
              body: "Make sure recruiter bots actually read your resume before a human does.",
            },
            {
              icon: Brain,
              title: "Personalized AI Tips",
              body: "Get human-quality suggestions tailored to your role, region, and seniority.",
            },
          ].map((f, i) => (
            <div
              key={f.title}
              className="glass shadow-elegant rounded-2xl p-6 animate-slide-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary shadow-glow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass shadow-elegant rounded-3xl p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">From upload to offer in 5 steps</h2>
            <p className="mt-3 text-muted-foreground">Simple workflow, serious results.</p>
          </div>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-5">
            {["Upload", "AI Extract", "Detect Gaps", "Recommend Courses", "Track Progress"].map((step, i) => (
              <li key={step} className="rounded-2xl border border-border/60 bg-card/40 p-5 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <p className="mt-3 text-sm font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="platforms" className="mx-auto max-w-7xl px-6 pb-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Course recommendations from
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {["YouTube", "Coursera", "Udemy", "freeCodeCamp", "GeeksforGeeks", "NPTEL"].map((p) => (
              <span key={p} className="glass rounded-full px-5 py-2 text-sm font-medium">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} SkillForge. Built for ambitious learners.</p>
          <div className="flex gap-6">
            <Link to="/login" className="hover:text-foreground">Login</Link>
            <Link to="/app" className="hover:text-foreground">Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
