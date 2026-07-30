"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ padding: "7rem 0", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }} ref={ref}>
        <div className="section-label">About</div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: "4rem", lineHeight: 1.1 }}>
          Who I Am
        </h2>

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7 }}>
            {[
              "I am a Software Engineer at Principal Financial Group, working on cloud-based applications and on-prem to cloud migrations. With a background in Electronics and Telecom from PICT Pune (CGPA 9.11), I bring solid fundamentals to everything I ship.",
              "I specialize in the full-stack JavaScript ecosystem, React, Next.js, Node, combined with hands-on AWS, Salesforce, and Java backend experience. I love building things that are fast, polished, and actually solve problems.",
              "Outside of work I have published research on college management systems, led events at PICT flagship tech fest, and became a National Level Jump Rope Champion.",
            ].map((text, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1 * i }}
                style={{ color: "var(--muted)", fontSize: ".97rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                {text}
              </motion.p>
            ))}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginTop: "2.5rem" }}>
              {stats.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: .35 + i * .1 }}
                  style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "1.4rem", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,var(--cyan),var(--violet))" }} />
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "2.2rem", fontWeight: 700, color: "var(--cyan)", letterSpacing: "-.03em" }}>{s.num}</div>
                  <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: ".2rem", lineHeight: 1.4 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .15 }}>
            <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.75rem", fontFamily: "'JetBrains Mono',monospace", fontSize: ".8rem", lineHeight: 1.85, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,var(--violet),var(--cyan))" }} />
              <div style={{ display: "flex", gap: ".45rem", marginBottom: "1.5rem" }}>
                {["#FF5F57","#FFBD2E","#27C93F"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              {[
                [1, <span key="1" style={{ color: "var(--muted)", fontStyle: "italic" }}>{"// mrugank.config.ts"}</span>],
                [2, null],
                [3, <><span key="k" style={{ color: "#7B2FFF" }}>const</span>{" "}<span style={{ color: "#00D4FF" }}>engineer</span>{" = {"}</>],
                [4, <span key="4">{"\u00a0\u00a0"}name: <span style={{ color: "#27C93F" }}>{'"Mrugank Deshpande"'}</span>,</span>],
                [5, <span key="5">{"\u00a0\u00a0"}role: <span style={{ color: "#27C93F" }}>{'"Software Engineer"'}</span>,</span>],
                [6, <span key="6">{"\u00a0\u00a0"}company: <span style={{ color: "#27C93F" }}>{'"Principal Financial Group"'}</span>,</span>],
                [7, <span key="7">{"\u00a0\u00a0"}stack: [</span>],
                [8, <span key="8">{"\u00a0\u00a0\u00a0\u00a0"}<span style={{ color: "#27C93F" }}>{'"React"'}</span>, <span style={{ color: "#27C93F" }}>{'"Next.js"'}</span>, <span style={{ color: "#27C93F" }}>{'"TypeScript"'}</span>,</span>],
                [9, <span key="9">{"\u00a0\u00a0\u00a0\u00a0"}<span style={{ color: "#27C93F" }}>{'"Node.js"'}</span>, <span style={{ color: "#27C93F" }}>{'"AWS"'}</span>, <span style={{ color: "#27C93F" }}>{'"Salesforce"'}</span>,</span>],
                [10, <span key="10">{"\u00a0\u00a0\u00a0\u00a0"}<span style={{ color: "#27C93F" }}>{'"Java"'}</span>, <span style={{ color: "#27C93F" }}>{'"Spring"'}</span>, <span style={{ color: "#27C93F" }}>{'"MongoDB"'}</span></span>],
                [11, <span key="11">{"\u00a0\u00a0"}],</span>],
                [12, <span key="12">{"\u00a0\u00a0"}openTo: <span style={{ color: "#FF9500" }}>true</span>,</span>],
                [13, <span key="13">{"\u00a0\u00a0"}location: <span style={{ color: "#27C93F" }}>{'"Pune, India"'}</span>,</span>],
                [14, <span key="14">{"}"}</span>],
                [15, null],
                [16, <><span key="ex" style={{ color: "#7B2FFF" }}>export default</span>{" "}<span style={{ color: "#00D4FF" }}>engineer</span>;</>],
              ].map(([num, content]) => (
                <div key={num as number} style={{ display: "flex", gap: ".75rem" }}>
                  <span style={{ color: "#2D4059", minWidth: "1.5rem", textAlign: "right", userSelect: "none", fontSize: ".72rem" }}>{num}</span>
                  <span>{content}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
