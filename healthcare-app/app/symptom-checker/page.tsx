"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, HeartPulse } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function SymptomChecker() {
  const [step, setStep] = useState(1)
  const [symptoms, setSymptoms] = useState({
    painLevel: "",
    duration: "",
    location: "",
    additionalSymptoms: [],
  })

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleRadioChange = (field: string, value: string) => {
    setSymptoms({ ...symptoms, [field]: value })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <HeartPulse className="h-6 w-6 text-teal-600" />
          <span className="ml-2 text-xl font-bold">HealthGuide</span>
        </Link>
      </header>
      <main className="flex-1 py-12">
        <div className="container max-w-3xl px-4 md:px-6">
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Symptom Checker</CardTitle>
              <CardDescription>
                Answer a few questions about your symptoms to get guidance on next steps.
              </CardDescription>
              <div className="flex justify-between mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step === i
                          ? "bg-teal-600 text-white"
                          : step > i
                            ? "bg-teal-200 text-teal-800"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {i}
                    </div>
                    <span className="text-xs mt-1 text-gray-500">
                      {i === 1 ? "Symptoms" : i === 2 ? "Details" : i === 3 ? "History" : "Results"}
                    </span>
                  </div>
                ))}
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">How would you rate your pain?</h3>
                    <RadioGroup
                      value={symptoms.painLevel}
                      onValueChange={(value) => handleRadioChange("painLevel", value)}
                      className="mt-2 space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mild" id="pain-mild" />
                        <Label htmlFor="pain-mild">Mild - Noticeable but not interfering with activities</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="pain-moderate" />
                        <Label htmlFor="pain-moderate">Moderate - Interferes with some activities</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="severe" id="pain-severe" />
                        <Label htmlFor="pain-severe">Severe - Prevents normal activities</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="extreme" id="pain-extreme" />
                        <Label htmlFor="pain-extreme">Extreme - Unbearable, need immediate relief</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">How long have you been experiencing these symptoms?</h3>
                    <RadioGroup
                      value={symptoms.duration}
                      onValueChange={(value) => handleRadioChange("duration", value)}
                      className="mt-2 space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hours" id="duration-hours" />
                        <Label htmlFor="duration-hours">Less than 24 hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="days" id="duration-days" />
                        <Label htmlFor="duration-days">1-3 days</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="week" id="duration-week" />
                        <Label htmlFor="duration-week">Less than a week</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="longer" id="duration-longer" />
                        <Label htmlFor="duration-longer">More than a week</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Where is the pain or discomfort located?</h3>
                    <RadioGroup
                      value={symptoms.location}
                      onValueChange={(value) => handleRadioChange("location", value)}
                      className="mt-2 space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="head" id="location-head" />
                        <Label htmlFor="location-head">Head or neck</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="chest" id="location-chest" />
                        <Label htmlFor="location-chest">Chest or upper back</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="abdomen" id="location-abdomen" />
                        <Label htmlFor="location-abdomen">Abdomen or lower back</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="limbs" id="location-limbs" />
                        <Label htmlFor="location-limbs">Arms or legs</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="rounded-lg bg-teal-50 p-4 border border-teal-200">
                    <h3 className="text-lg font-medium text-teal-800 mb-2">Assessment Summary</h3>
                    <p className="text-gray-700 mb-4">Based on the information you provided, here's our guidance:</p>

                    <div className="space-y-4">
                      {symptoms.painLevel === "severe" || symptoms.painLevel === "extreme" ? (
                        <div className="p-3 bg-red-50 border border-red-200 rounded">
                          <p className="font-medium text-red-800">Seek immediate medical attention</p>
                          <p className="text-sm text-gray-700">
                            Your symptoms suggest you should visit an emergency room or urgent care facility as soon as
                            possible.
                          </p>
                        </div>
                      ) : symptoms.duration === "longer" ? (
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded">
                          <p className="font-medium text-amber-800">Schedule a doctor's appointment</p>
                          <p className="text-sm text-gray-700">
                            Persistent symptoms lasting more than a week should be evaluated by a healthcare provider.
                          </p>
                        </div>
                      ) : (
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                          <p className="font-medium text-blue-800">Monitor your symptoms</p>
                          <p className="text-sm text-gray-700">
                            Your symptoms appear to be mild. Rest, stay hydrated, and monitor for any changes.
                          </p>
                        </div>
                      )}

                      <div className="p-3 bg-white border rounded">
                        <p className="font-medium">Next Steps</p>
                        <ul className="text-sm text-gray-700 list-disc pl-5 mt-2 space-y-1">
                          <li>Track your symptoms and note any changes</li>
                          <li>Stay hydrated and get adequate rest</li>
                          <li>Consider over-the-counter pain relief if appropriate</li>
                          <li>Follow up with your primary care provider if symptoms worsen</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 text-sm text-gray-500">
                      <p className="font-medium text-red-600">Important Disclaimer:</p>
                      <p>
                        This is not a medical diagnosis. Always consult with a healthcare professional for proper
                        medical advice.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Link href="/navigation-guide">
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Learn About Healthcare Options
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}
              {step < 4 && (
                <Button
                  className="ml-auto bg-teal-600 hover:bg-teal-700"
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !symptoms.painLevel) ||
                    (step === 2 && !symptoms.duration) ||
                    (step === 3 && !symptoms.location)
                  }
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
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
