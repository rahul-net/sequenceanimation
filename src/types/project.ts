export type ProjectCategory =
  | "AI Art"
  | "Animation"
  | "3D Art"
  | "Motion Graphics"
  | "Cinematic Films"
  | "Visual Experiments";

export interface Project {
  id: string;
  slug: string;
  title: string;
  /** Filter category. Every entry is a Concept study — see projects.ts. */
  category: ProjectCategory;
  discipline: string;
  medium: string;
  /** Optional on purpose: omit where unknown, never invent a year. */
  year?: number;
  summary: string;
  /** Short creative objective for the detail page. */
  objective: string;
  /** Artist role for the detail page (a role in a concept study, not a job claim). */
  role: string;
  tools: string[];
  process: string[];
  notes: string[];
  /** Local procedural SVG paths only — never external image URLs. */
  thumbnail: string;
  heroImage?: string;
  galleryImages?: string[];
  /** Optional, genuinely optional: omit when absent. */
  previewVideo?: string;
  behindScenes?: string;
  credits?: string;
  externalLink?: string;
  featured?: boolean;
}

export interface SiteLink {
  label: string;
  url: string;
}

export interface Capability {
  title: string;
  text: string;
}

export interface SiteConfig {
  brandName: string;
  descriptor: string;
  headline: string;
  supportingStatement: string;
  biography: string;
  /** Neutral default — the user should confirm availability before publishing. */
  availability: string;
  /**
   * Production site URL, WITHOUT a trailing slash, e.g. "https://example.com".
   * Empty string means "not set": no canonical link is emitted and the
   * sitemap/robots placeholders must be replaced before publishing.
   * Never invent a business domain here — the owner sets the real one.
   */
  siteUrl: string;
  /** Null means no verified email: render "available on request", never invent one. */
  email: string | null;
  links: SiteLink[];
  nav: { label: string; to: string }[];
  capabilities: Capability[];
}
