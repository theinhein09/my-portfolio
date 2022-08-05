import { useState } from "react";
import { Link, scroller } from "react-scroll";
import { projects } from "../data";
import { OutSideClickListener } from "./outside-click-listener";

export function Navbar() {
  const [projectsMenu, setProjectsMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-auto mt-3 h-10 max-w-7xl shadow-md shadow-black/10 ring-1 ring-black/5 md:hidden">
      <ul className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 text-sm">
        <li>
          <button
            className="rounded py-0.5 outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200 hover:dark:text-neutral-700 focus:dark:text-neutral-700"
            onClick={() =>
              scroller.scrollTo("home", {
                smooth: true,
              })
            }
          >
            <Link
              activeClass="navlink-active"
              smooth
              spy
              to="home"
              className="rounded px-4 py-0.5 transition-all"
            >
              Home
            </Link>
          </button>
        </li>
        <li>
          <button
            className="rounded py-0.5 outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200 hover:dark:text-neutral-700 focus:dark:text-neutral-700"
            onClick={() =>
              scroller.scrollTo("about", {
                smooth: true,
                offset: -30,
              })
            }
          >
            <Link
              activeClass="navlink-active"
              smooth
              spy
              to="about"
              offset={-30}
              className="rounded px-4 py-0.5 transition-all"
            >
              About
            </Link>
          </button>
        </li>
        <li className="relative">
          <button
            onClick={() => setProjectsMenu(!projectsMenu)}
            className="rounded py-0.5 px-4 outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200 hover:dark:text-neutral-700 focus:dark:text-neutral-700"
          >
            Projects
          </button>
          <OutSideClickListener action={() => setProjectsMenu(false)}>
            <menu
              className={`absolute -bottom-3 right-0 z-50 flex min-w-max translate-x-1/2 translate-y-full flex-col gap-3 rounded-lg p-2 shadow-lg shadow-black/30 ring-1 ring-black/10 transition-all ${
                projectsMenu ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {projects.map(({ name, id, Icon }) => (
                <li role="menuitem" key={name}>
                  <button
                    className="w-full rounded py-0.5 outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200 hover:dark:text-neutral-700 focus:dark:text-neutral-700"
                    onClick={() =>
                      scroller.scrollTo(id, {
                        smooth: true,
                        offset: -30,
                      })
                    }
                  >
                    <Link
                      activeClass="navlink-active"
                      smooth
                      spy
                      to={id}
                      className="flex items-center gap-2 rounded py-0.5 pl-1 pr-4 transition-all "
                      offset={-30}
                    >
                      <Icon />
                      {name}
                    </Link>
                  </button>
                </li>
              ))}
            </menu>
          </OutSideClickListener>
        </li>
        <li>
          <button
            className="rounded py-0.5 outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200 hover:dark:text-neutral-700 focus:dark:text-neutral-700"
            onClick={() =>
              scroller.scrollTo("contact", {
                smooth: true,
                offset: -30,
              })
            }
          >
            <Link
              activeClass="navlink-active"
              smooth
              spy
              to="contact"
              offset={-30}
              className="rounded px-4 py-0.5 transition-all"
            >
              Contact
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
