"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Button from "../ui/button";
import Badge from "../ui/badge";
import Image from "next/image";
import images from "@/public/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    variant?: "residential" | "commercial" | "renovation" | "fit-out";
  };
  showCTA?: boolean;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  badge,
  showCTA = false,
  backgroundImage = "/placeholder.svg?height=600&width=1200",
}: HeroSectionProps) {
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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src={images.home_hero}
          alt="Hero image"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {badge && (
          <div className="hero-badge mb-6">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold text-foreground mb-7 leading-tight">
          {title}{" "}
          <span className="font-bold bg-gradient-to-r from-[#EB2525] to-[#470000] bg-clip-text text-transparent">
            Excellent Precision
          </span>
        </h1>

        <div className="max-w-[400px] mx-auto border-background border-[0.5px] rounded-3xl bg-background/20 backdrop-blur-md flex flex-row items-center justify-between p-5">
          <div className="flex flex-col items-start">
            <span className="text-xl text-white">Our services</span>
            <h3 className="text-2xl font-semibold text-primary">
              Project Management
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
      </div>
    </section>
  );
}
