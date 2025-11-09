"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "3rd GIC Content Creation Contest 2025",
      date: "15 October 2025",
      time: "N/A",
      location: "Online Event",
      description: "Craft Stories that Speak.",
      image: "/ccc.jpg",
      attendees: 150,
      status: "Ended",
    },
    {
      id: 2,
      title: "BATTLECORE 1.0",
      date: "13 February 2025",
      time: "12-3 PM",
      location: "Smart Lab",
      description: "1st GMMSC ESPORTS Tournament",
      image: "/gamingev.jpg",
      attendees: 260,
      status: "Ended",
    },
    {
      id: 3,
      title: "Legacy Of July 2024",
      date: "10 September 2024",
      time: "11.30 am - 2.30 pm",
      location: "Auditorium",
      description: "GMMSC's First National Event",
      image: "/lj.jpg",
      attendees: 300,
      status: "Ended",
    },
    {
      id: 4,
      title: "1st INTERNAL ICT FEST 2022",
      date: "7th-9th March",
      time: "10.00 am - 5.00 pm",
      location: "GMMSC Campus",
      description: "GIC's First Event",
      image: "/past.jpg",
      attendees: 100,
      status: "Ended",
    },
  ]

  // Show only ended events
  const endedEvents = events.filter((e) => e.status === "Ended")

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient-shift opacity-30" />
        <div className="absolute inset-0 bg-particles animate-float" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 gradient-text">All Events</h1>
          <p className="text-center text-foreground/70 mb-16 text-lg">
            Explore our past events and look back at our journey
          </p>

          {/* Past Events */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Past Events</h2>
            <div className="space-y-8">
              {endedEvents.map((event) => (
                <div key={event.id} className="glass-card card-hover p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full lg:w-80 h-48 object-cover rounded-lg border border-accent/30 shadow-neon"
                    />
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-3">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4 text-foreground/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-4">{event.description}</p>
                      <p className="text-accent mb-4">Time: {event.time}</p>
                      <Button className="btn-glow">More Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center mt-12">
            <Link href="/#events">
              <Button className="btn-glow-secondary bg-transparent">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
