import images from "@/public/images"
import type { Project, ProjectFilters } from "@/types/project"

export const projects: Project[] = [
  {
    id: "5-bedroom-duplex-gra-ikeja",
    title: "5 Bedroom Duplex GRA Ikeja, Lagos",
    location: "30B, Remi fanikayode Street, GRA, Ikeja Lagos",
    status: "residential",
    completion: "completed",
    description: "Development of Two Units Of Detached 5 Bedroom Duplex",
    scopeOfWork:
      "We handled the Architectural Design, Structural Work, Mechanical & Electrical (M&E), Builder's Work, Supervision, Interiors, and External Works, delivering end-to-end solutions that bring every aspect of your project to life",
    thumbnailImage: images.proj3,
    galleryImages: [
      images.proj1,
      images.proj2,
      images.proj3,
      images.proj4,
      images.proj5,
      images.proj6,
      images.proj7,
      images.proj8,
      images.proj9,
      images.proj10,
      images.proj11,
    ],
    features: ["5 Bedrooms", "Detached Units", "Modern Design", "Full M&E Services"],
    completionDate: "2023",
    clientName: "Private Client",
  },
  {
    id: "4-townhouses-victoria-island",
    title: "4 Townhouses – Victoria Island",
    location: "Victoria Island, Lagos",
    status: "residential",
    completion: "completed",
    description: "Luxury townhouse development in prime Victoria Island location",
    scopeOfWork:
      "Complete architectural design, structural engineering, and construction management for four luxury townhouses",
    thumbnailImage: images.proj2,
    galleryImages: [
        images.proj1,
        images.proj2,
        images.proj3,
        images.proj4,
        images.proj5,
        images.proj6,
    ],
    features: ["4 Units", "Luxury Finishes", "Prime Location", "Modern Architecture"],
    completionDate: "2023",
  },
  {
    id: "access-bank-victoria-island",
    title: "Access Bank – Victoria Island",
    location: "Victoria Island, Lagos",
    status: "commercial",
    completion: "completed",
    description: "Commercial banking facility with modern design and functionality",
    scopeOfWork:
      "Full fit-out and interior design for banking operations including security systems and customer areas",
    thumbnailImage: images.proj7,
    galleryImages: [
        images.proj1,
        images.proj2,
        images.proj3,
        images.proj6,
    ],
    features: ["Banking Facility", "Security Systems", "Customer Areas", "Modern Design"],
    completionDate: "2022",
    clientName: "Access Bank PLC",
  },
  {
    id: "shop-complex-ilupeju",
    title: "Shop Complex – Ilupeju",
    location: "Ilupeju, Lagos",
    status: "commercial",
    completion: "completed",
    description: "Multi-unit retail complex with modern commercial facilities",
    scopeOfWork: "Design and construction of retail spaces with proper utilities and accessibility features",
    thumbnailImage: images.proj9,
    galleryImages: [
        images.proj1,
        images.proj2,
        images.proj6,
    ],
    features: ["Multi-Unit Retail", "Modern Facilities", "Accessibility Features", "Utilities"],
    completionDate: "2022",
  },
  {
    id: "office-building-mafoluku",
    title: "Office Building – Mafoluku, Lagos",
    location: "Mafoluku, Lagos",
    status: "renovation",
    completion: "completed",
    description: "Complete renovation of existing office building with modern amenities",
    scopeOfWork: "Structural renovation, M&E upgrades, interior design, and exterior facade improvements",
    thumbnailImage: images.proj10,
    galleryImages: [
        images.proj3,
        images.proj4,
        images.proj5,
        images.proj6,
    ],
    features: ["Complete Renovation", "M&E Upgrades", "Modern Amenities", "Facade Improvements"],
    completionDate: "2023",
  },
  {
    id: "townhouses-victoria-island-2",
    title: "Townhouses – Victoria Island",
    location: "Victoria Island, Lagos",
    status: "fit-out",
    completion: "completed",
    description: "Interior fit-out for luxury townhouses with premium finishes",
    scopeOfWork: "Complete interior fit-out including custom millwork, premium finishes, and luxury amenities",
    thumbnailImage: images.proj2,
    galleryImages: [
        images.proj4,
        images.proj5,
        images.proj6,
    ],
    features: ["Luxury Fit-Out", "Custom Millwork", "Premium Finishes", "High-End Amenities"],
    completionDate: "2023",
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getFilteredProjects = (filters: ProjectFilters): Project[] => {
  return projects.filter((project) => {
    if (filters.status && project.status !== filters.status) return false
    if (filters.completion && project.completion !== filters.completion) return false
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.location.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower)
      )
    }
    return true
  })
}
