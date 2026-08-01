import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Cyber-focused project cards loaded from one editable data file.">
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
