"use client";
import { useEffect, useState } from "react";

const links = ["Problem", "Solution", "How It Works", "Impact", "Partners", "Team", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 5%",
    height: "68px",
    background: scrolled ? "rgba(13,15,12,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(18px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(151,196,89,0.1)" : "1px solid transparent",
    transition: "all 0.4s ease",
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800, fontSize: "1.35rem",
    color: "#97C459", letterSpacing: "-0.02em",
    textDecoration: "none",
    display: "flex", alignItems: "center", gap: "10px",
  };

  const linkStyle: React.CSSProperties = {
    color: "#8a9478", fontSize: "0.85rem", fontWeight: 500,
    textDecoration: "none", letterSpacing: "0.05em",
    transition: "color 0.25s",
    cursor: "pointer",
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={navStyle}>
      <a href="#hero" style={logoStyle}>
        <span style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg,#97C459,#5a8a2e)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1rem",
        }}>⚕</span>
        HospiMate
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-desktop">
        {links.map(l => (
          <span key={l} style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.color = "#97C459")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8a9478")}
            onClick={() => scrollTo(l)}>
            {l}
          </span>
        ))}
        <button onClick={() => scrollTo("Contact")} style={{
          background: "#97C459", color: "#0d0f0c",
          border: "none", borderRadius: "6px",
          padding: "8px 20px", fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700, fontSize: "0.85rem", cursor: "pointer",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
          Get in Touch
        </button>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(o => !o)} style={{
        display: "none", background: "none", border: "none",
        color: "#97C459", fontSize: "1.5rem", cursor: "pointer",
      }} className="nav-mobile">☰</button>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0,
          background: "rgba(13,15,12,0.97)", padding: "1.5rem 5%",
          display: "flex", flexDirection: "column", gap: "1.2rem",
          borderBottom: "1px solid rgba(151,196,89,0.12)",
        }}>
          {links.map(l => (
            <span key={l} style={{ ...linkStyle, fontSize: "1rem", color: "#e8eed8" }}
              onClick={() => scrollTo(l)}>{l}</span>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important;}
          .nav-mobile{display:block!important;}
        }
      `}</style>
    </nav>
  );
}
