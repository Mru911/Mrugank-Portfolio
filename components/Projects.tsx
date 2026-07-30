"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" style={{ padding: "7rem 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">Projects</div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: ".75rem", lineHeight: 1.1 }}>
          Things I Have Built
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "3.5rem", maxWidth: 520 }}>
          A selection of products and experiments, from AI SaaS platforms to real-time financial tools.
        </p>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <motion.div key={p.num} className="glass-card project-card"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .55, delay: i * .1 }}
              style={{ padding: "2rem", transition: "border-color .3s, transform .3s, box-shadow .3s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(0,212,255,.38)"; el.style.transform = "translateY(-5px)"; el.style.boxShadow = "0 12px 40px rgba(0,212,255,.07)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "var(--border)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".68rem", color: "var(--violet)", letterSpacing: ".15em", marginBottom: ".9rem" }}>PROJECT {p.num}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.25rem", fontWeight: 600, marginBottom: ".7rem", letterSpacing: "-.01em" }}>{p.title}</div>
              <p style={{ fontSize: ".86rem", color: "var(--muted)", lineHeight: 1.72, marginBottom: "1.4rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1.5rem" }}>
                {p.stack.map(tag => (
                  <span key={tag} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".65rem", padding: ".2rem .55rem", background: "var(--cyan-dim)", border: "1px solid rgba(0,212,255,.18)", borderRadius: 3, color: "var(--cyan)", letterSpacing: ".03em" }}>{tag}</span>
                ))}
              </div>
              <a href={p.link} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".72rem", color: "var(--cyan)", textDecoration: "none", letterSpacing: ".1em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: ".4rem", transition: "gap .2s" }}
                onMouseEnter={e => (e.currentTarget.style.gap = ".75rem")}
                onMouseLeave={e => (e.currentTarget.style.gap = ".4rem")}>
                View Project &#x2192;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
