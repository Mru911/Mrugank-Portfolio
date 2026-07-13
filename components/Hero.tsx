"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <HeroScene />

      {/* Radial glow behind content */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(5,11,31,0.3) 0%, rgba(5,11,31,0.85) 100%)",
        pointerEvents: "none",
      }} />

      {/* Hero content */}
      <div
        style={{
          position: "relative", zIndex: 2,
          textAlign: "center",
          maxWidth: 900,
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.78rem",
            color: "var(--cyan)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <span style={{ width: 36, height: 1, background: "var(--cyan)", opacity: 0.5, display: "inline-block" }} />
          Software Engineer
          <span style={{ width: 36, height: 1, background: "var(--cyan)", opacity: 0.5, display: "inline-block" }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ display: "block" }}>Mrugank</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, var(--cyan), var(--violet))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Deshpande
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            fontSize: "clamp(0.95rem, 2.2vw, 1.2rem)",
            color: "var(--muted)",
            fontWeight: 300,
            marginBottom: "2.5rem",
            lineHeight: 1.65,
          }}
        >
          Building{" "}
          <strong style={{ color: "var(--white)", fontWeight: 500 }}>full-stack systems</strong>
          {" "}and{" "}
          <strong style={{ color: "var(--white)", fontWeight: 500 }}>cloud-native products</strong>
          <br />
          with React, Next.js, AWS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.9rem 2.5rem",
              background: "linear-gradient(135deg, var(--cyan), var(--violet))",
              color: "var(--bg)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: 4,
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            View My Work
          </a>
          <a
            href={`mailto:${personal.email}`}
            style={{
              padding: "0.9rem 2.5rem",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "var(--white)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: 4,
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; e.currentTarget.style.color = "var(--white)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          color: "var(--muted)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          zIndex: 2,
          animation: "scrollBounce 2s ease-in-out infinite",
        }}
      >
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--cyan), transparent)" }} />
        Scroll
      </motion.div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { opacity: 0.45; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; transform: translateX(-50%) translateY(7px); }
        }
      `}</style>
    </section>
  );
}
