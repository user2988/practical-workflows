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
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 tracking-tight">
            Practical automations I can build
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto leading-relaxed">
            Each service targets a specific type of repetitive work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl border border-brand-border p-8 flex flex-col border-t-[3px] border-t-brand-blue hover:shadow-sm transition-shadow"
            >
              <span className="text-3xl mb-5 block" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="font-bold text-lg text-brand-text mb-3 tracking-tight">
                {service.name}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2.5 border-t border-brand-border pt-5">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-brand-text">
                    <svg className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
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
