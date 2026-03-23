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
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const seoCards = [
  { icon: "⚡", title: "Core Web Vitals", desc: "LCP, CLS, INP optimized" },
  { icon: "🗺️", title: "XML Sitemaps", desc: "Auto-generated for all routes" },
  { icon: "🤖", title: "robots.txt", desc: "Precise crawl control" },
  { icon: "🔗", title: "Canonical Tags", desc: "Duplicate URL prevention" },
  { icon: "📊", title: "GA4 Integration", desc: "Full analytics & events" },
  { icon: "🔍", title: "Search Console", desc: "Indexing & impression tracking" },
  { icon: "📱", title: "OpenGraph Tags", desc: "Rich social media previews" },
  { icon: "🏗️", title: "SSR Architecture", desc: "Server-side rendering for SEO" },
];

const SeoSection = () => (
  <section className="py-28 px-6 lg:px-12 relative z-10 bg-card/50 noise-overlay">
    <div className="max-w-[1280px] mx-auto relative z-10">
      <ScrollReveal>
        <div className="font-mono text-xs tracking-[0.12em] uppercase text-primary mb-4">
          <span className="text-text3">// </span>SEO Expertise
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
          I Build Websites That <span className="text-gradient-cyan">Rank</span>
        </h2>
        <p className="text-base text-text2 max-w-xl leading-relaxed">Technical SEO baked into every layer — from SSR architecture to structured data.</p>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {seoCards.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 80}>
            <div className="magnetic-hover glass rounded-xl p-6 text-center transition-all duration-350 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_hsla(239,84%,67%,0.1)] group relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.05] to-secondary/[0.05]" />
              <span className="text-3xl block mb-3 relative z-10 group-hover:animate-scale-in">{c.icon}</span>
              <h3 className="font-bold text-sm text-foreground mb-1 relative z-10">{c.title}</h3>
              <p className="text-xs text-text2 relative z-10">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SeoSection;
