"use client";
import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Pencil, Trash2 } from "lucide-react";

const users = [
  { name: "Alex Johnson", email: "alex@example.com", goal: "Lose Weight", plan: "Pro", status: "Active" },
  { name: "Sarah Miller", email: "sarah.m@example.com", goal: "Build Muscle", plan: "Basic", status: "Active" },
  { name: "Michael Chen", email: "m.chen@example.com", goal: "Endurance", plan: "Pro", status: "Inactive" },
  { name: "Emma Wilson", email: "emma.w@example.com", goal: "Flexibility", plan: "Pro", status: "Active" },
  { name: "James Taylor", email: "j.taylor@example.com", goal: "Strength", plan: "Basic", status: "Pending" },
  { name: "Olivia Davis", email: "olivia.d@example.com", goal: "Lose Weight", plan: "Pro", status: "Active" },
  { name: "William Brown", email: "w.brown@example.com", goal: "General Fitness", plan: "Basic", status: "Active" },
  { name: "Sophia Lee", email: "sophia.l@example.com", goal: "Tone Up", plan: "Pro", status: "Inactive" },
];

const Users = () => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

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

        <div className="p-4 md:p-8">
          <div className="max-w-9xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Users Management</CardTitle>
                    <CardDescription>Manage user accounts and permissions</CardDescription>
                  </div>

                  {/* Add New User Button with Dialog Trigger */}
                  <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <span className="mr-2">+</span> Add New User
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>
                          Fill in the details below to create a new user account.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid gap-6 py-4">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Personal Information</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                              <Input id="fullName" placeholder="John Doe" defaultValue="John Doe" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                              <Input id="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 000-0000" />
                          </div>
                        </div>

                        {/* Training Preferences */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Training Preferences</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="goal">Training Goal <span className="text-red-500">*</span></Label>
                              <Select defaultValue="lose-weight">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select goal" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="lose-weight">Lose Weight</SelectItem>
                                  <SelectItem value="build-muscle">Build Muscle</SelectItem>
                                  <SelectItem value="endurance">Endurance</SelectItem>
                                  <SelectItem value="flexibility">Flexibility</SelectItem>
                                  <SelectItem value="strength">Strength</SelectItem>
                                  <SelectItem value="general">General Fitness</SelectItem>
                                  <SelectItem value="tone">Tone Up</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="frequency">Training Frequency <span className="text-red-500">*</span></Label>
                              <Select defaultValue="3-4">
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1-2">1-2 days/week</SelectItem>
                                  <SelectItem value="3-4">3-4 days/week</SelectItem>
                                  <SelectItem value="5-6">5-6 days/week</SelectItem>
                                  <SelectItem value="daily">Daily</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="plan">Membership Plan <span className="text-red-500">*</span></Label>
                            <Select defaultValue="basic">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="basic">Basic</SelectItem>
                                <SelectItem value="pro">Pro</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Body Stats */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Body Stats</h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="height">Height (cm)</Label>
                              <Input id="height" type="number" placeholder="170" defaultValue="170" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="weight">Weight (kg)</Label>
                              <Input id="weight" type="number" placeholder="70" defaultValue="70" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="age">Age</Label>
                              <Input id="age" type="number" placeholder="25" defaultValue="25" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={() => {
                          // Handle form submission here
                          setIsAddUserOpen(false);
                        }}>
                          Create User
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="mt-6">
                  <Input placeholder="Search users..." className="max-w-sm" />
                </div>
              </CardHeader>

              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Goal</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback className="bg-blue-500 text-white">
                                {user.name.split(" ").map((n) => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.goal}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="rounded-full">
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={`rounded-full ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : user.status === "Inactive"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            <span className={`mr-1.5 h-2 w-2 rounded-full inline-block ${
                              user.status === "Active" ? "bg-green-600" :
                              user.status === "Inactive" ? "bg-red-600" :
                              "bg-yellow-600"
                            }`} />
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm text-gray-600">Showing 1-8 of 24 users</p>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;