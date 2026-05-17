const services = [
  {
    icon: "📥",
    name: "AI Intake Automation",
    description:
      "Turn customer emails, web forms, or messages into structured lead records, quote-prep checklists, and draft replies.",
    bullets: [
      "Structured lead records from raw emails",
      "Missing-info checklists",
      "Draft reply ready for review",
    ],
  },
  {
    icon: "📤",
    name: "Follow-Up Automation",
    description:
      "Create draft follow-ups for quotes, missed leads, appointments, reviews, and customer updates — ready for staff approval.",
    bullets: [
      "Quote follow-up drafts",
      "Missed lead re-engagement",
      "Appointment reminders",
    ],
  },
  {
    icon: "⚙️",
    name: "Admin Workflow Cleanup",
    description:
      "Map repetitive tasks, remove manual handoffs, and build simple systems using AI, automation tools, and dashboards.",
    bullets: [
      "Workflow mapping + gap analysis",
      "Zapier / Make / Airtable automations",
      "Simple dashboards for lead tracking",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Practical automations I can build
          </h2>
          <p className="text-lg text-slate-500">
            Each service targets a specific type of repetitive work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl shadow-sm p-8 border-t-4 border-green-500 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-4 block" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="font-bold text-xl text-slate-800 mb-3">
                {service.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
