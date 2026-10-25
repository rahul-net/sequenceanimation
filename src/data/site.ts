import type { SiteConfig } from "../types/project";

/**
 * Central site configuration — edit this file to change brand copy,
 * links, capabilities, and availability. Nothing here claims clients,
 * awards, credentials, testimonials, or achievements. Capabilities are
 * editable practice areas, not verified credentials.
 */
export const site: SiteConfig = {
  brandName: "SEQUENCE / CREATIVE",
  descriptor: "AI ARTIST · ANIMATION · MOTION DESIGN",
  headline: "IMAGINATION, IN MOTION.",
  supportingStatement:
    "AI-generated worlds. Cinematic animation. Visual experiences crafted with intention.",
  biography:
    "SEQUENCE / CREATIVE is the working name for a creative practice focused on AI-generated imagery, animation, and motion design. The work explores cinematic composition, sculptural form, and quiet, deliberate movement — built frame by frame, with intention over spectacle.",
  // Neutral default: confirm before publishing any availability claim.
  availability: "Availability on request",
  // Production domain for the deployed site (with trailing slash, as the
  // canonical hook expects). Sitemap/robots use this same URL.
  siteUrl: "https://rahul-net.github.io/sequenceanimation/",
  // No verified email has been supplied: keep null so pages render
  // "Email — available on request" instead of an invented address.
  email: null,
  links: [
    { label: "YouTube", url: "https://www.youtube.com/@SequenceAnimation" },
    {
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61595736742488",
    },
    { label: "Portfolio", url: "https://rahul-net.github.io/sequenceanimation/" },
  ],
  nav: [
    { label: "Home", to: "/" },
    { label: "Selected Works", to: "/works" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  capabilities: [
    {
      title: "AI Art",
      text: "Concept worlds and imagery shaped with clear visual rules, not random generation.",
    },
    {
      title: "Cinematic Animation",
      text: "Short cinematic pieces built around composition, timing, and restraint.",
    },
    {
      title: "3D Art",
      text: "Sculptural forms studied in light, shadow, and controlled reflection.",
    },
    {
      title: "Motion Graphics",
      text: "Title sequences, transitions, and graphic systems for screen work.",
    },
    {
      title: "Visual Storytelling",
      text: "Images arranged so the story is felt before it is explained.",
    },
    {
      title: "Digital Art Direction",
      text: "Editorial layouts and colour systems that let the artwork carry the page.",
    },
  ],
};
