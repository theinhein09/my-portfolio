import { useState } from "react";

export function Navbar() {
  const [projectsMenu, toggleProjectsMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-auto h-10 max-w-7xl bg-blue-800 text-neutral-100 shadow-md shadow-black/50">
      <ul className="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li className="relative">
          <button onClick={() => toggleProjectsMenu(!projectsMenu)}>
            Projects
          </button>
          <menu
            className={`absolute -bottom-3 z-50 flex w-40 translate-y-full flex-col gap-3 whitespace-nowrap rounded bg-rose-900 p-2 shadow-lg shadow-black/60 transition-all ${
              projectsMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <li role="menuitem">
              <a href="#project1" className="w-full rounded px-2 py-1">
                Project 1
              </a>
            </li>
            <li role="menuitem">
              <a href="#project2" className="w-full rounded px-2 py-1">
                Project 2
              </a>
            </li>
            <li role="menuitem">
              <a href="#project3" className="w-full rounded px-2 py-1">
                Project 3
              </a>
            </li>
            <li role="menuitem">
              <a href="#project4" className="w-full rounded px-2 py-1">
                Project 4
              </a>
            </li>
          </menu>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
