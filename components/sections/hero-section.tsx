"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Button from "../ui/button";
import Badge from "../ui/badge";
import Image, { StaticImageData } from "next/image";
import images from "@/public/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant?: "residential" | "commercial" | "renovation" | "fit-out";
  };
  showCTA?: boolean;
  backgroundImage?: StaticImageData;
  heroClassName?: string;
}

export default function HeroSection({
  title,
  subtitle,
  badge,
  showCTA = false,
  backgroundImage,
  heroClassName,
}: HeroSectionProps) {
  const heroSlides = [
    {
      mainImage: images.home_hero,
      title: "From Blueprint to Reality, We deliver with Excellent Precision",
      titleColor: "text-foreground",
      spanText: "Excellent Precision",
      spanColor: "from-[#EB2525] to-[#470000]",
      service: "Project Management",
    },
    {
      mainImage: images.home_hero2,
      title: "From Vision to Form, We design with",
      titleColor: "text-background",
      spanText: "Purpose and Style",

      spanColor: "from-[#FFBABA] to-[#CA0404]",
      service: "Architecture",
    },
    {
      mainImage: images.home_hero3,
      title: "From Groundwork to Skyline, We build with",
      titleColor: "text-background",
      spanText: "Strength and Precision",

      spanColor: "from-[#FFBABA] to-[#CA0404]",
      service: "Civil/Structural Engineering",
    },
    {
      mainImage: images.home_hero4,
      title: "From Idea to Execution, We map the",
      titleColor: "text-background",
      spanText: "Path to Success",

      spanColor: "from-[#FFBABA] to-[#CA0404]",
      service: "Project Planning",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= heroSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-content",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
    );

    if (badge) {
      tl.fromTo(
        ".hero-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.8"
      );
    }
  }, [badge]);

  return (
    <section
      className={`relative pt-56 min-h-[85vh] flex justify-center overflow-hidden ${heroClassName}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src={backgroundImage || heroSlides[currentIndex].mainImage}
          alt="Hero image"
          className="object-cover  h-full"
        />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {badge && (
          <div className="hero-badge mb-6">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}

        {title ? (
          <h1
            className={`text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold text-background mb-20 md:mb-7 leading-tight`}
          >
            {title}
          </h1>
        ) : (
          <h1
            className={`text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold ${heroSlides[currentIndex].titleColor} mb-20 md:mb-7 leading-tight`}
          >
            {heroSlides[currentIndex].title}{" "}
            <span
              className={`font-bold bg-gradient-to-r ${heroSlides[currentIndex].spanColor} bg-clip-text text-transparent`}
            >
              {heroSlides[currentIndex].spanText}
            </span>
          </h1>
        )}

        {showCTA && (
          <div className="max-w-[400px] mx-auto border-background border-[0.5px] rounded-3xl bg-background/20 backdrop-blur-md flex flex-row items-center justify-between p-5">
            <div className="flex flex-col items-start">
              <span className="text-xl text-background">Our services</span>
              <h3 className="text-2xl font-semibold text-background">
                {heroSlides[currentIndex].service}
              </h3>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 grid place-items-center">
                <ChevronLeft className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 grid place-items-center">
                <ChevronRight className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
