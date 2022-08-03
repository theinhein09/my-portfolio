import { Link } from "react-scroll";
import { projects } from "../data";

export function Sidebar() {
  return (
    <aside className="sticky top-7 z-50 my-4 mx-2 mb-8 hidden h-fit w-56 min-w-max flex-col rounded-lg p-4 shadow-md ring-1 ring-black/10  md:flex">
      <ul className="flex flex-col gap-4">
        <li>
          <button>
            <Link
              activeClass="sidebar-link-active"
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
              activeClass="sidebar-link-active"
              smooth
              spy
              to="about"
              className="rounded px-4 py-1 transition-all"
            >
              About
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link
              activeClass="sidebar-link-active"
              smooth
              spy
              to="projects"
              className="rounded px-4 py-1 transition-all"
            >
              Projects
            </Link>
          </button>
          <ul className="ml-4 mt-4 flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project.name}>
                <button>
                  <Link
                    activeClass="sidebar-link-active"
                    smooth
                    spy
                    to={project.id}
                    className="rounded px-4 py-1 transition-all"
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
              activeClass="sidebar-link-active"
              smooth
              spy
              to="contact"
              className="rounded px-4 py-1 transition-all"
            >
              Contact
            </Link>
          </button>
        </li>
      </ul>
    </aside>
  );
}
