import type React from "react"
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export default function Button({ variant = "primary", size = "md", children, className = "", ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 hover:scale-105"

  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-lg",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
