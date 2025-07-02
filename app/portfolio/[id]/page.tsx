"use client";

import React, { use, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import CTASection from "@/components/sections/cta-section";
import ProjectGallery from "@/components/project/project-gallery";
import { getProjectById } from "@/data/projects";
import { ArrowLeftIcon } from "lucide-react";
import images from "@/public/images";
import { StaticImageData } from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = use(params);
  const project = getProjectById(id);
  const scopeRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  if (!project) {
    notFound();
  }

  useEffect(() => {
    if (scopeRef.current) {
      gsap.fromTo(
        scopeRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (detailsRef.current) {
      gsap.fromTo(
        ".project-detail-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: detailsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection
        title={project.description}
        badge={{
          text:
            project.status.charAt(0).toUpperCase() + project.status.slice(1),
          variant: project.status,
        }}
        backgroundImage={project.thumbnailImage as StaticImageData}
        heroClassName="min-h-[55vh] !pt-36"
      />

      {/* Back Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-red-600 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={scopeRef}>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#EB2525] to-[#470000] bg-clip-text text-transparent mb-8">
              Scope of Work
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.scopeOfWork}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      {/* {(project.completionDate ||
        project.clientName ||
        project.projectValue) && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={detailsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {project.completionDate && (
                <div className="project-detail-item text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Completion Date
                  </h3>
                  <p className="text-gray-600">{project.completionDate}</p>
                </div>
              )}

              {project.clientName && (
                <div className="project-detail-item text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Client
                  </h3>
                  <p className="text-gray-600">{project.clientName}</p>
                </div>
              )}

              {project.projectValue && (
                <div className="project-detail-item text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSignIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Project Value
                  </h3>
                  <p className="text-gray-600">{project.projectValue}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )} */}

      {/* Project Features */}
      {/* {project.features.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Project Features
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="residential"
                  className="bg-gray-100 text-gray-800 text-sm px-4 py-2"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Project Gallery */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Project Gallery
          </h2>
          <ProjectGallery
            images={project.galleryImages}
            title={project.title}
          />
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
