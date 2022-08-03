export function Header() {
  return (
    <header
      id="home"
      className="mx-auto mb-4 flex min-h-screen max-w-7xl flex-col items-center justify-center ring-1"
    >
      <div className="flex w-full max-w-sm flex-col gap-8 px-4 md:block md:max-w-fit">
        <h1 className="flex flex-col gap-4 md:flex-row">
          <span>Thein</span>
          <span>Than</span>
          <span>Hein</span>
        </h1>
        <h2 className="text-right text-lg">A web developer.</h2>
      </div>
    </header>
  );
}
