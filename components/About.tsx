"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

const codeLines = [
  { num: 1, content: <span style={{ color: "var(--muted)", fontStyle: "italic" }}>// mrugank.config.ts</span> },
  { num: 2, content: null },
  { num: 3, content: <><span style={{ color: "#7B2FFF" }}>const</span> <span style={{ color: "#00D4FF" }}>engineer</span> = {"{"}</> },
  { num: 4, content: <>&nbsp;&nbsp;name: <span style={{ color: "#27C93F" }}>"Mrugank Deshpande"</span>,</> },
  { num: 5, content: <>&nbsp;&nbsp;role: <span style={{ color: "#27C93F" }}>"Software Engineer"</span>,</> },
  { num: 6, content: <>&nbsp;&nbsp;company: <span style={{ color: "#27C93F" }}>"Principal Financial Group, India"</span>,</> },
  { num: 7, content: <>&nbsp;&nbsp;stack: [</> },
  { num: 8, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#27C93F" }}>"React"</span>, <span style={{ color: "#27C93F" }}>"Next.js"</span>, <span style={{ color: "#27C93F" }}>"TypeScript"</span>,</> },
  { num: 9, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#27C93F" }}>"Node.js"</span>, <span style={{ color: "#27C93F" }}>"AWS"</span>, <span style={{ color: "#27C93F" }}>"Salesforce"</span>,</> },
  { num: 10, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#27C93F" }}>"Java"</span>, <span style={{ color: "#27C93F" }}>"Spring"</span>, <span style={{ color: "#27C93F" }}>"MongoDB"</span></> },
  { num: 11, content: <>&nbsp;&nbsp;],</> },
  { num: 12, content: <>&nbsp;&nbsp;openTo: <span style={{ color: "#FF9500" }}>true</span>,</> },
  { num: 13, content: <>&nbsp;&nbsp;location: <span style={{ color: "#27C93F" }}>"Pune, India"</span>,</> },
  { num: 14, content: <>{"};"}  </> },
  { num: 15, content: null },
  { num: 16, content: <><span style={{ color: "#7B2FFF" }}>export default</span> <span style={{ color: "#00D4FF" }}>engineer</span>;</> },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ padding: "7rem 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">About</div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "4rem",
          lineHeight: 1.1,
        }}>
          Who I Am
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }} className="about-grid">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {[
              <>I&apos;m a <strong>Software Engineer at Principal Financial Group, India</strong>, working on cloud-based applications and on-prem to cloud migrations. With a background in <span style={{ color: "var(--cyan)" }}>Electronics &amp; Telecom from PICT Pune</span> (CGPA 9.11), I bring solid fundamentals to everything I ship.</>,
              <>I specialize in the <strong>full-stack JavaScript ecosystem</strong> — React, Next.js, Node — combined with hands-on AWS, Salesforce, and Java backend experience. I love building things that are fast, polished, and actually solve problems.</>,
              <>Outside of work I&apos;ve published research on college management systems, led events at PICT&apos;s flagship tech fest, and somehow become a <span style={{ color: "var(--cyan)" }}>National Level Jump Rope Champion</span>.</>,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                style={{ color: "var(--muted)", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: "1.25rem" }}
              >
                {text}
              </motion.p>
            ))}

            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginTop: "2.5rem",
            }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "1.4rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--cyan), var(--violet))" }} />
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    color: "var(--cyan)",
                    letterSpacing: "-0.03em",
                  }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.2rem", lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div style={{
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "1.75rem",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              lineHeight: 1.85,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--violet), var(--cyan))" }} />
              {/* Window dots */}
              <div style={{ display: "flex", gap: "0.45rem", marginBottom: "1.5rem" }}>
                {["#FF5F57", "#FFBD2E", "#27C93F"].map((c) => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                ))}
              </div>
              {codeLines.map((line) => (
                <div key={line.num} style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#2D4059", minWidth: "1.5rem", textAlign: "right", userSelect: "none", fontSize: "0.72rem" }}>
                    {line.num}
                  </span>
                  <span>{line.content}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
