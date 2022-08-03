import { projects } from "../data";
import { Project } from "./project";

export function Projects() {
  return (
    <section className="my-4 py-4  ring-1 " id="projects">
      <header className="flex h-14 items-center px-4">
        <h2>Projects</h2>
      </header>
      <section>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
