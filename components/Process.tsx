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
    description: "I build a simple workflow using practical tools, not unnecessary complexity.",
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
        <div className="grid md:grid-cols-[300px_1fr] gap-12 md:gap-16 lg:gap-24">

          {/* Left: heading */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight mb-4">
              How the process works
            </h2>
            <p className="text-brand-muted leading-relaxed text-sm">
              Simple discovery. Fast prototype. Clear measurement.
            </p>
          </div>

          {/* Right: steps */}
          <div className="divide-y divide-brand-border border-t border-brand-border md:border-t-0">
            {steps.map((step) => (
              <div key={step.number} className="py-5 grid grid-cols-[36px_1fr] gap-4">
                <span className="text-xs font-mono text-brand-muted/50 pt-0.5 tabular-nums">
                  {String(step.number).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
