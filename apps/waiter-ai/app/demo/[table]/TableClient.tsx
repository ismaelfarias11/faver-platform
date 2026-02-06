"use client";

import { useMemo, useState } from "react";

type Line = { id: string; name: string; qty: number; unitPrice: number };

export default function TableClient({ table }: { table: string }) {
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<string>("");

  const lines = useMemo<Line[]>(
    () => [
      { id: "l1", name: "Hamburguesa clásica", qty: 1, unitPrice: 5990 },
      { id: "l2", name: "Papas fritas", qty: 1, unitPrice: 2490 },
      { id: "l3", name: "Bebida", qty: 1, unitPrice: 1990 },
    ],
    []
  );

  async function sendOrder() {
    setSending(true);
    setMsg("");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ table, lines }),
      });

      const text = await res.text();

      if (!res.ok) {
        setMsg(`Error API (${res.status}): ${text}`);
        return;
      }

      setMsg("Pedido enviado a cocina. Revisa /panel.");
    } catch (e: any) {
      setMsg(`Error enviando pedido: ${String(e?.message ?? e)}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <div className="card">
        <h1 style={{ marginTop: 0 }}>Mesa #{table}</h1>
        <p style={{ marginTop: 8, opacity: 0.85 }}>
          Demo QR: envía un pedido y se verá en el panel de cocina.
        </p>

        <button className="btnPrimary" onClick={sendOrder} disabled={sending}>
          {sending ? "Enviando..." : "Enviar pedido (demo)"}
        </button>

        {msg && <p style={{ marginTop: 12, fontWeight: 700 }}>{msg}</p>}
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Menú demo</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {lines.map((l) => (
            <li key={l.id}>
              {l.qty}× {l.name} — ${l.unitPrice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
