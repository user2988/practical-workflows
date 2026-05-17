const benefits = [
  {
    title: "Human review stays in place",
    description:
      "Nothing gets sent or recorded without staff being able to check it first.",
  },
  {
    title: "Tools fit existing workflows",
    description:
      "I work with what you already use — email, sheets, forms, and simple dashboards.",
  },
  {
    title: "Clear outputs staff can use",
    description:
      "Draft replies, structured records, and checklists — not abstract AI outputs.",
  },
  {
    title: "Measurable time saved",
    description:
      "The goal is always a real reduction in manual work, not just a technical demo.",
  },
  {
    title: "Designed for small teams",
    description: "No technical overhead. No IT department required.",
  },
  {
    title: "No AI hype",
    description:
      "I don't promise transformation. I promise one workflow that actually works.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Built for real businesses, not AI hype
          </h2>
          <p className="text-lg text-slate-500">
            Every decision is made with your team's actual workday in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-green-50 rounded-xl p-6 flex gap-4 items-start"
            >
              <span
                className="w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
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
