const benefits = [
  {
    title: "Human review stays in place",
    description: "Nothing gets sent or recorded without staff being able to check it first.",
  },
  {
    title: "Tools fit existing workflows",
    description: "I work with what you already use: email, sheets, forms, and simple dashboards.",
  },
  {
    title: "Clear outputs staff can use",
    description: "Draft replies, structured records, and checklists. Not abstract AI outputs.",
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight mb-4">
            Built for real businesses, not AI hype
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Every decision is made with your team&apos;s actual workday in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-7">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border-l border-brand-border pl-5">
              <h3 className="font-semibold text-brand-text mb-1.5 text-sm">
                {benefit.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
