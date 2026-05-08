import { useState } from "react";
import { Outlet, Link, useRouter } from "@tanstack/react-router";
import { Moon, Sun, Bell, Search } from "lucide-react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export function AppShell() {
  const [dark, setDark] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border/60 glass-strong px-4">
            <SidebarTrigger />
            <div className="relative hidden flex-1 max-w-md md:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search skills, courses, reports…"
                className="pl-9 bg-background/40"
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-4 w-4" />
              </Button>
              <button
                onClick={() => router.navigate({ to: "/app/settings" })}
                className="flex items-center gap-2 rounded-full pl-1 pr-3 py-1 hover:bg-accent/50 transition"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="gradient-primary text-primary-foreground text-xs font-semibold">
                    AS
                  </AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium md:inline">Aarav</span>
              </button>
              <Link
                to="/login"
                className="hidden text-xs text-muted-foreground hover:text-foreground md:inline"
              >
                Sign out
              </Link>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-8">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
