'use client';

import { activityData } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import {
  Settings,
  Plus,
  FileText,
  UserPlus,
  Download,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Settings,
  Plus,
  FileText,
  UserPlus,
  Download,
};

export function ActivityFeed() {
  return (
    <Card className="bg-card border-border p-6 mt-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activityData.map((activity) => {
          const Icon = iconMap[activity.icon] || Plus;
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 pb-4 border-b border-border last:border-0"
            >
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {activity.user}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
