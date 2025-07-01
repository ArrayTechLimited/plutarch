"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import type { Project } from "@/types/project";
import Badge from "@/components/ui/badge";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, { y: 60, opacity: 0 });
    }
  }, []);

  return (
    <div ref={cardRef} className="project-card group">
      <Link href={`/portfolio/${project.id}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <div className="aspect-w-4 aspect-h-3 relative">
            <Image
              src={project.thumbnailImage || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              <Badge variant={project.status}>
                {project.status.charAt(0).toUpperCase() +
                  project.status.slice(1)}
              </Badge>
              <Badge variant="residential" className="bg-gray-600">
                {project.completion.charAt(0).toUpperCase() +
                  project.completion.slice(1)}
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
              {project.title}
            </h3>
            {project.location && (
              <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                {project.location}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
