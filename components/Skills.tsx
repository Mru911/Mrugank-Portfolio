"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" style={{ padding: "7rem 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">Skills</div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "0.75rem",
          lineHeight: 1.1,
        }}>
          Tech I Work With
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "4rem", maxWidth: 520 }}>
          A broad stack spanning frontend, backend, cloud, and data — covering the full lifecycle of modern software.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.4rem",
        }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="glass-card"
              style={{ padding: "1.8rem" }}
            >
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "var(--cyan)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--border)",
              }}>
                {group.title}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.73rem",
                      padding: "0.32rem 0.78rem",
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      color: "var(--white)",
                      transition: "border-color 0.2s, color 0.2s, background 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "var(--cyan)";
                      e.currentTarget.style.color = "var(--cyan)";
                      e.currentTarget.style.background = "var(--cyan-dim)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--white)";
                      e.currentTarget.style.background = "var(--bg3)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
