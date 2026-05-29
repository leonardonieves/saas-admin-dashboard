'use client';

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Zap,
} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-sidebar-border bg-sidebar p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">
            DashAI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        <NavItem icon={LayoutDashboard} label="Dashboard" active />
        <NavItem icon={BarChart3} label="Analytics" />
        <NavItem icon={Users} label="Team" />
        <NavItem icon={Settings} label="Settings" />
      </nav>

      {/* User Info */}
      <div className="border-t border-sidebar-border pt-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-sm font-semibold text-accent">SA</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Sarah Anderson
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Admin
            </p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 text-muted-foreground hover:text-sidebar-foreground transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
