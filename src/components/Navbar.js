"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Bio", id: "bio" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Work", id: "experience" },
    { name: "Certificates", id: "certificates" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm py-4">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveSection("home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8">
              <Image
                src="/images.png"
                alt="Logo"
                fill
                className="dark:invert object-contain transition-transform group-hover:scale-110"
              />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "text-blue-600 dark:text-blue-400 scale-105 cursor-pointer "
                    : "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-600 dark:text-zinc-400 p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsOpen(false);
                }}
                className={`cursor-pointer block w-full text-left px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
