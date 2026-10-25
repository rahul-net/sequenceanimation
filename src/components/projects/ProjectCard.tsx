import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

/**
 * Card is a real <Link> (not a clickable div), with a local thumbnail
 * image, visible focus state via global CSS, and a 250–400ms hover lift.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="card card-enter" to={`/works/${project.slug}`} aria-label={`${project.title} — ${project.category} concept study`}>
      <img
        className="card-thumb"
        src={project.thumbnail}
        alt={`Concept placeholder artwork for ${project.title}`}
        width="800"
        height="500"
        loading="lazy"
      />
      <span className="tag">Concept · {project.category}</span>
      <h3 style={{ marginTop: 12 }}>{project.title}</h3>
      <p>{project.summary}</p>
      <p className="meta">
        {project.discipline}
        {project.year ? ` · ${project.year}` : ""} · {project.medium}
      </p>
    </Link>
  );
}
