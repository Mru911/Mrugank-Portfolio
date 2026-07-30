"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const links = [
    { href: `mailto:${personal.email}`, label: personal.email,  prefix: "✉", primary: true },
    { href: personal.github,            label: "GitHub",         prefix: "⌥", primary: false },
    { href: personal.linkedin,          label: "LinkedIn",       prefix: "in", primary: false },
  ];

  return (
    <section id="contact" style={{ padding: "9rem 0", background: "var(--bg)", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, background: "radial-gradient(circle,rgba(123,47,255,.07),transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem", position: "relative", zIndex: 1 }} ref={ref}>
        <motion.div className="section-label" style={{ justifyContent: "center" }} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5 }}>Contact</motion.div>

        <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6, delay: .1 }}
          style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(2.5rem,7vw,5.5rem)", fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1, marginBottom: "1.25rem" }}>
          {"Let's Build"}
          <br />
          <span style={{ background: "linear-gradient(135deg,var(--cyan),var(--violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Something Great
          </span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: .2 }}
          style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: 460, margin: "0 auto 3rem", lineHeight: 1.72 }}>
          Open to interesting roles, freelance projects, or just a good conversation about tech.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .55, delay: .3 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {links.map(link => (
            <a key={link.href} href={link.href} target={link.primary ? undefined : "_blank"} rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: ".6rem",
                padding: ".9rem 1.75rem",
                fontFamily: "'JetBrains Mono',monospace", fontSize: ".76rem",
                letterSpacing: ".08em", textTransform: "uppercase", textDecoration: "none",
                borderRadius: 6, transition: "all .25s",
                ...(link.primary
                  ? { background: "linear-gradient(135deg,var(--cyan),var(--violet))", color: "var(--bg)", fontWeight: 600 }
                  : { border: "1px solid var(--border)", color: "var(--white)", background: "transparent" }),
              }}
              onMouseEnter={e => {
                if (link.primary) { e.currentTarget.style.opacity = ".88"; e.currentTarget.style.transform = "translateY(-2px)"; }
                else { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.transform = "translateY(-2px)"; }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)";
                if (!link.primary) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--white)"; }
              }}>
              {link.prefix}&nbsp;&nbsp;{link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
