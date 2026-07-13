"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" style={{ padding: "7rem 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">Experience</div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "0.75rem",
          lineHeight: 1.1,
        }}>
          Where I&apos;ve Worked
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "4rem", maxWidth: 520 }}>
          From college intern to full-time engineer — building real products at each step.
        </p>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 0 }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: 0, top: 0, bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, var(--cyan), var(--violet), transparent)",
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                paddingLeft: "3rem",
                paddingBottom: i < experiences.length - 1 ? "3.5rem" : 0,
                position: "relative",
              }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: -4, top: 6,
                width: 9, height: 9,
                borderRadius: "50%",
                background: "var(--cyan)",
                boxShadow: "0 0 14px var(--cyan)",
              }} />

              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--cyan)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.3rem",
              }}>
                {exp.period}
              </div>

              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                marginBottom: "0.15rem",
              }}>
                {exp.role}
              </div>

              <div style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1rem" }}>
                {exp.company}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize: "0.88rem",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    paddingLeft: "1.2rem",
                    position: "relative",
                    marginBottom: "0.45rem",
                  }}>
                    <span style={{
                      position: "absolute", left: 0,
                      color: "var(--cyan)", fontSize: "0.65rem", top: "0.2rem",
                    }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1rem" }}>
                {exp.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    padding: "0.22rem 0.6rem",
                    border: "1px solid rgba(0,212,255,0.22)",
                    borderRadius: 3,
                    color: "var(--cyan)",
                    letterSpacing: "0.04em",
                  }}>
                    {tag}
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
