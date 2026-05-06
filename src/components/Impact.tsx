"use client";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setVal(Math.round(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 2.3, label: "Syringes Discarded Yearly", suffix: "B+", note: "Globally" },
  { value: 95, label: "PP Granule Purity", suffix: "%", note: "Post-processing" },
  { value: 66000, label: "Needlestick Deaths/Year", suffix: "", note: "WHO Estimate" },
  { value: 100, label: "Hands-Free Operation", suffix: "%", note: "Zero staff exposure" },
];

export default function Impact() {
  return (
    <section id="impact" style={{
      padding: "7rem 5%",
      background: "linear-gradient(180deg,#0d0f0c 0%,#0c110c 50%,#0d0f0c 100%)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{
              display: "inline-block", fontSize: "0.75rem", color: "#97C459",
              letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
              marginBottom: "1rem", background: "rgba(151,196,89,0.08)",
              border: "1px solid rgba(151,196,89,0.2)", borderRadius: 999, padding: "4px 16px",
            }}>Impact</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#e8eed8",
            }}>
              Numbers That <span style={{ color: "#97C459" }}>Matter</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" }}>
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div style={{
                background: "rgba(151,196,89,0.04)", border: "1px solid rgba(151,196,89,0.12)",
                borderRadius: 20, padding: "2.5rem 2rem", textAlign: "center",
                transition: "background 0.3s, border-color 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(151,196,89,0.08)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(151,196,89,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(151,196,89,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(151,196,89,0.12)"; }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "clamp(2rem,4vw,3rem)", color: "#97C459", lineHeight: 1,
                  marginBottom: "0.8rem",
                }}>
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div style={{ color: "#e8eed8", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.3rem" }}>{s.label}</div>
                <div style={{ color: "#8a9478", fontSize: "0.8rem" }}>{s.note}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* SDG Logos */}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <p style={{ color: "#8a9478", fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: "2rem" }}>
              Aligned with UN Sustainable Development Goals
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", justifyContent: "center" }}>
              {[
                { num: "03", label: "Good Health & Well-Being",          color: "#4C9F38", url: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg" },
                { num: "11", label: "Sustainable Cities & Communities",   color: "#F99D26", url: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg" },
                { num: "12", label: "Responsible Consumption & Production", color: "#BF8B2E", url: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg" },
                { num: "13", label: "Climate Action",                     color: "#3F7E44", url: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg" },
              ].map(sdg => (
                <div key={sdg.num}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16,
                    padding: "1.2rem",
                    width: 160,
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.9rem",
                    transition: "border-color 0.3s, transform 0.3s, background 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = `${sdg.color}55`;
                    el.style.transform = "translateY(-4px)";
                    el.style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.transform = "";
                    el.style.background = "rgba(255,255,255,0.03)";
                  }}>
                  {/* Official UN SDG logo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sdg.url}
                    alt={`SDG ${sdg.num} — ${sdg.label}`}
                    width={100}
                    height={100}
                    style={{ borderRadius: 10, display: "block", objectFit: "cover" }}
                  />
                  <p style={{
                    color: "#c8d4b0", fontSize: "0.75rem", fontWeight: 600,
                    lineHeight: 1.4, textAlign: "center",
                  }}>{sdg.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
