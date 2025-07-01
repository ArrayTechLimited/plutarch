"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import CTASection from "@/components/sections/cta-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectImages = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
];

export default function ProjectDetailPage() {
  useEffect(() => {
    gsap.fromTo(
      ".gallery-image",
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-gallery",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".scope-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".scope-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Development of Two Units Of Detached 5 Bedroom Duplex at 30B, Remi fanikayode Street, GRA, Ikeja Lagos."
        badge={{ text: "Residential", variant: "residential" }}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      {/* Scope of Work Section */}
      <section className="scope-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scope-content">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-8">
              Scope of Work
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We handled the{" "}
              <strong>
                Architectural Design, Structural Work, Mechanical & Electrical
                (M&E), Builder's Work, Supervision, Interiors, and External
                Works,
              </strong>{" "}
              delivering end-to-end solutions that bring every aspect of your
              project to life
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="project-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projectImages.map((image, index) => (
              <div key={index} className="gallery-image">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:scale-105 transform transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
