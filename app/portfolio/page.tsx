"use client";

import HeroSection from "@/components/sections/hero-section";
import CTASection from "@/components/sections/cta-section";
import { getFilteredProjects } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import type { ProjectFilters as ProjectFiltersType } from "@/types/project";
import ProjectCard from "@/components/project/project-card";
import ProjectFiltersComponent from "@/components/project/project-filters";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import images from "@/public/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioPage() {
  const [filters, setFilters] = useState<ProjectFiltersType>({});
  const projectsRef = useRef<HTMLDivElement>(null);

  const filteredProjects = getFilteredProjects(filters);

  useEffect(() => {
    // Animate project cards when filters change
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [filteredProjects]);

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Project Portfolio"
        backgroundImage={images.portfolio_hero}
        heroClassName="min-h-[55vh] !pt-36"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFiltersComponent
            filters={filters}
            onFiltersChange={setFilters}
            totalProjects={filteredProjects.length}
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div
              ref={projectsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
      {/* <ProjectGrid projects={portfolioProjects} title="Our Projects" />
       */}
      <CTASection />
    </main>
  );
}
