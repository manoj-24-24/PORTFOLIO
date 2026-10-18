import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Cyber tools, web apps and playable games I have built.">
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
