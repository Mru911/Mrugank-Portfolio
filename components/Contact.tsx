"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const links = [
    { href: `mailto:${personal.email}`, label: `✉  ${personal.email}`, primary: true },
    { href: personal.github, label: "⌥  GitHub", primary: false },
    { href: personal.linkedin, label: "in  LinkedIn", primary: false },
    { href: personal.portfolio, label: "◎  Portfolio", primary: false },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "9rem 0",
        background: "var(--bg)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        bottom: -200, left: "50%", transform: "translateX(-50%)",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(123,47,255,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: -100, left: "50%", transform: "translateX(-50%)",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem", position: "relative", zIndex: 1 }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
          style={{ justifyContent: "center" }}
        >
          Contact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "1.25rem",
          }}
        >
          Let&apos;s Build<br />
          <span style={{
            background: "linear-gradient(135deg, var(--cyan), var(--violet))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Something Great
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            color: "var(--muted)",
            fontSize: "1.05rem",
            maxWidth: 460,
            margin: "0 auto 3rem",
            lineHeight: 1.72,
          }}
        >
          Open to interesting roles, freelance projects, or just a good conversation about tech. Reach out and I&apos;ll get back to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.9rem 1.75rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.76rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 6,
                transition: "all 0.25s",
                ...(link.primary
                  ? {
                      background: "linear-gradient(135deg, var(--cyan), var(--violet))",
                      color: "var(--bg)",
                      fontWeight: 600,
                      border: "none",
                    }
                  : {
                      border: "1px solid var(--border)",
                      color: "var(--white)",
                      background: "transparent",
                    }),
              }}
              onMouseEnter={e => {
                if (link.primary) {
                  e.currentTarget.style.opacity = "0.88";
                  e.currentTarget.style.transform = "translateY(-2px)";
                } else {
                  e.currentTarget.style.borderColor = "var(--cyan)";
                  e.currentTarget.style.color = "var(--cyan)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
                if (!link.primary) {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--white)";
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
