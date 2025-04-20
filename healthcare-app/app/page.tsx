import Link from "next/link"
import { ArrowRight, Calendar, ClipboardList, HeartPulse, MapPin, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <HeartPulse className="h-6 w-6 text-teal-600" />
          <span className="ml-2 text-xl font-bold">HealthGuide</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Personal Healthcare Navigator
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get guidance for minor health concerns and learn how to navigate the healthcare system effectively. We
                  help you make informed decisions about your health.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="/symptom-checker">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Check Symptoms
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/navigation-guide">
                    <Button variant="outline">Learn About Healthcare Options</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Healthcare professionals"
                  className="rounded-lg object-cover"
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Help You</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides tools and resources to help you understand your symptoms and navigate the
                  healthcare system with confidence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <ClipboardList className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Symptom Checker</h3>
                <p className="text-center text-gray-500">
                  Answer questions about your symptoms to get personalized guidance on next steps.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <MapPin className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Healthcare Navigator</h3>
                <p className="text-center text-gray-500">
                  Learn when to visit urgent care, emergency room, or schedule a primary care appointment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Calendar className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Follow-up Reminders</h3>
                <p className="text-center text-gray-500">
                  Get reminders for follow-up care and medication schedules based on your consultations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Important Disclaimer</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  HealthGuide is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
              </div>
              <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
                <div className="flex items-center justify-center space-x-4 rounded-lg border bg-white p-6 shadow-sm">
                  <Shield className="h-10 w-10 text-red-500" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold">Always Consult a Healthcare Professional</h3>
                    <p className="text-gray-500">
                      Our app provides general guidance only. For medical emergencies, call emergency services
                      immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2025 HealthGuide. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
