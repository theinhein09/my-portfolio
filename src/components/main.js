import { About } from "./about";
import { Projects } from "./projects";
import { Sidebar } from "./sidebar";

export function Main() {
  return (
    <main className="mx-auto flex max-w-7xl gap-2">
      <Sidebar />
      <div className="flex-grow">
        <About />
        <Projects />
      </div>
    </main>
  );
}
