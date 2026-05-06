"use client";
import FadeIn from "./FadeIn";

const problems = [
  { icon: "💉", title: "2.3B Syringes Discarded Annually", body: "Tunisian healthcare facilities generate millions of used syringes each year, creating enormous volumes of sharps waste." },
  { icon: "☣️", title: "Needlestick Injuries Kill", body: "Healthcare workers face daily exposure risk. WHO estimates 1.2M infections and 66,000 deaths per year from contaminated sharps globally." },
  { icon: "🌍", title: "Environmental Contamination", body: "Improper syringe disposal leaches toxins into soil and groundwater, with plastic fragments persisting for centuries." },
  { icon: "💸", title: "High Disposal Costs", body: "Hospitals pay steep fees for specialised medical waste treatment — budgets that could fund patient care instead." },
];

export default function Problem() {
  return (
    <section id="problem" style={{ padding: "7rem 5%", background: "linear-gradient(180deg,#0d0f0c 0%,#0f120d 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{
              display: "inline-block", fontSize: "0.75rem",
              color: "#97C459", letterSpacing: "0.12em", fontWeight: 700,
              textTransform: "uppercase", marginBottom: "1rem",
              background: "rgba(151,196,89,0.08)", border: "1px solid rgba(151,196,89,0.2)",
              borderRadius: 999, padding: "4px 16px",
            }}>The Crisis</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#e8eed8", lineHeight: 1.15,
            }}>
              Medical Sharps Waste Is a<br />
              <span style={{ color: "#97C459" }}>Systemic Crisis</span>
            </h2>
            <p style={{ color: "#8a9478", maxWidth: 520, margin: "1.2rem auto 0", lineHeight: 1.7 }}>
              Tunisian hospitals, clinics, and laboratories struggle with mounting sharps waste —
              a hazard to staff, patients, and the environment.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div style={{
                background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "2rem 1.6rem",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(151,196,89,0.35)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = ""; }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8eed8", marginBottom: "0.7rem" }}>{p.title}</h3>
                <p style={{ color: "#8a9478", fontSize: "0.9rem", lineHeight: 1.65 }}>{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
