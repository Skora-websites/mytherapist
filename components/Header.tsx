"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [{ label: "Leadership", href: "/about#leadership" }],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Speech Therapy", href: "/services/speech-therapy" },
      { label: "Language Therapy", href: "/services/language-therapy" },
      { label: "Special Education", href: "/services/special-education" },
      { label: "ABA Therapy", href: "/services/aba-therapy" },
      { label: "Occupational Therapy", href: "/services/occupational-therapy" },
      { label: "Sensory Integration", href: "/services/sensory-integration" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.jpeg" alt="My Therapist Development Center" width={180} height={50} priority className="h-10 sm:h-12 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(idx)}
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                <Link href={link.href} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors rounded-lg hover:bg-surface-muted">
                  {link.label}
                  {link.children && (
                    <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && activeDropdown === idx && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface-pinkMuted hover:text-brand-pink transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <Link href="/book" className="inline-flex items-center px-6 py-2.5 bg-brand-pink text-white text-sm font-semibold rounded-xl hover:bg-pink-500 transition-all duration-200 shadow-md hover:shadow-lg">
              Book an Appointment
            </Link>
          </div>
          <button className="lg:hidden p-2 rounded-lg hover:bg-surface-muted transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
            {mobileOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link href={link.href} className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-surface-pinkMuted hover:text-brand-pink rounded-xl transition-colors" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link key={child.label} href={child.href} className="block pl-8 pr-4 py-2 text-sm text-gray-500 hover:text-brand-pink transition-colors" onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3">
              <Link href="/book" className="block w-full text-center px-6 py-3 bg-brand-pink text-white font-semibold rounded-xl hover:bg-pink-500 transition-colors" onClick={() => setMobileOpen(false)}>
                Book an Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
