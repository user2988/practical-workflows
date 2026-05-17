const MAILTO = "mailto:evanramasra@gmail.com?subject=Free%2015-Minute%20Workflow%20Review";

export default function Founder() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-brand-border pt-14">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left: bio */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-5">
                About
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight mb-6">
                Built by Evan Ramasra
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                I am a Commerce student and AI automation builder focused on practical
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

            {/* Right: photo placeholder */}
            <div className="hidden md:block" />

          </div>
        </div>
      </div>
    </section>
  );
}
