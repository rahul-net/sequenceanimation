import { useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { neighbours, projectBySlug } from "../data/projects";
import SectionHeading from "../components/ui/SectionHeading";
import Lightbox from "../components/ui/Lightbox";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectBySlug(slug);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  useDocumentTitle(
    project ? `${project.title} — SEQUENCE / CREATIVE` : "Project not found — SEQUENCE / CREATIVE",
    project
      ? `${project.title}: a ${project.category} concept study from SEQUENCE / CREATIVE. ${project.summary}`
      : "No project matches this address in the SEQUENCE / CREATIVE portfolio.",
    project ? `/works/${project.slug}` : "/works",
  );

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="404" title="Project not found." />
          <p>No project matches this address. The link may be mistyped, or the project was never part of this portfolio.</p>
          <Link className="btn btn-ghost" to="/works">
            Back to selected works
          </Link>
        </div>
      </section>
    );
  }

  const { prev, next } = neighbours(project.slug);
  const gallery = project.galleryImages ?? [];

  return (
    <section className="section">
      <div className="container">
        <span className="tag">Concept · {project.category}</span>
        <h1 className="page-title" style={{ marginTop: 16 }}>{project.title}</h1>
        <p>{project.summary}</p>
        <p className="meta">
          {project.discipline} · {project.medium}
          {project.year ? ` · ${project.year}` : " · Year not stated"}
        </p>

        {project.heroImage ? (
          <img
            className="hero-img"
            src={project.heroImage}
            alt={`Concept placeholder hero artwork for ${project.title}`}
            width="1200"
            height="630"
            style={{ margin: "32px 0" }}
          />
        ) : null}
        <p className="placeholder-note">
          Hero artwork — procedural placeholder, not a delivered client asset
        </p>

        <h3>Project overview</h3>
        <p>{project.summary}</p>

        <h3>Creative objective</h3>
        <p>{project.objective}</p>

        <h3>Artist role</h3>
        <p>{project.role}</p>

        <h3>Tools and technologies</h3>
        <ul>
          {project.tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <h3>Production process</h3>
        <ol className="steps">
          {project.process.map((step) => (
            <li key={step}>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>

        <h3>Study notes</h3>
        <ul>
          {project.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        {project.behindScenes ? (
          <>
            <h3>Behind the scenes</h3>
            <p>{project.behindScenes}</p>
          </>
        ) : null}

        {gallery.length > 0 ? (
          <>
            <h3>Final artwork gallery</h3>
            <p className="meta">Select an image to view it larger. Press Escape to close.</p>
            <div className="gallery-grid">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className="gallery-btn"
                  onClick={() => setLightbox(src)}
                  aria-label={`View ${project.title} gallery image ${i + 1} larger`}
                >
                  <img
                    src={src}
                    alt={`Concept placeholder gallery artwork ${i + 1} for ${project.title}`}
                    width="1200"
                    height="630"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </>
        ) : null}

        {project.previewVideo ? (
          <video controls preload="none" poster={project.thumbnail} style={{ width: "100%", marginTop: 32 }}>
            <source src={project.previewVideo} />
          </video>
        ) : (
          <p className="meta" style={{ marginTop: 32 }}>
            No video preview is attached to this concept study — no video file
            was supplied, so no player is rendered.
          </p>
        )}

        <p className="meta" style={{ marginTop: 24 }}>
          Client: — (none claimed) · Awards: none claimed · Credits: {project.credits ?? "— (none claimed)"}
        </p>

        <nav className="cta-row" aria-label="Project navigation" style={{ marginTop: 32 }}>
          <Link className="btn btn-ghost" to="/works">
            Back to selected works
          </Link>
          {prev ? (
            <Link className="btn btn-ghost" to={`/works/${prev.slug}`}>
              ← Previous: {prev.title}
            </Link>
          ) : null}
          {next ? (
            <Link className="btn btn-ghost" to={`/works/${next.slug}`}>
              Next: {next.title} →
            </Link>
          ) : null}
        </nav>

        {lightbox ? <Lightbox src={lightbox} alt={`${project.title} gallery image`} onClose={closeLightbox} /> : null}
      </div>
    </section>
  );
}
