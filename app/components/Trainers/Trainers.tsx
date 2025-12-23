"use client";
import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const trainers = [
  {
    name: "Coach Mike",
    specialty: "Strength & Conditioning",
    rating: 4.9,
    clients: 24,
    location: "New York",
    status: "Available",
  },
  {
    name: "Sarah Jenkins",
    specialty: "Yoga & Flexibility",
    rating: 5.0,
    clients: 18,
    location: "Los Angeles",
    status: "Busy",
  },
  {
    name: "David Ross",
    specialty: "HIIT & Cardio",
    rating: 4.8,
    clients: 32,
    location: "Chicago",
    status: "Available",
  },
  {
    name: "Jessica Wu",
    specialty: "Pilates",
    rating: 4.9,
    clients: 15,
    location: "San Francisco",
    status: "Available",
  },
  {
    name: "Marcus Johnson",
    specialty: "CrossFit",
    rating: 4.7,
    clients: 28,
    location: "Miami",
    status: "Busy",
  },
  {
    name: "Elena Rodriguez",
    specialty: "Nutrition & Wellness",
    rating: 5.0,
    clients: 40,
    location: "Remote",
    status: "Available",
  },
];

const availabilityDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Trainers = () => {
  const [isAddTrainerOpen, setIsAddTrainerOpen] = useState(false);

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
          <div className="max-w-7xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Trainers Directory</CardTitle>
                    <CardDescription>Manage fitness coaches and assignments</CardDescription>
                  </div>

                  {/* Add New Trainer Dialog */}
                  <Dialog open={isAddTrainerOpen} onOpenChange={setIsAddTrainerOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <span className="mr-2">+</span> Add New Trainer
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Trainer</DialogTitle>
                        <DialogDescription>
                          Fill in the details below to add a new trainer to the directory.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid gap-6 py-4">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Personal Information</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="trainerName">Full Name <span className="text-red-500">*</span></Label>
                              <Input id="trainerName" placeholder="Mike Johnson" defaultValue="Mike Johnson" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="trainerEmail">Email <span className="text-red-500">*</span></Label>
                              <Input id="trainerEmail" type="email" placeholder="mike@example.com" defaultValue="mike@example.com" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="trainerPhone">Phone <span className="text-red-500">*</span></Label>
                              <Input id="trainerPhone" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 000-0000" />
                            </div>
                          </div>
                        </div>

                        {/* Professional Details */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Professional Details</h4>
                          <div className="space-y-2">
                            <Label htmlFor="specialty">Specialty <span className="text-red-500">*</span></Label>
                            <Input id="specialty" placeholder="Strength & Conditioning" defaultValue="Strength & Conditioning" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="certifications">Certifications</Label>
                            <Input id="certifications" placeholder="NSCA-CSCS, NASM-CPT, USA Weightlifting L1" defaultValue="NSCA-CSCS, NASM-CPT, USA Weightlifting L1" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="location">Location</Label>
                              <Input id="location" placeholder="New York, NY or Remote" defaultValue="New York, NY or Remote" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="hourlyRate">Hourly Rate</Label>
                              <Input id="hourlyRate" type="number" placeholder="75" defaultValue="75" />
                              <p className="text-xs text-gray-500">USD per hour</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea 
                              id="bio" 
                              placeholder="Brief description of experience and training philosophy..." 
                              className="min-h-24"
                              defaultValue="Brief description of experience and training philosophy..."
                            />
                          </div>
                        </div>

                        {/* Availability */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-medium">Availability</h4>
                          <div className="flex flex-wrap gap-2">
                            {availabilityDays.map((day) => (
                              <Badge key={day} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                {day}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500">Click to toggle available days</p>
                        </div>
                      </div>

                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsAddTrainerOpen(false)}>
                          Cancel
                        </Button>
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => {
                            // Handle form submission here (e.g., add to trainers list)
                            setIsAddTrainerOpen(false);
                          }}
                        >
                          Create Trainer
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trainers.map((trainer) => (
                    <Card key={trainer.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarFallback className="text-lg font-semibold bg-gray-300">
                                {trainer.name.split(" ").map((n) => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-lg">{trainer.name}</h3>
                              <p className="text-sm text-gray-600">{trainer.specialty}</p>
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className={`${
                              trainer.status === "Available"
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {trainer.status}
                          </Badge>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-sm">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{trainer.rating}</span>
                            <span className="text-gray-600">
                              • {trainer.clients} Active Clients
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{trainer.location}</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button variant="outline" className="flex-1">
                            View Profile
                          </Button>
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                            Assign Client
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;