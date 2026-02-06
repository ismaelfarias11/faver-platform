"use client";

import { useEffect, useMemo, useState } from "react";

type Status = "NEW" | "IN_PROGRESS" | "DONE";

type Order = {
  id: string;
  table: string;
  createdAt: number;
  status: Status;
  subtotal: number;
  lines: { id: string; name: string; qty: number; unitPrice: number }[];
};

export default function PanelPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function loadOrders() {
    setLoading(true);
    const res = await fetch("/api/orders", { cache: "no-store" });

    if (!res.ok) {
      console.error("API /api/orders error:", res.status, await res.text());
      setOrders([]);
      setLoading(false);
      return;
    }

    const data = await res.json();
    setOrders(data.orders ?? []);
    setLoading(false);
  }

  async function setStatus(id: string, status: Status) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        console.error("PATCH /api/orders/:id error:", res.status, await res.text());
        return;
      }

      await loadOrders();
    } finally {
      setBusyId(null);
    }
  }

  useEffect(() => {
    loadOrders();
    const i = setInterval(loadOrders, 5000);
    return () => clearInterval(i);
  }, []);

  const counts = useMemo(() => {
    const c = { NEW: 0, IN_PROGRESS: 0, DONE: 0 };
    for (const o of orders) c[o.status]++;
    return c;
  }, [orders]);

  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <header className="card">
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ marginTop: 0 }}>Panel Cocina (demo)</h1>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Recibe pedidos desde mesas QR y actualiza su estado.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Badge label={`Nuevos: ${counts.NEW}`} tone="new" />
            <Badge label={`En curso: ${counts.IN_PROGRESS}`} tone="progress" />
            <Badge label={`Listos: ${counts.DONE}`} tone="done" />
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
          <button className="btnOutline" onClick={() => history.back()}>
            Volver
          </button>
          <button className="btnPrimary" onClick={loadOrders}>
            Actualizar
          </button>
        </div>
      </header>

      {loading && <div className="card" style={{ marginTop: 16 }}>Cargando…</div>}

      {!loading && orders.length === 0 && (
        <div className="card" style={{ marginTop: 16 }}>No hay pedidos aún</div>
      )}

      {!loading && orders.map((o) => (
        <OrderCard
          key={o.id}
          order={o}
          busy={busyId === o.id}
          onAccept={() => setStatus(o.id, "IN_PROGRESS")}
          onDone={() => setStatus(o.id, "DONE")}
        />
      ))}
    </div>
  );
}

function OrderCard({
  order,
  busy,
  onAccept,
  onDone,
}: {
  order: Order;
  busy: boolean;
  onAccept: () => void;
  onDone: () => void;
}) {
  const tone = order.status === "NEW" ? "new" : order.status === "IN_PROGRESS" ? "progress" : "done";

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <strong style={{ fontSize: 16 }}>Mesa {order.table}</strong>
          <Badge label={order.status} tone={tone} />
        </div>

        <div style={{ opacity: 0.75 }}>
          {new Date(order.createdAt).toLocaleString()}
        </div>
      </div>

      <ul style={{ marginTop: 10, paddingLeft: 18, lineHeight: 1.6 }}>
        {order.lines.map((l) => (
          <li key={l.id}>
            <strong>{l.qty}×</strong> {l.name}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <strong>Total:</strong> ${order.subtotal}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btnOutline" onClick={onAccept} disabled={busy || order.status !== "NEW"}>
            {busy ? "Procesando..." : "Aceptar"}
          </button>
          <button className="btnPrimary" onClick={onDone} disabled={busy || order.status === "DONE"}>
            {busy ? "Procesando..." : "Listo"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Badge({ label, tone }: { label: string; tone: "new" | "progress" | "done" }) {
  const style: React.CSSProperties =
    tone === "new"
      ? { borderColor: "rgba(37,99,235,0.35)", background: "rgba(37,99,235,0.10)", color: "var(--color-accent)" }
      : tone === "progress"
      ? { borderColor: "rgba(249,115,22,0.35)", background: "rgba(249,115,22,0.10)", color: "var(--color-kronos)" }
      : { borderColor: "rgba(34,197,94,0.35)", background: "rgba(34,197,94,0.10)", color: "#16a34a" };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid",
        fontSize: 12,
        fontWeight: 800,
        ...style,
      }}
    >
      {label}
    </span>
  );
}
