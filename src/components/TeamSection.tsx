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

const leadershipSkills = [
  { icon: "📊", title: "Google Analytics 4", desc: "Event tracking, funnels, conversion goals" },
  { icon: "🔎", title: "Google Search Console", desc: "Indexing, impressions, CTR optimization" },
  { icon: "📣", title: "SEO & Content Coordination", desc: "Aligning dev work with keyword strategy" },
  { icon: "🎯", title: "Conversion Rate Optimization", desc: "Speed, UX & landing page performance" },
  { icon: "📈", title: "Ranking & Impressions Growth", desc: "Technical + on-page SEO for measurable results" },
];

const bars = [
  { label: "PRD → Sprint Tasks", pct: 95 },
  { label: "SEO Coordination", pct: 90 },
  { label: "Analytics & Reporting", pct: 88 },
  { label: "CRO Strategy", pct: 82 },
  { label: "Team Delivery", pct: 96 },
];

const TeamSection = () => (
  <section className="py-28 px-6 lg:px-12 relative z-10">
    <div className="absolute inset-0 particle-grid pointer-events-none" />
    <div className="max-w-[1280px] mx-auto relative">
      <ScrollReveal>
        <div className="font-mono text-xs tracking-[0.12em] uppercase text-primary mb-4">
          <span className="text-text3">// </span>Leadership
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
          Team Lead & <span className="text-gradient-cyan">Digital Growth</span>
        </h2>
        <p className="text-base text-text2 max-w-xl leading-relaxed">Beyond code — leading dev & marketing teams to ship products that convert.</p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
        <ScrollReveal>
          <div className="glass rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[{ n: "10+", l: "Devs Led" }, { n: "5", l: "Marketers" }, { n: "1", l: "QA Tester" }].map((m) => (
                <div key={m.l} className="bg-card border border-white/[0.08] rounded-xl p-5 text-center magnetic-hover">
                  <div className="font-mono text-3xl font-bold text-gradient-cyan">{m.n}</div>
                  <div className="text-xs text-text2 uppercase tracking-wider mt-1">{m.l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3.5">
              {bars.map((b) => (
                <div key={b.label} className="flex items-center gap-4">
                  <span className="text-sm text-text2 w-40 flex-shrink-0">{b.label}</span>
                  <div className="flex-1 h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 animate-gradient-shift" style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {leadershipSkills.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/30 hover:translate-x-1.5 transition-all duration-300 magnetic-hover">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg flex-shrink-0">{s.icon}</div>
                <div>
                  <div className="font-bold text-sm text-foreground">{s.title}</div>
                  <div className="text-xs text-text2 mt-0.5">{s.desc}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
