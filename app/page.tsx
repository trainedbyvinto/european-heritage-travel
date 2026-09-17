import Image from "next/image";

const categories = [
  { name: "Hotels", img: "/images/category-hotels.jpg" },
  { name: "Events", img: "/images/category-events.jpg" },
  { name: "Journeys", img: "/images/category-journeys.jpg" },
  {
    name: "Destinations",
    subtitle: "Swiss Alps",
    img: "/images/category-destinations.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-cream">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 py-5 bg-white">
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          className="text-charcoal"
        >
          <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <p className="font-serif text-lg tracking-[0.2em] text-charcoal">
          EUROPEAN HERITAGE TRAVEL
        </p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-charcoal"
        >
          <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="14.5" y1="14.5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </header>

      {/* Hero */}
      <section className="relative h-[600px] md:h-[720px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Suvretta House, St. Moritz"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/10 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-xl text-white">
          <h1 className="font-serif text-6xl md:text-7xl leading-[1.05] mb-6">
            European
            <br />
            Heritage
            <br />
            Travel
          </h1>
          <p className="text-xs md:text-sm tracking-[0.2em] mb-8 max-w-sm">
            LUXURY HERITAGE HOTELS, ICONIC JOURNEYS &amp; EVENTS
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-white/80 text-white w-fit px-6 py-3 text-xs tracking-[0.2em] hover:bg-white hover:text-charcoal transition-colors"
          >
            EXPLORE THE JOURNEY →
          </a>
        </div>
        <div className="absolute bottom-6 right-6 md:right-10 text-right text-white">
          <p className="text-xs tracking-[0.15em]">SUVRETTA HOUSE</p>
          <p className="text-xs tracking-[0.15em]">ST. MORITZ</p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 py-16 text-center max-w-2xl mx-auto">
        <p className="font-serif text-2xl md:text-3xl leading-snug text-charcoal mb-6">
          Curated stories from Europe&apos;s most iconic heritage hotels,
          luxury destinations and timeless events.
        </p>
        <p className="text-xs tracking-[0.25em] text-charcoal/70">
          PLACES. PEOPLE. HERITAGE.
        </p>
      </section>

      {/* Category grid */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((c) => (
            <div key={c.name} className="text-center">
              <div className="relative aspect-square mb-4 overflow-hidden bg-pine">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <p className="text-xs tracking-[0.2em] text-charcoal">
                {c.name.toUpperCase()}
              </p>
              <div className="w-6 h-px bg-gold mx-auto mt-2" />
              {c.subtitle && (
                <p className="italic text-sm text-charcoal/70 mt-1">
                  {c.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Latest Story */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-pine">
            <Image
              src="/images/latest-story.jpg"
              alt="Suvretta House balcony view"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs tracking-[0.2em] text-gold">
                LATEST STORY
              </p>
              <a href="#" className="text-charcoal">
                →
              </a>
            </div>
            <h2 className="font-serif text-4xl text-charcoal mb-2">
              Suvretta House
            </h2>
            <p className="text-xs tracking-[0.15em] text-charcoal/70 mb-5">
              A TIMELESS ALPINE RETREAT
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Where Alpine grandeur, discreet luxury and a rich history come
              together in one of Switzerland&apos;s most iconic hotels.
            </p>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="bg-white px-6 md:px-10 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center">
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto bg-pine">
            <Image
              src="/images/about.jpg"
              alt="Helen Arnold"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-gold mb-4">
              ABOUT ME
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Helen Arnold, founder and editor-in-chief of European Heritage
              Travel, is a lecturer at Business &amp; Hotel Management School
              and accredited media for Snow Polo St. Moritz, the Monaco Yacht
              Show, and the Hublot Gold Cup Polo Gstaad. She was also featured
              in Marie Claire Suisse as one of the most inspiring luxury
              travel accounts.
            </p>
            <p className="font-script text-4xl text-charcoal">Helen Arnold</p>
          </div>
        </div>
      </section>

      {/* Contact row */}
      <section className="px-6 md:px-10 py-16">
        <p className="text-xs tracking-[0.2em] text-gold text-center mb-10">
          CONTACT
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-2">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" className="text-charcoal">
              <rect x="1" y="1" width="20" height="16" stroke="currentColor" strokeWidth="1.3" />
              <path d="M1 2L11 10L21 2" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <p className="text-charcoal">Collaborations &amp; Press</p>
            <p className="text-charcoal/60 text-sm">
              media@europeanheritagetravel.com
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-charcoal">
              <rect x="1" y="1" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="10" cy="10" r="4.2" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="15" cy="5" r="1" fill="currentColor" />
            </svg>
            <p className="text-charcoal">Instagram</p>
            <p className="text-charcoal/60 text-sm">@helensuisse</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" className="text-charcoal">
              <path
                d="M8 21C8 21 15 13.5 15 8C15 3.8 11.9 1 8 1C4.1 1 1 3.8 1 8C1 13.5 8 21 8 21Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <p className="text-charcoal">Based in</p>
            <p className="text-charcoal/60 text-sm">Switzerland</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-charcoal/10 px-6 md:px-10 py-12 text-center">
        <p className="font-serif text-lg tracking-[0.15em] text-charcoal mb-1">
          EUROPEAN HERITAGE TRAVEL
        </p>
        <p className="text-[10px] tracking-[0.25em] text-charcoal/60 mb-6">
          PLACES. PEOPLE. HERITAGE.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-charcoal">
            <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="9" cy="9" r="3.6" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="text-charcoal">
            <rect x="1" y="1" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8 4.5L13 7L8 9.5V4.5Z" fill="currentColor" />
          </svg>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="text-charcoal">
            <circle cx="8" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
            <line x1="8" y1="6" x2="6" y2="17" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-charcoal">
            <rect x="1" y="6" width="4" height="11" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="3" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M8 17V6H12V7.5C12.8 6.5 14 6 15.2 6C16.5 6 17 7 17 9V17H13V9.5C13 8.7 12.7 8.2 12 8.2C11.3 8.2 11 8.7 11 9.5V17H8Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>
        <p className="text-sm text-charcoal/70 mb-4">
          <a href="#">About</a> | <a href="#">Contact</a> | <a href="#">Instagram</a>
        </p>
        <p className="text-xs text-charcoal/50">
          © 2026 European Heritage Travel. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
