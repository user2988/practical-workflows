const problems = [
  {
    icon: "📨",
    title: "Rewriting the same replies",
    description:
      "Answering the same customer questions over and over, from scratch, every time.",
  },
  {
    icon: "📋",
    title: "Sorting quote requests manually",
    description:
      "Reading every inquiry to figure out what the customer wants and what info is missing.",
  },
  {
    icon: "📊",
    title: "Copying emails into spreadsheets",
    description:
      "Moving data from emails or forms into CRMs, sheets, or trackers by hand.",
  },
  {
    icon: "🔍",
    title: "Chasing missing details",
    description:
      "Following up with customers to get the information needed to move forward.",
  },
  {
    icon: "⏱",
    title: "Slow follow-up losing leads",
    description:
      "Quotes and inquiries sitting unanswered because there's no system to catch them.",
  },
  {
    icon: "📝",
    title: "Turning notes into action items",
    description:
      "Summarizing job notes, call notes, or messages into clear next steps.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Where small businesses lose time
          </h2>
          <p className="text-lg text-slate-500">
            These are the tasks that eat hours every week.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-3 block" aria-hidden="true">
                {problem.icon}
              </span>
              <h3 className="font-bold text-slate-800 mb-2">{problem.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
