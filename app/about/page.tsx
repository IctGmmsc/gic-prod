"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, Target, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-accent/20 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold gradient-text">
              GMMSC ICT CLUB
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-sm text-gold transition">
                About
              </Link>
              <Link href="/#executives" className="text-sm text-gold/70 hover:text-gold transition">
                Team
              </Link>
              <Link href="/" className="text-sm text-gold/70 hover:text-gold transition">
                Home
              </Link>
              <Button className="btn-glow">Join</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(242,60,75,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,60,75,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            About <span className="gradient-text">GMMSC ICT CLUB</span>
          </h1>
          <p className="text-lg md:text-xl text-gold/70 max-w-3xl mx-auto leading-relaxed">
            We are a community of passionate technologists dedicated to fostering innovation, collaboration, and growth
            in the tech industry.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-accent/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-gold/70 text-lg mb-4 leading-relaxed">
                To empower the next generation of tech leaders by providing a collaborative space where members can
                learn, innovate, and grow together.
              </p>
              <p className="text-gold/70 text-lg leading-relaxed">
                We believe in the power of community-driven learning and the transformative impact of technology when
                guided by purpose and passion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Target className="h-8 w-8" />, label: "Focus", value: "Innovation" },
                { icon: <Users className="h-8 w-8" />, label: "Members", value: "500+" },
                { icon: <Zap className="h-8 w-8" />, label: "Events", value: "Monthly" },
                { icon: <Globe className="h-8 w-8" />, label: "Reach", value: "Global" },
              ].map((stat, index) => (
                <div key={index} className="glass-card card-hover p-6">
                  <div className="text-accent mb-2">{stat.icon}</div>
                  <p className="text-sm text-gold/60 mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-gold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-accent/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Collaboration",
                description:
                  "We believe the best ideas come from diverse minds working together. Together, we achieve more.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new ideas and technologies, pushing boundaries to create solutions that matter.",
              },
              {
                title: "Inclusivity",
                description:
                  "Everyone belongs here. Regardless of background or experience level, all voices are valued.",
              },
            ].map((value, index) => (
              <div key={index} className="glass-card card-hover p-8">
                <h3 className="text-2xl font-bold mb-4 text-gold">{value.title}</h3>
                <p className="text-gold/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-accent/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Our Journey</h2>

          <div className="space-y-8">
            {[
              {
                year: "2019",
                title: "Founded",
                description:
                  "GMMSC ICT CLUB started as a small group of passionate technologists with a shared vision.",
              },
              {
                year: "2020",
                title: "Growth",
                description: "Expanded our community to 200+ active members across multiple universities.",
              },
              {
                year: "2022",
                title: "Recognition",
                description: "Became recognized as a leading tech community for innovation and collaboration.",
              },
              {
                year: "2024",
                title: "Evolution",
                description: "Launched global initiatives and expanded our impact to thousands worldwide.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-accent shadow-neon flex items-center justify-center text-black font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < 3 && <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent mt-2" />}
                </div>
                <div className="pb-6">
                  <p className="text-accent text-sm font-semibold">{milestone.year}</p>
                  <h3 className="text-2xl font-bold mt-2 text-gold">{milestone.title}</h3>
                  <p className="text-gold/70 mt-2">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-accent/20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card border-accent/30 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Join Our Community</h2>
            <p className="text-gold/70 mb-8 text-lg">
              Be part of something bigger. Connect with innovators, learn cutting-edge technologies, and grow your
              skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-glow">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/#executives">
                <Button size="lg" variant="outline" className="btn-glow-secondary w-full bg-transparent">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
