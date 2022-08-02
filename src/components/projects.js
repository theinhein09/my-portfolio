import { Project } from "./project";

const projects = new Array(4).fill("");

export function Projects() {
  return (
    <section className="bg-white py-4">
      <header className="flex h-14 items-center bg-blue-800 px-4 text-yellow-300">
        <h2 className="text-4xl font-medium">Projects</h2>
      </header>
      {projects.map((project, i) => (
        <Project key={i} id={`project${i + 1}`} />
      ))}
    </section>
  );
}
