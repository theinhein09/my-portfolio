import { useState } from "react";
import { Link } from "react-scroll";
import { projects } from "../data";

export function Navbar() {
  const [projectsMenu, toggleProjectsMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-auto h-10 max-w-7xl shadow-md shadow-black/10 ring-1 ring-black/5 md:hidden">
      <ul className="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
        <li>
          <button>
            <Link
              activeClass="navlink-active"
              smooth
              spy
              to="home"
              className="rounded px-4 py-1 transition-all"
            >
              Home
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link
              activeClass="navlink-active"
              smooth
              spy
              to="about"
              offset={-30}
              className="rounded px-4 py-1 transition-all"
            >
              About
            </Link>
          </button>
        </li>
        <li className="relative">
          <button
            onClick={() => toggleProjectsMenu(!projectsMenu)}
            className="rounded px-4"
          >
            Projects
          </button>
          <ul
            className={`absolute -bottom-3 z-50 flex w-40 min-w-max translate-y-full flex-col gap-3 whitespace-nowrap rounded-lg p-2 shadow-lg shadow-black/30 ring-1 ring-black/10 transition-all ${
              projectsMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {projects.map((project) => (
              <li key={project.name}>
                <button>
                  <Link
                    activeClass="navlink-active"
                    smooth
                    spy
                    to={project.id}
                    className="rounded py-1 pl-1 pr-4 transition-all"
                    offset={-30}
                  >
                    {project.name}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <button>
            <Link
              activeClass="navlink-active"
              smooth
              spy
              to="contact"
              offset={-30}
              className="rounded px-4 py-1 transition-all"
            >
              Contact
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
