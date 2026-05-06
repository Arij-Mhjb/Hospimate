"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(151,196,89,${d.a * 0.5})`;
        ctx.fill();
      });
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(151,196,89,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", padding: "0 5%",
    }}>
      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 60% at 50% 40%,rgba(151,196,89,0.07) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", textAlign: "center", maxWidth: 860, zIndex: 2 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(151,196,89,0.08)", border: "1px solid rgba(151,196,89,0.22)",
          borderRadius: 999, padding: "6px 18px", marginBottom: "2rem",
          fontSize: "0.78rem", color: "#97C459", letterSpacing: "0.1em",
          fontWeight: 600, textTransform: "uppercase",
          animation: "fadeUp 0.8s ease both",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#97C459", display: "inline-block", animation: "pulse 2s infinite" }} />
          Lombok · Tunisia · TSYP 12 Finalist
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          fontWeight: 800, lineHeight: 1.08,
          letterSpacing: "-0.03em",
          color: "#e8eed8",
          animation: "fadeUp 0.9s 0.1s ease both",
          marginBottom: "1.5rem",
        }}>
          Autonomous Syringe<br />
          <span style={{
            background: "linear-gradient(135deg,#97C459 30%,#c8e89a)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Recycling Robot</span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: "#8a9478", maxWidth: 600, margin: "0 auto 2.5rem",
          lineHeight: 1.7, animation: "fadeUp 1s 0.2s ease both",
        }}>
          HospiMate collects, disinfects, and recycles used medical syringes into
          reusable polypropylene granules — protecting healthcare workers and the planet.
        </p>

        <div style={{
          display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
          animation: "fadeUp 1s 0.3s ease both",
        }}>
          <button onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#97C459", color: "#0d0f0c",
              border: "none", borderRadius: 8,
              padding: "14px 32px", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, fontSize: "1rem", cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 32px rgba(151,196,89,0.3)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(151,196,89,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 32px rgba(151,196,89,0.3)"; }}>
            Discover the Robot →
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "transparent", color: "#e8eed8",
              border: "1px solid rgba(232,238,216,0.2)", borderRadius: 8,
              padding: "14px 32px", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: "1rem", cursor: "pointer",
              transition: "border-color 0.25s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(151,196,89,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(232,238,216,0.2)")}>
            Partner With Us
          </button>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: "-8rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "#8a9478", fontSize: "0.75rem", animation: "fadeUp 1s 0.6s ease both",
        }}>
          <div style={{
            width: 1, height: 48,
            background: "linear-gradient(to bottom,transparent,#97C459)",
            animation: "scrollLine 2s ease-in-out infinite",
          }} />
          scroll
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollLine { 0%,100%{opacity:0.3;transform:scaleY(0.6)} 50%{opacity:1;transform:scaleY(1)} }
      `}</style>
    </section>
  );
}
