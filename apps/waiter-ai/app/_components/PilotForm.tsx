"use client";

import { useState } from "react";

export default function PilotForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "error">(null);
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSent(null);

    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg }),
      });

      if (!res.ok) throw new Error("Request failed");

      setSent("ok");
      setMsg("");
    } catch (err) {
      setSent("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="w-full rounded border p-3"
        rows={4}
      />

      <button
        type="submit"
        disabled={sending || msg.trim().length === 0}
        className="rounded border px-4 py-2"
      >
        {sending ? "Enviando..." : "Enviar"}
      </button>

      {sent === "ok" && <p className="text-sm">✅ Enviado</p>}
      {sent === "error" && <p className="text-sm">❌ Error al enviar</p>}
    </form>
  );
}
