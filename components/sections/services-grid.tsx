"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: "Civil/Structural Engineering",
    description: "Expert structural design and civil engineering solutions for all types of construction projects.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Mechanical & Electrical (M&E)",
    description: "Comprehensive M&E services including HVAC, electrical systems, and mechanical installations.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Architecture",
    description: "Innovative architectural design that combines functionality with aesthetic excellence.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project Management",
    description: "End-to-end project management ensuring timely delivery and quality execution.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project Planning",
    description: "Strategic planning and scheduling to optimize project timelines and resources.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Cost Management",
    description: "Accurate cost estimation and budget management throughout the project lifecycle.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Interior Designs",
    description: "Creative interior design solutions that enhance functionality and aesthetics.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Construction Supervision",
    description: "Professional supervision ensuring quality standards and safety compliance.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ServicesGrid() {
  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How We Deliver Excellence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive range of services covers every aspect of construction and engineering.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
