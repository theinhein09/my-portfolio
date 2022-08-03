import { Carousel } from "react-responsive-carousel";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

export function Project({ project }) {
  return (
    <article
      className="my-4 mx-4 flex flex-col py-4 ring-1 md:min-h-screen"
      id={project.id}
    >
      <header className="flex h-12 items-center justify-between px-4 ">
        <h3 className="text-2xl">{project.name}</h3>
      </header>
      <section className="mx-4 mb-8 mt-4 flex gap-4">
        <a
          href={project["source-code"]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-32 items-center justify-center gap-1.5 rounded px-2 py-1 text-sm shadow outline-none ring-1 ring-black/10 transition-all hover:shadow-black/50 focus:shadow-black/50"
        >
          <BsGithub />
          Source code
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
        <section className="hidden  h-96 w-full max-w-6xl gap-5 p-1 xl:flex">
          <div className="flex-grow rounded-lg shadow-md ring-1 ring-black/5"></div>
          <div className="flex-grow rounded-lg shadow-md ring-1 ring-black/5"></div>
          <div className="flex-grow rounded-lg shadow-md ring-1 ring-black/5"></div>
        </section>
        <section className="mx-auto block max-w-xl xl:hidden">
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus={false}
            renderArrowPrev={(clickHandler) => {
              return (
                <button
                  onClick={clickHandler}
                  className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded p-1 text-3xl shadow outline-none ring-1 ring-black/5 transition-all hover:shadow-black/50 focus:shadow-black/50"
                >
                  <RiArrowLeftSFill />
                </button>
              );
            }}
            renderArrowNext={(clickHandler) => {
              return (
                <button
                  onClick={clickHandler}
                  className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded p-1 text-3xl shadow outline-none ring-1 ring-black/5 transition-all hover:shadow-black/50 focus:shadow-black/50"
                >
                  <RiArrowRightSFill />
                </button>
              );
            }}
            className="relative"
          >
            <div className="flex w-full justify-center">
              <div className="my-2 h-96 w-full max-w-sm  rounded-lg shadow-md ring-1 ring-black/5"></div>
            </div>
            <div className="flex w-full justify-center">
              <div className="my-2 h-96 w-full max-w-sm rounded-lg shadow-md ring-1 ring-black/5"></div>
            </div>
            <div className="flex w-full justify-center">
              <div className="my-2 h-96 w-full max-w-sm rounded-lg shadow-md ring-1 ring-black/5"></div>
            </div>
          </Carousel>
        </section>
        <section className="w-full max-w-6xl py-4">
          <p className="mx-auto max-w-prose text-justify">
            {project.description}
          </p>
        </section>
      </section>
    </article>
  );
}
