"use client";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "3rem 5%",
      background: "#0d0f0c",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", alignItems: "center",
        gap: "1.5rem",
      }}>
        <div>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "1.2rem", color: "#97C459", marginBottom: "0.4rem",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "linear-gradient(135deg,#97C459,#5a8a2e)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.9rem",
            }}>⚕</span>
            HospiMate
          </div>
          <p style={{ color: "#8a9478", fontSize: "0.82rem" }}>
            By Lombok · Tunis, Tunisia · TSYP 12
          </p>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {["Problem", "Solution", "How It Works", "Impact", "Partners", "Team"].map(l => (
            <span key={l}
              onClick={() => { const el = document.getElementById(l.toLowerCase().replace(/ /g, "-")); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                color: "#8a9478", fontSize: "0.82rem", cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#97C459")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8a9478")}>
              {l}
            </span>
          ))}
        </div>

        <p style={{ color: "#8a9478", fontSize: "0.78rem" }}>
          © 2025 Lombok. Fighting climate change with sustainable tech.
        </p>
      </div>
    </footer>
  );
}
