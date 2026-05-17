const MAILTO = "mailto:evanramasra@gmail.com?subject=Free%2015-Minute%20Workflow%20Review";

const highlights = [
  "Commerce student with a focus on practical business automation",
  "Builds end-to-end AI workflows using tools like Zapier, Claude, and Vercel",
  "Focused on small and service-based businesses, not enterprise software",
  "Works hands-on — not a reseller or AI platform middleman",
];

export default function Founder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-brand-border pt-14">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 lg:gap-24">

            {/* Left */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-5">
                About
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight mb-6">
                Built by Evan Ramasra
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                I&apos;m a Commerce student and AI automation builder focused on practical
                workflows for small and service-based businesses. I build tools that help
                owners save time on repetitive admin without adding unnecessary complexity.
              </p>
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-[#1D4ED8] transition-colors"
              >
                Get in touch
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right */}
            <div className="border-l border-brand-border pl-10 lg:pl-16">
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-6">
                What I bring
              </p>
              <ul className="space-y-5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-3.5 h-3.5 text-brand-blue mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-brand-text leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
