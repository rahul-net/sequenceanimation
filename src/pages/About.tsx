import { Link } from "react-router-dom";
import { site } from "../data/site";
import { processSteps } from "../data/projects";
import SectionHeading from "../components/ui/SectionHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

/** Generic workflow phases only — no invented dates, jobs, or achievements. */
const timeline = [
  { phase: "Explore", text: "The idea is discussed in plain language: what it should feel like, and what it must avoid." },
  { phase: "Define", text: "Palette, form, type, and movement rules are set before any production begins." },
  { phase: "Build", text: "The piece is made in passes and checked against the idea at each pass." },
  { phase: "Refine", text: "What does not serve the piece is removed, and the whole work is checked end to end." },
];

export default function About() {
  useDocumentTitle(
    "About — SEQUENCE / CREATIVE",
    "About SEQUENCE / CREATIVE: an AI art, animation and motion design practice built on intention over spectacle.",
    "/about",
  );
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="About the artist" title={site.brandName} />
        <p>{site.biography}</p>
        <p>
          The descriptor is simple: {site.descriptor}. The headline of the
          practice is “{site.headline}” — and the supporting idea is that
          visual experiences should be crafted with intention.
        </p>

        <h3 style={{ marginTop: 48 }}>Profile artwork</h3>
        <figure className="artwork-frame" style={{ maxWidth: 480 }}>
          <img
            src={`${import.meta.env.BASE_URL}images/profile-artwork.svg`}
            alt="Procedural profile artwork placeholder"
            width="800"
            height="1000"
            loading="lazy"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-sm)" }}
          />
          <figcaption className="placeholder-note">
            Profile artwork — procedural placeholder, not a real photograph
          </figcaption>
        </figure>

        <h3 style={{ marginTop: 48 }}>Creative philosophy</h3>
        <p>
          Intention over spectacle. A strong image needs a clear idea, a
          restrained palette, and movement that earns its place — quiet
          composition, long holds, and a single accent over noise.
        </p>

        <h3 style={{ marginTop: 48 }}>Skills and capabilities</h3>
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
          not claimed credentials, awards, or client history.
        </p>

        <h3 style={{ marginTop: 48 }}>Creative workflow</h3>
        <ol className="steps">
          {processSteps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <h3 style={{ marginTop: 48 }}>Biography timeline — phases, not dates</h3>
        <p>
          No dated biography is claimed here. The phases below describe how a
          piece moves from idea to finished work.
        </p>
        <ol className="steps">
          {timeline.map((t) => (
            <li key={t.phase}>
              <strong>{t.phase}</strong>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>

        <p className="meta" style={{ marginTop: 32 }}>
          Availability: {site.availability} (neutral default — confirm before
          publishing). No credentials, awards, or testimonials are listed
          here, because none have been verified for this portfolio.
        </p>
        <div className="cta-row">
          <Link className="btn" to="/contact">
            Start a collaboration conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
