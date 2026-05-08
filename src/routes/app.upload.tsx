import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Upload, FileText, Loader2, CheckCircle2, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/app/upload")({
  component: UploadPage,
  head: () => ({ meta: [{ title: "Upload Resume — SkillForge" }] }),
});

const ROLES = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "DevOps Engineer",
  "ML Engineer",
  "Mobile Developer (React Native)",
  "Cloud Engineer",
];

function UploadPage() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const [role, setRole] = useState("Full Stack Developer");
  const [status, setStatus] = useState<"idle" | "uploading" | "analyzing" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const onPickFile = (f: File | null) => {
    if (!f) return;
    const ok = /\.(pdf|docx)$/i.test(f.name);
    if (!ok) return;
    setFile(f);
  };

  const start = () => {
    if (!file) return;
    setStatus("uploading");
    setProgress(0);
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setStatus("analyzing");
          setTimeout(() => {
            setStatus("done");
            setTimeout(() => navigate({ to: "/app/analysis" }), 700);
          }, 1500);
          return 100;
        }
        return p + 10;
      });
    }, 120);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upload your resume</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          PDF or DOCX, max 5MB. We'll extract skills, experience, and education automatically.
        </p>
      </div>

      <Card className="glass shadow-elegant p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="role">Target role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="role" className="bg-background/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Experience level</Label>
            <Select defaultValue="entry">
              <SelectTrigger className="bg-background/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry (0-2 yrs)</SelectItem>
                <SelectItem value="mid">Mid (2-5 yrs)</SelectItem>
                <SelectItem value="senior">Senior (5+ yrs)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            onPickFile(e.dataTransfer.files?.[0] ?? null);
          }}
          className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center transition ${
            drag
              ? "border-primary bg-primary/5"
              : "border-border/80 bg-background/40 hover:border-primary/50 hover:bg-primary/5"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
          />
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow">
            <Upload className="h-6 w-6 text-primary-foreground" />
          </div>
          <p className="mt-4 text-base font-semibold">Drag & drop your resume here</p>
          <p className="mt-1 text-sm text-muted-foreground">
            or <span className="text-primary">click to browse</span> · PDF, DOCX up to 5MB
          </p>
        </button>

        {file && (
          <div className="rounded-xl border border-border/60 bg-background/50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
              {status === "idle" && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFile(null)}
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              {status === "done" && <CheckCircle2 className="h-5 w-5 text-success" />}
            </div>
            {status !== "idle" && (
              <div className="mt-3 space-y-2">
                <Progress value={status === "analyzing" || status === "done" ? 100 : progress} className="h-2" />
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  {status !== "done" && <Loader2 className="h-3 w-3 animate-spin" />}
                  {status === "uploading" && `Uploading… ${progress}%`}
                  {status === "analyzing" && "Extracting skills with AI…"}
                  {status === "done" && "Analysis complete — opening report…"}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setFile(null)} disabled={!file || status !== "idle"}>
            Reset
          </Button>
          <Button
            onClick={start}
            disabled={!file || status !== "idle"}
            className="gradient-primary text-primary-foreground shadow-glow border-0"
          >
            Analyze with AI
          </Button>
        </div>
      </Card>

      <Card className="glass shadow-elegant p-6">
        <h3 className="text-sm font-semibold">What happens next?</h3>
        <ol className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
          {[
            "We parse your resume and extract entities using NLP.",
            "Skills are categorized and matched against your target role.",
            "You get a gap report and a curated learning path.",
          ].map((step, i) => (
            <li key={i} className="rounded-lg border border-border/60 bg-background/40 p-3">
              <span className="text-primary font-semibold">{i + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
