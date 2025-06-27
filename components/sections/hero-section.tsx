"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import Button from "../ui/button"
import Badge from "../ui/badge"

interface HeroSectionProps {
  title: string
  subtitle?: string
  badge?: {
    text: string
    variant?: "residential" | "commercial" | "renovation" | "fit-out"
  }
  showCTA?: boolean
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  badge,
  showCTA = false,
  backgroundImage = "/placeholder.svg?height=600&width=1200",
}: HeroSectionProps) {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      ".hero-content",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.5 },
    )

    if (badge) {
      tl.fromTo(
        ".hero-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.8",
      )
    }
  }, [badge])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {badge && (
          <div className="hero-badge mb-6">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}

        {showCTA && (
          <Button size="lg" className="shadow-2xl">
            Get Started
          </Button>
        )}
      </div>
    </section>
  )
}
