"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Live Projects" },
  { value: 10, suffix: "+", label: "Developers Led" },
  { value: 5, suffix: "+", label: "Digital Marketers Led" },
  { value: 25, suffix: "%", label: "Load Time Reduced" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const duration = 1500;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-mono text-gradient-cyan font-bold" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1 }}>
      {count}{suffix}
    </span>
  );
};

const StatsStrip = () => (
  <div className="relative z-10 flex flex-wrap border-t border-b border-white/[0.08] glass">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-secondary/[0.03]" />
    <div className="absolute inset-0 animate-shimmer" />
    {stats.map((s, i) => (
      <div key={s.label} className="flex-1 min-w-[45%] md:min-w-0 text-center py-6 px-4 border-r border-white/[0.08] last:border-r-0 relative z-10" style={{ animationDelay: `${i * 0.1}s` }}>
        <AnimatedNumber target={s.value} suffix={s.suffix} />
        <div className="text-xs text-text2 mt-2 font-medium tracking-wider">{s.label}</div>
      </div>
    ))}
  </div>
);

export default StatsStrip;
