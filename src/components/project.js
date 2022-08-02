export function Project({ id }) {
  return (
    <article className="flex flex-col bg-white md:min-h-screen" id={id}>
      <div role="none" id="project" className="h-12" />
      <header className="mb-8 flex h-12 items-center justify-between bg-blue-800 px-4 text-yellow-300">
        <h3 className="text-2xl">Project Name</h3>
        <div className="flex gap-4">
          <button className="rounded bg-yellow-100 px-5 py-1 text-sm text-blue-800">
            Source code
          </button>
          <button className="rounded bg-yellow-100 px-5 py-1 text-sm text-blue-800">
            Live Demo
          </button>
        </div>
      </header>
      <section className="flex flex-grow flex-col items-center gap-10">
        <section className="flex h-96 w-full max-w-6xl gap-5">
          <div className="flex-grow rounded bg-red-200 shadow-lg shadow-black/50 ring-1 ring-neutral-300"></div>
          <div className="flex-grow rounded bg-red-200 shadow-lg shadow-black/50 ring-1 ring-neutral-300"></div>
          <div className="flex-grow rounded bg-red-200 shadow-lg shadow-black/50 ring-1 ring-neutral-300"></div>
        </section>
        <section className="w-full max-w-6xl bg-red-100 p-4">
          <p className="mx-auto max-w-prose text-justify">
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
            placerat nibh. Suspendisse mi leo, auctor eu luctus id, sollicitudin
            et sapien. Fusce erat tortor, gravida et rhoncus pharetra, lacinia
            in enim. Nulla in venenatis magna. Mauris varius ultrices eleifend.
            Sed quis pharetra est. Donec lacinia dolor ac risus hendrerit
            dictum. Suspendisse ac sagittis velit. In hac habitasse platea
            dictumst. Aenean porttitor consequat porta. Aenean interdum nulla
            porttitor lectus euismod, ut sagittis odio dapibus. Praesent
            elementum, tellus pellentesque finibus blandit, diam justo semper
            risus, vel sagittis turpis mauris in risus. Praesent et tellus ut
            lacus posuere auctor. Vestibulum urna orci, sollicitudin ullamcorper
            nibh nec, tincidunt accumsan nunc. Morbi ut est vel mauris pharetra
            maximus id accumsan lectus. Integer sed diam sit amet elit aliquam
            lacinia. Nam fringilla felis ipsum, eu ullamcorper eros scelerisque
            vitae. Suspendisse eu aliquam elit. Nullam massa turpis, gravida at
            tempor in, eleifend ultrices quam. Ut lectus augue, viverra vitae
            pellentesque vel, condimentum id tortor. Sed eu pharetra tortor. Ut
            porta eros tellus, et vehicula dolor varius a.
          </p>
        </section>
      </section>
    </article>
  );
}
