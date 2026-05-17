const links = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-7 bg-[#0C1118] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white/30 text-xs">
          © 2025 Practical AI Workflows
        </p>
        <nav className="flex gap-6" aria-label="Footer navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/30 text-xs hover:text-white/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
