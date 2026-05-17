const pipelineSteps = [
  { label: "Customer Email", icon: "✉" },
  { label: "Zapier Trigger", icon: "⚡" },
  { label: "AI Backend", icon: "🤖" },
  { label: "Dashboard Record", icon: "📊" },
  { label: "Gmail Draft", icon: "✏" },
];

const results = [
  "Faster response prep",
  "More consistent replies",
  "Cleaner lead tracking",
  "Human approval before anything is sent",
];

const toolBadges = [
  { label: "Zapier", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { label: "Claude", color: "bg-violet-50 text-violet-700 border-violet-200" },
  { label: "Vercel", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { label: "Neon", color: "bg-teal-50 text-teal-700 border-teal-200" },
  { label: "Gmail", color: "bg-red-50 text-red-700 border-red-200" },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-brand-green uppercase tracking-widest border border-brand-border bg-brand-soft px-3 py-1.5 rounded-full">
            Case Study
          </span>
        </div>

        {/* Card */}
        <div className="bg-brand-bg border border-brand-border rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">

            {/* Left: Description + Results */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-brand-border">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text tracking-tight mb-4 leading-snug">
                AI intake system for a landscaping business
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8 text-sm">
                A customer sends a quote email. Automation picks it up, sends it
                to an AI backend, structures the inquiry into a dashboard record,
                and creates a Gmail draft for the owner to review — before
                anything is sent.
              </p>

              <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-4">
                Results
              </h3>
              <ul className="space-y-3 mb-8">
                {results.map((result) => (
                  <li key={result} className="flex items-center gap-3 text-sm text-brand-text">
                    <span className="w-5 h-5 rounded-full bg-brand-soft border border-brand-border text-brand-green flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {result}
                  </li>
                ))}
              </ul>

              <a
                href="https://denco-ai-intake-assistant.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                View Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Right: Pipeline + Tool badges */}
            <div className="p-8 md:p-10">
              <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-6">
                Workflow pipeline
              </h3>

              {/* Vertical pipeline */}
              <div className="space-y-0 mb-10">
                {pipelineSteps.map((step, index) => (
                  <div key={step.label}>
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-white border border-brand-border flex items-center justify-center text-base flex-shrink-0">
                        {step.icon}
                      </div>
                      <span className="text-sm font-medium text-brand-text">{step.label}</span>
                    </div>
                    {index < pipelineSteps.length - 1 && (
                      <div className="ml-4 h-5 w-px bg-brand-border" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>

              <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-3">
                Built with
              </h3>
              <div className="flex flex-wrap gap-2">
                {toolBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`text-xs font-medium px-2.5 py-1 rounded-md border ${badge.color}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-brand-muted leading-relaxed">
                A real working prototype — not a mock-up.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
