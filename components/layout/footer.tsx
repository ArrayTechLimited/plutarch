"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Project", href: "/portfolio" },
  { name: "Contact us", href: "/contact" },
]

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
]

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".footer-content",
          start: "top 90%",
        },
      },
    )
  }, [])

  return (
    <footer className="bg-black text-white py-12">
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Description */}
          <div className="md:col-span-1">
            <p className="text-gray-300 text-sm leading-relaxed">
              Engineering Excellence, Built to Last. Your trusted partner for all construction and civil engineering
              needs.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>1, Adebunmi Crescent, Ikeja, Lagos.</p>
              <p>07055557011, 09072659728</p>
              <p>info@plutarch.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
