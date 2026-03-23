"use client";
import { useRef, useEffect, useState } from "react";

const ScrollReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const contactInfo = [
  { icon: "📧", label: "Email", value: "abhidwivedi687@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91 84332 08146" },
  { icon: "🐙", label: "GitHub", value: "github.com/AbhiDwived" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/abhinan" },
  { icon: "📍", label: "Location", value: "India 🇮🇳 · Available Globally" },
];

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 relative z-10 bg-card/50 noise-overlay">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="font-mono text-xs tracking-[0.12em] uppercase text-primary mb-4">
            <span className="text-text3">// </span>Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
            Let's Build <span className="text-gradient-cyan">Together</span>
          </h2>
          <p className="text-base text-text2 max-w-xl leading-relaxed">Open for full-time roles, freelance projects & collaborations.</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mt-12">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              {contactInfo.map((c, i) => (
                <div key={c.label} className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/30 hover:translate-x-1.5 transition-all duration-300 magnetic-hover" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[0.7rem] text-text3 uppercase tracking-wider font-bold">{c.label}</div>
                    <div className="text-sm font-semibold mt-0.5">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text2 mb-2">Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-white/[0.08] rounded-xl bg-card text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsla(239,84%,67%,0.15)] transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text2 mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 border border-white/[0.08] rounded-xl bg-card text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsla(239,84%,67%,0.15)] transition-all" />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-text2 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-white/[0.08] rounded-xl bg-card text-foreground outline-none focus:border-primary transition-all">
                  <option>Job Opportunity</option>
                  <option>Freelance Project</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-text2 mb-2">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 border border-white/[0.08] rounded-xl bg-card text-foreground outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsla(239,84%,67%,0.15)] transition-all resize-y" />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-cyan text-primary-foreground font-extrabold tracking-wider magnetic-hover hover:shadow-[0_8px_32px_hsla(239,84%,67%,0.4)] transition-all duration-300 active:scale-[0.97]"
              >
                Send Message →
              </button>
              {sent && (
                <div className="mt-4 text-center text-sm text-secondary font-semibold animate-fade-up">
                  ✅ Message sent! I'll reply within 24hrs.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
