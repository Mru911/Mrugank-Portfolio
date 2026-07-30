"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications, research, extras } from "@/lib/data";

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: "1.5rem", paddingBottom: ".75rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: ".65rem" }}>
      <span style={{ color: "var(--cyan)" }}>&#x25C8;</span>
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-card" style={{ padding: "1.25rem 1.5rem", marginBottom: "1rem", transition: "border-color .2s" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,212,255,.28)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
      {children}
    </div>
  );
}

export default function Credentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="credentials" style={{ padding: "7rem 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">Credentials</div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: "4rem", lineHeight: 1.1 }}>
          Certifications and Research
        </h2>

        <div className="creds-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}>
            <ColTitle>Certifications</ColTitle>
            {certifications.map(c => (
              <Card key={c.title}>
                <div style={{ fontSize: ".9rem", fontWeight: 500, marginBottom: ".25rem" }}>{c.title}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".7rem", color: "var(--cyan)", letterSpacing: ".06em" }}>{c.issuer}</div>
              </Card>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .15 }}>
            <ColTitle>Research Publication</ColTitle>
            {research.map(r => (
              <Card key={r.title}>
                <div style={{ fontSize: ".9rem", fontWeight: 500, marginBottom: ".3rem" }}>{r.title}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".7rem", color: "var(--cyan)", letterSpacing: ".05em", marginBottom: ".5rem" }}>{r.journal} · {r.details}</div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.65 }}>{r.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .3 }} style={{ marginTop: "3.5rem" }}>
          <ColTitle>Extra-Curricular</ColTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
            {extras.map(e => (
              <div key={e} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 6, padding: ".6rem 1.1rem", fontSize: ".83rem", color: "var(--muted)" }}>
                <span style={{ color: "var(--cyan)", marginRight: ".5rem" }}>&#x2736;</span>{e}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
