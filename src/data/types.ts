export type Lang = 'es' | 'en'

export type ProjectStatus = 'production' | 'in-progress' | 'delivered'

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  status: ProjectStatus
  role: string
  highlights: string[]
  stack: string[]
  roadmap?: { label: string; stack: string[] }[]
  subprojects?: { name: string; client: string; description: string; url?: string }[]
  logo?: string
  /** Link a la plataforma funcionando (se muestra como botón) */
  liveUrl?: string
  /** El logo es horizontal (ej. wordmark) en vez de un ícono cuadrado */
  logoWide?: boolean
  /** Cifras destacadas que se muestran como una fila de números */
  metrics?: { value: string; label: string }[]
  /** Aclaración al pie, ej. confidencialidad */
  note?: string
}

export interface Job {
  company: string
  role: string
  period: string
  current?: boolean
  summary: string
  bullets?: string[]
  tags: string[]
}

/** Textos de la interfaz (menú, títulos, botones) */
export interface UiStrings {
  meta: { title: string; description: string }
  nav: { about: string; projects: string; experience: string; skills: string; contact: string }
  menuOpen: string
  menuClose: string
  themeToLight: string
  themeToDark: string
  switchLanguage: string
  hero: { greeting: string; cta: string; downloadCv: string }
  sections: {
    about: { eyebrow: string; title: string }
    projects: { eyebrow: string; title: string }
    experience: { eyebrow: string; title: string }
    skills: { eyebrow: string; title: string }
  }
  status: Record<ProjectStatus, string>
  platformsInProduction: (count: number) => string
  nextSteps: string
  liveDemo: string
  languagesLabel: string
  testimonialNote?: string
  contact: { eyebrow: string; title: string; text: string; copy: string; copied: string }
  footer: string
}

export interface Content {
  ui: UiStrings
  profile: {
    name: string
    role: string
    headline: string
    location: string
    available: boolean
    availabilityText: string
    intro: string
    email: string
    linkedin: string
    github: string
    cv: string
  }
  about: string[]
  stats: { value: string; label: string }[]
  projects: Project[]
  experience: Job[]
  skills: { group: string; items: string[] }[]
  education: { title: string; school: string; period: string; detail: string }[]
  languages: string[]
  testimonial: { quote: string; author: string; role: string }
}
