import images from "@/public/images"
import type { Project, ProjectFilters } from "@/types/project"

export const projects: Project[] = [
  {
    id: "access-bank-project",
    title: "Access bank Project",
    location: "Lagos",
    status: "commercial",
    completion: "completed",
    description: "Access bank Project",
    scopeOfWork:
      "Full fit-out and interior design for banking operations including security systems and customer areas",
    thumbnailImage: images.access1,
    galleryImages: [
      images.access1,
      images.access2,
      images.access3,
      images.access4,
    ],
    features: ["Banking Facility", "Security Systems", "Customer Areas", "Modern Design"],
    completionDate: "2009",
    clientName: "Access bank",
  },
  {
    id: "rirport-road-project",
    title: "Airport Road Project",
    location: "Lagos",
    status: "commercial",
    completion: "completed",
    description: "Airport Road Project",
    scopeOfWork:
      "Complete architectural design, structural engineering, and construction management for four luxury townhouses",
    thumbnailImage: images.airport1,
    galleryImages: [
        images.airport1,
        images.airport2,
        images.airport3,
        images.airport4
    ],
    features: ["Luxury Finishes", "Prime Location", "Modern Architecture"],
    completionDate: "2023",
  },
  {
    id: "church-project",
    title: "Church Project",
    location: "Nigeria",
    status: "commercial",
    completion: "completed",
    description: "Church Project",
    scopeOfWork:
      "We handled the Architectural Design, Structural Work, Mechanical & Electrical (M&E), Builder's Work, Supervision, Interiors, and External Works, delivering end-to-end solutions that bring every aspect of your project to life",
    thumbnailImage: images.church7,
    galleryImages: [
        images.church1,
        images.church2,
        images.church3,
        images.church4,
        images.church5,
        images.church6,
        images.church7,
    ],
    features: ["Modern Design"],
    completionDate: "2022",
    clientName: "",
  },
  {
    id: "goriola-project-VI",
    title: "Goriola Project VI",
    location: "Victoria Island, Lagos",
    status: "commercial",
    completion: "completed",
    description: "Goriola Project VI",
    scopeOfWork: "Design and construction of retail spaces with proper utilities and accessibility features",
    thumbnailImage: images.goriola4,
    galleryImages: [
        images.goriola1,
        images.goriola2,
        images.goriola3,
        images.goriola4,
    ],
    features: ["Multi-Unit Retail", "Modern Facilities", "Accessibility Features", "Utilities"],
    completionDate: "2022",
  },
//   {
//     id: "office-building-mafoluku",
//     title: "Office Building – Mafoluku, Lagos",
//     location: "Mafoluku, Lagos",
//     status: "renovation",
//     completion: "completed",
//     description: "Complete renovation of existing office building with modern amenities",
//     scopeOfWork: "Structural renovation, M&E upgrades, interior design, and exterior facade improvements",
//     thumbnailImage: images.proj10,
//     galleryImages: [
//         images.proj3,
//         images.proj4,
//         images.proj5,
//         images.proj6,
//     ],
//     features: ["Complete Renovation", "M&E Upgrades", "Modern Amenities", "Facade Improvements"],
//     completionDate: "2023",
//   },
//   {
//     id: "townhouses-victoria-island-2",
//     title: "Townhouses – Victoria Island",
//     location: "Victoria Island, Lagos",
//     status: "fit-out",
//     completion: "completed",
//     description: "Interior fit-out for luxury townhouses with premium finishes",
//     scopeOfWork: "Complete interior fit-out including custom millwork, premium finishes, and luxury amenities",
//     thumbnailImage: images.proj2,
//     galleryImages: [
//         images.proj4,
//         images.proj5,
//         images.proj6,
//     ],
//     features: ["Luxury Fit-Out", "Custom Millwork", "Premium Finishes", "High-End Amenities"],
//     completionDate: "2023",
//   },
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
