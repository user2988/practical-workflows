const services = [
  {
    num: "01",
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
    num: "02",
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
    num: "03",
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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight mb-4">
            Practical automations I can build
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Each service targets a specific type of repetitive work.
          </p>
        </div>
        <div className="divide-y divide-brand-border border-t border-brand-border">
          {services.map((service) => (
            <div
              key={service.name}
              className="py-10 grid grid-cols-1 md:grid-cols-[56px_1fr_1fr] gap-6 md:gap-10"
            >
              <div className="pt-0.5">
                <span className="text-2xl font-semibold text-brand-blue tabular-nums font-mono">
                  {service.num}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-text mb-3 tracking-tight">
                  {service.name}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mb-3">
                  What you get
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-brand-text flex items-start gap-2.5">
                      <span className="text-brand-blue mt-0.5 text-xs flex-shrink-0" aria-hidden="true">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
