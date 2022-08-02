export function Contact() {
  return (
    <section className="flex flex-grow flex-col py-4">
      <header className="flex h-14 items-center px-4 ">
        <h2 className="text-4xl font-medium">Contact</h2>
      </header>
      <address className="flex flex-grow items-center justify-end px-4">
        <ul className="flex flex-col gap-10 text-right">
          <li>Fremont</li>
          <li>California</li>
          <li>United State</li>
          <li>
            <a href="mailto:theinhein09@gmail.com">theinhein09@gmail.com</a>
          </li>
          <li>
            <a href="tel:+1510-857-9331">+1 (510) 857 - 9331</a>
          </li>
        </ul>
      </address>
    </section>
  );
}
