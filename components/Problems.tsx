const problems = [
  {
    title: "Rewriting the same replies",
    description: "Answering the same customer questions over and over, from scratch, every time.",
  },
  {
    title: "Sorting quote requests manually",
    description: "Reading every inquiry to figure out what the customer wants and what info is missing.",
  },
  {
    title: "Copying emails into spreadsheets",
    description: "Moving data from emails or forms into CRMs, sheets, or trackers by hand.",
  },
  {
    title: "Chasing missing details",
    description: "Following up with customers to get the information needed to move forward.",
  },
  {
    title: "Slow follow-up losing leads",
    description: "Quotes and inquiries sitting unanswered because there's no system to catch them.",
  },
  {
    title: "Turning notes into action items",
    description: "Summarizing job notes, call notes, or messages into clear next steps.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight mb-4">
            Where small businesses lose time
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            These are the tasks that eat hours every week.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8">
          {problems.map((problem) => (
            <div key={problem.title} className="border-l border-brand-border pl-5">
              <h3 className="font-semibold text-brand-text mb-1.5 text-sm">
                {problem.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
