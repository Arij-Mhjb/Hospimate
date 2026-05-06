"use client";
import FadeIn from "./FadeIn";

const steps = [
  { num: "01", title: "Detect & Navigate", desc: "HospiMate autonomously patrols the facility, using LiDAR and computer-vision to locate sharps disposal bins." },
  { num: "02", title: "Collect Safely", desc: "Robotic arms with sealed grippers transfer used syringes into the onboard containment chamber." },
  { num: "03", title: "Disinfect", desc: "The thermal disinfection unit heats syringes to sterilisation temperatures, eliminating all biological hazards." },
  { num: "04", title: "Shred & Extrude", desc: "Sterilised plastic is shredded, melted, and extruded through a die to form uniform PP granules." },
  { num: "05", title: "Deliver Granules", desc: "Clean polypropylene granules are deposited in the collection tray, ready for hospital procurement cycles." },
  { num: "06", title: "Report & Recharge", desc: "The robot returns to its dock, transmits an IoT usage report, and recharges for the next cycle." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "7rem 5%", background: "#0d0f0c" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <span style={{
              display: "inline-block", fontSize: "0.75rem", color: "#97C459",
              letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
              marginBottom: "1rem", background: "rgba(151,196,89,0.08)",
              border: "1px solid rgba(151,196,89,0.2)", borderRadius: 999, padding: "4px 16px",
            }}>Process</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#e8eed8", lineHeight: 1.15,
            }}>
              How <span style={{ color: "#97C459" }}>It Works</span>
            </h2>
            <p style={{ color: "#8a9478", maxWidth: 500, margin: "1.2rem auto 0", lineHeight: 1.7 }}>
              Six seamless steps from contaminated syringe to clean polypropylene granule.
            </p>
          </div>
        </FadeIn>

        <div style={{ position: "relative" }}>
          {/* Vertical connector line */}
          <div style={{
            position: "absolute", left: "calc(50% - 0.5px)", top: 0, bottom: 0,
            width: 1, background: "linear-gradient(to bottom,rgba(151,196,89,0.4),rgba(151,196,89,0.05))",
          }} />

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <FadeIn key={s.num} delay={i * 0.1}>
                <div style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: "2.5rem",
                  paddingLeft: isLeft ? 0 : "50%",
                  paddingRight: isLeft ? "50%" : 0,
                }}>
                  <div style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16, padding: "1.5rem 1.8rem",
                    maxWidth: 400,
                    [isLeft ? "marginRight" : "marginLeft"]: "2.5rem",
                    transition: "border-color 0.3s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(151,196,89,0.35)"}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"}>
                    <div style={{
                      fontFamily: "'Syne', sans-serif", fontSize: "2.5rem",
                      fontWeight: 800, color: "rgba(151,196,89,0.18)", lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}>{s.num}</div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8eed8", marginBottom: "0.4rem" }}>{s.title}</h3>
                    <p style={{ color: "#8a9478", fontSize: "0.875rem", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
