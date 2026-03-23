"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import mybestvenueImg from "@/assets/projects/mybestvenue.png";
import industryguruImg from "@/assets/projects/industryguru.png";
import studentmallImg from "@/assets/projects/studentmall.png";
import hostxImg from "@/assets/projects/hostx.png";
import sainihospitalImg from "@/assets/projects/sainihospital.png";
import yatraaddaImg from "@/assets/projects/yatraadda.png";
import hestiahotelsImg from "@/assets/projects/hestiahotels.png";
import theboldmicImg from "@/assets/projects/theboldmic.png";
import dsyluxurypgImg from "@/assets/projects/dsyluxurypg.png";
import himtaraImg from "@/assets/projects/himtara.png";

const ScrollReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const projects = [
  { name: "My Best Venue", cat: "Hospitality", desc: "Wedding venue listing platform with city-wise SSR pages, search & advanced filters", tech: ["Next.js", "React.js", "Node.js", "MongoDB", "AWS S3", "Tailwind CSS", "SEO Tools"], tags: ["hospitality"], url: "https://mybestvenue.com", image: mybestvenueImg, featured: true },
  { name: "Industryguru", cat: "E-Commerce", desc: "Industrial tools & equipment e-commerce platform with multi-vendor marketplace", tech: ["Next.js", "React.js", "Node.js", "MongoDB", "AWS S3", "Tailwind CSS", "SEO Tools"], tags: ["e-commerce"], url: "https://industryguru.in", image: industryguruImg },
  { name: "Student Mall", cat: "E-Commerce", desc: "Student-focused e-commerce website for books, supplies & electronics", tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "AWS S3", "SEO Tools"], tags: ["e-commerce"], url: "#", image: studentmallImg },
  { name: "HostX", cat: "SaaS", desc: "Web hosting provider platform with plan comparisons & domain management", tech: ["React.js", "Tailwind CSS"], tags: ["saas"], url: "https://hostx.live", image: hostxImg },
  { name: "Shivam Saini Hospital", cat: "Healthcare", desc: "Patient appointment booking website with doctor listings & department info", tech: ["React.js", "Tailwind CSS"], tags: ["healthcare"], url: "https://sainihospitals.com", image: sainihospitalImg },
  { name: "Yatra Adda", cat: "Hospitality", desc: "Travel discovery platform connecting travelers with unique destinations", tech: ["Next.js", "React.js", "Node.js", "MySQL", "AWS S3", "Tailwind CSS", "SEO Tools"], tags: ["hospitality"], url: "https://yatraadda.com", image: yatraaddaImg },
  { name: "The Hestia Hotels Group", cat: "Hospitality", desc: "Premium hotel group website with room booking & luxury suite showcases", tech: ["Next.js", "React.js", "Node.js", "MongoDB", "AWS S3", "Tailwind CSS", "SEO Tools"], tags: ["hospitality"], url: "#", image: hestiahotelsImg },
  { name: "The Bold Mic", cat: "Media", desc: "News portal with breaking news ticker, categories & multilingual support", tech: ["Next.js", "React.js", "Node.js", "MySQL", "AWS S3", "Tailwind CSS", "SEO Tools"], tags: ["media"], url: "https://theboldmic.com", image: theboldmicImg },
  { name: "DSY Luxury PG", cat: "Hospitality", desc: "Premium PG accommodation platform with room booking & amenity listings", tech: ["Next.js", "React.js", "Node.js", "MongoDB", "AWS S3", "Tailwind CSS", "SEO Tools"], tags: ["hospitality"], url: "https://dsyluxurypg.in", image: dsyluxurypgImg },
  { name: "Him Tara", cat: "E-Commerce", desc: "Pure Himalayan water brand e-commerce with subscription model & bulk orders", tech: ["Next.js", "React.js", "Node.js", "MongoDB", "AWS S3", "Tailwind CSS", "SEO Tools"], tags: ["e-commerce"], url: "https://himtara.in", image: himtaraImg },
];

const filters = ["All", "Hospitality", "E-Commerce", "Healthcare", "Media", "SaaS"];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active.toLowerCase()));

  return (
    <section id="projects" className="py-28 px-6 lg:px-12 relative z-10">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      <div className="relative">
        <ScrollReveal>
          <div className="font-mono text-xs tracking-[0.12em] uppercase text-primary mb-4">
            <span className="text-text3">// </span>Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
            10+ <span className="text-gradient-cyan">Live Projects</span>
          </h2>
          <p className="text-base text-text2 max-w-xl leading-relaxed">Click any card to open the live site instantly.</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex gap-2 flex-wrap mt-10 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-300 active:scale-[0.96] ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary glow-cyan"
                    : "glass text-text2 hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 80}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_40px_hsla(239,84%,67%,0.15)] group relative tilt-card"
              >
                {p.featured && (
                  <span className="absolute top-3 left-3 z-10 text-[0.62rem] font-extrabold uppercase tracking-wider bg-secondary text-secondary-foreground px-2.5 py-1 rounded animate-glow-pulse">Featured</span>
                )}
                <div className="h-48 relative overflow-hidden bg-card">
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/85 backdrop-blur-sm flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:backdrop-blur-md">
                    <span className="text-3xl text-primary animate-scale-in">🚀</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">View Project</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[0.65rem] text-text3 uppercase tracking-[0.1em] mb-1.5">{p.cat}</div>
                  <h3 className="font-bold text-foreground mb-1.5">{p.name}</h3>
                  <p className="text-sm text-text2 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[0.65rem] font-semibold px-2 py-0.5 rounded bg-white/[0.04] text-text3 border border-white/[0.08]">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
