'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { useSidebar } from '@/lib/sidebar-context';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Zap,
  ChevronLeft,
} from 'lucide-react';

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { isCollapsed, toggleSidebar } = useSidebar();

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: Users, label: 'Team', href: '/dashboard/team' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen border-r border-sidebar-border bg-sidebar flex flex-col transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-20' : 'w-64'
    } p-4`}>
      {/* Logo */}
      <div className={`mb-8 flex items-center transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <div className={`bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isCollapsed ? 'w-8 h-8' : 'w-10 h-10'
          }`}>
            <Zap className={`text-primary-foreground transition-all duration-300 ${isCollapsed ? 'w-4 h-4' : 'w-6 h-6'}`} />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-sidebar-foreground whitespace-nowrap">
              DashAI
            </span>
          )}
        </button>
        {!isCollapsed && (
          <button
            onClick={toggleSidebar}
            className="p-1 hover:bg-sidebar-accent/50 rounded-lg transition-colors text-sidebar-foreground"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={pathname === item.href}
            onClick={() => router.push(item.href)}
          />
        ))}
      </nav>

      {/* User Info */}
      <div className="border-t border-sidebar-border pt-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-accent">
              {user ? getInitials(user.name) : 'U'}
            </span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {user?.name || 'User'}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Admin
              </p>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-2 text-muted-foreground hover:text-sidebar-foreground transition-colors px-3 py-2 rounded-lg hover:bg-sidebar-accent/50 justify-center ${!isCollapsed ? 'justify-start' : ''}`}
          title={isCollapsed ? 'Logout' : ''}
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
}

function NavItem({
  icon: Icon,
  label,
  href,
  active = false,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <button
      onClick={onClick}
      title={isCollapsed ? label : ''}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors justify-center ${
        isCollapsed ? 'justify-center' : 'justify-start'
      } ${
        active
          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
      }`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </button>
  );
}
