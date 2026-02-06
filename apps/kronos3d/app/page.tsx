"use client";
import { Button } from "@repo/ui/button";

export default function Kronos3DHome() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(180deg, var(--color-bg-muted), var(--color-bg))",
        }}
      >
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <p style={{ color: "var(--color-kronos)", fontWeight: 700, marginBottom: 10 }}>
            Kronos 3D
          </p>

          <h1 style={{ color: "var(--color-primary)", fontSize: 40, marginBottom: 14 }}>
            Diseño e impresión 3D a medida
          </h1>

          <p style={{ maxWidth: 720, fontSize: 18, lineHeight: 1.6 }}>
            Prototipos, repuestos, piezas personalizadas y modelado 3D. Calidad, detalle y
            entrega responsable para proyectos personales o empresariales.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button
              variant="accent"
              onClick={() => document.getElementById("cotizar")?.scrollIntoView()}
            >
              Cotizar proyecto
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById("trabajos")?.scrollIntoView()}
            >
              Ver trabajos
            </Button>

          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <h2 style={{ marginBottom: 18 }}>Servicios</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            <Card title="Impresión 3D" desc="Resina o filamento según el caso. Enfoque en detalle y terminaciones." />
            <Card title="Modelado 3D" desc="Diseño desde cero o adaptación de archivos para tu necesidad real." />
            <Card title="Prototipado" desc="Iteraciones rápidas para validar forma, encajes y funcionalidad." />
            <Card title="Repuestos y piezas" desc="Piezas para reemplazo, mejoras o personalización." />
          </div>
        </div>
      </section>

      {/* TRABAJOS */}
      <section id="trabajos" style={{ padding: "56px 24px", background: "var(--color-bg-muted)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ marginBottom: 8 }}>Trabajos realizados</h2>
              <p style={{ margin: 0, maxWidth: 700 }}>
                Aquí irá tu galería real. Por ahora dejamos placeholders listos para reemplazar por imágenes.
              </p>
            </div>
            <span style={{ color: "var(--color-kronos)", fontWeight: 700 }}>Galería</span>
          </div>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            <GalleryPlaceholder label="Figura / Modelo" />
            <GalleryPlaceholder label="Pieza técnica" />
            <GalleryPlaceholder label="Prototipo" />
            <GalleryPlaceholder label="Personalizado" />
          </div>
        </div>
      </section>

      {/* CTA / COTIZAR */}
      <section id="cotizar" style={{ padding: "64px 24px" }}>
        <div
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            border: "1px solid var(--color-border)",
            borderRadius: 16,
            padding: 24,
            background: "var(--color-bg)",
          }}
        >
          <h2 style={{ marginBottom: 8 }}>Cotiza tu proyecto</h2>
          <p style={{ marginTop: 0, maxWidth: 760, lineHeight: 1.6 }}>
            Déjame el tipo de pieza, medidas aproximadas, material preferido (si lo sabes) y adjunta el archivo
            si ya lo tienes. Podemos partir con una referencia y afinar el diseño.
          </p>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button
              variant="accent"
              onClick={() => document.getElementById("cotizar")?.scrollIntoView()}
            >
              Cotizar proyecto
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById("trabajos")?.scrollIntoView()}
            >
              Ver trabajos
            </Button>

          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: 14,
        padding: 18,
        background: "var(--color-bg)",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 8, color: "var(--color-primary)" }}>{title}</h3>
      <p style={{ margin: 0, lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        border: "1px dashed var(--color-border)",
        borderRadius: 14,
        padding: 18,
        background: "rgba(255,255,255,0.6)",
        minHeight: 140,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        color: "var(--color-primary)",
      }}
    >
      {label}
    </div>
  );
}
