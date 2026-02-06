import * as React from "react";

export function Navbar() {
  const hub = process.env.NEXT_PUBLIC_HUB_URL ?? "http://localhost:3000";
  const kronos = process.env.NEXT_PUBLIC_KRONOS_URL ?? "http://localhost:3001";

  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
      }}
    >
      <nav
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <strong style={{ fontSize: 18, color: "var(--color-primary)" }}>
          faVer Tecnologías
        </strong>

        <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <a href={hub} style={{ fontWeight: 600 }}>
            Inicio
          </a>

          <a href={kronos} style={{ fontWeight: 600, color: "var(--color-kronos)" }}>
            Kronos 3D
          </a>
        </div>
      </nav>
    </header>
  );
}
