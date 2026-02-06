"use client";

export default function PilotForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "error">(null);
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSent(null);
    setMsg("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/pilot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      setSent("error");
      setMsg(text || "No se pudo enviar. Intenta nuevamente.");
      setSending(false);
      return;
    }

    setSent("ok");
    setMsg("Solicitud enviada. Te contactaremos pronto.");
    e.currentTarget.reset();
    setSending(false);
  }

  return (
    
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Demo: formulario enviado. Luego lo conectamos a backend (API / CRM / WhatsApp).");
      }}
    >
      <div className="formGrid">
        <div className="field">
          <label className="label">Nombre</label>
          <input className="input" name="name" placeholder="Ej: Juan Pérez" required />
        </div>

        <div className="field">
          <label className="label">Restaurante / Local</label>
          <input className="input" name="restaurant" placeholder="Ej: La Esquina" required />
        </div>

        <div className="field">
          <label className="label">WhatsApp</label>
          <input className="input" name="whatsapp" placeholder="+56 9 1234 5678" required />
        </div>

        <div className="field">
          <label className="label">Ciudad</label>
          <input className="input" name="city" placeholder="Ej: Santiago" />
        </div>

        <div className="field">
          <label className="label">Tipo de local</label>
          <select className="select" name="type" defaultValue="restaurante">
            <option value="restaurante">Restaurante</option>
            <option value="cafeteria">Cafetería</option>
            <option value="bar">Bar / Pub</option>
            <option value="fastfood">Fast food</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Mesas aprox.</label>
          <input className="input" name="tables" placeholder="Ej: 18" />
        </div>

        <div className="field" style={{ gridColumn: "1 / -1" }}>
          <label className="label">Mensaje</label>
          <textarea
            className="textarea"
            name="message"
            placeholder="Cuéntanos tu carta, horarios, volumen y qué te gustaría automatizar."
          />
        </div>
      </div>

      <div className="formFoot">
        <p className="smallNote">
          No compartimos tus datos. Esto es solo para coordinar una demo y evaluar el piloto.
        </p>

        <button className="btnPrimaryLg" type="submit">
          Enviar solicitud
        </button>
      </div>
    </form>
  );
}
