"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "@/public/images";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Civil/Structural Engineering",
    description:
      "We design and deliver safe, durable, and efficient structural solutions that form the backbone of modern infrastructure",
    image: images.services_civil_eng,
  },
  {
    title: "Mechanical & Electrical (M&E)",
    description:
      "Our M&E services ensure seamless integration of building systems from HVAC and plumbing to lighting and power, all designed for performance and efficiency.",
    image: images.services_mech,
  },
  {
    title: "Architecture",
    description:
      "We create functional, aesthetic, and innovative architectural designs tailored to client needs and environmental context",
    image: images.service_arch,
  },
  {
    title: "Project Management",
    description:
      "Our expert-led approach ensures every project is delivered on time, within budget, and to the highest standards from start to finish",
    image: images.services_pm,
  },
  {
    title: "Project Planning",
    description:
      "We provide strategic planning services that align scope, timeline, and resources to ensure smooth project execution.",
    image: images.services_project_planning,
  },
  {
    title: "Cost Management",
    description:
      "We deliver cost-effective solutions by managing budgets, controlling expenditures, and maximizing value throughout the project lifecycle.",
    image: images.services_cm,
  },
  {
    title: "Interior Designs",
    description:
      "We craft inspiring interior spaces that combine style, comfort, and functionality tailored to reflect your vision and brand",
    image: images.services_interior,
  },
  {
    title: "Construction Supervision",
    description:
      "Our team oversees every stage of construction with strict quality control, safety compliance, and attention to detail.",
    image: images.services_construction,
  },
];

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
      }
    );
  }, []);

  return (
    <section className="py-20 pt-36 bg-lemon" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-foreground/50 font-extralight text-lg">
            Our Services.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#EB2525] to-[#470000] bg-clip-text text-transparent mb-4">
            How We Deliver Excellence
          </h2>
          <p>
            Project Management is not just a service - it's central to how we
            deliver excellence. Our expert team ensures all projects are
            meticulously planned, coordinated, and executed to meet client goals
          </p>
        </div>

        <div className="services-grid flex flex-row max-w-screen overflow-x-auto md:overflow-auto snap-center snap-mandatory snap-always md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[80vw] md:min-w-auto"
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
