"use client";
import FadeIn from "./FadeIn";

const features = [
  { icon: "🤖", label: "Autonomous Navigation", desc: "LiDAR-guided pathfinding lets HospiMate move independently through hospital corridors without human intervention." },
  { icon: "🧲", label: "Smart Syringe Collection", desc: "Precision gripper arms detect and safely collect used syringes from approved disposal points." },
  { icon: "🔥", label: "Thermal Disinfection", desc: "Onboard thermal chamber neutralises all pathogens, meeting WHO and Tunisian health standards." },
  { icon: "♻️", label: "PP Granule Production", desc: "Processed syringes are shredded and extruded into clean polypropylene granules — ready for reuse." },
  { icon: "📡", label: "Real-Time Monitoring", desc: "IoT dashboard gives hospital managers live visibility into cycle counts, capacity, and maintenance alerts." },
  { icon: "🛡️", label: "Zero Human Exposure", desc: "Sealed processing ensures zero direct staff contact with contaminated sharps throughout the entire workflow." },
];

export default function Solution() {
  return (
    <section id="solution" style={{
      padding: "7rem 5%",
      background: "linear-gradient(180deg,#0f120d 0%,#0d0f0c 100%)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{
              display: "inline-block", fontSize: "0.75rem", color: "#97C459",
              letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
              marginBottom: "1rem", background: "rgba(151,196,89,0.08)",
              border: "1px solid rgba(151,196,89,0.2)", borderRadius: 999, padding: "4px 16px",
            }}>The Solution</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#e8eed8", lineHeight: 1.15,
            }}>
              Meet <span style={{ color: "#97C459" }}>HospiMate</span>
            </h2>
            <p style={{ color: "#8a9478", maxWidth: 560, margin: "1.2rem auto 0", lineHeight: 1.7 }}>
              An end-to-end autonomous robot that turns medical waste into valuable raw material —
              safely, efficiently, and continuously.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "1.5rem",
        }}>
          {features.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.08}>
              <div style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "1.8rem",
                display: "flex", gap: "1.2rem",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(151,196,89,0.4)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = ""; }}>
                <div style={{
                  flexShrink: 0, width: 48, height: 48,
                  background: "rgba(151,196,89,0.1)", borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem",
                }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8eed8", marginBottom: "0.4rem" }}>{f.label}</h3>
                  <p style={{ color: "#8a9478", fontSize: "0.875rem", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
