import { Carousel } from "react-responsive-carousel";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Video } from "./video";

export function Project({ project }) {
  return (
    <article
      className="my-4 mx-4 flex flex-col py-4 ring-1 md:min-h-screen"
      id={project.id}
    >
      <header className="flex h-12 items-center justify-between px-4 ">
        <h3>{project.name}</h3>
      </header>
      <section className="mx-4 mb-8 mt-4 flex gap-4">
        <a
          href={project["source-code"]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-32 items-center justify-center gap-1.5 rounded px-2 py-1 text-sm shadow outline-none ring-1 ring-black/10 transition-all hover:shadow-black/50 focus:shadow-black/50"
        >
          <BsGithub />
          <span>Source code</span>
        </a>
        <a
          href={project["live-demo"]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-32 items-center justify-center gap-1.5 rounded px-2 py-1 text-sm shadow outline-none ring-1 ring-black/10 transition-all hover:shadow-black/50 focus:shadow-black/50"
        >
          <FiExternalLink />
          Live Demo
        </a>
      </section>
      <section className=" flex-grow flex-col items-center gap-4 px-4">
        <section className="hidden w-full max-w-6xl gap-5 p-1 xl:flex">
          {project.videos.map((video, i) => (
            <div
              key={i}
              className="flex h-fit flex-grow items-center justify-center rounded-lg p-1 shadow-md ring-1 ring-black/5"
            >
              <Video video={video} />
            </div>
          ))}
        </section>
        <section className="mx-auto block max-w-xl xl:hidden">
          <Carousel
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            emulateTouch
            swipeable
            className="relative"
          >
            {project.videos.map((video, i) => (
              <div key={i} className="flex w-full justify-center">
                <div className="my-2 flex h-96 w-full  max-w-sm items-center justify-center rounded-lg p-1 shadow-md ring-1 ring-black/5">
                  <Video video={video} />
                </div>
              </div>
            ))}
          </Carousel>
        </section>
        <section className="mt-4 w-full max-w-6xl py-4">
          <p className="mx-auto max-w-prose text-justify">
            {project.description}
          </p>
        </section>
      </section>
    </article>
  );
}
