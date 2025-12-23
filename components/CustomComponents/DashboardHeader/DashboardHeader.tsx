"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, Settings, User, Calendar, TrendingUp, MessageSquare, AlertCircle, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    type: "user",
    title: "New User Registration",
    message: "Sarah Miller just signed up for a Pro membership",
    time: "5 min ago",
    icon: User,
    color: "blue",
    unread: true,
  },
  {
    id: 2,
    type: "schedule",
    title: "Trainer Schedule Update",
    message: "Coach Mike updated his availability",
    time: "1 hour ago",
    icon: Calendar,
    color: "purple",
    unread: true,
  },
  {
    id: 3,
    type: "milestone",
    title: "Milestone Reached",
    message: "Your platform reached 1,000 active users!",
    time: "2 hours ago",
    icon: TrendingUp,
    color: "green",
    unread: true,
  },
  {
    id: 4,
    type: "message",
    title: "New Message",
    message: "Alex Johnson sent you a message",
    time: "3 hours ago",
    icon: MessageSquare,
    color: "orange",
    unread: false,
  },
  {
    id: 5,
    type: "payment",
    title: "Payment Failed",
    message: "Payment failed for user Emma Wilson",
    time: "4 hours ago",
    icon: AlertCircle,
    color: "red",
    unread: false,
  },
];

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-4">
      {/* Left Side - Optional Title/Welcome */}
      <div>
        {/* You can add a welcome message here if needed */}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 w-64 h-11 rounded-full bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Settings */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>

        {/* Notification Bell with Popover */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
              <Bell className="h-5 w-5 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 h-5 w-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          </PopoverTrigger>

          <PopoverContent className="w-96 mr-4 mt-2 p-0" align="end">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold text-lg">Notifications</h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {unreadCount} unread
                  </Badge>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <ScrollArea className="h-96">
              <div className="py-2">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-3 p-4 hover:bg-gray-50 transition ${
                      notif.unread ? "bg-blue-50/30" : ""
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        notif.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : notif.color === "purple"
                          ? "bg-purple-100 text-purple-600"
                          : notif.color === "green"
                          ? "bg-green-100 text-green-600"
                          : notif.color === "orange"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      <notif.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{notif.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                      <p className="text-xs text-gray-500 mt-2">{notif.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {notif.unread && (
                        <div className="h-2 w-2 bg-blue-600 rounded-full" />
                      )}
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <X className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50">
              <Button variant="link" className="w-full text-blue-600 font-medium">
                View All Notifications →
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* User Avatar */}
        <Avatar className="h-10 w-10 ring-2 ring-white shadow">
          <AvatarImage src="" alt="Admin" />
          <AvatarFallback className="bg-blue-600 text-white font-medium">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}