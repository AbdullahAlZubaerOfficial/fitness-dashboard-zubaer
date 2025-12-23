'use client';

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl rounded-3xl overflow-hidden">
        {/* Blue Header */}
        <div className="bg-blue-600 px-8 py-12 text-center text-white">
          <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-white">
            <AvatarImage src="/logo.png" alt="24/7 FIT" />
            <AvatarFallback className="bg-white text-blue-600 text-2xl font-bold">
              24/7 FIT
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription className="text-blue-100 mt-2">
            Sign in to manage your platform
          </CardDescription>
        </div>

        {/* Form Content */}
        <CardContent className="px-8 pt-10 pb-8">
          <form className="space-y-6">
            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@footballadmin.com"
                defaultValue="admin@footballadmin.com"
                className="h-12"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-12"
              />
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-medium text-gray-700">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg font-semibold">
             <a href="/fitness-dashboard"> Sign In</a>
            </Button>

            {/* Demo Credentials */}
            <p className="text-center text-sm text-gray-600 ">
              Demo credentials: any email & password
            </p>

            {/* Secure Access Badge */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-medium text-blue-800">
                Secure admin access • Protected by 2FA
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
