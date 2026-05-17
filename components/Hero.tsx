const workflowSteps = [
  {
    dot: "bg-blue-500",
    label: "Customer Email",
    description: "Quote request received",
  },
  {
    dot: "bg-green-500",
    label: "AI Workflow",
    description: "Parsed & structured",
  },
  {
    dot: "bg-purple-500",
    label: "Dashboard",
    description: "Lead record created",
  },
  {
    dot: "bg-orange-500",
    label: "Draft Reply",
    description: "Gmail draft ready for review",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-slate-50 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-6">
              AI Automation for Small Businesses
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              AI automation for small businesses tired of repetitive admin work.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I build simple AI workflows that help businesses organize customer
              inquiries, draft replies, track leads, and save time — without
              replacing human judgment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:evanramasra@gmail.com?subject=Free Workflow Review"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors"
              >
                Book a Free Workflow Review
              </a>
              <a
                href="#case-study"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg text-center transition-colors"
              >
                See Example Project
              </a>
            </div>
          </div>

          {/* Right: Workflow Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold mb-5">
              Example workflow
            </p>
            <div className="flex flex-col gap-0">
              {workflowSteps.map((step, index) => (
                <div key={step.label}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${step.dot}`}
                        aria-hidden="true"
                      />
                      {index < workflowSteps.length - 1 && (
                        <span className="w-px h-8 bg-slate-200 mt-1" aria-hidden="true" />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-semibold text-slate-800">
                        {step.label}
                      </p>
                      <p className="text-sm text-slate-500">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400 border-t border-slate-100 pt-4">
              Human reviews before anything is sent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
