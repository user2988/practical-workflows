export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight leading-snug">
          Want to find out where AI could save your business time?
        </h2>
        <p className="text-lg text-white/70 mb-4 leading-relaxed">
          If your business deals with repetitive emails, customer inquiries,
          follow-ups, or admin handoffs — I can help identify one workflow worth
          automating.
        </p>
        <p className="text-sm text-white/50 mb-10">
          Start with one workflow. No big system required.
        </p>
        <a
          href="mailto:evanramasra@gmail.com?subject=Free%20Workflow%20Review"
          className="inline-block bg-white text-brand-dark font-semibold px-8 py-4 rounded-xl text-base hover:bg-brand-soft transition-colors"
        >
          Book a Free Workflow Review
        </a>
        <div className="mt-10 text-white/60 text-sm space-y-1.5">
          <p className="font-semibold text-white/90">Evan Ramasra</p>
          <p>
            <a
              href="mailto:evanramasra@gmail.com"
              className="hover:text-white transition-colors"
            >
              evanramasra@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:4373460706"
              className="hover:text-white transition-colors"
            >
              437-346-0706
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
