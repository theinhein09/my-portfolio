export function Project({ project }) {
  return (
    <article
      className="my-4 mx-4 flex flex-col py-4 ring-1 md:min-h-screen"
      id={project.id}
    >
      <header className="mb-8 flex h-12 items-center justify-between px-4 ">
        <h3 className="text-2xl">{project.name}</h3>
        <div className="flex gap-4">
          <a
            href={project["source-code"]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-28 justify-center rounded py-1 text-sm ring-1 ring-black/10"
          >
            Source code
          </a>
          <a
            href={project["live-demo"]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-28 justify-center rounded py-1 text-sm ring-1 ring-black/10"
          >
            Live Demo
          </a>
        </div>
      </header>
      <section className="flex flex-grow flex-col items-center gap-10 px-4">
        <section className="flex h-96 w-full max-w-6xl gap-5 p-1">
          <div className="flex-grow rounded-lg shadow-md ring-1 ring-black/5"></div>
          <div className="flex-grow rounded-lg shadow-md ring-1 ring-black/5"></div>
          <div className="flex-grow rounded-lg shadow-md ring-1 ring-black/5"></div>
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
