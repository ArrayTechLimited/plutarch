"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectGalleryProps {
  images: StaticImageData[] | string[];
  title: string;
}

// Define specific aspect ratios for masonry layout
const imageAspectRatios = [
  "aspect-[4/3]", // 0 - Standard landscape
  "aspect-[3/4]", // 1 - Portrait
  "aspect-[16/9]", // 2 - Wide landscape
  "aspect-[4/5]", // 3 - Tall portrait
  "aspect-[5/4]", // 4 - Square-ish landscape
  "aspect-[3/2]", // 5 - Classic landscape
  "aspect-[2/3]", // 6 - Classic portrait
  "aspect-[16/10]", // 7 - Wide landscape
];

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
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
            trigger: galleryRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === images.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        navigateImage("prev");
        break;
      case "ArrowRight":
        navigateImage("next");
        break;
    }
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage]);

  // Create masonry layout with specific positioning
  const getMasonryClasses = (index: number) => {
    const aspectRatio = imageAspectRatios[index % imageAspectRatios.length];

    // Desktop: 4 columns, Mobile: 2 columns
    const baseClasses = "gallery-image group cursor-pointer";

    return `${baseClasses} ${aspectRatio}`;
  };

  return (
    <>
      {/* Masonry Grid */}
      <div
        ref={galleryRef}
        className="columns-2 lg:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={getMasonryClasses(index)}
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-100 break-inside-avoid mb-4 lg:mb-6 h-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRightIcon className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`${title} - Image ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm">
                {selectedImage + 1} of {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
