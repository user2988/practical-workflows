const MAILTO = "mailto:evanramasra@gmail.com?subject=Free%2015-Minute%20Workflow%20Review";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight mb-5 leading-snug">
            Want to find out where AI could save your business time?
          </h2>
          <p className="text-white/60 leading-relaxed mb-3 text-sm">
            If your business deals with repetitive emails, customer inquiries,
            follow-ups, or admin handoffs, I can help identify one workflow worth
            automating.
          </p>
          <p className="text-white/40 text-sm mb-10">
            Start with one workflow. No big system required.
          </p>
          <a
            href={MAILTO}
            className="inline-block bg-white text-brand-dark font-semibold px-6 py-3.5 rounded-md text-sm hover:bg-brand-bg transition-colors mb-10"
          >
            Book a Free 15-Minute Workflow Review
          </a>
          <div className="border-t border-white/10 pt-8 text-sm space-y-1.5 text-white/50">
            <p className="font-medium text-white/80">Evan Ramasra</p>
            <p>
              <a
                href="mailto:evanramasra@gmail.com"
                className="hover:text-white transition-colors"
              >
                evanramasra@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
