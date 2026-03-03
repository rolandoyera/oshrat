import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="w-full max-w-7xl mx-auto py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Image */}
          <div className="relative w-full h-auto bg-zinc-100 group">
            <Image
              src="/about-us/oshrat-rothschild-sarvian-design-group.jpeg"
              alt="Oshrat Rothschild - Sarvian Design Group"
              width={1000}
              height={1000}
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm tracking-[0.4em] text-zinc-400 uppercase font-light">
                Discover
              </h2>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900 leading-tight">
                About Sarvian <br />
                <span className="text-zinc-400">Design Group</span>
              </h1>
            </div>

            <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-lg">
              <p>
                Oshrat Rothschild is the owner, creative director, and lead
                designer of Sarvian Design Group. The Fort Lauderdale based
                interior design and architecture firm was founded in 2014,
                scoping projects throughout South Florida tri-state area.
              </p>
              <p>
                Oshrat is an artisan who believes in the power of transforming
                spaces into timeless, elegant, and sophisticated interiors. The
                scope of her projects varies from single room updates to entire
                home renovations and new construction. During her career, Oshrat
                has cultivated a team of skilled contractors and craftspeople,
                allowing her to offer a full range of design and architecture
                services, to be executed at the highest level.
              </p>
              <p>
                Oshrat’s portfolio includes projects ranging from commercial,
                mixed-use, specializing in high-end residential. Masterfully
                crafting bespoke, sophisticated interiors in a broad range of
                design aesthetics including transitional, traditional, and
                modern. She continually strives to create original interiors
                that reflect the client’s taste, lifestyle, and personality. Her
                work trademarks include a keen eye for color and scale,
                meticulous attention to detail. She creates projects that speaks
                to her clients interests and lifestyle.
              </p>
            </div>

            <div className="pt-8">
              <div className="w-20 h-1 bg-zinc-300" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
