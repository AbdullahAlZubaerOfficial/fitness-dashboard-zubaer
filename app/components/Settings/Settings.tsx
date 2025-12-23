"use client";
import React from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, MessageSquare, Bell, Sun, Moon, CreditCard, AlertTriangle, Trash2 } from "lucide-react";

const Settings = () => {
  return (
         <div className="min-h-screen bg-white">
             <div className="container mx-auto p-4 md:p-6">
               {/* Mobile Header */}
               <div className="lg:hidden mb-4">
                 
                 <DashboardHeader />
                 
               </div>
               
               {/* Desktop Header */}
               <div className="hidden lg:block">
                 <DashboardHeader />
               </div>
    
    
    {/* content */}
             <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-8xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">Manage your account preferences and system configuration</p>
        </div>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Profile Photo</p>
                <p className="text-sm text-gray-500">JPG, PNG or GIF. Max 1MB.</p>
                <Button variant="outline" className="mt-2">
                  Change Photo
                </Button>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="Admin User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@fittrack.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Change Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates about your account</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-500">Get alerts right on your device</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">SMS Alerts</p>
                  <p className="text-sm text-gray-500">Receive important alerts via text message</p>
                </div>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Weekly Summary</p>
                  <p className="text-sm text-gray-500">Get a weekly summary of your activity</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Appearance & System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="flex-1">
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                  </Button>
                  <Button variant="default" className="flex-1">
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* System & Data */}
          <Card>
            <CardHeader>
              <CardTitle>System & Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm font-medium">Data Export</p>
                <p className="text-sm text-gray-500 mt-1">Last export: December 16, 2025 at 3:21 PM</p>
                <Button variant="outline" className="mt-3">
                  Backup Now
                </Button>
              </div>

              <div>
                <p className="text-sm font-medium">Clear Cache</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Clear Cache
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Billing & Subscription */}
        <Card>
          <CardHeader>
            <CardTitle>Billing & Subscription</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CreditCard className="h-10 w-10 text-blue-600" />
                <div>
                  <p className="font-medium">Pro Plan</p>
                  <p className="text-sm text-gray-600">Current Plan: Renews on Jan 15, 2026</p>
                </div>
              </div>
              <Button>Upgrade Plan</Button>
            </div>

            <div>
              <p className="font-medium mb-3">Payment Method</p>
              <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-300 border-2 border-dashed rounded w-12 h-10" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/27</p>
                  </div>
                </div>
                <Button variant="ghost">Edit</Button>
              </div>
              <Button variant="link" className="mt-2 text-sm">
                View Billing History →
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-red-700">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Delete Account</AlertTitle>
              <AlertDescription>
                Once you delete your account, there is no going back. Please be certain.
              </AlertDescription>
            </Alert>
            <Button variant="destructive" className="mt-4">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    
               </div>
               </div>
  )
}

export default Settings