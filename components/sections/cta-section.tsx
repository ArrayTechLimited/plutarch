"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/button";
import Image from "next/image";
import images from "@/public/images";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      ".cta-content",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  const translate = () => pathname == "/";

  return (
    // <section className="cta-section py-20">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="relative rounded-3xl overflow-hidden">
    //       {/* Background Image */}
    //       <div
    //         className="absolute inset-0 bg-cover bg-center"
    //         style={{ backgroundImage: "url(/placeholder.svg?height=400&width=1200)" }}
    //       >
    //         <div className="absolute inset-0 bg-black/60"></div>
    //       </div>

    //       {/* Content */}
    //       <div className="cta-content relative z-10 py-20 px-8 text-center">
    //         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
    //           Your Dream Project Deserves Expert Execution
    //         </h2>
    //         <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
    //           From design to delivery, we bring your vision to life with precision and integrity.
    //         </p>
    //         <Button size="lg" className="shadow-2xl">
    //           Get Started
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      className={`max-w-7xl mx-auto md:rounded-3xl relative overflow-hidden ${
        translate() ? "translate-y-15" : "mb-20"
      } bg-gray-50`}
    >
      <Image
        src={images.dream_house_bg}
        alt="home"
        className="object-cover object-center absolute w-full h-full"
      />
      <div className="flex flex-col items-start p-7 md:px-14 z-10 relative text-background bg-foreground/60">
        <h2 className="text-3xl md:text-4xl font-medium">
          Your Dream Project Deserves <br className="hidden md:block" /> Expert
          Execution
        </h2>
        <p className="mb-5">
          From design to delivery, we bring your vision to life with precision
          and integrity.
        </p>
        <button className="p-3 px-10 cursor-pointer rounded-full bg-gradient-to-r from-[#EB2525] to-[#470000]">
          Get Started
        </button>
      </div>
    </section>
  );
}
