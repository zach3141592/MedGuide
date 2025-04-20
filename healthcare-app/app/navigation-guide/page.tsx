import Link from "next/link"
import { ArrowLeft, Clock, HeartPulse, MapPin, Phone, Stethoscope } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NavigationGuide() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <HeartPulse className="h-6 w-6 text-teal-600" />
          <span className="ml-2 text-xl font-bold">HealthGuide</span>
        </Link>
      </header>
      <main className="flex-1 py-12">
        <div className="container max-w-4xl px-4 md:px-6">
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Healthcare Navigation Guide
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                Understanding when and where to seek medical care can be confusing. Use this guide to help you make
                informed decisions.
              </p>
            </div>

            <Tabs defaultValue="when" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="when">When to Seek Care</TabsTrigger>
                <TabsTrigger value="where">Where to Go</TabsTrigger>
                <TabsTrigger value="prepare">How to Prepare</TabsTrigger>
              </TabsList>

              <TabsContent value="when" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="bg-red-50">
                      <CardTitle className="flex items-center text-red-700">
                        <Clock className="mr-2 h-5 w-5" />
                        Emergency Care
                      </CardTitle>
                      <CardDescription>Seek immediate medical attention</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Difficulty breathing or shortness of breath</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Chest or upper abdominal pain or pressure</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Fainting, sudden dizziness, weakness</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Changes in vision</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Confusion or changes in mental status</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Any sudden or severe pain</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Uncontrolled bleeding</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-red-100 p-1 text-red-600">•</span>
                          <span>Severe or persistent vomiting or diarrhea</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-amber-50">
                      <CardTitle className="flex items-center text-amber-700">
                        <Clock className="mr-2 h-5 w-5" />
                        Urgent Care
                      </CardTitle>
                      <CardDescription>Seek care within 24 hours</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Minor burns or injuries</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Sprains and strains</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Fever without a rash</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Persistent vomiting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Moderate pain</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Cuts that may need stitches</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Dehydration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-amber-100 p-1 text-amber-600">•</span>
                          <span>Minor broken bones (fingers, toes)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="flex items-center text-blue-700">
                        <Clock className="mr-2 h-5 w-5" />
                        Primary Care
                      </CardTitle>
                      <CardDescription>Schedule an appointment</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">•</span>
                          <span>Cold or flu symptoms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">•</span>
                          <span>Minor aches and pains</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">•</span>
                          <span>Routine vaccinations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">•</span>
                          <span>Annual check-ups</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">•</span>
                          <span>Medication refills</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">•</span>
                          <span>Chronic condition management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-blue-100 p-1 text-blue-600">•</span>
                          <span>Minor skin conditions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-green-50">
                      <CardTitle className="flex items-center text-green-700">
                        <Clock className="mr-2 h-5 w-5" />
                        Self-Care
                      </CardTitle>
                      <CardDescription>Manage at home</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-green-100 p-1 text-green-600">•</span>
                          <span>Minor coughs and colds</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-green-100 p-1 text-green-600">•</span>
                          <span>Mild headaches</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-green-100 p-1 text-green-600">•</span>
                          <span>Minor cuts and scrapes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-green-100 p-1 text-green-600">•</span>
                          <span>Mild indigestion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-green-100 p-1 text-green-600">•</span>
                          <span>Mild allergies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 rounded-full bg-green-100 p-1 text-green-600">•</span>
                          <span>Rest and hydration needs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="where" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-red-600" />
                        Emergency Room
                      </CardTitle>
                      <CardDescription>For life-threatening conditions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Emergency rooms are equipped to handle serious, life-threatening conditions and are open 24/7.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">When to go:</h4>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          <li>Severe chest pain or difficulty breathing</li>
                          <li>Severe trauma or injury</li>
                          <li>Uncontrolled bleeding</li>
                          <li>Severe allergic reactions</li>
                          <li>Stroke symptoms</li>
                          <li>Loss of consciousness</li>
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-500">
                        <p>Average wait time: 3-4 hours for non-critical cases</p>
                        <p>Average cost: $$$$ (highest)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-amber-600" />
                        Urgent Care
                      </CardTitle>
                      <CardDescription>For non-life-threatening conditions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Urgent care centers provide care for illnesses and injuries that require prompt attention but
                        aren't emergencies.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">When to go:</h4>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          <li>Minor fractures or sprains</li>
                          <li>Cuts requiring stitches</li>
                          <li>Moderate fever without rash</li>
                          <li>Dehydration</li>
                          <li>Minor burns</li>
                          <li>Persistent vomiting</li>
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-500">
                        <p>Average wait time: 30-60 minutes</p>
                        <p>Average cost: $$-$$$</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                        Primary Care
                      </CardTitle>
                      <CardDescription>For routine and preventive care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Your primary care provider is your main healthcare contact for non-urgent medical needs.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">When to go:</h4>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          <li>Annual check-ups</li>
                          <li>Chronic disease management</li>
                          <li>Vaccinations</li>
                          <li>Minor illnesses</li>
                          <li>Medication management</li>
                          <li>Referrals to specialists</li>
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-500">
                        <p>Average wait time: By appointment (days to weeks)</p>
                        <p>Average cost: $-$$</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-teal-600" />
                        Telehealth
                      </CardTitle>
                      <CardDescription>For convenient virtual care</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Telehealth services allow you to consult with healthcare providers remotely via video or phone.
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">When to use:</h4>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          <li>Minor illnesses like colds or rashes</li>
                          <li>Mental health consultations</li>
                          <li>Follow-up appointments</li>
                          <li>Medication refills</li>
                          <li>When you can't travel to a facility</li>
                          <li>Initial symptom assessment</li>
                        </ul>
                      </div>
                      <div className="mt-4 text-sm text-gray-500">
                        <p>Average wait time: Minutes to hours</p>
                        <p>Average cost: $-$$</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="prepare" className="pt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How to Prepare for Healthcare Visits</CardTitle>
                    <CardDescription>
                      Being prepared helps you get the most out of your healthcare appointments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center">
                          <Stethoscope className="mr-2 h-5 w-5 text-teal-600" />
                          Before Your Visit
                        </h3>
                        <ul className="space-y-2 text-sm pl-7 list-disc">
                          <li>Write down your symptoms, when they started, and their severity</li>
                          <li>Make a list of all medications you're taking (including over-the-counter)</li>
                          <li>Note any allergies to medications</li>
                          <li>Bring your insurance card and ID</li>
                          <li>Prepare a list of questions you want to ask</li>
                          <li>Bring your medical records or have them transferred</li>
                          <li>Check if you need to fast before any lab tests</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center">
                          <Phone className="mr-2 h-5 w-5 text-teal-600" />
                          Questions to Ask Your Provider
                        </h3>
                        <ul className="space-y-2 text-sm pl-7 list-disc">
                          <li>What is my diagnosis?</li>
                          <li>What caused this condition?</li>
                          <li>Will I need any tests?</li>
                          <li>What are my treatment options?</li>
                          <li>What are the benefits and risks of each treatment?</li>
                          <li>How soon should I expect to feel better?</li>
                          <li>What should I do if symptoms worsen?</li>
                          <li>When should I schedule a follow-up?</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-teal-600" />
                          After Your Visit
                        </h3>
                        <ul className="space-y-2 text-sm pl-7 list-disc">
                          <li>Follow the treatment plan as prescribed</li>
                          <li>Fill any prescriptions promptly</li>
                          <li>Schedule recommended follow-up appointments</li>
                          <li>Monitor your symptoms and note any changes</li>
                          <li>Contact your provider if symptoms worsen or new ones develop</li>
                          <li>Keep a record of any side effects from medications</li>
                          <li>Request copies of test results for your records</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
