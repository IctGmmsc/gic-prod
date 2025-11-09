"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Navbar from "@/components/navbar"

const galleryImages = [
  { id: 1, src: "/nhq.jpg", alt: "Nurul sir", category: "Workshop" },
  { id: 2, src: "/bro-speaking.jpg", alt: "Sarzil Hossain", category: "Club Expo" },
  { id: 3, src: "/dhusor.jpg", alt: "Band Team", category: "Legacy of July" },
  { id: 4, src: "/gallery-interview.jpg", alt: "Interview", category: "Volunteer Recruitment" },
  { id: 5, src: "/iconic-pic.jpg", alt: "Interview", category: "Volunteer Recruitment" },
  { id: 6, src: "/youthfest.jpg", alt: "Youth Fest Stall", category: "Events" },
  { id: 7, src: "/wsaseer.jpg", alt: "Collaboration", category: "Workshops" },
  { id: 8, src: "/zahir.jpg", alt: "BATTLECORE 1.0", category: "Gaming Turnament" },
  { id: 9, src: "/lotta-people.jpg", alt: "Workshop", category: "Event Plannings" },
  { id: 10, src: "/preztalking.jpg", alt: "Executive Meeting", category: "Meeting" },
  { id: 11, src: "/executivegrpphoto.jpg", alt: "Panel 2023-2024", category: "Workshop" },
  { id: 12, src: "/executivemeeting.jpg", alt: "Executive Meeting", category: "Event Plannings" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", "Events", "Workshops", "Talks"]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <main className="min-h-screen bg-black text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg text-gold/70 max-w-2xl mx-auto">
              Moments captured from our events, workshops, and activities
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  filter === category
                    ? "btn-glow"
                    : "glass border border-accent/30 text-gold/70 hover:text-gold hover:border-accent/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="glass-card card-hover relative aspect-square overflow-hidden cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 30}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src || `/placeholder.svg?height=250&width=250&query=${image.alt}`}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 hover:opacity-100 transition flex flex-col justify-end p-4">
                  <p className="text-sm font-semibold text-gold">{image.alt}</p>
                  <p className="text-xs text-accent">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-accent/20 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 text-gold" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.src || `/placeholder.svg?height=450&width=600&query=${selectedImage.alt}`}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg border border-accent/30 shadow-neon"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gold">{selectedImage.alt}</p>
              <p className="text-sm text-accent">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
