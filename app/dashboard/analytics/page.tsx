'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnalyticsCharts } from '@/components/dashboard/analytics-charts';
import { TrendingUp, Users, ShoppingCart, Clock } from 'lucide-react';

export default function AnalyticsPage() {
  const metrics = [
    { icon: TrendingUp, label: 'Total Revenue', value: '$118,000', change: '+12% vs last month' },
    { icon: Users, label: 'Active Users', value: '8,420', change: '+8% vs last month' },
    { icon: ShoppingCart, label: 'Conversion Rate', value: '3.24%', change: '+0.5% vs last month' },
    { icon: Clock, label: 'Avg. Session Time', value: '8m 42s', change: '+12% vs last month' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Track your application's performance and user engagement metrics
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-primary mt-2">{metric.change}</p>
                  </div>
                  <Icon className="w-8 h-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>
              Monthly revenue over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsCharts />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>
              Active users and conversion rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: 'Jan', revenue: 65000 },
                { month: 'Feb', revenue: 78000 },
                { month: 'Mar', revenue: 92000 },
                { month: 'Apr', revenue: 85000 },
                { month: 'May', revenue: 110000 },
                { month: 'Jun', revenue: 118000 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.month}</p>
                    <p className="text-xs text-muted-foreground">Monthly</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">${item.revenue.toLocaleString()}</p>
                    <div className="w-24 h-1 bg-secondary rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(item.revenue / 120000) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
          <CardDescription>
            Important statistics and performance indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-1">Average Session Duration</p>
              <p className="text-2xl font-bold text-foreground">8m 42s</p>
              <p className="text-xs text-primary mt-2">+12% from last month</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-1">Bounce Rate</p>
              <p className="text-2xl font-bold text-foreground">32%</p>
              <p className="text-xs text-primary mt-2">-5% from last month</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-1">Pages per Session</p>
              <p className="text-2xl font-bold text-foreground">4.2</p>
              <p className="text-xs text-primary mt-2">+8% from last month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
