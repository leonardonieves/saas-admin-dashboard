'use client';

import { Menu, Search, Bell } from 'lucide-react';
import { useSidebar } from '@/lib/sidebar-context';
import { MobileSidebar } from './mobile-sidebar';

export function MobileNav() {
  const { isDrawerOpen, setDrawerOpen } = useSidebar();

  return (
    <>
      <div className="flex items-center justify-between h-16 px-4 border-b border-border bg-card">
        <button
          onClick={() => setDrawerOpen(!isDrawerOpen)}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>

        <div className="flex-1 flex items-center gap-4 px-4">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div
            className="absolute inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-sidebar-accent rounded-lg md:hidden"
            >
              <span className="text-2xl text-sidebar-foreground">×</span>
            </button>
            <MobileSidebar onClose={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
