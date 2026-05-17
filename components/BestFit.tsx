const fits = [
  "Receive quote requests by email, form, or message",
  "Manually follow up with leads or missed inquiries",
  "Copy customer info into spreadsheets or CRMs by hand",
  "Rewrite similar customer replies from scratch",
  "Lose track of inquiries or next steps",
  "Want simple tools, not a full software overhaul",
];

export default function BestFit() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-brand-text tracking-tight mb-4">
            Best fit for businesses that…
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            If any of these sound familiar, there&apos;s likely a workflow worth automating.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-5">
          {fits.map((fit) => (
            <div key={fit} className="flex items-start gap-3">
              <svg
                className="w-3.5 h-3.5 text-brand-blue mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-brand-text leading-relaxed">{fit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
