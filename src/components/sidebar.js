import { Link, scroller } from "react-scroll";
import { projects } from "../data";
import { AiFillHome, AiOutlineUser, AiFillProject } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

export function Sidebar() {
  return (
    <aside className="sticky top-7 z-50 my-4 mx-2 mb-8 hidden h-fit w-56 min-w-max flex-col rounded-lg p-4 text-sm shadow-md ring-1  ring-black/10 md:flex">
      <ul className="flex flex-col gap-4">
        <li>
          <button
            className="w-full rounded outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200"
            onClick={() =>
              scroller.scrollTo("home", {
                smooth: true,
              })
            }
          >
            <Link
              activeClass="sidebar-link-active"
              smooth
              spy
              to="home"
              className="flex items-center gap-2 rounded px-4 py-1 transition-all"
            >
              <AiFillHome />
              Home
            </Link>
          </button>
        </li>
        <li>
          <button
            className="w-full rounded outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200"
            onClick={() =>
              scroller.scrollTo("about", {
                smooth: true,
              })
            }
          >
            <Link
              activeClass="sidebar-link-active"
              smooth
              spy
              to="about"
              className="flex items-center gap-2 rounded px-4 py-1 transition-all"
            >
              <AiOutlineUser />
              About
            </Link>
          </button>
        </li>
        <li>
          <button
            className="w-full rounded outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200"
            onClick={() =>
              scroller.scrollTo("projects", {
                smooth: true,
              })
            }
          >
            <Link
              activeClass="sidebar-link-active"
              smooth
              spy
              to="projects"
              className="flex items-center gap-2 rounded px-4 py-1 transition-all"
            >
              <AiFillProject />
              Projects
            </Link>
          </button>
          <ul className="ml-4 mt-4 flex flex-col gap-4">
            {projects.map(({ name, id, Icon }) => (
              <li key={name}>
                <button
                  className="w-full rounded outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200"
                  onClick={() =>
                    scroller.scrollTo(id, {
                      smooth: true,
                    })
                  }
                >
                  <Link
                    activeClass="sidebar-link-active"
                    smooth
                    spy
                    to={id}
                    className="flex items-center gap-2 rounded px-4 py-1 transition-all"
                  >
                    <Icon />
                    {name}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <button
            className="w-full rounded outline-none transition-all hover:bg-neutral-200 focus:bg-neutral-200"
            onClick={() =>
              scroller.scrollTo("contact", {
                smooth: true,
              })
            }
          >
            <Link
              activeClass="sidebar-link-active"
              smooth
              spy
              to="contact"
              className="flex items-center gap-2 rounded px-4 py-1 transition-all"
            >
              <MdPermContactCalendar />
              Contact
            </Link>
          </button>
        </li>
      </ul>
    </aside>
  );
}
