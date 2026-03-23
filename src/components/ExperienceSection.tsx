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

const experiences = [
  {
    icon: "🏢",
    role: "Software Developer (Team Leader)",
    company: "DSY Hospitality Pvt Ltd",
    period: "May 2025 – Present",
    current: true,
    bullets: [
      "Leading 10+ Developers, 1 Tester & 5 Digital Marketers to deliver high-quality features on sprint cycles",
      "Converted PRDs into technical tasks; built Next.js SSR platform for maximum SEO ranking and speed",
      "Auto-generated XML sitemaps for cities, categories & venues; dynamic meta + OpenGraph tags",
      "Integrated GA4 & Google Search Console; configured robots.txt, canonical tags, removed duplicate URLs",
      "Optimized Core Web Vitals: lazy loading, image compression, server-side search via Next.js API Routes",
      "Managed SSL, HTTPS enforcement, deployment & uptime monitoring on Hostinger",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "AWS S3", "GA4", "GSC", "Technical SEO", "Tailwind CSS"],
  },
  {
    icon: "💻",
    role: "Software Developer",
    company: "VMS Pvt Ltd",
    period: "Nov 2023 – April 2025",
    current: false,
    bullets: [
      "Built responsive React.js UIs, improving user engagement by 20%",
      "Implemented JWT-based authentication and real-time features with WebSocket & Socket.io",
      "Developed scalable backend with Node.js + Express.js; automated emails via Nodemailer",
      "Integrated 3rd-party APIs boosting platform functionality by 15%; reduced load times by 25%",
      "Managed HTTPS setup, sitemap config & .htaccess on OVI Panel",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Socket.io", "JWT", "MongoDB", "Nodemailer"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 px-6 lg:px-12 relative z-10 bg-card/50 noise-overlay">
    <div className="relative z-10">
      <ScrollReveal>
        <div className="font-mono text-xs tracking-[0.12em] uppercase text-primary mb-4">
          <span className="text-text3">// </span>Career
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
          Work <span className="text-gradient-cyan">Experience</span>
        </h2>
        <p className="text-base text-text2 max-w-xl leading-relaxed">From developer to team lead — building platforms that rank and convert.</p>
      </ScrollReveal>

      <div className="relative mt-14">
        <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-white/[0.08] to-transparent" />

        {experiences.map((exp, i) => (
          <ScrollReveal key={i} className="flex gap-10 mb-10" delay={i * 200}>
            <div className="w-14 min-w-[56px] h-14 rounded-full bg-card border-[1.5px] border-primary flex items-center justify-center text-xl relative z-10 shadow-[0_0_20px_hsla(239,84%,67%,0.3)] animate-border-glow">
              {exp.icon}
            </div>
            <div className="flex-1 glass rounded-2xl p-8 hover:border-primary/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:translate-x-1.5 transition-all duration-300 tilt-card">
              <div className="flex justify-between items-start flex-wrap gap-3 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <div className="text-sm text-primary font-semibold mt-1">{exp.company}</div>
                </div>
                <div className="flex items-center gap-2">
                  {exp.current && (
                    <span className="text-xs font-bold px-2.5 py-1 bg-secondary/10 text-secondary border border-secondary/25 rounded-md inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-dot" /> Current
                    </span>
                  )}
                  <span className="font-mono text-xs px-3 py-1 rounded-md bg-primary/[0.08] text-primary border border-primary/20 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="mt-4 mb-5 space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-text2 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-primary text-xs mt-1.5 flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="font-mono text-[0.68rem] px-2.5 py-1 rounded bg-white/[0.04] text-text3 border border-white/[0.08] hover:border-primary/30 hover:text-primary transition-all duration-200">{t}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
