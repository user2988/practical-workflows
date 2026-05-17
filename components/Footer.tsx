const links = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0F1E38] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs text-center md:text-left">
          © 2025 Practical AI Workflows · Built by Evan Ramasra
        </p>
        <nav className="flex gap-6" aria-label="Footer navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
