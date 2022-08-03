import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";

export function Contact() {
  return (
    <section className="flex flex-grow flex-col py-4  ring-1 ring-black/10">
      <header className="flex h-14 items-center px-4 ">
        <h2>Contact</h2>
      </header>
      <address className="flex flex-grow flex-col items-end justify-center px-4">
        <ul className="flex flex-col gap-10 text-right">
          <li>Fremont, California</li>
          <li>United State</li>
          <li>
            <a
              href="mailto:theinhein09@gmail.com"
              className="flex items-center justify-end gap-2"
            >
              <MdEmail />
              theinhein09@gmail.com
            </a>
          </li>
          <li>
            <a
              href="tel:+1510-857-9331"
              className="flex items-center justify-end gap-2"
            >
              <FaMobile />
              +1 (510) 857 - 9331
            </a>
          </li>
        </ul>
        <p className="mt-10 max-w-xs text-right text-lg font-bold md:max-w-fit">
          Let's talk!
        </p>
      </address>
    </section>
  );
}
