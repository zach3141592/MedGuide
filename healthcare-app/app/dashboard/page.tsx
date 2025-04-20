"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, FileText, HeartPulse, History, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const [upcomingAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Primary Care",
      date: "May 15, 2025",
      time: "10:30 AM",
      location: "Wellness Medical Center",
      status: "Confirmed",
    },
  ])

  const [recentConsultations] = useState([
    {
      id: 1,
      date: "April 10, 2025",
      symptoms: "Headache, mild fever",
      recommendation: "Rest, hydration, over-the-counter pain relief",
      followUp: "None required unless symptoms persist",
    },
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <HeartPulse className="h-6 w-6 text-teal-600" />
          <span className="ml-2 text-xl font-bold">HealthGuide</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/symptom-checker">
            Symptom Checker
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/navigation-guide">
            Navigation Guide
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <p className="text-sm text-gray-500">john.doe@example.com</p>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Profile Completion</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard">
                    <FileText className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/symptom-checker">
                    <HeartPulse className="mr-2 h-4 w-4" />
                    Symptom Checker
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="#">
                    <Calendar className="mr-2 h-4 w-4" />
                    Appointments
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="#">
                    <History className="mr-2 h-4 w-4" />
                    History
                  </Link>
                </Button>
              </div>
            </div>

            <div className="md:w-3/4">
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="appointments">Appointments</TabsTrigger>
                  <TabsTrigger value="history">Consultation History</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Welcome Back, John</CardTitle>
                      <CardDescription>Here's a summary of your health information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
                          {recentConsultations.length > 0 ? (
                            <div className="rounded-lg border p-3">
                              <p className="text-sm font-medium">Symptom Check on {recentConsultations[0].date}</p>
                              <p className="text-xs text-gray-500">Symptoms: {recentConsultations[0].symptoms}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                Recommendation: {recentConsultations[0].recommendation}
                              </p>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500">No recent consultations</p>
                          )}
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-2">Upcoming Appointments</h3>
                          {upcomingAppointments.length > 0 ? (
                            <div className="rounded-lg border p-3">
                              <p className="text-sm font-medium">{upcomingAppointments[0].doctor}</p>
                              <p className="text-xs text-gray-500">{upcomingAppointments[0].specialty}</p>
                              <p className="text-xs text-gray-500">
                                {upcomingAppointments[0].date} at {upcomingAppointments[0].time}
                              </p>
                              <p className="text-xs text-gray-500">{upcomingAppointments[0].location}</p>
                              <div className="mt-2">
                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-teal-700 bg-teal-50">
                                  {upcomingAppointments[0].status}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500">No upcoming appointments</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href="/symptom-checker">
                          Start New Symptom Check
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Health Resources</CardTitle>
                      <CardDescription>Helpful information for managing your health</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                          <h4 className="text-md font-medium mb-2">Preventive Care</h4>
                          <p className="text-sm text-gray-500 mb-4">
                            Regular check-ups and screenings can help detect health issues early.
                          </p>
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h4 className="text-md font-medium mb-2">Mental Health</h4>
                          <p className="text-sm text-gray-500 mb-4">
                            Resources for managing stress, anxiety, and maintaining mental wellness.
                          </p>
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="appointments" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Appointments</CardTitle>
                      <CardDescription>Manage your upcoming medical appointments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {upcomingAppointments.length > 0 ? (
                        <div className="space-y-4">
                          {upcomingAppointments.map((appointment) => (
                            <div
                              key={appointment.id}
                              className="flex flex-col md:flex-row justify-between p-4 border rounded-lg"
                            >
                              <div>
                                <h4 className="font-medium">{appointment.doctor}</h4>
                                <p className="text-sm text-gray-500">{appointment.specialty}</p>
                                <p className="text-sm text-gray-500">
                                  {appointment.date} at {appointment.time}
                                </p>
                                <p className="text-sm text-gray-500">{appointment.location}</p>
                              </div>
                              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:justify-center">
                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-teal-700 bg-teal-50 w-fit">
                                  {appointment.status}
                                </span>
                                <div className="flex gap-2 mt-2">
                                  <Button variant="outline" size="sm">
                                    Reschedule
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-500 border-red-200 hover:bg-red-50"
                                  >
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 mb-4">You don't have any upcoming appointments</p>
                          <Button>Schedule an Appointment</Button>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Past Appointments</Button>
                      <Button className="bg-teal-600 hover:bg-teal-700">Schedule New Appointment</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="history" className="pt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Consultation History</CardTitle>
                      <CardDescription>Review your past symptom checks and consultations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {recentConsultations.length > 0 ? (
                        <div className="space-y-4">
                          {recentConsultations.map((consultation) => (
                            <div key={consultation.id} className="p-4 border rounded-lg">
                              <div className="flex justify-between">
                                <h4 className="font-medium">Symptom Check</h4>
                                <p className="text-sm text-gray-500">{consultation.date}</p>
                              </div>
                              <div className="mt-2 space-y-2">
                                <div>
                                  <p className="text-sm font-medium">Symptoms:</p>
                                  <p className="text-sm text-gray-500">{consultation.symptoms}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Recommendation:</p>
                                  <p className="text-sm text-gray-500">{consultation.recommendation}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Follow-up:</p>
                                  <p className="text-sm text-gray-500">{consultation.followUp}</p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 mb-4">You don't have any consultation history</p>
                          <Button asChild className="bg-teal-600 hover:bg-teal-700">
                            <Link href="/symptom-checker">Start a Symptom Check</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 px-4 md:px-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-6">
          <p className="text-sm text-gray-500">
            © 2025 HealthGuide. All rights reserved. This app is not a substitute for professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  )
}
