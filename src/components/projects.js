import { projects } from "../data";
import { Project } from "./project";

export function Projects() {
  return (
    <section className="my-4 py-4  ring-1 ring-black/10" id="projects">
      <header className="flex flex-col justify-center gap-4 px-4 pb-2">
        <h2>Projects</h2>
        <p>Following are the projects I have built along the road...</p>
      </header>
      <section>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
