import { Project } from "./project";

export function Projects() {
  return (
    <session className="bg-white">
      <header className="h-10">
        <h2>Projects</h2>
      </header>
      <Project />
      <Project />
      <Project />
    </session>
  );
}
