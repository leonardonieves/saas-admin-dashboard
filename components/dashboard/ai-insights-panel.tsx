'use client';

import { aiInsights } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function AIInsightsPanel() {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 p-6 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          AI Insights
        </h3>
      </div>
      <div className="space-y-4">
        {aiInsights.map((insight) => (
          <div key={insight.id} className="pb-4 border-b border-border/50 last:border-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="text-sm font-semibold text-foreground">
                {insight.title}
              </h4>
              <Badge
                className={
                  insight.priority === 'high'
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }
              >
                {insight.priority}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {insight.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
