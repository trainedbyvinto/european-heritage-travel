const itineraries = [
  {
    name: "Gstaad Alpine Escape",
    duration: "5 Days",
    blurb:
      "Ski slopes, mountain chalets, and quiet luxury in the Bernese Oberland.",
  },
  {
    name: "Lake Lucerne Long Weekend",
    duration: "3 Days",
    blurb:
      "Lakeside towns, historic architecture, and a slower pace of travel.",
  },
  {
    name: "Bürgenstock Retreat",
    duration: "4 Days",
    blurb:
      "A cliffside resort stay above Lake Lucerne, built around rest and views.",
  },
];

export default function Itineraries() {
  return (
    <main className="bg-cream min-h-screen px-10 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-gold mb-4 text-center">
          SAMPLE JOURNEYS
        </p>
        <h1 className="font-serif text-5xl text-charcoal mb-4 text-center">
          Itineraries
        </h1>
        <p className="text-lg text-charcoal/70 text-center max-w-xl mx-auto mb-16">
          Starting points for your own journey — every itinerary is
          tailored once we talk.
        </p>

        <div className="space-y-10">
          {itineraries.map((it) => (
            <div
              key={it.name}
              className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-charcoal/15 pb-8"
            >
              <div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">
                  {it.name}
                </h3>
                <p className="text-charcoal/70 leading-relaxed max-w-xl">
                  {it.blurb}
                </p>
              </div>
              <p className="text-xs tracking-[0.15em] text-gold mt-4 md:mt-0 md:ml-8 whitespace-nowrap">
                {it.duration.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
