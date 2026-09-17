import Image from "next/image";

export default function About() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-6xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full aspect-[3/4] max-w-md mx-auto md:mx-0">
          <Image
            src="/images/about.jpg"
            alt="Helen Arnold, founder of European Heritage Travel"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] text-gold mb-4">ABOUT US</p>
          <h1 className="font-serif text-5xl text-charcoal mb-8">
            Meet Helen
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
            Helen Arnold&apos;s eye for quiet European luxury started in the
            classroom. While lecturing in hospitality management, she began
            sharing local gems and hidden recommendations with her students
            — a habit that grew into{" "}
            <span className="italic">helensuisse</span>, an Instagram account
            now followed by over 100,000 people for its take on Alpine
            lifestyle, grand hotels, and quiet elegance across Switzerland
            and beyond.
          </p>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
            From the slopes of Gstaad to the shores of Lake Lucerne and the
            storied halls of Bürgenstock Resort, her work is built around
            slow travel, authenticity, and a genuine feel for place — not a
            checklist of sights. Fluent in multiple languages and based in
            Switzerland, Helen brings that same sensibility to every
            itinerary she curates.
          </p>
        </div>
      </section>
    </main>
  );
}
