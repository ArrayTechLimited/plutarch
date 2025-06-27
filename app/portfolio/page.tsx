"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import ProjectGrid from "@/components/sections/project-grid"
import CTASection from "@/components/sections/cta-section"

const portfolioProjects = [
  {
    id: "1",
    title: "5 Bedroom Duplex GRA Ikeja, Lagos",
    status: "residential" as const,
    completion: "Completed" as const,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    title: "4 Townhouses – Victoria Island",
    status: "residential" as const,
    completion: "Completed" as const,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    title: "Access Bank – Victoria Island",
    status: "commercial" as const,
    completion: "Completed" as const,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    title: "Shop Complex – Ilupeju",
    status: "commercial" as const,
    completion: "Completed" as const,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "5",
    title: "Office Building – Mafoluku, Lagos",
    status: "renovation" as const,
    completion: "Completed" as const,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "6",
    title: "Townhouses – Victoria Island",
    status: "fit-out" as const,
    completion: "Completed" as const,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection title="Project Portfolio" backgroundImage="/placeholder.svg?height=600&width=1600" />

      <ProjectGrid projects={portfolioProjects} title="Our Projects" />
      <CTASection />
      <Footer />
    </main>
  )
}
