export function About() {
  return (
    <section
      className="my-4 flex min-h-screen flex-col py-4 ring-1 ring-black/10"
      id="about"
    >
      <header className="flex h-14 items-center px-4 ">
        <h2>About</h2>
      </header>
      <section className="flex flex-grow items-center justify-center px-4">
        <div
          role="none"
          className="flex h-fit flex-grow flex-col items-center justify-center p-5 py-14 shadow shadow-black/20 ring-1 ring-black/10 "
        >
          <p className="max-w-prose text-justify">
            I have always had a passion for technologies since I
            was young. As a result, I became a civil engineer. After working as
            a civil engineer for a while, I came to the U.S. to seek further
            education. During that period, I was fortunate enough to find out
            how strong my passion towards programming, and decided to take that
            path no matter what will happen in the future. Currently, I
            am fully dedicated to programming, while thriving to improve both my
            knowledge and skills day by day.
          </p>
          <section className="mx-auto flex w-full max-w-prose gap-x-4 py-4 italic">
            <span className="flex-none">Skills</span>
            <span>-</span>
            <ul className="flex flex-wrap gap-x-4">
              <li>"JavaScript"</li>
              <li>"React JS"</li>
              <li>"Tailwind CSS"</li>
              <li>"Firebase"</li>
              <li>"MongoDB"</li>
            </ul>
          </section>
        </div>
      </section>
    </section>
  );
}
