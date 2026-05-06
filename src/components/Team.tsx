"use client";
import FadeIn from "./FadeIn";

const team = [
  { name: "Arij Mahjoub", role: "Robotics & Mechatronics Lead", emoji: "🤖", photo: "/arij.jpg" },
  { name: "Walaeddine Riahi", role: "Embedded Systems Engineer", emoji: "⚡", photo: "/arij1.jpg" },
  { name: "Ons Jaouadi", role: "Computer Vision & AI", emoji: "👁️", photo: "/ons.jpg" },
  { name: "Nizar Chaied", role: "Chemical Process Engineer", emoji: "🧪", photo: "/nizar.jpg" },
  { name: "Eya Nefzi", role: "IoT & Cloud Architecture", emoji: "📡", photo: "/eya.jpg" },
] as { name: string; role: string; emoji: string; photo?: string }[];

export default function Team() {
  return (
    <section id="team" style={{
      padding: "7rem 5%",
      background: "linear-gradient(180deg,#0d0f0c 0%,#0f120d 100%)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{
              display: "inline-block", fontSize: "0.75rem", color: "#97C459",
              letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
              marginBottom: "1rem", background: "rgba(151,196,89,0.08)",
              border: "1px solid rgba(151,196,89,0.2)", borderRadius: 999, padding: "4px 16px",
            }}>Team Lombok</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#e8eed8", lineHeight: 1.15,
            }}>
              Engineers Fighting<br />
              <span style={{ color: "#97C459" }}>Climate Change</span>
            </h2>
            <p style={{ color: "#8a9478", maxWidth: 520, margin: "1.2rem auto 0", lineHeight: 1.7 }}>
              A Tunisian multidisciplinary group of IT and mechanical engineers
              united by one mission — sustainable technology for a healthier world.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.08}>
              <div style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16, padding: "2rem",
                textAlign: "center",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(151,196,89,0.4)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = ""; }}>
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  border: "2px solid rgba(151,196,89,0.35)",
                  margin: "0 auto 1.2rem",
                  overflow: "hidden",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: m.photo ? "transparent" : "linear-gradient(135deg,rgba(151,196,89,0.15),rgba(151,196,89,0.04))",
                  fontSize: "2rem",
                  boxShadow: m.photo ? "0 0 0 3px rgba(151,196,89,0.12)" : "none",
                }}>
                  {m.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.photo}
                      alt={m.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                    />
                  ) : m.emoji}
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#e8eed8", marginBottom: "0.4rem" }}>{m.name}</h3>
                <p style={{ color: "#97C459", fontSize: "0.8rem", fontWeight: 600 }}>{m.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
