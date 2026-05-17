const workflowSteps = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600 border-blue-100",
    label: "Customer Email",
    description: "Quote request received",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-brand-soft text-brand-green border-brand-border",
    label: "AI Workflow",
    description: "Parsed & structured",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    color: "bg-violet-50 text-violet-600 border-violet-100",
    label: "Dashboard",
    description: "Lead record created",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    color: "bg-orange-50 text-orange-600 border-orange-100",
    label: "Draft Reply",
    description: "Ready for your review",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="bg-brand-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <div>
            <span className="inline-flex items-center gap-1.5 bg-brand-soft text-brand-green text-xs font-semibold px-3 py-1.5 rounded-full mb-7 border border-brand-border">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block" aria-hidden="true" />
              AI Automation for Small Businesses
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text leading-[1.15] tracking-tight mb-6">
              AI automation for small businesses tired of repetitive admin work.
            </h1>
            <p className="text-lg text-brand-muted mb-9 leading-relaxed">
              I build simple AI workflows that help businesses organize customer
              inquiries, draft replies, track leads, and save time — without
              replacing human judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:evanramasra@gmail.com?subject=Free%20Workflow%20Review"
                className="bg-brand-green hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-lg text-center transition-colors text-sm"
              >
                Book a Free Workflow Review
              </a>
              <a
                href="#case-study"
                className="border border-brand-border text-brand-text hover:bg-brand-soft font-semibold px-6 py-3.5 rounded-lg text-center transition-colors text-sm"
              >
                View Example Project
              </a>
            </div>
          </div>

          {/* Right: Workflow Card */}
          <div className="bg-white rounded-2xl border border-brand-border p-7 shadow-sm">
            <p className="text-xs text-brand-muted font-semibold uppercase tracking-widest mb-6">
              Example workflow
            </p>
            <div className="flex flex-col gap-0">
              {workflowSteps.map((step, index) => (
                <div key={step.label}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${step.color}`}>
                        {step.icon}
                      </div>
                      {index < workflowSteps.length - 1 && (
                        <div className="w-px h-7 bg-brand-border mt-1" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pt-1 pb-1">
                      <p className="text-sm font-semibold text-brand-text">{step.label}</p>
                      <p className="text-sm text-brand-muted">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-brand-border flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-xs text-brand-muted">Human reviews before anything is sent</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
