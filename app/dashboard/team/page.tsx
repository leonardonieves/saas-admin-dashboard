'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UsersTable } from '@/components/dashboard/users-table';
import { Plus } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Team Members</h1>
          <p className="text-muted-foreground mt-2">
            Manage your team members and their permissions
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">8</p>
              <p className="text-sm text-muted-foreground mt-1">Total Members</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">7</p>
              <p className="text-sm text-muted-foreground mt-1">Active Today</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground mt-1">Admins</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            View and manage all team members and their roles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UsersTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Roles</CardTitle>
          <CardDescription>
            Manage role permissions and responsibilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                role: 'Admin',
                description: 'Full access to all features and settings',
                members: 3,
              },
              {
                role: 'Editor',
                description: 'Can edit content and manage team members',
                members: 2,
              },
              {
                role: 'Viewer',
                description: 'Read-only access to analytics and reports',
                members: 1,
              },
            ].map((item) => (
              <div key={item.role} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{item.members} members</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
