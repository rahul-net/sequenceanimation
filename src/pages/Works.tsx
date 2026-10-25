import { useState } from "react";
import { projectFilters, projects } from "../data/projects";
import type { ProjectCategory } from "../types/project";
import ProjectCard from "../components/projects/ProjectCard";
import SectionHeading from "../components/ui/SectionHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Filter = "All Projects" | ProjectCategory;

export default function Works() {
  useDocumentTitle(
    "Selected Works — SEQUENCE / CREATIVE",
    "Selected concept studies from SEQUENCE / CREATIVE: AI art, animation, 3D art, motion graphics, cinematic films and visual experiments.",
    "/works",
  );
  const [filter, setFilter] = useState<Filter>("All Projects");
  const visible = filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected works"
          title="All concept studies."
          text="Each project below is a labelled concept study. No clients, awards, or testimonials are claimed. Filter by discipline; every filter has at least one entry."
        />
        <div className="filters" role="group" aria-label="Filter projects by category">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn${filter === f ? " active" : ""}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        {visible.length === 0 ? (
          <div>
            <p>No concept studies in this filter yet.</p>
            <button className="btn btn-ghost" type="button" onClick={() => setFilter("All Projects")}>
              Show all projects
            </button>
          </div>
        ) : (
          <div className="grid grid-3" key={filter}>
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
        <p className="meta" style={{ marginTop: 24 }} aria-live="polite">
          Showing {visible.length} of {projects.length} concept studies
          {filter !== "All Projects" ? ` in ${filter}` : ""}.
        </p>
      </div>
    </section>
  );
}
