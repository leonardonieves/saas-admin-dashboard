'use client';

import { usersData } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function UsersTable() {
  return (
    <Card className="bg-card border-border overflow-hidden mt-6">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Team Members</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-muted-foreground">
                Joined
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr
                key={user.id}
                className="border-b border-border hover:bg-secondary/50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Badge variant="secondary">{user.role}</Badge>
                </td>
                <td className="px-6 py-4 text-sm">
                  <Badge
                    className={
                      user.status === 'Active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }
                  >
                    {user.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {new Date(user.joinDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
