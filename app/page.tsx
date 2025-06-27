"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesGrid from "@/components/sections/services-grid";
import ProjectGrid from "@/components/sections/project-grid";
import CTASection from "@/components/sections/cta-section";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredProjects = [
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
];

export default function HomePage() {
  useEffect(() => {
    // Smooth scroll setup
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection
        title="From Blueprint to Reality, We deliver with Excellent Precision"
        subtitle="Project Management"
        showCTA={true}
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* Services Icons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">
                Construction Management
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">
                Design-Build Services
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900">
                General Contracting
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We deliver reliable construction solutions tailored to your
                needs
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With years of experience in the construction industry, we
                specialize in delivering high-quality construction services that
                exceed expectations. Our team of skilled professionals is
                committed to bringing your vision to life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At the heart of our operations is a strong Project Management
                Foundation that ensures all our projects are delivered on time,
                within budget, and to the highest quality standards.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Construction site"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quality Construction</h3>
              <p className="leading-relaxed">
                We maintain the highest standards of quality in every project,
                ensuring durable and reliable construction that stands the test
                of time.
              </p>
            </div>
            <div className="bg-red-600 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="leading-relaxed">
                Our experienced team of professionals brings expertise and
                dedication to every project, delivering exceptional results
                consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Integrity",
                description:
                  "We conduct business with honesty and transparency in all our dealings.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and methods to deliver cutting-edge solutions.",
              },
              {
                title: "Professionalism",
                description:
                  "We maintain the highest standards of professionalism in every interaction.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Quality Delivery",
                description:
                  "We ensure every project meets our rigorous quality standards.",
              },
              {
                title: "Client Focus",
                description:
                  "Our clients are at the center of everything we do.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <ProjectGrid projects={featuredProjects} />

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Your New Construction Project Starts Here
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "INITIAL CONSULTATION",
                description:
                  "We start with understanding your vision and requirements.",
              },
              {
                step: "2",
                title: "DESIGN & PLANNING",
                description:
                  "Our team creates detailed plans and designs for your project.",
              },
              {
                step: "3",
                title: "CONSTRUCTION",
                description:
                  "We execute the project with precision and quality.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
