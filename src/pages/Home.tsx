import { Link } from "react-router-dom";
import { site } from "../data/site";
import { featuredProject, processSteps, projects } from "../data/projects";
import Signature3D from "../components/three/Signature3D";
import ProjectCard from "../components/projects/ProjectCard";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

/**
 * Home page sections, in the Part 1 order:
 * 1 Navigation (Layout/Header) · 2 Hero · 3 Signature artwork ·
 * 4 Showreel · 5 Selected projects · 6 Philosophy · 7 Capabilities ·
 * 8 Featured case study · 9 About · 10 Process · 11 Collaboration CTA ·
 * 12 Contact section · 13 Footer (Layout/Footer)
 * Showreel is a labelled placeholder: no video file was supplied, so no
 * video player is rendered and nothing is downloaded.
 */
export default function Home() {
  useDocumentTitle(
    "SEQUENCE / CREATIVE — Imagination, in Motion",
    "SEQUENCE / CREATIVE — AI Artist, Animation and Motion Design. Imagination, in motion.",
    "/",
  );
  return (
    <>
      {/* 2 — Cinematic hero, reveal staggered 700–1400ms */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow hero-reveal">{site.descriptor}</p>
          <h1 className="hero-reveal-2">
            Imagination, <em>in motion.</em>
          </h1>
          <p className="hero-lead hero-reveal-3">{site.supportingStatement}</p>
          <div className="cta-row hero-reveal-4">
            <Link className="btn" to="/works">
              Explore Selected Work
            </Link>
            <Link className="btn btn-ghost" to="/about">
              About the Artist
            </Link>
          </div>
          <p className="scroll-hint hero-reveal-4">↓ Scroll — the work begins below</p>
        </div>
      </section>

      {/* 3 — Signature 3D artwork (lazy, with SVG fallback) */}
      <Reveal>
        <SectionHeading
          eyebrow="Signature artwork"
          title="One form, held in light."
          text="The hero composition is a single sculptural idea — an emerald glass ribbon — rather than a collection of effects. The 3D version loads lazily and falls back to a static image without WebGL."
        />
        <Signature3D />
      </Reveal>

      {/* 4 — Featured showreel: labelled placeholder, no video element */}
      <Reveal>
        <SectionHeading eyebrow="Showreel" title="Featured showreel" />
        <div className="showreel">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}thumbnails/showreel-poster.svg`}
              alt="Showreel poster placeholder"
              width="1200"
              height="675"
              loading="lazy"
              style={{ borderRadius: "var(--radius-md)", marginBottom: 16 }}
            />
            <strong>Showreel — placeholder</strong>
            <p style={{ margin: "8px auto 0" }}>
              No showreel video is attached yet, so no video player is shown
              and no video file is downloaded. Attach a real reel file in
              Part 3 to replace this placeholder.
            </p>
            <p className="meta">Duration — · Format — · Audio — none (no video)</p>
          </div>
        </div>
      </Reveal>

      {/* 5 — Selected projects */}
      <Reveal>
        <SectionHeading
          eyebrow="Selected projects"
          title="Work, in concept form."
          text="Every entry below is clearly labelled concept work. No client, award, or testimonial is claimed for any of them."
        />
        <div className="grid grid-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="cta-row">
          <Link className="btn btn-ghost" to="/works">
            View all selected works
          </Link>
        </div>
      </Reveal>

      {/* 6 — Creative philosophy */}
      <Reveal>
        <SectionHeading eyebrow="Philosophy" title="Intention over spectacle." />
        <p>
          A strong image does not need more effects. It needs a clear idea,
          a restrained palette, and movement that earns its place. This
          practice favours quiet composition, long holds, and a single
          accent — the emerald in a dark room — over noise.
        </p>
      </Reveal>

      {/* 7 — Capabilities and services (from site config) */}
      <Reveal>
        <SectionHeading eyebrow="Capabilities" title="What the practice covers." />
        <div className="grid grid-2">
          {site.capabilities.map((c) => (
            <article className="card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
        <p className="meta" style={{ marginTop: 16 }}>
          Capabilities are editable practice areas in the site configuration —
          not claimed credentials or client history.
        </p>
      </Reveal>

      {/* 8 — Featured case study (concept, not a real client project) */}
      <Reveal>
        <SectionHeading eyebrow="Featured case study — concept" title={featuredProject.title} />
        <p>{featuredProject.summary}</p>
        <ul>
          {featuredProject.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p className="meta">
          Case study type: Concept · Client: — (none claimed) · Outcome: not
          stated — this is a design study, not a delivered client project.
        </p>
        <div className="cta-row">
          <Link className="btn btn-ghost" to={`/works/${featuredProject.slug}`}>
            Read the case study
          </Link>
        </div>
      </Reveal>

      {/* 9 — About the artist */}
      <Reveal>
        <SectionHeading eyebrow="About the artist" title="A practice, not a résumé." />
        <p>{site.biography}</p>
        <div className="cta-row">
          <Link className="btn btn-ghost" to="/about">
            More about the artist
          </Link>
        </div>
      </Reveal>

      {/* 10 — Creative process */}
      <Reveal>
        <SectionHeading eyebrow="Process" title="How a piece is made." />
        <ol className="steps">
          {processSteps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* 11 — Collaboration CTA */}
      <Reveal>
        <SectionHeading
          eyebrow="Collaboration"
          title="Have an idea worth moving?"
          text="If the idea is clear and the ambition is cinematic, the conversation starts here."
        />
        <div className="cta-row">
          <Link className="btn" to="/contact">
            Start a conversation
          </Link>
        </div>
        <p className="meta" style={{ marginTop: 16 }}>
          {site.availability} — please confirm availability before publishing.
        </p>
      </Reveal>

      {/* 12 — Contact section */}
      <Reveal>
        <SectionHeading eyebrow="Contact" title="Where to find the work." />
        <ul>
          {site.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label} — {link.url}
              </a>
            </li>
          ))}
        </ul>
        <p className="meta">
          Email — available on request. No email, phone, or WhatsApp number is
          listed here, because none has been verified for this portfolio.
        </p>
        <div className="cta-row">
          <Link className="btn btn-ghost" to="/contact">
            Contact page
          </Link>
        </div>
      </Reveal>
    </>
  );
}
