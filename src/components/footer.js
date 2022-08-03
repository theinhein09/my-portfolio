import { Contact } from "./contact";

export function Footer() {
  return (
    <footer
      className="mx-auto flex min-h-screen max-w-7xl flex-col"
      id="contact"
    >
      <Contact />
      <div className="flex h-12 items-center justify-end px-4 text-neutral-100 ring-1 ring-black/10">
        <p className="text-sm font-light text-neutral-500">
          Copyright © {new Date().getFullYear()} Thein Than Hein.
        </p>
      </div>
    </footer>
  );
}
