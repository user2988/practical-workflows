const MAILTO = "mailto:evanramasra@gmail.com?subject=Free%2015-Minute%20Workflow%20Review";

const workflowSteps = [
  { num: "01", label: "Customer Email", desc: "Quote request received" },
  { num: "02", label: "AI Processing", desc: "Parsed and structured" },
  { num: "03", label: "Dashboard Record", desc: "Lead record created" },
  { num: "04", label: "Draft Reply", desc: "Ready for your review" },
];

export default function Hero() {
  return (
    <section id="hero" className="bg-brand-bg pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-muted mb-8 font-medium">
              AI Automation · Small Businesses
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] text-brand-text leading-[1.2] tracking-tight mb-7">
              AI automation for small businesses tired of repetitive admin work.
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed max-w-lg mb-10">
              I build simple AI workflows that help businesses organize customer
              inquiries, draft replies, track leads, and save time, without
              replacing human judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAILTO}
                className="bg-brand-blue hover:bg-[#1D4ED8] text-white font-medium px-6 py-3.5 rounded-md text-center transition-colors text-sm"
              >
                Book a Free 15-Minute Workflow Review
              </a>
              <a
                href="#case-study"
                className="text-brand-green bg-[#DFF3E8] border border-[#b6dfc9] hover:bg-[#cdeedd] font-medium px-6 py-3.5 rounded-md text-center transition-colors text-sm"
              >
                View Example Project
              </a>
            </div>
          </div>

          {/* Right: workflow visual — visible on all sizes */}
          <div className="bg-white border border-brand-border rounded-xl p-7 shadow-sm">
            <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-7 font-semibold">
              Example workflow
            </p>
            <div>
              {workflowSteps.map((step, index) => (
                <div key={step.num} className="flex gap-4">
                  <div className="flex flex-col items-center w-8 flex-shrink-0">
                    <span className="text-xs font-mono font-semibold text-brand-blue leading-none pt-[3px]">
                      {step.num}
                    </span>
                    {index < workflowSteps.length - 1 && (
                      <div className="w-px flex-1 bg-brand-border mt-2 min-h-[34px]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="text-sm font-semibold text-brand-text leading-tight">
                      {step.label}
                    </p>
                    <p className="text-xs text-brand-muted mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-5 border-t border-brand-border">
              <p className="text-xs text-brand-muted flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Human reviews before anything is sent
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
