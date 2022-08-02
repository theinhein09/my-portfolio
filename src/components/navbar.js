export function Navbar() {
  return (
    <nav className="sticky top-0 h-10 bg-rose-900 text-neutral-100">
      <ul className="mx-auto flex h-full max-w-5xl items-center justify-between">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>Projects</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
