export function About() {
  return (
    <section className="flex min-h-screen flex-col bg-white py-4">
      <div role="none" id="about" className="h-12" />
      <header className="flex h-14 items-center bg-blue-800 px-4 text-yellow-300">
        <h2 className="text-4xl font-medium drop-shadow-md">About</h2>
      </header>
      <section className="flex flex-grow flex-col items-center justify-center gap-5 p-8 md:flex-row">
        <div className="flex h-fit flex-grow items-center justify-center rounded-lg bg-yellow-100 shadow-md ring-1 ring-black/5">
          <p className="max-w-prose p-5 text-justify md:p-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam
            augue leo, eu eleifend lacus interdum laoreet. Vestibulum eu nunc
            sit amet odio porttitor gravida sit amet vitae neque. Morbi blandit
            diam condimentum enim fringilla volutpat. Donec elementum lacus quis
            mattis suscipit. Quisque scelerisque tincidunt sem, eget iaculis
            nisl semper ac. Aliquam feugiat iaculis elit, nec vulputate purus
            scelerisque at. Duis non justo nec lacus placerat egestas. Morbi
            pharetra est nisl, eu faucibus dui eleifend eu. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam non leo vel tellus
            dictum malesuada eget eu quam. Suspendisse dictum tortor in
            ullamcorper sagittis. Donec scelerisque metus ut nulla tempor
            fringilla. Aenean at augue volutpat, rhoncus nisi quis, tincidunt
            purus. Proin faucibus leo id dolor ullamcorper, eu aliquet tortor
            feugiat. Praesent velit neque, dignissim in hendrerit eu, maximus
            sit amet velit. In accumsan arcu eu nunc dignissim convallis a id
            arcu. Phasellus eu massa nibh. Vivamus posuere diam elit, quis
            vestibulum tellus accumsan non. In hendrerit leo neque, vel semper
            tellus semper id. Nam enim nisl, tristique et velit ac, ultricies
            placerat nibh.
          </p>
        </div>
        <div className="flex h-fit flex-grow items-center justify-center rounded-lg bg-yellow-100 shadow-md ring-1 ring-black/5">
          <p className="max-w-prose p-5 text-justify md:p-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam
            augue leo, eu eleifend lacus interdum laoreet. Vestibulum eu nunc
            sit amet odio porttitor gravida sit amet vitae neque. Morbi blandit
            diam condimentum enim fringilla volutpat. Donec elementum lacus quis
            mattis suscipit. Quisque scelerisque tincidunt sem, eget iaculis
            nisl semper ac. Aliquam feugiat iaculis elit, nec vulputate purus
            scelerisque at. Duis non justo nec lacus placerat egestas. Morbi
            pharetra est nisl, eu faucibus dui eleifend eu. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam non leo vel tellus
            dictum malesuada eget eu quam. Suspendisse dictum tortor in
            ullamcorper sagittis. Donec scelerisque metus ut nulla tempor
            fringilla. Aenean at augue volutpat, rhoncus nisi quis, tincidunt
            purus. Proin faucibus leo id dolor ullamcorper, eu aliquet tortor
            feugiat. Praesent velit neque, dignissim in hendrerit eu, maximus
            sit amet velit. In accumsan arcu eu nunc dignissim convallis a id
            arcu. Phasellus eu massa nibh. Vivamus posuere diam elit, quis
            vestibulum tellus accumsan non. In hendrerit leo neque, vel semper
            tellus semper id. Nam enim nisl, tristique et velit ac, ultricies
            placerat nibh.
          </p>
        </div>
      </section>
    </section>
  );
}
