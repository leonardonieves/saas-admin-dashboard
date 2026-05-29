import { Metadata } from 'next';
import { Sidebar } from '@/components/dashboard/sidebar';
import { TopNav } from '@/components/dashboard/top-nav';
import { MetricsCards } from '@/components/dashboard/metrics-cards';
import { AnalyticsCharts } from '@/components/dashboard/analytics-charts';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { UsersTable } from '@/components/dashboard/users-table';
import { AIInsightsPanel } from '@/components/dashboard/ai-insights-panel';
import { QuickActions } from '@/components/dashboard/quick-actions';

export const metadata: Metadata = {
  title: 'Dashboard - DashAI',
  description: 'AI-Powered SaaS Admin Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="bg-background text-foreground">
      <Sidebar />
      <TopNav />

      {/* Main Content */}
      <main className="ml-64 mt-16 p-8">
        <div className="max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome back! Here&apos;s your performance overview.
            </p>
          </div>

          {/* Quick Actions */}
          <QuickActions />

          {/* Metrics */}
          <div className="mt-8">
            <MetricsCards />
          </div>

          {/* Charts */}
          <AnalyticsCharts />

          {/* AI Insights */}
          <AIInsightsPanel />

          {/* Activity & Users */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Team Size
                    </p>
                    <p className="text-2xl font-bold text-foreground">5</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Active Sessions
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      3,245
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      System Health
                    </p>
                    <p className="text-2xl font-bold text-green-500">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <UsersTable />

          {/* Footer spacing */}
          <div className="mt-8 pb-8"></div>
        </div>
      </main>
    </div>
  );
}
