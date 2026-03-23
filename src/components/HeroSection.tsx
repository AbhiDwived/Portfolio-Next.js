"use client";
import { useEffect, useState } from "react";

const typedTexts = ["Full Stack Developer", "Team Lead", "SEO Specialist", "Next.js Expert"];

const HeroSection = () => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typedTexts[typedIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) setCharIndex((c) => c + 1);
          else setTimeout(() => setDeleting(true), 1500);
        } else {
          if (charIndex > 0) setCharIndex((c) => c - 1);
          else {
            setDeleting(false);
            setTypedIndex((i) => (i + 1) % typedTexts.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, typedIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 lg:px-12 pt-28 pb-16 relative z-10">
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative">
        {/* Left */}
        <div>
          <div className="animate-fade-down inline-flex items-center gap-2.5 font-mono text-xs text-text2 glass px-4 py-1.5 rounded-md mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-dot" />
            Available for new opportunities
          </div>

          <h1 className="animate-fade-up-1" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em" }}>
            <span className="block text-foreground">Abhinandan</span>
            <span className="block text-gradient-cyan">Dhar Dwivedi</span>
          </h1>

          <div className="animate-fade-up-2 mt-6 font-mono text-base text-text2">
            {"$ "}
            <span className="text-primary font-bold">{typedTexts[typedIndex].slice(0, charIndex)}</span>
            <span className="inline-block w-0.5 h-[1em] bg-primary ml-0.5 animate-blink align-middle" />
          </div>

          <p className="animate-fade-up-3 text-lg text-text2 leading-relaxed max-w-[520px] mt-6 mb-10" style={{ textWrap: "pretty" }}>
            Full Stack Developer & Team Lead with <strong className="text-foreground">2+ years</strong> shipping production-grade platforms. I build fast, scalable, <strong className="text-foreground">SEO-first</strong> web applications that rank, convert, and scale.
          </p>

          <div className="animate-fade-up-4 flex gap-4 flex-wrap">
            <a href="#projects" className="magnetic-hover inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-cyan text-primary-foreground hover:shadow-[0_8px_32px_hsla(239,84%,67%,0.4)] transition-all duration-300 active:scale-[0.97]">
              🚀 View Projects
            </a>
            <a href="#contact" className="magnetic-hover inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm glass text-foreground hover:border-secondary hover:text-secondary transition-all duration-300 active:scale-[0.97]">
              💬 Get In Touch
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="magnetic-hover inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm glass text-foreground hover:border-primary hover:text-primary transition-all duration-300 active:scale-[0.97]">
              📄 Resume
            </a>
          </div>

          <div className="animate-fade-up-5 flex gap-3 mt-8">
            {[
              { icon: "GitHub", href: "https://github.com/AbhiDwived", label: "GH" },
              { icon: "LinkedIn", href: "https://linkedin.com/in/abhinan", label: "LI" },
              { icon: "Email", href: "mailto:abhidwivedi687@gmail.com", label: "✉" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text2 hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-[0_0_30px_hsla(239,84%,67%,0.2)] transition-all duration-300 text-sm font-mono animate-border-glow"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Terminal */}
        <div className="hidden lg:block animate-fade-left">
          <div className="tilt-card bg-card/80 border border-white/[0.14] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] glow-cyan relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            <div className="absolute inset-0 animate-shimmer rounded-2xl" />
            <div className="bg-white/[0.04] px-5 py-3.5 flex items-center gap-3 border-b border-white/[0.08] relative z-10">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-text3 mx-auto">abhi@portfolio:~</span>
            </div>
            <div className="p-6 font-mono text-sm leading-8 relative z-10">
              <div className="flex gap-3"><span className="text-secondary">❯</span><span className="text-primary">whoami</span></div>
              <div className="text-text2 pl-6">Full Stack Developer & Team Lead</div>
              <div className="flex gap-3 mt-4"><span className="text-secondary">❯</span><span className="text-primary">cat profile.json</span></div>
              <div className="pl-6 mt-1">
                <div><span className="text-pink">"experience"</span>: <span className="text-foreground">"2+ years"</span>,</div>
                <div><span className="text-pink">"projects"</span>: <span className="text-foreground">10+</span>,</div>
                <div><span className="text-pink">"devs_led"</span>: <span className="text-foreground">"10+"</span>,</div>
                <div><span className="text-pink">"marketers_led"</span>: <span className="text-foreground">5</span>,</div>
                <div><span className="text-pink">"stack"</span>: <span className="text-foreground">["Next.js","Node","MongoDB"]</span>,</div>
                <div><span className="text-pink">"seo_expert"</span>: <span className="text-foreground">true</span>,</div>
                <div><span className="text-pink">"open_to_work"</span>: <span className="text-foreground">true</span></div>
              </div>
              <div className="flex gap-3 mt-4"><span className="text-secondary">❯</span><span className="text-primary animate-blink">_</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
