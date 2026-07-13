"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" style={{ padding: "7rem 0", background: "var(--bg2)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">Projects</div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "0.75rem",
          lineHeight: 1.1,
        }}>
          Things I&apos;ve Built
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "3.5rem", maxWidth: 520 }}>
          A selection of products and experiments — from AI SaaS platforms to real-time financial tools.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="project-card glass-card"
              style={{ padding: "2rem", cursor: "default" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.38)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,212,255,0.07)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                color: "var(--violet)",
                letterSpacing: "0.15em",
                marginBottom: "0.9rem",
              }}>
                PROJECT {p.num}
              </div>

              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "0.7rem",
                letterSpacing: "-0.01em",
              }}>
                {p.title}
              </div>

              <p style={{ fontSize: "0.86rem", color: "var(--muted)", lineHeight: 1.72, marginBottom: "1.4rem" }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {p.stack.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    padding: "0.2rem 0.55rem",
                    background: "var(--cyan-dim)",
                    border: "1px solid rgba(0,212,255,0.18)",
                    borderRadius: 3,
                    color: "var(--cyan)",
                    letterSpacing: "0.03em",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  color: "var(--cyan)",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.gap = "0.75rem")}
                onMouseLeave={e => (e.currentTarget.style.gap = "0.4rem")}
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
