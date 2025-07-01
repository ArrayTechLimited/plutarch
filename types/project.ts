import { StaticImageData } from "next/image"

export interface Project {
    id: string
    title: string
    location: string
    status: "residential" | "commercial" | "renovation" | "fit-out"
    completion: "completed" | "in-progress" | "planned"
    description: string
    scopeOfWork: string
    thumbnailImage: StaticImageData | string
    galleryImages: StaticImageData[] | string[]
    features: string[]
    completionDate?: string
    clientName?: string
    projectValue?: string
  }
  
  export interface ProjectFilters {
    status?: Project["status"]
    completion?: Project["completion"]
    search?: string
  }
  