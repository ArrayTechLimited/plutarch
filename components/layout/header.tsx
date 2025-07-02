"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { MenuIcon, MoreHorizontalIcon, X } from "lucide-react";
import Image from "next/image";
import images from "@/public/images";
import { scrollTo } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
};

const navigation = [
  //   { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact Us", href: "#contact-us" },
];

export function NavLink({ href, name }: NavItem) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document
        .getElementById(href.substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      key={name}
      href={href}
      className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium"
      onClick={handleClick}
    >
      {name}
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".header-nav",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <header className="fixed top-0 left-0 md:top-4 md:left-1/2 transform md:-translate-x-1/2 z-50 w-screen max-w-screen md:px-20">
      <nav className="header-nav bg-background md:bg-background/50 backdrop-blur-md md:rounded-full px-4 md:px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between py-0">
          <Link href="/" className="flex items-center space-x-2 md:ml-10">
            <div className="w-24 h-auto flex items-center justify-center">
              <Image src={images.logo} alt="Logo" className="" />
            </div>
            {/* <span className="font-bold text-gray-900">Plutarch</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16 mr-16">
            {navigation.map((item) => (
              <NavLink href={item.href} name={item.name} />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mobile-navbar fixed top-13 left-0 h-screen w-screen mt-4 pt-4 bg-background">
            <div className="flex flex-col space-y-3 px-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm font-medium py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <button className="p-2 px-8 cursor-pointer rounded-full bg-gradient-to-r from-[#EB2525] to-[#470000] text-background mt-10">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
