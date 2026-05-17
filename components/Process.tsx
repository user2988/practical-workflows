const steps = [
  {
    number: 1,
    title: "Understand the workflow",
    description: "We look at where time is being lost and what staff are already doing manually.",
  },
  {
    number: 2,
    title: "Pick one small win",
    description: "We choose one repetitive workflow that's useful, low-risk, and easy to test.",
  },
  {
    number: 3,
    title: "Build a prototype",
    description: "I build a simple workflow using practical tools — not unnecessary complexity.",
  },
  {
    number: 4,
    title: "Test and measure",
    description: "We test with real examples, measure time saved, and improve based on feedback.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 tracking-tight">
            How the process works
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto leading-relaxed">
            Simple discovery. Fast prototype. Clear measurement.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-[18px] top-9 bottom-9 w-px bg-brand-border" aria-hidden="true" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-5">
                  <div
                    className="w-9 h-9 rounded-full bg-brand-blue text-white font-bold text-sm flex items-center justify-center flex-shrink-0 z-10 border-2 border-brand-bg"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                  <div className="bg-white border border-brand-border rounded-xl px-6 py-4 flex-1">
                    <h3 className="font-semibold text-brand-text mb-1 text-sm">
                      {step.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
