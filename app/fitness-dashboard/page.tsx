"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  Dumbbell,
  Activity,
  DollarSign,
  UserPlus,
  FileText,
  Megaphone,
} from "lucide-react";
import DashboardHeader from "@/components/CustomComponents/DashboardHeader/DashboardHeader";


const chartData = [
  { time: "00:00", load: 40 },
  { time: "04:00", load: 30 },
  { time: "08:00", load: 60 },
  { time: "12:00", load: 80 },
  { time: "16:00", load: 70 },
  { time: "20:00", load: 50 },
  { time: "23:59", load: 45 },
];

export default function Dashboard() {
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


    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-9xl mx-auto space-y-8">
     

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-8 w-8 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,345</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <span className="mr-1">↑</span> +12%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trainers</CardTitle>
              <Dumbbell className="h-8 w-8 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <span className="mr-1">↑</span> +4%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessions Today</CardTitle>
              <Activity className="h-8 w-8 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">843</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <span className="mr-1">↑</span> +18%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue (Month)</CardTitle>
              <DollarSign className="h-8 w-8 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$42.5k</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <span className="mr-1">↑</span> +8%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>System Load / Performance Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Area
                  type="monotone"
                  dataKey="load"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorLoad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sarah M. completed a workout</p>
                  <p className="text-xs text-gray-500">2 mins ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">Mike T. upgraded to Pro</p>
                  <p className="text-xs text-gray-500">15 mins ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">Coach J. added a new plan</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>E</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">Emily R. achieved a goal</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>

              <Button variant="ghost" className="w-full">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <UserPlus className="mr-2 h-5 w-5" />
                Add New User
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-5 w-5" />
                Create Workout Plan
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <Megaphone className="mr-2 h-5 w-5" />
                Send Announcement
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

               </div>
               </div>




  );
}