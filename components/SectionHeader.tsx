interface Props {
  label: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ label, title, sub }: Props) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.75rem",
          color: "var(--cyan)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span style={{ width: 30, height: 1, background: "var(--cyan)", opacity: 0.6, display: "inline-block" }} />
        {label}
      </div>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: sub ? "1rem" : 0,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 560 }}>
          {sub}
        </p>
      )}
    </div>
  );
}
