"use client";
const FloatingOrbs = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div
      className="absolute w-[500px] h-[500px] rounded-full animate-morph animate-glow-pulse"
      style={{
        top: "10%",
        left: "5%",
        background: "radial-gradient(circle, hsla(239, 84%, 67%, 0.12), transparent 70%)",
        filter: "blur(60px)",
      }}
    />
    <div
      className="absolute w-[400px] h-[400px] rounded-full animate-morph animate-glow-pulse"
      style={{
        top: "60%",
        right: "10%",
        background: "radial-gradient(circle, hsla(142, 71%, 45%, 0.08), transparent 70%)",
        filter: "blur(60px)",
        animationDelay: "2s",
      }}
    />
    <div
      className="absolute w-[300px] h-[300px] rounded-full animate-morph"
      style={{
        bottom: "20%",
        left: "40%",
        background: "radial-gradient(circle, hsla(330, 86%, 70%, 0.06), transparent 70%)",
        filter: "blur(60px)",
        animationDelay: "4s",
      }}
    />
  </div>
);

export default FloatingOrbs;
