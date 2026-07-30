"use client";
import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.1rem 3rem",
      background: scrolled ? "rgba(5,11,31,0.88)" : "rgba(5,11,31,0.4)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(0,212,255,0.12)" : "1px solid transparent",
      transition: "background .3s, border-color .3s",
    }}>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
        MD<span style={{ color: "var(--cyan)" }}>.</span>
      </div>

      <ul className="nav-desktop" style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: ".75rem",
              color: "var(--muted)", textDecoration: "none",
              letterSpacing: ".1em", textTransform: "uppercase", transition: "color .2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l}</a>
          </li>
        ))}
      </ul>

      <a href={`mailto:${personal.email}`} style={{
        fontFamily: "'JetBrains Mono',monospace", fontSize: ".72rem",
        padding: ".5rem 1.2rem", border: "1px solid var(--cyan)",
        color: "var(--cyan)", background: "transparent", borderRadius: 4,
        textDecoration: "none", letterSpacing: ".1em", textTransform: "uppercase",
        transition: "background .2s, color .2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--cyan)"; e.currentTarget.style.color = "var(--bg)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--cyan)"; }}
      >
        Hire Me
      </a>
    </nav>
  );
}
