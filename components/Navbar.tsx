"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const MAILTO = "mailto:evanramasra@gmail.com?subject=Free%2015-Minute%20Workflow%20Review";

function WorkflowMark() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <circle cx="2.5" cy="7" r="2.5" fill="currentColor" />
      <circle cx="10" cy="2.5" r="2.5" fill="currentColor" />
      <circle cx="17.5" cy="7" r="2.5" fill="currentColor" />
      <path d="M5 7H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.5 5.8L7.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 3.5L15.5 5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-border"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="flex items-center gap-2 text-brand-blue font-bold text-sm tracking-tight"
          >
            <WorkflowMark />
            <span>Practical AI Workflows</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-muted hover:text-brand-text text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={MAILTO}
              className="bg-brand-blue hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Free 15-Min Review
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-brand-muted hover:text-brand-text hover:bg-brand-soft transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-brand-border px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-muted hover:text-brand-text text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-brand-soft transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={MAILTO}
            className="mt-2 bg-brand-blue hover:bg-brand-dark text-white text-sm font-semibold px-4 py-3 rounded-lg text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Free 15-Min Review
          </a>
        </div>
      )}
    </nav>
  );
}
