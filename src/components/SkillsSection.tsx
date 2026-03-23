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

const cdnBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skillGroups = [
  {
    icon: "🖥️",
    name: "Frontend",
    skills: [
      { name: "React.js", logo: `${cdnBase}/react/react-original.svg` },
      { name: "Next.js", logo: `${cdnBase}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", logo: `${cdnBase}/typescript/typescript-original.svg` },
      { name: "JavaScript", logo: `${cdnBase}/javascript/javascript-original.svg` },
      { name: "Tailwind CSS", logo: `${cdnBase}/tailwindcss/tailwindcss-original.svg` },
      { name: "HTML5", logo: `${cdnBase}/html5/html5-original.svg` },
      { name: "CSS3", logo: `${cdnBase}/css3/css3-original.svg` },
      { name: "Redux", logo: `${cdnBase}/redux/redux-original.svg` },
    ],
  },
  {
    icon: "⚙️",
    name: "Backend",
    skills: [
      { name: "Node.js", logo: `${cdnBase}/nodejs/nodejs-original.svg` },
      { name: "Express.js", logo: `${cdnBase}/express/express-original.svg` },
      { name: "REST APIs", logo: "" },
      { name: "GraphQL", logo: `${cdnBase}/graphql/graphql-plain.svg` },
      { name: "Socket.io", logo: `${cdnBase}/socketio/socketio-original.svg` },
      { name: "JWT Auth", logo: "" },
      { name: "Nodemailer", logo: "" },
    ],
  },
  {
    icon: "🗄️",
    name: "Database",
    skills: [
      { name: "MongoDB", logo: `${cdnBase}/mongodb/mongodb-original.svg` },
      { name: "PostgreSQL", logo: `${cdnBase}/postgresql/postgresql-original.svg` },
      { name: "MySQL", logo: `${cdnBase}/mysql/mysql-original.svg` },
      { name: "Redis", logo: `${cdnBase}/redis/redis-original.svg` },
      { name: "Mongoose", logo: `${cdnBase}/mongoose/mongoose-original.svg` },
    ],
  },
  {
    icon: "☁️",
    name: "DevOps & Cloud",
    skills: [
      { name: "AWS S3", logo: `${cdnBase}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Git", logo: `${cdnBase}/git/git-original.svg` },
      { name: "GitHub", logo: `${cdnBase}/github/github-original.svg` },
      { name: "Docker", logo: `${cdnBase}/docker/docker-original.svg` },
      { name: "Vercel", logo: `${cdnBase}/vercel/vercel-original.svg` },
      { name: "Nginx", logo: `${cdnBase}/nginx/nginx-original.svg` },
    ],
  },
  {
    icon: "🔍",
    name: "SEO & Analytics",
    skills: [
      { name: "Technical SEO", logo: "" },
      { name: "Google Analytics 4", logo: `${cdnBase}/google/google-original.svg` },
      { name: "Search Console", logo: `${cdnBase}/google/google-original.svg` },
      { name: "Core Web Vitals", logo: "" },
      { name: "Schema Markup", logo: "" },
      { name: "XML Sitemaps", logo: "" },
    ],
  },
  {
    icon: "🛠️",
    name: "Tools & Methods",
    skills: [
      { name: "VS Code", logo: `${cdnBase}/vscode/vscode-original.svg` },
      { name: "Postman", logo: `${cdnBase}/postman/postman-original.svg` },
      { name: "Figma", logo: `${cdnBase}/figma/figma-original.svg` },
      { name: "Jira", logo: `${cdnBase}/jira/jira-original.svg` },
      { name: "Agile/Scrum", logo: "" },
      { name: "PRD Planning", logo: "" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 px-6 lg:px-12 relative z-10">
    <div className="absolute inset-0 particle-grid pointer-events-none" />
    <div className="relative">
      <ScrollReveal>
        <div className="font-mono text-xs tracking-[0.12em] uppercase text-primary mb-4">
          <span className="text-text3">// </span>Tech Stack
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
          Skills & <span className="text-gradient-cyan">Technologies</span>
        </h2>
        <p className="text-base text-text2 max-w-xl leading-relaxed">Real tech I work with daily — with logos, not just labels.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {skillGroups.map((g, gi) => (
          <ScrollReveal key={g.name} delay={gi * 100}>
            <div className="tilt-card glass rounded-2xl p-7 transition-all duration-400 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_hsla(239,84%,67%,0.1)] relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              <div className="flex items-center gap-3.5 mb-5 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl">{g.icon}</div>
                <div>
                  <div className="font-bold text-foreground">{g.name}</div>
                  <div className="text-xs text-text3 font-mono">{g.skills.length} technologies</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {g.skills.map((s) => (
                  <span key={s.name} className="magnetic-hover inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/[0.08] bg-white/[0.04] text-text2 hover:border-primary hover:text-primary hover:bg-primary/[0.06] transition-all duration-200 cursor-default">
                    {s.logo && (
                      <img src={s.logo} alt={s.name} className="w-4 h-4 object-contain" loading="lazy" />
                    )}
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
