const destinations = [
  {
    name: "Gstaad",
    tagline: "Bernese Oberland",
    blurb:
      "Alpine elegance in the heart of the Bernese Oberland — ski slopes by day, quiet luxury by night.",
  },
  {
    name: "Lake Lucerne",
    tagline: "Central Switzerland",
    blurb:
      "Crystal waters framed by mountains, steeped in Swiss history and grand hotel tradition.",
  },
  {
    name: "Bürgenstock Resort",
    tagline: "Above Lake Lucerne",
    blurb:
      "A storied cliffside resort blending Swiss heritage with modern luxury and sweeping views.",
  },
];

export default function Destinations() {
  return (
    <main className="bg-cream min-h-screen px-10 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-gold mb-4 text-center">
          WHERE WE GO
        </p>
        <h1 className="font-serif text-5xl text-charcoal mb-4 text-center">
          Destinations
        </h1>
        <p className="text-lg text-charcoal/70 text-center max-w-xl mx-auto mb-16">
          A growing collection of places we return to, again and again.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {destinations.map((d) => (
            <div key={d.name} className="group">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-pine via-pine/80 to-charcoal flex items-center justify-center mb-5 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,144,92,0.25),transparent_60%)]" />
                <p className="font-serif text-2xl text-cream/90 tracking-wide text-center px-6">
                  {d.name}
                </p>
              </div>
              <p className="text-xs tracking-[0.15em] text-gold mb-2">
                {d.tagline.toUpperCase()}
              </p>
              <p className="text-charcoal/70 leading-relaxed">{d.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
