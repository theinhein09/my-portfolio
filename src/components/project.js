import { Carousel } from "react-responsive-carousel";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Video } from "./video";

export function Project({ project }) {
  return (
    <article
      className="my-4 mx-4 flex flex-col py-4 shadow shadow-black/20 ring-1 ring-black/10 md:min-h-screen"
      id={project.id}
    >
      <header className="flex h-12 items-center px-4">
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
      <section className="flex flex-grow flex-col items-center gap-2 px-4">
        <section className="hidden w-full max-w-6xl gap-5 p-1 xl:flex">
          {project.videos.map(({ id, url }) => (
            <div
              key={id}
              className="flex h-96 flex-grow items-center justify-center p-1 shadow-md ring-1 ring-black/5"
            >
              <Video url={url} />
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
            {project.videos.map(({ id, url }) => (
              <div key={id} className="flex w-full justify-center">
                <div className="my-2 flex h-96 w-full  max-w-sm items-center justify-center p-1 shadow-md ring-1 ring-black/5">
                  <Video url={url} />
                </div>
              </div>
            ))}
          </Carousel>
        </section>
        <section className="mt-4 w-full max-w-6xl py-2">
          <p className="mx-auto max-w-prose text-justify">
            {project.description}
          </p>
        </section>
        <section className="w-full max-w-6xl flex-grow">
          <p className="mx-auto max-w-prose text-justify">{project.content}</p>
        </section>
        <section className="mx-auto flex w-full max-w-prose gap-x-4 py-4 italic">
          <span className="flex-none">Built with</span>
          <span>-</span>
          <ul className="flex flex-wrap gap-x-4">
            {project.technologies.map(({ id, name }) => (
              <li key={id} className="flex-none leading-7">{`"${name}"`}</li>
            ))}
          </ul>
        </section>
      </section>
    </article>
  );
}
