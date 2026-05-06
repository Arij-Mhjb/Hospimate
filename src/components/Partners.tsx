"use client";
import FadeIn from "./FadeIn";

const partners = [
  {
    icon: "🏛️",
    name: "IEEE Tunisia Section",
    role: "Technical Sponsor",
    desc: "Providing technical credibility, mentorship, and resources that power HospiMate's engineering excellence.",
  },
  {
    icon: "🏛️",
    name: "TSYP 12",
    role: "Competition Host",
    desc: "The IEEE Tunisia Student & Young Professional Congress — the national stage where HospiMate was presented.",
  },
  {
    icon: "🏥",
    name: "Charles Nicolle Hospital",
    role: "Pilot Site · Tunis",
    desc: "Tunisia's foremost public hospital, serving as our primary real-world deployment and validation environment.",
  },
  {
    icon: "🏥",
    name: "Habib Thameur Hospital",
    role: "Healthcare Collaboration · Tunis",
    desc: "Active healthcare collaboration partner validating HospiMate's workflow integration with clinical teams.",
  },
  {
    icon: "🏥",
    name: "La Rabta Hospital",
    role: "Medical Waste Pilot · Tunis",
    desc: "A key site for our medical waste stream pilot, testing high-volume syringe collection in real conditions.",
  },
  {
    icon: "🔬",
    name: "Institut Pasteur de Tunis",
    role: "Research Partner",
    desc: "Providing virological and microbiological expertise to validate HospiMate's disinfection protocols.",
  },
];

export default function Partners() {
  return (
    <section id="partners" style={{ padding: "7rem 5%", background: "#0d0f0c" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <span style={{
              display: "inline-block", fontSize: "0.75rem", color: "#97C459",
              letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
              marginBottom: "1rem", background: "rgba(151,196,89,0.08)",
              border: "1px solid rgba(151,196,89,0.2)", borderRadius: 999, padding: "4px 16px",
            }}>Partners</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#e8eed8", lineHeight: 1.15,
            }}>
              Built on Real <span style={{ color: "#97C459" }}>Partnerships</span>
            </h2>
            <p style={{ color: "#8a9478", maxWidth: 620, margin: "1.2rem auto 0", lineHeight: 1.7, fontSize: "0.95rem" }}>
              From IEEE&apos;s technical backing to Tunisia&apos;s leading hospitals, HospiMate is built on real
              partnerships with people who share our mission.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "1.5rem",
          marginTop: "3rem",
        }}>
          {partners.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "1.8rem",
                height: "100%",
                transition: "border-color 0.3s, transform 0.3s, background 0.3s",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(151,196,89,0.45)";
                  el.style.transform = "translateY(-4px)";
                  el.style.background = "rgba(151,196,89,0.04)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.transform = "";
                  el.style.background = "rgba(255,255,255,0.025)";
                }}>
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: "1.2rem",
                }}>
                  <div style={{
                    flexShrink: 0, width: 52, height: 52,
                    background: "rgba(151,196,89,0.08)",
                    border: "1px solid rgba(151,196,89,0.18)",
                    borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem",
                  }}>{p.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 700,
                      fontSize: "1rem", color: "#e8eed8", marginBottom: "0.25rem",
                    }}>{p.name}</h3>
                    <span style={{
                      display: "inline-block",
                      background: "rgba(151,196,89,0.1)", color: "#97C459",
                      fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em",
                      textTransform: "uppercase", borderRadius: 999,
                      padding: "2px 10px", marginBottom: "0.8rem",
                    }}>{p.role}</span>
                    <p style={{ color: "#8a9478", fontSize: "0.87rem", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
