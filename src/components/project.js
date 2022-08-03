import { Carousel } from "react-responsive-carousel";

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
          className="flex w-28 justify-center rounded py-1 text-sm shadow outline-none ring-1 ring-black/10 transition-all hover:shadow-black/50 focus:shadow-black/50"
        >
          Source code
        </a>
        <a
          href={project["live-demo"]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-28 justify-center rounded py-1 text-sm shadow outline-none ring-1 ring-black/10 transition-all hover:shadow-black/50 focus:shadow-black/50"
        >
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
                  className="absolute top-1/2 left-2 z-20 rounded px-2 py-1 text-sm shadow outline-none ring-1 ring-black/5 transition-all hover:shadow-black/50 focus:shadow-black/50"
                >
                  P
                </button>
              );
            }}
            renderArrowNext={(clickHandler) => {
              return (
                <button
                  onClick={clickHandler}
                  className="absolute top-1/2 right-2 z-20 rounded px-2 py-1 text-sm shadow outline-none ring-1 ring-black/5 transition-all hover:shadow-black/50 focus:shadow-black/50"
                >
                  N
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
