import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { sampleResume } from "@/lib/sample-data";

export const Route = createFileRoute("/app/settings")({
  component: Settings,
  head: () => ({ meta: [{ title: "Settings — SkillForge" }] }),
});

function Settings() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your profile and preferences.</p>
      </div>

      <Card className="glass shadow-elegant p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="gradient-primary text-primary-foreground text-lg font-semibold">AS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{sampleResume.name}</p>
            <p className="text-sm text-muted-foreground">{sampleResume.email}</p>
          </div>
          <Button variant="outline" className="ml-auto glass">Change photo</Button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Full name</Label>
            <Input defaultValue={sampleResume.name} />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue={sampleResume.email} type="email" />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input defaultValue={sampleResume.phone} />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input defaultValue={sampleResume.location} />
          </div>
        </div>
      </Card>

      <Card className="glass shadow-elegant p-6 space-y-4">
        <h3 className="font-semibold">Preferences</h3>
        {[
          { label: "Email notifications", hint: "Weekly progress + new course matches" },
          { label: "Personalized AI suggestions", hint: "Use your data to tailor recommendations" },
          { label: "Public profile", hint: "Let recruiters discover your verified skills" },
        ].map((p, i) => (
          <div key={p.label} className="flex items-start justify-between gap-4 border-t border-border/60 pt-4 first:border-0 first:pt-0">
            <div>
              <p className="text-sm font-medium">{p.label}</p>
              <p className="text-xs text-muted-foreground">{p.hint}</p>
            </div>
            <Switch defaultChecked={i !== 2} />
          </div>
        ))}
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button className="gradient-primary text-primary-foreground shadow-glow border-0">Save changes</Button>
      </div>
    </div>
  );
}
