const benefits = [
  {
    title: "Human review stays in place",
    description: "Nothing gets sent or recorded without staff being able to check it first.",
  },
  {
    title: "Tools fit existing workflows",
    description: "I work with what you already use — email, sheets, forms, and simple dashboards.",
  },
  {
    title: "Clear outputs staff can use",
    description: "Draft replies, structured records, and checklists — not abstract AI outputs.",
  },
  {
    title: "Measurable time saved",
    description: "The goal is always a real reduction in manual work, not just a technical demo.",
  },
  {
    title: "Designed for small teams",
    description: "No technical overhead. No IT department required.",
  },
  {
    title: "No AI hype",
    description: "I don't promise transformation. I promise one workflow that actually works.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 tracking-tight">
            Built for real businesses, not AI hype
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto leading-relaxed">
            Every decision is made with your team's actual workday in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border border-brand-border rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text mb-1 text-sm">
                  {benefit.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
