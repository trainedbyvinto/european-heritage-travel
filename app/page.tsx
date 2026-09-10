import Image from "next/image";

const nav = ["Destinations", "Experiences", "Itineraries", "About", "Contact"];

const pillars = [
  { title: "Iconic Destinations", blurb: "From royal cities to hidden gems" },
  { title: "Bespoke Itineraries", blurb: "Tailored to your interests" },
  { title: "Authentic Experiences", blurb: "Culture, cuisine and connection" },
  { title: "Expert Guidance", blurb: "Trusted by discerning travelers" },
];

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between px-10 py-6 bg-cream">
        <div>
          <p className="font-serif text-xl tracking-wide text-charcoal">
            European Heritage Travel
          </p>
          <p className="text-[10px] tracking-[0.25em] text-charcoal/60">
            JOURNEYS WITH HISTORY
          </p>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] text-charcoal">
          {nav.map((item) => (
            <a key={item} href="#" className="hover:text-gold transition-colors">
              {item.toUpperCase()}
            </a>
          ))}
        </nav>
        <a
          href="#plan"
          className="border border-gold text-gold text-xs tracking-[0.15em] px-5 py-3 hover:bg-gold hover:text-cream transition-colors"
        >
          PLAN YOUR JOURNEY
        </a>
      </header>

      <section className="relative h-[90vh] min-h-[600px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Guest at a historic Swiss grand hotel"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl text-white">
          <p className="text-xs tracking-[0.3em] mb-4">
            TIMELESS PLACES. MEANINGFUL JOURNEYS.
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            Discover Europe&apos;s Living Heritage
          </h1>
          <p className="text-lg text-white/85 mb-8 max-w-md">
            Curated travel experiences to the most extraordinary historic
            destinations in Europe.
          </p>
          <a
            href="#journeys"
            className="inline-flex items-center gap-3 bg-gold text-cream w-fit px-8 py-4 text-sm tracking-[0.15em] hover:bg-gold/90 transition-colors"
          >
            EXPLORE JOURNEYS →
          </a>
        </div>
      </section>

      <section className="bg-cream px-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <h3 className="font-serif text-sm tracking-wide mb-2 text-charcoal">
                {p.title}
              </h3>
              <p className="text-sm text-charcoal/60">{p.blurb}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
