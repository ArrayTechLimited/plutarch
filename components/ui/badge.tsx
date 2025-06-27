import type React from "react"
interface BadgeProps {
  children: React.ReactNode
  variant?: "residential" | "commercial" | "renovation" | "fit-out"
  className?: string
}

const badgeVariants = {
  residential: "bg-green-500 text-white",
  commercial: "bg-red-500 text-white",
  renovation: "bg-blue-500 text-white",
  "fit-out": "bg-yellow-600 text-white",
}

export default function Badge({ children, variant = "residential", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
