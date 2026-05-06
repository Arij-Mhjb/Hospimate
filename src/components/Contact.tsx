"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10, color: "#e8eed8",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem", outline: "none",
    transition: "border-color 0.25s",
  };

  return (
    <section id="contact" style={{
      padding: "7rem 5%",
      background: "linear-gradient(180deg,#0f120d 0%,#0d0f0c 100%)",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{
              display: "inline-block", fontSize: "0.75rem", color: "#97C459",
              letterSpacing: "0.12em", fontWeight: 700, textTransform: "uppercase",
              marginBottom: "1rem", background: "rgba(151,196,89,0.08)",
              border: "1px solid rgba(151,196,89,0.2)", borderRadius: 999, padding: "4px 16px",
            }}>Contact</span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#e8eed8", lineHeight: 1.15,
            }}>
              Join the <span style={{ color: "#97C459" }}>Mission</span>
            </h2>
            <p style={{ color: "#8a9478", maxWidth: 480, margin: "1.2rem auto 0", lineHeight: 1.7 }}>
              Whether you&apos;re a hospital, investor, researcher, or fellow engineer — we want to hear from you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {sent ? (
            <div style={{
              background: "rgba(151,196,89,0.08)", border: "1px solid rgba(151,196,89,0.3)",
              borderRadius: 16, padding: "3rem", textAlign: "center",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#97C459", marginBottom: "0.5rem" }}>Message Sent!</h3>
              <p style={{ color: "#8a9478" }}>We&apos;ll get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handle} style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20, padding: "2.5rem",
              display: "flex", flexDirection: "column", gap: "1.2rem",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
                {["name", "email"].map(f => (
                  <div key={f}>
                    <label style={{ display: "block", color: "#8a9478", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem", textTransform: "capitalize" }}>{f}</label>
                    <input
                      id={`contact-${f}`}
                      type={f === "email" ? "email" : "text"}
                      required
                      value={form[f as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f]: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(151,196,89,0.5)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                      placeholder={f === "email" ? "you@hospital.tn" : "Your name"}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: "block", color: "#8a9478", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>Organisation</label>
                <input
                  id="contact-org"
                  type="text"
                  value={form.org}
                  onChange={e => setForm(p => ({ ...p, org: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(151,196,89,0.5)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  placeholder="Hospital / Company / Research Lab"
                />
              </div>
              <div>
                <label style={{ display: "block", color: "#8a9478", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.5rem" }}>Message</label>
                <textarea
                  id="contact-message"
                  required rows={5}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(151,196,89,0.5)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  placeholder="Tell us about your interest or how we can collaborate..."
                />
              </div>
              <button type="submit" id="contact-submit" style={{
                background: "#97C459", color: "#0d0f0c",
                border: "none", borderRadius: 10, padding: "14px",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: "1rem", cursor: "pointer",
                transition: "opacity 0.2s, transform 0.2s",
                boxShadow: "0 0 32px rgba(151,196,89,0.25)",
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}>
                Send Message →
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
