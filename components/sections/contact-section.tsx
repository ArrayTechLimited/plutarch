"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/button";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
}

const contactInfo = [
  {
    icon: PhoneIcon,
    text: "07055557011, 09072699728",
    type: "phone",
  },
  {
    icon: MapPinIcon,
    text: "1, Adekunbi Crescent, Ikeja, Lagos.",
    type: "address",
  },
  {
    icon: MailIcon,
    text: "info@plutarch.com",
    type: "email",
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      });

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );
      }

      if (leftContentRef.current) {
        tl.fromTo(
          leftContentRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        );
      }

      if (rightContentRef.current) {
        tl.fromTo(
          rightContentRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        );
      }

      // Animate contact info items
      gsap.fromTo(
        ".contact-info-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-info-list",
            start: "top 85%",
          },
        }
      );

      // Animate form fields
      gsap.fromTo(
        ".form-field",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+$$$$]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form and show success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
      });
      setIsSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm sm:text-base text-gray-600">Contact Us.</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
            Your Journey to Your New
            <br className="hidden sm:block" />
            Construction Project Starts Here
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column - Contact Info */}
          <div ref={leftContentRef} className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-0">
                Have a Project in Mind?
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                We're Just a Message Away
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Our team is here to guide you every step of the way. Reach out
                to us today and let's bring your vision to life.
              </p>
            </div>

            <div className="contact-info-list space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="contact-info-item flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      {info.type === "phone" ? (
                        <a
                          href={`tel:${info.text.split(",")[0].trim()}`}
                          className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-200"
                        >
                          {info.text}
                        </a>
                      ) : info.type === "email" ? (
                        <a
                          href={`mailto:${info.text}`}
                          className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-200"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.text}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div ref={rightContentRef}>
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="contact-form space-y-6 bg-background px-5 p-10 rounded-4xl"
            >
              {/* First Name */}
              <div className="form-field">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none transition-colors duration-200 ${
                    errors.firstName
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-red-600"
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="form-field">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none transition-colors duration-200 ${
                    errors.lastName
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-red-600"
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>

              {/* Email */}
              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none transition-colors duration-200 ${
                    errors.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-red-600"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="form-field">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none transition-colors duration-200 ${
                    errors.phone
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-red-600"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div className="form-field">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <textarea
                  id="subject"
                  name="subject"
                  rows={4}
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-0 py-3 border-0 border-b-2 bg-transparent focus:ring-0 focus:outline-none resize-none transition-colors duration-200 ${
                    errors.subject
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-300 focus:border-red-600"
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-field pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
