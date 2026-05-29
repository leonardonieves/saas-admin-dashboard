'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/lib/auth-context';
import { Bell, Lock, Palette, Database } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account and application preferences
        </p>
      </div>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>
            Update your profile information and email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Full Name</Label>
              <Input
                defaultValue={user?.name || ''}
                className="bg-input border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email Address</Label>
              <Input
                type="email"
                defaultValue={user?.email || ''}
                className="bg-input border-border"
              />
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
          <CardDescription>
            Manage how you receive notifications and alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: 'Email Notifications',
              description: 'Receive updates and alerts via email',
              enabled: true,
            },
            {
              title: 'Weekly Digest',
              description: 'Get a weekly summary of your activity',
              enabled: true,
            },
            {
              title: 'Performance Alerts',
              description: 'Be notified when performance drops below threshold',
              enabled: false,
            },
            {
              title: 'Security Alerts',
              description: 'Get notified about login attempts and security events',
              enabled: true,
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
              <div className="flex-1">
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <Switch defaultChecked={item.enabled} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Security
          </CardTitle>
          <CardDescription>
            Manage your password and security options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm font-medium mb-2 block">Change Password</Label>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Current Password"
                className="bg-input border-border"
              />
              <Input
                type="password"
                placeholder="New Password"
                className="bg-input border-border"
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                className="bg-input border-border"
              />
            </div>
            <Button className="mt-4 bg-primary hover:bg-primary/90">
              Update Password
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Appearance
          </CardTitle>
          <CardDescription>
            Customize how the application looks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm font-medium mb-3 block">Theme</Label>
            <div className="grid grid-cols-2 gap-3">
              {['Light', 'Dark', 'System'].map((theme) => (
                <button
                  key={theme}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    theme === 'Dark'
                      ? 'border-primary bg-secondary/50'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Data & Privacy
          </CardTitle>
          <CardDescription>
            Manage your data and privacy preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-secondary/30">
            <p className="font-medium text-foreground mb-2">Export Data</p>
            <p className="text-sm text-muted-foreground mb-4">
              Download all your data in a portable format
            </p>
            <Button variant="outline">
              Export as CSV
            </Button>
          </div>
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="font-medium text-foreground mb-2">Danger Zone</p>
            <p className="text-sm text-muted-foreground mb-4">
              Delete your account and all associated data. This action cannot be undone.
            </p>
            <Button variant="destructive">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
