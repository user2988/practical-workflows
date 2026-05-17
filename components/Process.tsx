const steps = [
  {
    number: 1,
    title: "Understand the workflow",
    description:
      "We look at where time is being lost and what staff are already doing manually.",
  },
  {
    number: 2,
    title: "Pick one small win",
    description:
      "We choose one repetitive workflow that's useful, low-risk, and easy to test.",
  },
  {
    number: 3,
    title: "Build a prototype",
    description:
      "I build a simple workflow using practical tools — not unnecessary complexity.",
  },
  {
    number: 4,
    title: "Test and measure",
    description:
      "We test with real examples, measure time saved, and improve based on feedback.",
  },
  {
    number: 5,
    title: "Expand only if it works",
    description:
      "If the first workflow creates value, we can build the next one.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How the process works
          </h2>
          <p className="text-lg text-slate-500">
            No long discovery phases. No enterprise rollouts.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-5 top-6 bottom-6 w-px bg-slate-200"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Number badge */}
                  <div
                    className="w-10 h-10 rounded-full bg-green-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 z-10"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="pt-1.5 pb-2">
                    <h3 className="font-bold text-slate-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
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
