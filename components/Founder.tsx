export default function Founder() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-brand-border rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div
                className="w-11 h-11 rounded-full bg-brand-soft border border-brand-border flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <span className="text-brand-blue font-bold text-sm">ER</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-1">
                  About
                </p>
                <h2 className="text-xl font-bold text-brand-text mb-4 tracking-tight">
                  Built by Evan Ramasra
                </h2>
                <p className="text-brand-muted leading-relaxed text-sm">
                  I&apos;m a Commerce student and AI automation builder focused on practical workflows
                  for small and service-based businesses. I build tools that help owners save time
                  on repetitive admin without adding unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
