import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      padding: "1.75rem 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.7rem",
        color: "var(--muted)",
        letterSpacing: "0.08em",
      }}>
        © 2025 <span style={{ color: "var(--cyan)" }}>{personal.name}</span>. Designed &amp; built with intention.
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.7rem",
        color: "var(--muted)",
        letterSpacing: "0.08em",
      }}>
        {personal.location} &nbsp;·&nbsp; <span style={{ color: "var(--cyan)" }}>{personal.phone}</span>
      </div>
    </footer>
  );
}
