export default function Contact() {
  return (
    <main className="bg-cream min-h-screen px-10 py-20">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-gold mb-4">GET IN TOUCH</p>
        <h1 className="font-serif text-5xl text-charcoal mb-8">
          Plan Your Journey
        </h1>
        <p className="text-lg text-charcoal/70 leading-relaxed mb-10">
          Tell us a little about the journey you have in mind, and we&apos;ll
          be in touch to start planning.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-xs tracking-[0.15em] text-charcoal mb-2">
              NAME
            </label>
            <input
              type="text"
              className="w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.15em] text-charcoal mb-2">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.15em] text-charcoal mb-2">
              MESSAGE
            </label>
            <textarea
              rows={5}
              className="w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal focus:outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            className="bg-gold text-cream px-8 py-4 text-sm tracking-[0.15em] hover:bg-gold/90 transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </main>
  );
}
