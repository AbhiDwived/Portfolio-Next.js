"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between transition-all duration-400 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-white/[0.08]" : ""
          }`}
      >
        <a href="#hero" className="font-mono text-lg font-bold text-primary">
          Ho<span className="text-secondary">me</span>
        </a>
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-text2 uppercase tracking-wider hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="mailto:abhidwivedi687@gmail.com"
            className="hidden sm:inline-flex text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsla(239,84%,67%,0.25)]"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-lg glass flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-fade-up">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:abhidwivedi687@gmail.com"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
