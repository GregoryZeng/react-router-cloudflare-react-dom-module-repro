import { Outlet } from "react-router";

export default function MarketingLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm font-semibold">React DOM Module Demo</span>
          <nav className="text-sm text-muted-foreground">Home</nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
