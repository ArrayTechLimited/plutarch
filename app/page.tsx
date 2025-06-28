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
import Image from "next/image";
import images from "@/public/images";
import {
  InnovationIcon,
  IntegrityIcon,
  ProfessionalismIcon,
  QualityDeliveryIcon,
  TeamWorkIcon,
} from "@/components/ui/icons";

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
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We lead with honesty and uphold ethical standards, ensuring trust and transparency in every project.",
      icon: <IntegrityIcon />,
    },
    {
      title: "Innovation",
      description:
        "We embrace forward-thinking ideas, cutting-edge technologies, and creative approaches to deliver smarter solutions.",
      icon: <InnovationIcon />,
    },
    {
      title: "Professionalism",
      description:
        "We conduct our business with discipline, excellence, and respect delivering value through expert execution.",
      icon: <ProfessionalismIcon />,
    },
    {
      title: "Quality Delivery",
      description:
        "We are committed to excellence meeting the highest standards in every detail, every time. No shortcuts. No compromises.",
      icon: <QualityDeliveryIcon />,
    },
    {
      title: "Team Work",
      description:
        "We thrive on collaboration. By working as one with clients & consultants, we achieve results that stand the test of time.",
      icon: <TeamWorkIcon />,
    },
  ];

  useEffect(() => {
    // Smooth scroll setup
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection
        title="From Blueprint to Reality, We deliver with"
        subtitle="Project Management"
        showCTA={true}
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* Services Icons Section */}
      <section className="py-16 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 -translate-y-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center bg-white rounded-xl py-7 shadow-[0px_10px_60px_0px_#0000001A]">
              <div className="w-16 h-16 bg-gray-100/5 rounded-lg flex items-center justify-center">
                <div className="w-[70%] h-[70%] bg-none rounded">
                  <Image src={images.hero_sub_1} alt="icon" />
                </div>
              </div>
              <h3 className="font-light text-lg text-gray-900">
                Experienced Professionals
              </h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl py-7 shadow-[0px_10px_60px_0px_#0000001A]">
              <div className="w-16 h-16 bg-gray-100/5 rounded-lg flex items-center justify-center">
                <div className="w-[70%] h-[70%] bg-none rounded">
                  <Image src={images.hero_sub_2} alt="icon" />
                </div>
              </div>
              <h3 className="font-light text-lg text-gray-900">
                Timely Project Delivery
              </h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl py-7 shadow-[0px_10px_60px_0px_#0000001A]">
              <div className="w-16 h-16 bg-gray-100/5 rounded-lg flex items-center justify-center">
                <div className="w-[70%] h-[70%] bg-none rounded">
                  <Image src={images.hero_sub_3} alt="icon" />
                </div>
              </div>
              <h3 className="font-light text-lg text-gray-900">
                Proven Track Record
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
              <p className="text-foreground/50 font-extralight text-lg">
                About Us.
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#EB2525] to-[#470000] bg-clip-text text-transparent">
                We deliver reliable <br /> construction solutions tailored{" "}
                <br /> to your needs
              </h2>
              <p className="text-gray-600 mb-6 leading-8">
                Plutarch Integrated Services Ltd is a civil engineering and
                building construction company. We provide smart, reliable
                solutions to even the most complex construction challenges. At
                the core of our operations is a strong Project Management
                foundation that ensures quality delivery, budget control, and
                client satisfaction with every project.
              </p>
            </div>
            <div className="relative w-[350px] aspect-auto ml-auto">
              <Image
                src={images.about}
                alt="Construction site"
                className="rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green text-white p-8 rounded-2xl">
              <span className="w-12 h-12 relative block">
                <Image
                  src={images.home_mission}
                  alt="home"
                  className="object-contain"
                />
              </span>
              <h3 className="text-xl font-bold mb-3">Mission</h3>
              <p className="leading-relaxed">
                To redefine construction excellence by delivering projects that
                exceed expectations through innovative solutions, integrity, and
                quality service
              </p>
            </div>
            <div className="bg-gradient-to-b from-primary to-[#2C0101] text-white p-8 rounded-2xl">
              <span className="w-12 h-12 relative block">
                <Image
                  src={images.home_vision}
                  alt="home"
                  className="object-contain"
                />
              </span>
              <h3 className="text-xl font-bold mb-3">Vision</h3>
              <p className="leading-relaxed">
                To become a leading construction and civil engineering company
                in Nigeria, known for reliability, safety, and excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-foreground/50 font-extralight text-lg">
              Our Core Values.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#EB2525] to-[#470000] bg-clip-text text-transparent mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {coreValues.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="text-center rounded-xl bg-foreground/5 p-5 py-6 flex flex-col items-center"
              >
                <span>{value.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[50vw] mx-auto">
            {coreValues.slice(3).map((value, index) => (
              <div
                key={index}
                className="text-center rounded-xl bg-foreground/5 p-5 py-6 flex flex-col items-center"
              >
                <span>{value.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

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

      <Footer />
    </main>
  );
}
