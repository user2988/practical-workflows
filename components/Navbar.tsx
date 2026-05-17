"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const MAILTO = "mailto:evanramasra@gmail.com?subject=Free%2015-Minute%20Workflow%20Review";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 py-4">
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-semibold text-brand-text text-sm tracking-tight"
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <rect width="26" height="26" rx="7" fill="#2563EB" />
              <path d="M14.5 5L9 13.5h5.5L11.5 21L18 12.5h-5.5L14.5 5z" fill="white" />
            </svg>
            Practical AI Workflows
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-muted hover:text-brand-text text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={MAILTO}
              className="bg-brand-blue hover:bg-[#1D4ED8] text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              Free 15-Min Review
            </a>
          </div>

          <button
            className="md:hidden p-2 text-brand-muted hover:text-brand-text transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
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
              className="text-brand-muted hover:text-brand-text text-sm py-2.5 px-2 rounded hover:bg-brand-bg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={MAILTO}
            className="mt-2 bg-brand-blue hover:bg-[#1D4ED8] text-white text-sm font-medium px-4 py-3 rounded-md text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Free 15-Min Review
          </a>
        </div>
      )}
    </nav>
  );
}
