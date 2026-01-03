"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface Project {
  id: number
  title: string
  gallery: string[]
}

interface ProjectGalleryModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectGalleryModal({ project, onClose }: ProjectGalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="relative w-full h-96 lg:h-[500px] bg-black/50">
          <Image
            src={project.gallery[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
            fill
            className="object-contain"
          />

          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded text-sm">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>
        </div>

        <div className="p-4 bg-background border-t border-border">
          <div className="flex gap-2 overflow-x-auto">
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-20 h-20 rounded overflow-hidden flex-shrink-0 border-2 transition-colors ${index === currentImageIndex ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
              >
                <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
