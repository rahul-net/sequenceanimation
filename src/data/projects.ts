import type { Project, ProjectCategory } from "../types/project";

/**
 * Part 2 content — still CONCEPT / DEMO entries only.
 * Every entry is clearly labelled a concept study: no client names,
 * no awards, no testimonials, no performance claims, and no invented
 * years (year is omitted where unknown). Replace these entries with
 * real work only when real work exists. All images are local procedural
 * SVGs created for this portfolio; previewVideo is intentionally absent
 * for every entry because no video file was supplied.
 */
export const projectFilters: ("All Projects" | ProjectCategory)[] = [
  "All Projects",
  "AI Art",
  "Animation",
  "3D Art",
  "Motion Graphics",
  "Cinematic Films",
  "Visual Experiments",
];

function entry(
  p: Omit<Project, "thumbnail" | "heroImage" | "galleryImages">,
): Project {
  // BASE_URL follows VITE_BASE_PATH, so these paths work both at a site
  // root ("/") and under a GitHub Pages project path ("/<repo>/").
  const base = import.meta.env.BASE_URL;
  return {
    ...p,
    thumbnail: `${base}thumbnails/${p.slug}.svg`,
    heroImage: `${base}projects/${p.slug}-hero.svg`,
    galleryImages: [`${base}thumbnails/${p.slug}.svg`, `${base}projects/${p.slug}-hero.svg`],
  };
}

export const projects: Project[] = [
  entry({
    id: "emerald-ribbon-study",
    slug: "emerald-ribbon-study",
    title: "Emerald Ribbon Study",
    category: "3D Art",
    discipline: "3D Art",
    medium: "Procedural SVG / 3D concept composition",
    summary:
      "A single sculptural ribbon, folded in emerald glass, studied as a slow, cinematic motion piece.",
    objective:
      "Explore one coherent sculptural form in light, rather than a collection of effects.",
    role: "Concept artist and motion designer (concept study)",
    tools: ["Procedural SVG", "CSS", "Three.js (concept)"],
    process: [
      "Define one form and one accent colour.",
      "Study shadow, reflection, and a single highlight edge.",
      "Hold the movement slow enough to read the form.",
    ],
    notes: ["One coherent form", "Controlled shadow and reflection", "Slow, deliberate movement"],
    behindScenes:
      "The study started as a flat ribbon sketch; the 3D pass kept only the fold, the shadow, and the highlight — everything else was removed.",
    featured: true,
  }),
  entry({
    id: "quiet-geometry",
    slug: "quiet-geometry",
    title: "Quiet Geometry",
    category: "AI Art",
    discipline: "AI Art Direction",
    medium: "Concept imagery (placeholder)",
    summary: "A study in restrained geometry, dark surfaces, and a single accent colour.",
    objective: "Test how little geometry a composition needs before it feels empty.",
    role: "Concept artist (concept study)",
    tools: ["Procedural SVG", "CSS"],
    process: ["Set a strict grid.", "Remove one element at a time.", "Stop when removal starts to hurt the idea."],
    notes: ["Editorial composition", "Dark luxury palette", "Minimal ornament"],
  }),
  entry({
    id: "sculpted-light",
    slug: "sculpted-light",
    title: "Sculpted Light",
    category: "Cinematic Films",
    discipline: "Cinematic Animation",
    medium: "Concept imagery (placeholder)",
    summary: "Light treated as a material — carved, layered, and held still for a beat too long.",
    objective: "Make light the subject, not the decoration, of a short cinematic study.",
    role: "Concept animator (concept study)",
    tools: ["Procedural SVG", "CSS"],
    process: ["Block the light first.", "Add shadow only where it explains the form.", "Hold the final frame longer than feels comfortable."],
    notes: ["Cinematic lighting", "Long holds", "No spectacle for its own sake"],
  }),
  entry({
    id: "still-water",
    slug: "still-water",
    title: "Still Water",
    category: "Animation",
    discipline: "Animation",
    medium: "Concept imagery (placeholder)",
    summary: "A near-still scene where the only movement is a slow ripple and a shift of light.",
    objective: "Prove that near-stillness can hold attention when the composition is exact.",
    role: "Concept animator (concept study)",
    tools: ["Procedural SVG", "CSS"],
    process: ["Compose the still frame first.", "Add one ripple, nothing more.", "Let the light shift do the rest."],
    notes: ["Near-still motion", "Reflection", "Patience as a technique"],
  }),
  entry({
    id: "title-sequence-sketch",
    slug: "title-sequence-sketch",
    title: "Title Sequence Sketch",
    category: "Motion Graphics",
    discipline: "Motion Graphics",
    medium: "Concept imagery (placeholder)",
    summary: "A typographic opening sequence sketched around oversized editorial type.",
    objective: "Let typography carry the opening instead of illustration.",
    role: "Motion designer (concept study)",
    tools: ["Procedural SVG", "CSS", "Editorial typography"],
    process: ["Set the type at poster size.", "Reveal it in measured beats.", "Remove any ornament the type does not need."],
    notes: ["Editorial typography", "Measured pacing", "Type as image"],
  }),
  entry({
    id: "monochrome-garden",
    slug: "monochrome-garden",
    title: "Monochrome Garden",
    category: "Visual Experiments",
    discipline: "Visual Experiment",
    medium: "Concept imagery (placeholder)",
    summary: "Organic forms reduced to tone and texture, with one living colour kept in reserve.",
    objective: "See how much life a monochrome field keeps when one colour is withheld.",
    role: "Concept artist (concept study)",
    tools: ["Procedural SVG", "CSS"],
    process: ["Reduce the palette to tone.", "Keep one accent in reserve.", "Reintroduce it only at the end."],
    notes: ["Selective colour", "Organic form", "Quiet contrast"],
  }),
  entry({
    id: "paper-orchard",
    slug: "paper-orchard",
    title: "Paper Orchard",
    category: "AI Art",
    discipline: "AI Art Direction",
    medium: "Concept imagery (placeholder)",
    summary: "A second AI-art study: simple round forms arranged like an orchard on paper.",
    objective: "Repeat the AI-art rules on a different subject and check they still hold.",
    role: "Concept artist (concept study)",
    tools: ["Procedural SVG", "CSS"],
    process: ["Keep the same palette rules.", "Change only the subject.", "Compare the two studies side by side."],
    notes: ["Same rules, new subject", "Simple round forms", "Paper-flat colour"],
  }),
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export const processSteps = [
  { title: "Listen", text: "Understand the idea, the feeling it should leave, and what it must not become." },
  { title: "Design", text: "Set the visual rules — palette, form, type, and movement — before any production." },
  { title: "Animate", text: "Build the piece in passes, checking each shot against the idea, not the effect." },
  { title: "Refine", text: "Remove what does not serve the piece, then check the whole work end to end." },
];

export function projectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function neighbours(slug: string): { prev?: Project; next?: Project } {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return {};
  return {
    prev: i > 0 ? projects[i - 1] : undefined,
    next: i < projects.length - 1 ? projects[i + 1] : undefined,
  };
}
