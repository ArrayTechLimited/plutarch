"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "../ui/badge";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: string;
  title: string;
  status: "residential" | "commercial" | "renovation" | "fit-out";
  completion: "Completed" | "In Progress";
  image: StaticImageData;
}

interface ProjectGridProps {
  projects: Project[];
  title?: string;
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="text-center mb-16">
          <p className="text-foreground/50 font-extralight text-lg">
            Our Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#EB2525] to-[#470000] bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="bg-transparent rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105">
                <div className="aspect-w-4 aspect-h-3 relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4 px-0 flex flex-col items-start">
                  <div className="flex space-x-2">
                    <Badge variant={project.status}>
                      {project.status.charAt(0).toUpperCase() +
                        project.status.slice(1)}
                    </Badge>
                    <Badge variant="residential" className="bg-gray-600">
                      {project.completion}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={"/portfolio"}
          className="mx-auto p-3 px-10 cursor-pointer rounded-full bg-gradient-to-r from-[#EB2525] to-[#470000] text-background"
        >
          See More
        </Link>
      </div>
    </section>
  );
}
