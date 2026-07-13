"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { certifications, research } from "@/lib/data";

export default function Credentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const ColTitle = ({ children }: { children: React.ReactNode }) => (
    <div style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: "1.05rem",
      fontWeight: 600,
      marginBottom: "1.5rem",
      paddingBottom: "0.75rem",
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      gap: "0.65rem",
      color: "var(--white)",
    }}>
      <span style={{ color: "var(--cyan)" }}>◈</span>
      {children}
    </div>
  );

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div
      className="glass-card"
      style={{ padding: "1.25rem 1.5rem", marginBottom: "1rem", transition: "border-color 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.28)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      {children}
    </div>
  );

  return (
    <section id="credentials" style={{ padding: "7rem 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">Credentials</div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "4rem",
          lineHeight: 1.1,
        }}>
          Certifications &amp; Research
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }} className="creds-grid">

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <ColTitle>Certifications</ColTitle>
            {certifications.map((c) => (
              <Card key={c.title}>
                <div style={{ fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.25rem" }}>{c.title}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.06em" }}>
                  {c.issuer}
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ColTitle>Research Publication</ColTitle>
            {research.map((r) => (
              <Card key={r.title}>
                <div style={{ fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.3rem" }}>{r.title}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                  {r.journal} · {r.details}
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65 }}>{r.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: "3.5rem" }}
        >
      
        
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .creds-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
