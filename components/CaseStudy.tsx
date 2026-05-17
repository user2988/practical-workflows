const pipelineSteps = [
  { label: "Customer Email", color: "border-blue-400 bg-blue-50 text-blue-700" },
  { label: "Zapier Trigger", color: "border-yellow-400 bg-yellow-50 text-yellow-700" },
  { label: "AI Backend", color: "border-green-400 bg-green-50 text-green-700" },
  { label: "Dashboard Record", color: "border-purple-400 bg-purple-50 text-purple-700" },
  { label: "Gmail Draft", color: "border-orange-400 bg-orange-50 text-orange-700" },
];

const results = [
  "Faster response prep",
  "More consistent replies",
  "Cleaner lead tracking",
  "Human approval before anything is sent",
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
            Case Study
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            AI intake system for a landscaping business
          </h2>
          <p className="text-slate-500 leading-relaxed mb-10">
            A customer sends a quote email. Automation picks it up, sends it to
            an AI backend, structures the inquiry into a dashboard record, and
            creates a Gmail draft for the owner to review — before anything is
            sent.
          </p>

          {/* Pipeline visualization */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
              {pipelineSteps.map((step, index) => (
                <div key={step.label} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                  <div
                    className={`border-2 rounded-lg px-4 py-3 text-sm font-semibold text-center w-full md:w-36 ${step.color}`}
                  >
                    {step.label}
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <>
                      {/* Vertical arrow on mobile */}
                      <span
                        className="block md:hidden text-slate-400 text-xl py-1"
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                      {/* Horizontal arrow on desktop */}
                      <span
                        className="hidden md:block text-slate-400 text-xl px-1 flex-shrink-0"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h3 className="font-bold text-slate-800 mb-4">Results</h3>
            <ul className="space-y-2">
              {results.map((result) => (
                <li key={result} className="flex items-center gap-3 text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <a
              href="https://denco-ai-intake-assistant.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Live Demo
            </a>
            <p className="mt-4 text-sm text-slate-400 italic">
              This is a real working prototype built with Zapier, OpenAI, Google
              Sheets, and Gmail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
