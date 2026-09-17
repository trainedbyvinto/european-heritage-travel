const experiences = [
  {
    name: "Slow Travel Retreats",
    blurb:
      "Multi-day stays built around rest, nature, and genuine immersion — not a packed itinerary.",
  },
  {
    name: "Grand Hotel Stays",
    blurb:
      "Curated access to Europe's most storied properties, chosen for character and craftsmanship over checklists.",
  },
  {
    name: "Alpine & Lakeside Escapes",
    blurb:
      "From ski villages to lakeside towns, experiences centered on Switzerland's natural landscape.",
  },
  {
    name: "Cultural Immersion",
    blurb:
      "Local guides, regional cuisine, and access to traditions that don't show up in guidebooks.",
  },
];

export default function Experiences() {
  return (
    <main className="bg-cream min-h-screen px-10 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-gold mb-4 text-center">
          HOW WE TRAVEL
        </p>
        <h1 className="font-serif text-5xl text-charcoal mb-4 text-center">
          Experiences
        </h1>
        <p className="text-lg text-charcoal/70 text-center max-w-xl mx-auto mb-16">
          Quiet elegance over spectacle. Every experience is built around
          slowing down and paying attention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {experiences.map((e) => (
            <div key={e.name} className="border-t border-charcoal/15 pt-6">
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                {e.name}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">{e.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
