'use client';

import { SidebarProvider } from '@/lib/sidebar-context';
import { Sidebar } from '@/components/dashboard/sidebar';
import { TopNav } from '@/components/dashboard/top-nav';
import { MobileNav } from '@/components/dashboard/mobile-nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile Header with Menu Button */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* Desktop Header */}
          <div className="hidden md:block">
            <TopNav />
          </div>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto pt-16 md:pt-0">
            <div className="container mx-auto p-4 md:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
