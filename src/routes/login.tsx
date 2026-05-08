import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Brain, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Sign in — SkillForge" },
      { name: "description", content: "Sign in to your SkillForge dashboard." },
    ],
  }),
});

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/app" }), 600);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="relative z-10 flex h-full flex-col justify-between p-12 text-primary-foreground">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <Brain className="h-5 w-5" />
            </div>
            <span className="font-bold">SkillForge</span>
          </Link>
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Build the skills<br />the market is paying for.
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Join 12,400+ learners turning resume gaps into job offers with AI-guided learning paths.
            </p>
            <div className="mt-8 flex -space-x-3">
              {["A", "M", "K", "R"].map((c, i) => (
                <div
                  key={c}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-sm font-semibold backdrop-blur"
                  style={{ zIndex: 10 - i }}
                >
                  {c}
                </div>
              ))}
              <div className="ml-5 self-center text-sm text-white/80">⭐ 4.9 average rating</div>
            </div>
          </div>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} SkillForge</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md animate-fade-in">
          <Link to="/" className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold">SkillForge</span>
          </Link>

          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue your learning journey.
          </p>

          <Tabs defaultValue="signin" className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Create account</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="you@example.com" className="pl-9" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
                  </div>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-9" required />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-primary text-primary-foreground shadow-glow border-0"
                >
                  {loading ? "Signing in…" : <>Sign in <ArrowRight className="ml-1 h-4 w-4" /></>}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Aarav Sharma" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email2">Email</Label>
                  <Input id="email2" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pw2">Password</Label>
                  <Input id="pw2" type="password" placeholder="••••••••" required />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-primary text-primary-foreground shadow-glow border-0"
                >
                  {loading ? "Creating…" : "Create account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By continuing you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
