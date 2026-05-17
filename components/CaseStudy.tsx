const pipelineSteps = [
  "Customer email arrives",
  "Zapier automation triggers",
  "Claude + Vercel backend processes the inquiry",
  "Neon dashboard record created",
  "Gmail draft prepared for owner review",
];

const results = [
  "Faster quote-response prep",
  "Cleaner lead tracking",
  "More consistent replies",
  "Human approval before anything is sent",
];

const tools = ["Zapier", "Claude", "Vercel", "Neon", "Gmail"];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 bg-brand-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-5">
            Case Study
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight max-w-2xl leading-snug">
            Example project: AI intake system for a landscaping business
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 lg:gap-24">

          {/* Left: narrative + pipeline */}
          <div>
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-3">
                The problem
              </p>
              <p className="text-brand-muted leading-relaxed text-sm max-w-xl">
                A landscaping business was spending too much time manually reading customer
                quote requests, writing replies from scratch, and trying to track open leads
                across spreadsheets and inboxes.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-6">
                Workflow built
              </p>
              <div>
                {pipelineSteps.map((step, index) => (
                  <div key={step} className="flex gap-5">
                    <div className="flex flex-col items-center w-6 flex-shrink-0">
                      <span className="text-[10px] font-mono text-brand-muted/50 leading-none pt-[3px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < pipelineSteps.length - 1 && (
                        <div className="w-px flex-1 bg-brand-border mt-2 min-h-[28px]" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-5">
                      <p className="text-sm text-brand-text leading-snug">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: results + tools + CTA */}
          <div className="md:border-l md:border-brand-border md:pl-10 lg:pl-14">
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-5">
                Results
              </p>
              <ul className="space-y-3.5">
                {results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-sm text-brand-text">
                    <svg
                      className="w-3.5 h-3.5 text-brand-green mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 pb-8 border-b border-brand-border">
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-3">
                Built with
              </p>
              <p className="text-sm text-brand-text">
                {tools.join(" · ")}
              </p>
            </div>

            <a
              href="https://denco-ai-intake-assistant.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#1D4ED8] text-white font-medium px-5 py-3 rounded-md text-sm transition-colors"
            >
              View Live Demo
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="mt-3 text-xs text-brand-muted">
              A real working prototype, not a mock-up.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
