"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
// This line must be at the very top of the correct file.
import { ArrowRight, Code2, Users, Zap, Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const [selectedYear, setSelectedYear] = useState("2025-2026")
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContactStatus("sending")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up at https://formspree.io/ to get your form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setContactStatus("success")
        form.reset()
        setTimeout(() => setContactStatus("idle"), 5000)
      } else {
        setContactStatus("error")
        setTimeout(() => setContactStatus("idle"), 5000)
      }
    } catch (error) {
      setContactStatus("error")
      setTimeout(() => setContactStatus("idle"), 5000)
    }
  }

  const executives = {
    "2025-2026": [
      {
        name: "Rubaiyat Partho",
        designation: "President",
        Panel: "2025-2026",
        section: "12-Beta",
        studentId: "240982",
        image: "partho.jpg",
        facebook: "https://www.facebook.com/rubaiyat.partho",
        instagram: "https://www.instagram.com/_par.tho/",
      },
      {
        name: "Arian Aas Sami",
        designation: "General Secretary",
        Panel: "2025-2026",
        section: "12-Beta",
        studentId: "241043",
        image: "/arian.jpg",
        facebook: "https://www.instagram.com/arian_samy_/",
        instagram: "https://www.facebook.com/arianaassamy/",
      },
      {
        name: "Rubaiya Zahin",
        designation: "Vice President",
        Panel: "2025-2026",
        section: "12-Marigold",
        studentId: "241345",
        image: "/Rubaiya.jpg",
        facebook: "https://www.facebook.com/rubaiya.zahin.2024",
        instagram: "https://www.instagram.com/rubyy_21_/",
      },
      {
        name: "Arafat Hossain Shovon",
        designation: "Vice President",
        Panel: "2025-2026",
        section: "12-Alpha",
        studentId: "240824",
        image: "/shovon.jpg",
        facebook: "https://www.facebook.com/arafat.mashfi56",
        instagram: "https://www.instagram.com/majestic_potatoo/",
      },
      {
        name: "Sheikh Md. Tamim Hasan",
        designation: "Addditional General Secretary",
        Panel: "2025-2026",
        section: "12-Beta",
        studentId: "241001",
        image: "/tamim.jpg",
        facebook: "https://www.facebook.com/sheikh.tamimhasan.7",
        instagram: "https://www.instagram.com/tamim.notfound/",
      },
      {
        name: "Md. Khairul Noman Shaikh",
        designation: "Joint Secretary",
        Panel: "2025-2026",
        section: "12-Beta",
        studentId: "240988",
        image: "/noman.jpg",
        facebook: "https://www.facebook.com/khairul.noman.37",
        instagram: "https://www.instagram.com/khairul_n0man/",
      },
      {
        name: "Amna Nuzhat Shabber",
        designation: "Joint Secretary",
        Panel: "2025-2026",
        section: "12-Aparajita",
        studentId: "241190",
        image: "/Amna.png",
        facebook: "https://www.facebook.com/raynnl",
        instagram: "https://www.instagram.com/r4y.vvv_/",
      },
      {
        name: "Aboni Mahfuz",
        designation: "Organizing Secretary",
        Panel: "2025-2026",
        section: "12-Marigold",
        studentId: "240880 ",
        image: "/Aboni.jpg",
        facebook: "https://www.facebook.com/aboni.mahfuz/",
        instagram: "https://www.instagram.com/abonipuu/",
      },
      {
        name: "Navin Mahbub",
        designation: "Office Secretary",
        Panel: "2025-2026",
        section: "12-Beta",
        studentId: "241042",
        image: "/navin.jpg",
        facebook: "https://www.facebook.com/navin.navinmahbub",
        instagram: "https://www.instagram.com/navin_mahbub/",
      },
      {
        name: "Zarin Tasnim Moumita",
        designation: "Treasurer",
        Panel: "2025-2026",
        section: "12-Aparajita",
        studentId: "240897",
        image: "/Moumita.jpeg",
        facebook: "https://www.facebook.com/zarin.tasnim.345664",
        instagram: "https://www.instagram.com/_m0u.mita_/",
      },
      {
        name: "Mst. Marufa Akter",
        designation: "Internal Affairs Secretary",
        Panel: "2025-2026",
        section: "12-Orbit",
        studentId: "241066",
        image: "/khusi.png",
        facebook: "",
        instagram: "https://www.instagram.com/sparrow_lalala25/",
      },
      {
        name: "S M Ishmam",
        designation: "External Affairs Secretary",
        Panel: "2025-2026",
        section: "A",
        studentId: "12356",
        image: "/Ishmam.jpg",
        facebook: "https://www.facebook.com/abrar.ishmam.2024",
        instagram: "https://www.instagram.com/1shmam._/",
      },
    ],
    "2024-2025": [
      {
        name: "Mahdi Mohammad",
        designation: "President",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/mahdi.jpg",
        facebook: "https://www.facebook.com/ahimuhammadevran",
        instagram: "",
      },
      {
        name: "Sarzil Hossain",
        designation: "General Secretary",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/sarzil2.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Abrar Hamim",
        designation: "Vice President",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/abrar.jpg",
        facebook: "https://www.facebook.com/abrar.hamim.114779",
        instagram: "",
      },
      {
        name: "Atkian Nshra",
        designation: "Vice President",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/kashfa.jpg",
        facebook: "https://www.facebook.com/atkian.kashfa.5",
        instagram: "https://www.instagram.com/bleuissue_aki_/",
      },
      {
        name: "Mahtab Ayub Sani",
        designation: "Director of Program & Events",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/sani.jpg",
        facebook: "https://www.facebook.com/mahtab.sani.875",
        instagram: "https://www.instagram.com/mahtab__sani/",
      },
      {
        name: "Zafia Jarnaz",
        designation: "Office Secretary",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/zafi.png",
        facebook: "",
        instagram: "",
      },
      {
        name: "Ahmed Nahian",
        designation: "Tresurer",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/rayat.png",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sumaiya Sarowar",
        designation: "Secretary Of Public Relation",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/bismee.png",
        facebook: "",
        instagram: "",
      },
      {
        name: "Md. Mashrur Abrar ",
        designation: "Head of Content Creation",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/mostofa.jpg",
        facebook: "",
        instagram: "",
      },
    ],
    "2023-2024": [
      {
        name: "Umama Islam Orpa",
        designation: "President",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/orpa.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Mahtab Ayub Sani",
        designation: "General Secretary",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/sani.jpg",
        facebook: "https://www.facebook.com/mahtab.sani.875",
        instagram: "https://www.instagram.com/mahtab__sani/",
      },
      {
        name: "Mahdi Mohammad",
        designation: "Vice President",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/mahdi.jpg",
        facebook: "https://www.facebook.com/ahimuhammadevran",
        instagram: "",
      },
      {
        name: "Sarzil Hossain",
        designation: "Vice President",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/sarzil2.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sharaf Ahmed",
        designation: "Social Media Manager",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/sharaf.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Atkian Nshra",
        designation: "Photographer",
        Panel: "2024-2025",
        section: "",
        studentId: "",
        image: "/kashfa.jpg",
        facebook: "https://www.facebook.com/atkian.kashfa.5",
        instagram: "https://www.instagram.com/bleuissue_aki_/",
      },
      {
        name: "Fahabba Nawsin Ali",
        designation: "Office Secretary",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/dummy-executive.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Zafia Jarnaz Turna",
        designation: "Fundraiser",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/zafi.png",
        facebook: "",
        instagram: "",
      },
      {
        name: "Ahmed Nahian",
        designation: "Tresurer",
        bPanel: "2023-2024",
        section: "",
        studentId: "",
        image: "/rayat.png",
        facebook: "",
        instagram: "",
      },
      {
        name: "Mashrur Abrar",
        designation: "Dept. Head of Content Creation",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/mostofa.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Ashab Kabir Chowdhury",
        designation: "Content Creator",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/dummy-executive.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Lamia Nazreen",
        designation: "Content Creator",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/dummy-executive.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Al Wasee",
        designation: "Junior Representative",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/dummy-executive.jpg",
        facebook: "",
        instagram: "",
      },
      {
        name: "Sina Ibne Siddik",
        designation: "Asst. General Secretary",
        Panel: "2023-2024",
        section: "",
        studentId: "",
        image: "/dummy-executive.jpg",
        facebook: "",
        instagram: "",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient-shift" />
        <div className="absolute inset-0 bg-particles animate-float" />
        <div className="tech-grid" />
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-6xl mx-auto text-center reveal">
            <div className="mb-8 animate-logo-entrance">
              <img
                src="/main-logo.jpg"
                alt="GMMSC ICT Club Logo"
                className="w-32 h-32 mx-auto animate-pulse-glow rounded-lg border-2 border-accent/50 shadow-neon"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text animate-gradient-text bg-primary text-primary">
              GMMSC ICT CLUB
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">404 : Limits not found</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf48t1EVpOskBY_Ajdk7VVgEq9lcp7St7AKKiOK9dkBRvU3Zw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-glow group">
                  <span>Join Us</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://www.facebook.com/club.ict.gmmsc" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="btn-glow-secondary bg-transparent">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">About Us</h2>
            <div className="glass-card card-hover reveal p-8 mb-16 text-center">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
                Welcome to GMMSC ICT Club, where innovation meets passion. We are a vibrant community of tech
                enthusiasts, programmers, designers, and gamers dedicated to pushing the boundaries of technology. Our
                club provides a platform for students to learn, collaborate, and create cutting-edge solutions while
                building lasting professional relationships. Join us on our journey to explore the limitless
                possibilities of technology.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Code2, title: "Learn", desc: "Master cutting-edge technologies" },
                { icon: Users, title: "Connect", desc: "Build lasting professional relationships" },
                { icon: Zap, title: "Innovate", desc: "Create solutions that matter" },
              ].map((item, i) => (
                <div key={i} className="glass-card card-hover reveal p-8 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-accent icon-spin" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-4xl font-bold text-center mb-12 reveal gradient-text">Our Departments</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "IT Skills",
                    desc: "Hardware, networking, and system administration",
                    logo: "/it-skills-logo.png",
                  },
                  {
                    name: "Programming",
                    desc: "Software development and coding excellence",
                    logo: "/programming-logo.png",
                  },
                  {
                    name: "Content Creation",
                    desc: "Digital media, design, and creative content",
                    logo: "/cc-logo.png",
                  },
                  {
                    name: "Gaming",
                    desc: "Game development and esports",
                    logo: "/gaming-logo.png",
                  },
                ].map((dept, i) => (
                  <div key={i} className="glass-card card-hover reveal text-center p-6">
                    <div className="mb-4 flex justify-center">
                      <img
                        src={dept.logo || "/placeholder.svg"}
                        alt={`${dept.name} logo`}
                        className="w-20 h-20 rounded-lg border border-accent/30 shadow-neon object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-accent">{dept.name}</h4>
                    <p className="text-sm text-foreground/70">{dept.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Committee */}
        <section id="executives" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">Executive Committee</h2>

            <div className="flex justify-center gap-4 mb-12">
              {["2025-2026", "2024-2025", "2023-2024"].map((year) => (
                <Button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`btn-glow ${selectedYear === year ? "bg-accent" : "bg-transparent"}`}
                >
                  {year}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executives[selectedYear as keyof typeof executives].map((exec, i) => (
                <div key={i} className="glass-card card-hover reveal text-center p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent/50 shadow-neon">
                    <img
                      src={exec.image || "/placeholder.svg"}
                      alt={exec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{exec.name}</h3>
                  <p className="text-accent mb-2">{exec.designation}</p>
                  <p className="text-sm text-foreground/60 mb-1">Batch: {exec.batch}</p>
                  <p className="text-sm text-foreground/60 mb-1">Section: {exec.section}</p>
                  <p className="text-sm text-foreground/60 mb-4">ID: {exec.studentId}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href={exec.facebook}
                      className="text-foreground/60 hover:text-accent transition-colors icon-spin"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={exec.instagram}
                      className="text-foreground/60 hover:text-accent transition-colors icon-spin"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section id="teachers" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">Teachers' Speeches</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Prof. Md Nazrul Islam Khan",
                  title: "Principal GMMSC, Chief Advisor GIC",
                  image: "/principal.png",
                  speech: `I find GMMSC ICT Club to be one of the most versatile component of my institution. 
Its talented, dedicated and enthusiast crews have been providing real values to the supplementation 
of extra-curricular activities. We will provide them with all necessary supports to excel at their works.`,
                },
                {
                  name: "Md. Nurul Haque",
                  title: "Lecturer in ICT, Co-ordinator GIC",
                  image: "/nurul-sir.jpg",
                  speech: `As the coordinator of the GMMSC ICT Club, I’ve had the privilege of watching our students grow and achieve remarkable things. This club isn’t just about technology—it’s a community where ideas come to life and friendships are built. I’m always here to support and guide our members.`,
                },
                {
                  name: "MD MOKLESUR RAHAMAN",
                  title: "Lecturer in Physics, Moderator GIC",
                  image: "/moklesh-sir.jpg",
                  speech: `Innovation is born when creativity meets technical skill. Dare to think differently and create solutions that transform lives.`,
                },
                {
                  name: "MD. ABU NAYEEM",
                  title: " Asst. Teacher in ICT, Moderator GIC",
                  image: "/nayeem-sir.jpg",
                  speech: `It's been a joy to work closely with our members. Watching their curiosity, enthusiasm, and determination grow is truly inspiring. This club gives them a chance to discover their potential, learn new skills, and contribute meaningfully. I'm committed to guiding them every step of the way.`,
                },
              ].map((teacher, i) => (
                <div key={i} className="glass-card card-hover reveal p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent/50 shadow-neon">
                    <img
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                  <p className="text-accent mb-4">{teacher.title}</p>
                  <p className="text-sm text-foreground/70 italic">"{teacher.speech}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Importance of technological literacy and liberation",
                  excerpt: "Discover why technological literacy and liberation is importnant...",
                  date: "1 January 2025",
                  author: "Sarzil Hossain",
                  image: "/techlib.png",
                },
                {
                  id: 2,
                  title: "Introduction to GitHub : Part 1",
                  excerpt: "Explore the latest frameworks and technologies of github...",
                  date: "3 January 2025",
                  author: "Mahdi Mohammad",
                  image: "/github-01.png",
                },
                {
                  id: 3,
                  title: "Introduction to GitHub : Part 2",
                  excerpt: "Learn how to use github in 5 minutes...",
                  date: "3 January 2025",
                  author: "Mahdi Mohammad",
                  image: "/github-01.png",
                },
              ].map((post) => (
                <div key={post.id} className="glass-card card-hover reveal">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-48 w-full object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <p className="text-sm text-accent mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                    <p className="text-sm text-foreground/60 mb-4">By {post.author}</p>
                    <Link href={`/blog/${post.id}`} className="text-accent hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center mt-12">
              <Link href="/blog">
                <Button className="btn-glow">See All Blogs</Button>
              </Link>
              <a href="https://forms.gle/D7qE18YbVrjtX1Lo8" target="_blank" rel="noopener noreferrer">
                <Button className="btn-glow-secondary bg-transparent text-gold">Submit Blog</Button>
              </a>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">Our Events</h2>
            <div className="space-y-6">
              {[
                {
                  title: "3rd GIC Content Creation Contest 2025",
                  date: "15 October 2025",
                  desc: "Craft Stories that Speak.",
                  image: "/ccc.jpg",
                },
                {
                  title: "BATTLECORE 1.0",
                  date: "13 February 2025",
                  desc: "1st GMMSC ESPORTS Turnament",
                  image: "/gamingev.jpg",
                },
                {
                  title: "Legacy Of July 2024",
                  date: "10 September 2024",
                  desc: "GMMSC'S 1st National Contest",
                  image: "/lj.jpg",
                },
              ].map((event, i) => (
                <div key={i} className="glass-card card-hover reveal p-6 flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg border border-accent/30 shadow-neon"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-accent mb-1">{event.date}</p>
                    <p className="text-foreground/70">{event.desc}</p>
                  </div>
                  <a
                    href="https://www.facebook.com/club.ict.gmmsc/past_hosted_events"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-glow">View Details</Button>
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/events">
                <Button className="btn-glow">See All Events</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">Gallery</h2>

            {/* Update images here */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 1, image: "/ws.jpg" },
                { id: 2, image: "/ljpic.jpg" },
                { id: 3, image: "/handover.jpg" },
                { id: 4, image: "/gaming2.jpg" }, // already in your project
              ].map((item) => (
                <div key={item.id} className="glass-card card-hover reveal aspect-square overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`Gallery ${item.id}`}
                    className="w-full h-full object-cover rounded-lg border border-accent/20"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/gallery">
                <Button className="btn-glow">View Full Gallery</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section id="members" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">Our Members</h2>
            <div className="glass-card card-hover reveal p-8 text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-4">150+ Active Members</h3>
              <p className="text-foreground/70 mb-6">Join our vibrant community of tech enthusiasts and innovators</p>
              <Link href="/members">
                <Button className="btn-glow">View All Members</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="divider-glow mb-16" />
            <h2 className="text-5xl font-bold text-center mb-12 reveal gradient-text">Get In Touch</h2>
            <div className="glass-card card-hover reveal p-8">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <input type="hidden" name="_to" value="ict.gmmsc.club@gmail.com" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />

                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-accent/30 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-accent/30 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-accent/30 rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all text-foreground"
                    placeholder="Your message"
                  />
                </div>

                {contactStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {contactStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                    Failed to send message. Please try again or email us directly at ict.gmmsc.club@gmail.com
                  </div>
                )}

                <Button type="submit" className="btn-glow w-full" disabled={contactStatus === "sending"}>
                  <Mail className="mr-2" />
                  {contactStatus === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-foreground/60">
                  Or email us directly at{" "}
                  <a href="mailto:ict.gmmsc.club@gmail.com" className="text-accent hover:underline">
                    ict.gmmsc.club@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
