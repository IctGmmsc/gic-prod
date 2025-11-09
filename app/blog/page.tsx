"use client"

import { Button } from "@/components/ui/button"
import { Calendar, User, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Link from "next/link"


const blogPosts = [
  {
    id: 1,
    title: "Importance of technological literacy and liberation",
    author: "Sarzil Hossain",
    designation: "Genral Secretary 2025-26",
    batch: "HSC-2025",
    date: "1 January 2025",
    category: "technological literacy and liberation",
    excerpt:
      "This article showcases the necessity to increase our knowledge and make use of our intellect before it is too late.",
    content: "Full artiokbbsj djbcjb cle content here...",
  },
  {
    id: 2,
    title: "Introduction to GitHub : Part 1",
    author: "Mahdi Mohammad",
    designation: "President 2024-2025",
    batch: "HSC-2026",
    date: "1 January 2025",
    category: "GitHub",
    excerpt:
      "আমরা Google Drive এ ছবি কিংবা ভিডিও save করে রাখি । সেটা সংরক্ষিতও থাকে সহজে share-ও করা যায় । প্রোগ্রামারদের Google Drive হলো GITHUB.",
    content: "Full article content here...",
  },
  {
    id: 3,
    title: "Introduction to GitHub : Part 2",
    author: "Mahdi Mohammad",
    designation: "President 2024-2025",
    batch: "HSC-2026",
    date: "1 January 2025",
    category: "GitHub",
    excerpt:
      "GitHub এ একটা প্রজেক্ট এ অনেকজন কাজ করলে - কতগুলো Best Practices ফলো করা ভালো",
    content: "Full article content here...",
  },
  {
    id: 4,
    title: "Getting Started with React 19: A Modern Approach to Building Faster and Simpler Web Interfaces",
    author: "Arian Aas Sami",
    designation: "General Secretary-2025-2026",
    batch: "Hsc-2026",
    date: "5 November 2025",
    category: "CSS",
    excerpt:
      "React 19 is easier for beginners while offering more power for advanced developers.",
    content: "Full article content here...",
  },
  {
    id: 5,
    title: "Getting Started with Adobe Photoshop: A Beginner’s Guide to Creative Image Editing",
    author: "Arian Aas Sami",
    designation: "General Secretary-2025-2026",
    batch: "2023",
    date: "Hsc-2026",
    category: "Content Creation",
    excerpt:
      "Photoshop is a powerful tool used for editing, enhancing, and creating images even for beginners.",
    content: "Full article content here...",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-gold/70 max-w-2xl mx-auto">
              Insights, tutorials, and stories from our tech community
            </p>
          </div>

          {/* Submit Blog CTA */}
          <div className="mb-12 p-6 rounded-lg glass-card border-accent/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1 text-gold">Have something to share?</h3>
              <p className="text-sm text-gold/70">Submit your blog post and share your knowledge with the community</p>
            </div>
            <a href="https://forms.gle/D7qE18YbVrjtX1Lo8" target="_blank" rel="noopener noreferrer">
              <Button className="btn-glow whitespace-nowrap">Submit Blog</Button>
            </a>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="glass-card card-hover p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <Tag className="h-3 w-3 text-accent" />
                  <span className="text-accent font-semibold">{post.category}</span>
                </div>

                <h2 className="font-bold text-xl mb-3 text-gold group-hover:text-accent transition">{post.title}</h2>

                <div className="flex items-center gap-2 mb-3 text-sm">
                  <User className="h-4 w-4 text-gold/60" />
                  <span className="text-gold font-semibold">{post.author}</span>
                  <span className="text-gold/60">•</span>
                  <span className="text-gold/60">{post.designation}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gold/60">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-accent">{post.batch}</span>
                </div>

                <p className="text-gold/70 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                <Link href={`/blog/${post.id}`}>
  <Button variant="outline" size="sm" className="w-full btn-glow-secondary bg-transparent">
    Read More
  </Button>
</Link>

              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
