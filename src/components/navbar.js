import { useState } from "react";
import { Link } from "react-scroll";
import { projects } from "../data";
import { OutSideClickListener } from "./outside-click-listener";

export function Navbar() {
  const [projectsMenu, setProjectsMenu] = useState(false);

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
            onClick={() => setProjectsMenu(!projectsMenu)}
            className="rounded px-4"
          >
            Projects
          </button>
          <OutSideClickListener action={() => setProjectsMenu(false)}>
            <ul
              className={`absolute -bottom-3 z-50 flex w-40 min-w-max translate-y-full flex-col gap-3 whitespace-nowrap rounded-lg p-2 shadow-lg shadow-black/30 ring-1 ring-black/10 transition-all ${
                projectsMenu ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {projects.map(({ name, id, Icon }) => (
                <li key={name}>
                  <button>
                    <Link
                      activeClass="navlink-active"
                      smooth
                      spy
                      to={id}
                      className="flex items-center gap-2 rounded py-1 pl-1 pr-4 transition-all "
                      offset={-30}
                    >
                      <Icon />
                      {name}
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </OutSideClickListener>
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
