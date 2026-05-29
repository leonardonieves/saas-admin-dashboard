'use client';

import { metricsData } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Clock,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Users,
  Target,
  Clock,
};

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metricsData.map((metric, index) => {
        const Icon = iconMap[metric.icon] || TrendingUp;
        return (
          <Card
            key={index}
            className="bg-card border-border p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {metric.value}
                </p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${
                  metric.positive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {metric.change}
              </span>
              <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
