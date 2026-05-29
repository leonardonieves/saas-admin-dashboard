'use client';

import { Button } from '@/components/ui/button';
import { Plus, Download, Share2, MoreHorizontal } from 'lucide-react';

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <Button className="bg-primary hover:bg-primary/80 text-primary-foreground gap-2">
        <Plus className="w-4 h-4" />
        New Campaign
      </Button>
      <Button variant="outline" className="border-border gap-2">
        <Download className="w-4 h-4" />
        Export
      </Button>
      <Button variant="outline" className="border-border gap-2">
        <Share2 className="w-4 h-4" />
        Share
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="border-border ml-auto"
      >
        <MoreHorizontal className="w-4 h-4" />
      </Button>
    </div>
  );
}
