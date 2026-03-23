"use client";
const Footer = () => (
  <footer className="border-t border-white/[0.08] py-12 px-6 lg:px-12 bg-card/50 relative z-10">
    <div className="max-w-[1280px] mx-auto flex justify-between items-center flex-wrap gap-8">
      <span className="font-mono text-base font-bold text-gradient-cyan"></span>
      <div className="flex gap-6">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-text3 hover:text-primary transition-colors">
            {l}
          </a>
        ))}
      </div>
    </div>
    <div className="max-w-[1280px] mx-auto mt-3 text-center font-mono text-xs text-text3">
      © 2025 Abhinandan Dhar Dwivedi · Full Stack Developer & Team Lead
    </div>
  </footer>
);

export default Footer;
