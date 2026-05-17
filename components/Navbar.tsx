"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function WorkflowMark() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <circle cx="3" cy="8" r="2.5" fill="currentColor" />
      <circle cx="11" cy="3" r="2.5" fill="currentColor" />
      <circle cx="19" cy="8" r="2.5" fill="currentColor" />
      <path d="M5.5 8H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.5 8H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 6.8L8.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.5 4L17 6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
            className="flex items-center gap-2 text-brand-green font-bold text-base tracking-tight"
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
              href="mailto:evanramasra@gmail.com?subject=Free%20Workflow%20Review"
              className="bg-brand-green hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Free Workflow Review
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
            href="mailto:evanramasra@gmail.com?subject=Free%20Workflow%20Review"
            className="mt-2 bg-brand-green hover:bg-brand-dark text-white text-sm font-semibold px-4 py-3 rounded-lg text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Free Workflow Review
          </a>
        </div>
      )}
    </nav>
  );
}
