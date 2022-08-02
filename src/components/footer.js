import { Contact } from "./contact";

export function Footer() {
  return (
    <footer className="mx-auto flex min-h-screen max-w-7xl flex-col bg-white">
      <Contact />
      <div className="flex h-12 items-center justify-end bg-blue-800 px-4 text-neutral-100">
        <p className="text-sm font-light text-neutral-300">
          Copyright © {new Date().getFullYear()} Thein Than Hein.
        </p>
      </div>
    </footer>
  );
}
