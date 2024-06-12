import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div
        class="hero min-h-screen"
        style="background-image: url(https://image-proxy.wont-stream.workers.dev/?-https://cdn.jsdelivr.net/gh/wont-stream/desalvoTree-website@main/public/background.jpeg&output=webp);"
        id="top"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">DeSalvo Tree & Landscaping</h1>
            <h2 class="mb-5 text-2xl">
              A full tree and landscaping company, offering various premium
              services to cover all of your outdoor needs.
            </h2>
            <a class="btn btn-primary" href="#Gallery">
              Gallery
            </a>
          </div>
        </div>
      </div>

      <div class="hero bg-base-200 min-h-screen" id="Gallery">
        <div class="diff aspect-[1/1]">
          <div class="diff-item-1">
            <img
              alt="Peaches"
              src="https://image-proxy.wont-stream.workers.dev/?-https://cdn.jsdelivr.net/gh/wont-stream/desalvoTree-website@main/public/peach 2.jpg&output=webp"
              width={3024}
              height={4032}
            />
          </div>
          <div class="diff-item-2">
            <img
              alt="Peaches"
              src="https://image-proxy.wont-stream.workers.dev/?-https://cdn.jsdelivr.net/gh/wont-stream/desalvoTree-website@main/public/peach 3.jpg&output=webp"
              width={3024}
              height={4032}
            />
          </div>
          <div class="diff-resizer"></div>
        </div>
      </div>

      <div
        class="hero min-h-screen"
        style="background-image: url('https://image-proxy.wont-stream.workers.dev/?-https://cdn.jsdelivr.net/gh/wont-stream/desalvoTree-website@main/public/peach 1.jpg&output=webp');"
        id="top"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">What We Offer</h1>
            <h2 class="mb-5 text-2xl">
              <ul class="steps steps-vertical">
                <li class="step step-primary">Hedge Trimming</li>
                <li class="step step-primary">Tree Planting</li>
                <li class="step step-primary">Tree Trimming</li>
                <li class="step step-primary">Tree Removal</li>
                <li class="step step-primary">Weeding Beds</li>
                <li class="step step-primary">Decorative Edging</li>
                <li class="step step-primary">Debris Removal</li>
                <li class="step">No Lawn Mowing</li>
              </ul>
            </h2>
          </div>
        </div>
      </div>

      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://image-proxy.wont-stream.workers.dev/?-https://cdn.jsdelivr.net/gh/wont-stream/desalvoTree-website@main/public/jay.jpg&output=webp"
            alt="Jay DeSalvo"
            class="max-w-sm rounded-lg shadow-2xl"
            width={1163}
            height={1412}
          />
          <div>
            <h1 class="text-5xl">The Man Behind It All</h1>
            <p class="py-6">
              <span class="text-2xl font-bold">Jay DeSalvo -</span>
              <br />
              A tree service contractor by trade, expanded to include
              landscaping.
              <br />
              25+ years of experience
            </p>
            <div class="flex w-full">
              <a
                class="btn btn-primary rounded-box grid h-20 flex-grow place-items-center text-2xl font-bold"
                href="sms:+13362644924"
              >
                Text Me
              </a>
              <div class="divider divider-horizontal"></div>
              <a
                class="btn btn-secondary rounded-box grid h-20 flex-grow place-items-center text-2xl font-bold"
                href="tel:+13362644924"
              >
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "DeSalvo Tree & Landscaping",
  meta: [
    {
      name: "description",
      content:
        "A full tree and landscaping company, offering various premium services to cover all of your outdoor needs.",
    },
  ],
};
