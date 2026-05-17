const links = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm text-center md:text-left">
          © 2025 Practical AI Workflows. Built by Evan Ramasra.
        </p>
        <nav className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
